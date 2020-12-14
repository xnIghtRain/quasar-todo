<template>
  <q-page padding>
    <q-list bordered>
      <q-item clickable v-ripple active
        v-for="patient in patients"
        :key="patient.id"
      >
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <q-item-section>{{patient.name}}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>

const patients = [
  {
    id: 1,
    name: 'Patient 1',
    caption: 'Patienten Liste'
  },
  {
    id: 2,
    name: 'Patient 2',
    caption: 'Patienten Liste'
  },
  {
    id: 3,
    name: 'Patient 3',
    caption: 'Patienten Liste'
  },
  {
    id: 4,
    name: 'Patient 4',
    caption: 'Patienten Liste'
  }
];


export default {
  name: 'PagePatient',
  data () {
    return {
      patients
    }
  }
}
</script>
