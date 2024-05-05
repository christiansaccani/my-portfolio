<script>
import {store} from '../store.js';

export default {

    name: 'AppAbout',

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
        <h1 class="mt-2 mb-4">Full Stack Developer</h1>
        <p class="mb-4">You give me an idea. I give you the code.</p>
        <img src=D:\PPCoding\my-portfolio\src\assets\avataaars.png alt="">
    </section>
    <section id="section-2">
        <h2 class="my-4">
            Hello, I'm Christian, Welcome!
        </h2>
        
            <p class="my-4">
                I'm about to complete my studies with Boolean. In my portfolio, I showcase my projects, 
                focused on creating engaging user experiences and intuitive interfaces. 
                My approach is simple and efficient, always aiming for excellent results. 
                I hope my work demonstrates my commitment and ability to transform ideas into elegant and functional solutions.
            </p>
        
    </section>


</template>

<!-- ---------------------------------------------------------------------------------- -->

<style lang="scss" scoped>

@use '../style/variables' as *;
@use '../style/mixins' as *;



    section {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;

    padding-bottom: 5.5rem;

    background-color: $backgroundColor;
    color: $textColor;

        h1 {
            font-weight: bold;
        }

        p {
            font-size: 1.4rem;
        }

        img {
            height: 220px;
            aspect-ratio: 1 / 1;
            border-radius: 50%;
            border: 3px solid $highlightColor;
        }
    }

    #section-2 {
        display: flex;
        flex-flow: column;
        align-items: center;

        background-color: $primaryColor;
        color: $backgroundColor;

        width: 100%;
        padding: 5.5rem 0 11rem;

        p {
            text-align: center;
            font-size: 1.4rem;
            max-width: 960px;
        }
    }


</style>