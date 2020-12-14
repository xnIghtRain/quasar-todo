<template>
    <q-item clickable v-ripple active @click="updateMood">
        <q-item-section>
          <q-item-label>{{mood.title}}</q-item-label>

            // Radio
           <div class="q-gutter-sm" >
              <q-radio    v-model="mood.level" v-for ="n in 10"  :key="n" :val="n" :label="n"/>
              <div class="q-px-sm">
              {{mood.title}} ist auf dem Level von: <strong>{{ mood.level }}</strong>
              </div>
           </div>

           <q-badge color="secondary">
             {{mood.title}}: {{ mood.level }} (1 bis 10)
            </q-badge>

            <q-slider
              v-model="mood.level"
              :min="0"
              :max="10"
              :step="1"
              label
              color="light-green"
            />
        </q-item-section>
    </q-item>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props: ['mood','id'],
    methods: {
      ...mapActions('moods', ['updateMood'])
    }
}
</script>

<style>

</style>