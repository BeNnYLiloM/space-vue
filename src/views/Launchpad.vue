<template>
  <div>
    <router-link class="back" :to="{name: 'launchpads'}">
      <img src="@/assets/img/icons/arrow-left.svg" />
    </router-link>

    <Loader v-if="isLoading" />

    <div class="container" v-else>
      <div class="code">
        {{ info }}
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
      info: {
        launchpad: '',
        all_failures: []
      }
    }
  },
  components: {
    Loader
  },
  mounted() {
    launchpadApi.getLaunchpadById(this.id).then(launchpad => {
      const launches = launchpad.launches

      this.info.launchpad = launchpad.name

      if (launches.length) {
        launches.forEach(launche => {
          const shortInfoAboutLaunche = {
            name: launche.name,
            failures: []
          }

          launche.failures.forEach(failure =>
            shortInfoAboutLaunche.failures.push(failure.reason)
          )

          this.info.all_failures.push(shortInfoAboutLaunche)
        })
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
</style>
