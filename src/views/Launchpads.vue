<template>
  <div>
    <Loader v-if="isLoading" />

    <router-link class="back" :to="{name: 'home'}">
      <img src="@/assets/icons/arrow-left.svg" />
    </router-link>

    <div v-if="launchpads">
      <div class="container">
        <div class="flex flex-wrap">
          <Launchpad
            v-for="launchpad in launchpads"
            :key="launchpad.id"
            :data="launchpad"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import launchpadApi from '@/api/launchpad'
import Launchpad from '@/components/Launchpad'
import Loader from '@/components/Loader'

export default {
  name: 'Launchpads',
  data() {
    return {
      isLoading: true,
      launchpads: null
    }
  },
  mounted() {
    launchpadApi.getAll().then(data => {
      this.launchpads = data
      this.isLoading = false
    })
  },
  components: {
    Launchpad,
    Loader
  }
}
</script>
