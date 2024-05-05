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
    scrollToAbout(event) {
      event.preventDefault(); // Previeni il comportamento predefinito del click
      window.scrollTo({
        top: 558,
        behavior: 'smooth' // Effetto di scorrimento fluido
      });
    },
    }

}
</script>

<!-- ---------------------------------------------------------------------------------- -->

<template>

<nav class="navbar navbar-expand-lg my_nav py-4">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="my_navbar-collapse">
      <div class="navbar-nav" id="my_navbar-nav">
        <a class="nav-link px-5" href="#" @click="scrollToAbout">
            About
        </a>
        <a class="nav-link px-5" href="#">
            Projects
        </a>
        <a class="nav-link px-5" href="#">
            Contacts
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
                display: flex;
                justify-content: center;
                gap: 4rem;

                a {
                    color: $textColor;

                    border: 2px solid $primaryColor;
                    border-radius: 24px;

                    font-size: 1.2rem;
                    font-weight: 500;
                }
            }
        }
    }
}

a:hover {
    background-color: $primaryColor;
    color: $backgroundColor !important;
}

</style>