<template>
  <div class="navbar">
    <router-link
      class="navbar__link"
      :to="{name: 'home'}"
      active-class="_active"
      exact
    >
      Home
    </router-link>
    <router-link
      class="navbar__link"
      :to="{name: 'launchpads'}"
      active-class="_active"
    >
      Launchpads
    </router-link>
    <router-link
      class="navbar__link"
      :to="{name: 'satellites'}"
      active-class="_active"
    >
      Satellites
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss">
.navbar {
  background: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 14px 20px 16px;
  display: flex;
  justify-content: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);

  &__link {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    margin: 0 40px;

    &._active {
      opacity: 0.5;
    }
  }
}
</style>
