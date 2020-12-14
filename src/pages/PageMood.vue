<template>
  <q-page class="flex flex-center">
    <q-list bordered>
      <mood
        v-for="(mood,key) in moods"
        :key="key"
        :mood="mood"
        :id="key"></mood>
    </q-list>
  </q-page>
</template>

<script>
import Mood from 'src/components/Lists/Mood.vue'
import {mapGetters} from 'vuex'


export default {
  name: 'PageIndex',
  computed: {
    ...mapGetters('moods', ['moods'])
  },
  components: {
    'mood' : require('components/Lists/MoodSkala.vue').default
  }
}
</script>
