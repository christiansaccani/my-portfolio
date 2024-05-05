<script>
import {store} from '../store.js';

export default {

    name: 'AppSocial',

    data() {
        return {
            store
        };
    },

}
</script>

<!-- ---------------------------------------------------------------------------------- -->

<template>
<section>

<h3>...and find me here!</h3>

<div id="socials-container">
    <div v-for="(currentItem, index) in store.arraySocials" :key="index">
        <a :href="currentItem.link">
            <span v-html="currentItem.icon"></span>
        </a>
    </div>
</div>

</section>
</template>

<!-- ---------------------------------------------------------------------------------- -->

<style lang="scss" scoped>

@use '../style/variables' as *;
@use '../style/mixins' as *;

section {
    width: 100%;
    background-color: $backgroundColor;

    display: flex;
    flex-flow: column;
    align-items: center;

    h3 {
        margin-top: 2rem;
    }

    #socials-container {
        display: flex;
        justify-content: center;

        gap: 3em;

        max-width: 1440px;
        width: 100%;

        margin: 2rem 0;

        a {
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;

            border: 2px solid $highlightColor;
            color: $highlightColor;
            background-color: $backgroundColor;

            display: grid;
            place-items: center;
            font-size: 1.8rem;

            cursor: pointer;
        }

        a:hover {
            animation: hbeat 3.6s ease-out infinite;
        }
    }
}

@keyframes hbeat {
        0% {
            color: $highlightColor;
            background-coloror: $backgroundColor;
        }
        50% {
            color: $backgroundColor;
            background-color: $highlightColor;
        }
        100% {
            color: $highlightColor;
            background-coloror: $backgroundColor;
        }
    }

</style>