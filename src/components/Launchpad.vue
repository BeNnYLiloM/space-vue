<template>
  <router-link class="card" :to="{name: 'launchpad', params: {id: data.id}}">
    <div class="card__header">{{ data.name }}</div>
    <div class="card__body">
      <div class="card__info">
        <div class="card__ico">
          <img src="@/assets/img/icons/region.svg" alt="" />
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
