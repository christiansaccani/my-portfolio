<script>

import '@fortawesome/fontawesome-free/css/all.css';

import {store} from './store.js';

import AppNav from './components/AppNav.vue';
import AppAbout from './components/AppAbout.vue';
import AppSkill from './components/AppSkill.vue';
import AppMailForm from './components/AppMailForm.vue';
import AppProjects from './components/AppProjects.vue';

export default {

  data() {
    return {
      store,
    }
  },

  components: {
    AppNav,
    AppAbout,
    AppSkill,
    AppMailForm,
    AppProjects
  },
}

</script>

<template>
  
  <body>
    <AppNav></AppNav>
    <AppAbout></AppAbout>
    <AppSkill></AppSkill>
    <AppProjects></AppProjects>
    <AppMailForm></AppMailForm>

  </body>
  
</template>

<style lang="scss" scoped>

body {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center !important;

  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

</style>

<!-- 

Cose da fare:
 
- Inserisci la sezione dedicata ai progetti
- Inserisci il toggle per la lingua
- Inserisci le traduzione
- Decidi i colori da usare

-->