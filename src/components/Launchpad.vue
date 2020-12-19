<template>
  <router-link class="card" :to="{name: 'launchpad', params: {id: data.id}}">
    <div class="card__header">{{ data.name }}</div>
    <div class="card__body">
      <div class="card__info">
        <div class="card__ico">
          <img src="@/assets/icons/region.svg" alt="" />
        </div>
        <div class="card__text">{{ data.region }}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Launchpad',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    launches() {
      return this.data.launches
    }
  }
}
</script>

<style lang="scss">
.card {
  width: calc(30% - 40px);
  margin: 0 20px 20px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  transition: 0.2s ease-out;
  text-decoration: none;
  color: #525252;
  background: #ecf0f1;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.6);
  }

  &__header {
    border-bottom: 1px solid #dcdcdc;
    text-align: center;
    padding: 10px;
    font-size: 20px;
    font-weight: 600;
  }

  &__body {
    padding: 20px 10px;
  }

  &__info {
    display: flex;
    align-items: center;
  }

  &__ico {
    margin-right: 12px;

    img {
      width: 30px;
    }
  }
}
</style>
