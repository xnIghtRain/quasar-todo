<template>
  <q-item
    clickable
    v-ripple
    active>
    <q-item-section>
      <q-item-label>{{mood.title}}</q-item-label>
      <q-item-label>{{mood.level}}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-btn
        flat
        round
        dense
        color="red"
        icon="delete"
        @click.stop="promptToDelete(id)" />
    </q-item-section>
  </q-item>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: ['mood','key'],
  methods: {
    ...mapActions(['deleteMood']),
    promptToDelete(id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Löschen?',
        ok: {
          push: true
        },
        cancel: {
          push: true,
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        this.deleteMood(id)
      })
    }
  }
}
</script>

<style>
      
</style>