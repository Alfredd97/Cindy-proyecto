<template>
  <q-layout>
    <Header/>
    <router-view />
    <q-page-container> 
  
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import Header from './layouts/Header'


export default {
  name: 'LayoutDefault',

  components: {
    Header,
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
