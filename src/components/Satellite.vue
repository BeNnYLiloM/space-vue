<template>
  <div class="card">
    <div class="card__header">{{ info.spaceTrack.OBJECT_NAME }}</div>
    <div class="card__body">
      <div class="card__info">
        <div class="card__ico">
          <img src="@/assets/img/icons/calendar.svg" alt="" />
        </div>
        <div class="card__text">{{ info.spaceTrack.LAUNCH_DATE }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Satellite',
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>
