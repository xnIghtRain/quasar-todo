<template>
  <q-page padding>    
    <div class="q-gutter-md column items-start">
      <q-input v-model="login" filled type="string" hint="Username" />
      <q-input v-model="office" filled type="string" hint="Praxis" />
      <q-input v-model="officeShortcut" filled type="string" hint="Praxis Abkürzung" />
      <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-input v-model="email" filled type="email" hint="Email" />
    </div>
  </q-page>
</template>

<script>




export default {
  name: 'PagePatient',
  data () {
    return {
      patients,
    }
  }
}
</script>
