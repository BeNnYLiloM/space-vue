<template>
  <div class="main-container">
    <Navbar />

    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import '~normalize.css';

@import '@/assets/sass/styles.scss';
</style>
