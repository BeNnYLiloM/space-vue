<template>
  <div class="container">
    <Loader v-if="isLoading" />

    <div v-if="satellites">
      <div class="flex align-start mb-3">
        <div class="card card_full-width">
          <div class="card__body">
            <div class="flex justify-between pt-1 pl-1 pr-1 pb-1">
              <div class="form__item">
                <div class="form__placeholder">Select Year</div>
                <select v-model="selectedYear" @change="selectYear">
                  <option v-for="year in years" :key="year" :value="year">
                    {{ year }}
                  </option>
                </select>
              </div>

              <div class="form__item">
                <div class="form__placeholder">Select Month</div>
                <select
                  @change="selectMonth"
                  v-model="selectedMonth"
                  :disabled="selectedYear === '--'"
                >
                  <option
                    v-for="month in months"
                    :key="month.value"
                    :value="month.value"
                  >
                    {{ month.name }}
                  </option>
                </select>
              </div>

              <div class="form__item">
                <div class="form__placeholder">Select Day</div>
                <select
                  v-model="selectedDay"
                  :disabled="selectedMonth === '--'"
                >
                  <option v-for="day in days" :key="day">
                    {{ day }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <Satellite
          v-for="satellite in filteredSatellites"
          :key="satellite.id"
          :info="satellite"
        />
      </div>
    </div>
  </div>
</template>

<script>
import starlinkApi from '@/api/starlink'
import Satellite from '@/components/Satellite'
import Loader from '@/components/Loader'
import {MONTHS} from '@/helpers/vars'

export default {
  name: 'Satellites',
  data() {
    return {
      isLoading: true,
      satellites: null,
      structuredData: {},
      selectedYear: '--',
      selectedMonth: '--',
      selectedDay: '--',
      months: MONTHS
    }
  },
  computed: {
    years() {
      const years = ['--']

      return years.concat(Object.keys(this.structuredData))
    },
    days() {
      const year = this.selectedYear !== '--' ? +this.selectedYear : 2020
      const days = ['--']

      if (+this.selectedMonth) {
        const countDays = new Date(year, this.selectedMonth, 0).getDate()

        for (let i = 1; i <= countDays; i++) {
          days.push(i)
        }
      }

      return days
    },
    filteredSatellites() {
      const {selectedYear, selectedMonth, selectedDay} = this
      const filteredData = []
      let filterType = ''
      let data = this.satellites

      if (selectedYear !== '--') {
        data = this.structuredData[selectedYear]
        filterType = 'year'
      }

      if (selectedMonth !== '--') {
        if (this.structuredData[selectedYear][selectedMonth]) {
          data = this.structuredData[selectedYear][selectedMonth]
        } else {
          data = []
        }
        filterType = 'month'
      }

      if (selectedDay !== '--') {
        if (this.structuredData[selectedYear][selectedMonth][+selectedDay]) {
          data = this.structuredData[selectedYear][selectedMonth][+selectedDay]
        } else {
          data = []
        }
        filterType = 'day'
      }

      switch (filterType) {
        case 'year':
          for (let i = 1; i <= 12; i++) {
            if (data[i]) {
              for (let j = 0; j <= 30; j++) {
                if (data[i][j]) {
                  data[i][j].forEach(el => {
                    filteredData.push(this.satellites[el])
                  })
                }
              }
            }
          }

          break

        case 'month':
          for (let i = 0; i <= 30; i++) {
            if (data[i]) {
              data[i].forEach(el => {
                filteredData.push(this.satellites[el])
              })
            }
          }

          break

        case 'day':
          data.forEach(el => {
            filteredData.push(this.satellites[el])
          })

          break

        default:
          return data
      }

      return filteredData
    }
  },
  mounted() {
    starlinkApi.getAll().then(satellites => {
      this.satellites = satellites
      this.isLoading = false

      this.satellites.forEach((satellite, index) => {
        const fullDate = new Date(satellite.spaceTrack.LAUNCH_DATE)
        const year = fullDate.getFullYear()
        const month = fullDate.getMonth()
        const date = fullDate.getDate()

        if (!this.structuredData[year]) {
          this.$set(this.structuredData, year, {})
        }

        if (!this.structuredData[year][month]) {
          this.structuredData[year][month] = {}
          this.$set(this.structuredData[year], month, {})
        }

        if (!this.structuredData[year][month][date]) {
          this.structuredData[year][month][date] = []
          this.$set(this.structuredData[year][month], date, [])
        }

        this.structuredData[year][month][date].push(index)
      })
    })
  },
  components: {
    Loader,
    Satellite
  },
  methods: {
    selectYear() {
      this.selectedMonth = '--'
      this.selectedDay = '--'
    },
    selectMonth() {
      this.selectedDay = '--'
    }
  }
}
</script>
