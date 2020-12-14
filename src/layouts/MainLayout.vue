<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
          <q-toolbar-title shrink class="text-weight-bold">
            TherapyAssistant
          </q-toolbar-title>
        </q-btn>

        <q-space />

        
        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="apps" v-if="$q.screen.gt.sm">
            <q-tooltip>Apps</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="message" v-if="$q.screen.gt.sm">
            <q-tooltip>Messages</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
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
      :width="250"
      content-class="bg-teal-2"
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
    title: 'Patienten',
    caption: 'Patienten Liste',
    icon: 'school',
    to: '/'
  },
  {
    title: 'Stimmingstagebuch',
    caption: 'Mood Diary',
    icon: 'code',
    to: '/mood'
  },
  {
    title: 'Account erstellen',
    caption: 'Account',
    icon: 'code',
    to: '/signup'
  },
  {
    title: 'Mood Liste',
    caption: 'Account',
    icon: 'code',
    to: '/moodlist'
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

<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }

  .q-drawer {
    .q-router-link--active {
      color: white !important;
    }
  }
</style>
