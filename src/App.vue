<script>

import '@fortawesome/fontawesome-free/css/all.css';

import {store} from './store.js';

import AppNav from './components/AppNav.vue';
import AppAbout from './components/AppAbout.vue';
import AppSkill from './components/AppSkill.vue';
import AppMailForm from './components/AppMailForm.vue';
import AppSocial from './components/AppSocial.vue';

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
    AppSocial
  },
}

</script>

<template>
  
  <body>
    <AppNav></AppNav>
    <AppAbout></AppAbout>
    <AppSkill></AppSkill>
    <AppMailForm></AppMailForm>
    <AppSocial></AppSocial>
  </body>
  
</template>

<style lang="scss" scoped>

body {
  width: 100%;
  display: flex;
    flex-direction: column;
    align-items: center !important;
}

</style>

