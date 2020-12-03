<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="absolute-center">
          TherapyAssistant
        </q-toolbar-title>

        
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.title"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.title"
        >
        
        </q-route-tab>
      </q-tabs>
    </q-footer>


    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <q-item 
          v-for="nav in navs"
          :key="nav.title"
          :to="nav.to"
          exact
          clickable
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{nav.title}}</q-item-label>
          </q-item-section>
        
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


const navs = [
  {
    title: 'Todo',
    caption: 'Todo List',
    icon: 'school',
    to: '/'
  },
  {
    title: 'Setttings',
    caption: 'custom setting',
    icon: 'code',
    to: '/settings'
  }
];

export default {
  name: 'MainLayout',
  components: { },
  data () {
    return {
      leftDrawerOpen: false,
      navs
    }
  }
}
</script>

<style>
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }
</style>
