<script>
import {store} from '../store.js';

export default {

    name: 'AppNav',

    data() {
        return {
            store
        };
    },
    methods: {
    scrollToSkills(event) {
      event.preventDefault(); // Previeni il comportamento predefinito del click
      window.scrollTo({
        top: 785,
        behavior: 'smooth' // Effetto di scorrimento fluido
      });
    },
    scrollToContacts(event) {
      event.preventDefault(); // Previeni il comportamento predefinito del click
      const totalHeight = document.body.scrollHeight;

      window.scrollTo({
        top: totalHeight,
        behavior: 'smooth' // Effetto di scorrimento fluido
      });
    },
    }

}
</script>

<!-- ---------------------------------------------------------------------------------- -->

<template>

<nav class="navbar navbar-expand my_nav pt-5 pb-4">
  <div class="container-fluid">
    <div id="my_navbar-collapse">
      <div class="navbar-nav" id="my_navbar-nav">
        <a class="nav-link px-4" @click="scrollToSkills">
            Skills
        </a>
        <a class="nav-link px-4" >
            Progetti
        </a>
        <a class="nav-link px-4" @click="scrollToContacts">
            Contatti
        </a>
      </div>
    </div>
  </div>
</nav>

</template>

<!-- ---------------------------------------------------------------------------------- -->

<style lang="scss" scoped>

@use '../style/variables' as *;
@use '../style/mixins' as *;

.my_nav {
    background-color: $backgroundColor !important;
    width: 100%;

    .container-fluid {

        display: flex;
        justify-content: center;

        max-width: 1440px;
        width: 100%;

        #my_navbar-collapse {
        display: flex;
        justify-content: center;
        align-items: center;

            #my_navbar-nav {
                width: 42rem;
                display: flex;
                justify-content: space-evenly;

                border-left: 10px double $highlightColor;
                border-right: 10px double $highlightColor;

                a {
                    color: $textColor;
                    // letter-spacing: 1px;

                    border: 3px solid $highlightColor;
                    border-radius: 36px;

                    font-size: 1.4rem;
                    font-weight: 600;

                    transition: linear 0.4s all;
                    cursor: pointer;
                }
            }
        }
    }
}

a:hover {
    background-color: $highlightColor;
    color: $backgroundColor !important;
}

</style>