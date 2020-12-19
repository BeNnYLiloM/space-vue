<template>
  <div>
    <router-link class="back" :to="{name: 'launchpads'}">
      <img src="@/assets/icons/arrow-left.svg" />
    </router-link>

    <Loader v-if="isLoading" />

    <div class="container" v-else>
      <div v-if="info">
        <div class="code">
          {{ info }}
        </div>
      </div>

      <div v-else-if="!isLoading">
        <div class="empty">
          This launchpad don't have failure launches
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import launchpadApi from '@/api/launchpad'
import Loader from '@/components/Loader'

export default {
  name: 'Launchpad',
  data() {
    return {
      id: this.$route.params.id,
      isLoading: true,
      info: null
    }
  },
  components: {
    Loader
  },
  mounted() {
    launchpadApi.getLaunchpadById(this.id).then(launchpad => {
      const launches = launchpad.launches
      const info = {
        launchpad: launchpad.name,
        all_failures: []
      }

      if (launches.length) {
        launches.forEach(launche => {
          const shortInfoAboutLaunche = {
            name: launche.name,
            failures: []
          }

          launche.failures.forEach(failure =>
            shortInfoAboutLaunche.failures.push(failure.reason)
          )

          info.all_failures.push(shortInfoAboutLaunche)
        })

        this.info = info
      }

      this.isLoading = false
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #fefad4;
  border-radius: 6px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.6);
  padding: 20px;
}

.code {
  white-space: break-spaces;
  padding: 14px 20px 18px;
}

.empty {
  font-size: 24px;
}
</style>
