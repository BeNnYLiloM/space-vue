<template>
  <div class="main-container flex flex-column justify-center align-center">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '~normalize.css';

* {
  box-sizing: border-box;
}

body {
  font-family: 'Roboto Mono', sans-serif;
  background: #34495e;
}

.main-container {
  min-height: 100vh;
}

.container {
  max-width: 992px;
  padding: 0 15px;
  margin: 0 auto;
}

.flex {
  display: flex;

  &-column {
    flex-direction: column;
  }

  &-wrap {
    flex-wrap: wrap;
  }
}

.justify {
  &-start {
    justify-content: flex-start;
  }

  &-center {
    justify-content: center;
  }

  &-end {
    justify-content: flex-end;
  }

  &-between {
    justify-content: space-between;
  }

  &-around {
    justify-content: space-around;
  }
}

.align {
  &-start {
    align-items: flex-start;
  }

  &-center {
    align-items: center;
  }

  &-end {
    align-items: flex-end;
  }
}

@for $i from 1 through 5 {
  .mr-#{$i} {
    margin-right: #{$i}rem;
  }
  .ml-#{$i} {
    margin-left: #{$i}rem;
  }
  .mb-#{$i} {
    margin-bottom: #{$i}rem;
  }
  .mt-#{$i} {
    margin-top: #{$i}rem;
  }

  .pr-#{$i} {
    padding-right: #{$i}rem;
  }
  .pl-#{$i} {
    padding-left: #{$i}rem;
  }
  .pb-#{$i} {
    padding-bottom: #{$i}rem;
  }
  .pt-#{$i} {
    padding-top: #{$i}rem;
  }
}

.back {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  background: #fefad4;
  border-radius: 4px;
  padding-right: 4px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
  padding-top: 2px;
}

.btn {
  display: inline-block;
  text-decoration: none;
  background: #f1c40f;
  padding: 12px 26px;
  border-radius: 4px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  color: #525252;
  font-size: 18px;
  font-weight: 600;
}
</style>
