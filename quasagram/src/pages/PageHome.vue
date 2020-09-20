<template>
  <q-page class="constrain q-pa-md">
    <div>
      <div>
        
      </div>
    </div>

    <q-card
      v-for="post in posts"
      :key="post.id"
      class="card-post q-mb-md" 
      flat 
      bordered
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold">Martin_Byrne</q-item-label>
          <q-item-label caption>
            {{ post.location }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-img
        :src="post.imgUrl"
      />
      <q-card-section>
        <div>{{ post.caption }}</div>
        <div class="text-caption text-grey">{{ post.date}}</div>
      </q-card-section>      

    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageHome',
  data(){
    return {
      posts: [
        {
          id: 1,
          caption: 'Golden Gate Bridge',
          date: 1600426822339,
          location: 'San Francisco',
          imgUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id: 2,
          caption: 'Golden Gate Bridge',
          date: 1600426822339,
          location: 'San Francisco',
          imgUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id: 3,
          caption: 'Golden Gate Bridge',
          date: 1600426822339,
          location: 'San Francisco',
          imgUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id: 4,
          caption: 'Golden Gate Bridge',
          date: 1600426822339,
          location: 'San Francisco',
          imgUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        }
      ]
    }
  },
  filters: {
    niceDate(value){
      return date.formatDate(value, 'MMMM D h:mm A')
    }
  }
}
</script>

<style lang="sass">
  .card-post
    q-img
      min-height: 200px
</style>
