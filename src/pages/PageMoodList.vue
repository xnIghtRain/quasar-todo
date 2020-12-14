<template>
  <q-page class="flex flex-center">
    <q-list
      bordered
      separator>
      <mood
        v-for="(mood,key) in moods"
        :mood="mood"
        :key="key"
        >
      </mood>
    </q-list>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
      @click="showAddMood = true"
      round
      color="primary"
      size="24px"
      icon="add" />
    </div>
    <q-dialog v-model="showAddMood">
      <list></list>
    </q-dialog>
  </q-page>
</template>

<script>
import Mood from 'src/components/Lists/Mood.vue'
import {mapGetters} from 'vuex'




export default {
  data() {
    return {
      showAddMood: false
    }
  },
  computed: {
    ...mapGetters('moods', ['moods'])
  },
  components: {
    'mood' : require('components/Lists/Mood.vue').default,
    'list': require('components/Lists/AddMood.vue').default
  }
}
</script>
