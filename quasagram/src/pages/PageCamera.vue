<template>
  <q-page class="constrain q-pa-md">
    <div class="camera-frame q-pa-md">
      <img 
        class="full-width"
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      >
    </div>
    <div class="text-center q-pa-md">
      <q-btn 
        color="grey-10"
        icon="eva-camera"
        size="lg"
        round
      />
      <div class="row justify-center q-ma-md">
        <q-input 
          v-model="text"
          class="col"
          label="Caption"
          dense
        />
      </div>
      <div class="row justify-center q-ma-md">
        <q-input 
          v-model="text"
          class="col"
          label="Location"
          dense
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageCamera'
}
</script>

<style lang="sass">
  .camera-frame
    border: 2px solid $grey-10
    border-radius: 10px
</style>
