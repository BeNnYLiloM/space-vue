<template>
  <div class="flex flex-column align-center">
    <img src="@/assets/logo.svg" />

    <div class="flex mt-3">
      <router-link class="btn btn-default mr-1" :to="{name: 'launchpads'}">
        Launchpads
      </router-link>
      <router-link class="btn btn-default ml-1" :to="{name: 'satellites'}">
        Satellites
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
