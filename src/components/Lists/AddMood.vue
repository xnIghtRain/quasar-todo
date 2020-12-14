<template>
    <q-card>
        <q-card-section class="row">
            <div class="text-h6">Add Mood</div>
            <q-space />
            <q-btn
                flat
                round
                icon="close"
                dense
                v-close-popup />
        </q-card-section>
        <form @submit.prevent="submitForm">
            <q-card-section>
                <q-input
                  outlined
                  v-model="moodToSubmit.title"
                  :rules="[val => !!val || 'Field is required']"
                  ref="title"
                  label="Mood name" />
            </q-card-section>
            <q-card-actions align="right">
                <q-btn
                    label="Save"
                    color="primary"
                    type="submit" />
            </q-card-actions>
        </form>
    </q-card>
</template>

<script>
export default {
   data() {
       return {
           moodToSubmit: {
               title: '',
               level: ''
           }
       }
   },
   methods: {
       submitForm() {
           this.$refs.name.validate()
           if (!this.$refs.name.hasError) {
               this.submitTask()
           }
       },
       submitTask() {

       }
   }
}
</script>

<style>
      
</style>


