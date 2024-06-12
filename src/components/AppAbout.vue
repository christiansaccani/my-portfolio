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
        <h1 class="mt-2 mb-4">Junior Full Stack Developer</h1>
        <p class="mb-4">You give me an idea. I give you the code.</p>
        <img src=D:\PPCoding\my-portfolio\src\assets\avataaars.png alt="">
    </section>
    <section id="section-2">
        <h2 class="mt-4 mb-2">
            Benvenuti, sono Christian!
        </h2>
        
            <p class="mt-4">
                Sono un Junior Full Stack Web Developer, formato presso Boolean con ottimi risultati. 
                Ho una solida comprensione delle tecnologie web moderne e sono entusiasta di applicare 
                le mie competenze e il mio approccio organizzato contribuendo a progetti stimolanti.
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

    position: relative;
    padding-bottom: 8rem;
    padding-top: 1.5rem;

    background-color: $backgroundColor;
    color: $textColor;

        h1 {
            font-weight: bold;
            color: $textColor;
        }

        p {
            font-size: 1.4rem;
            color: $textColor;
        }

        img {
            height: 220px;
            aspect-ratio: 1 / 1;
            border-radius: 50%;
            border: 3px solid $primaryColor;
            background-color: $backgroundColor;

            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translate(-50%, 50%);
            z-index: 2;
        }
    }

    #section-2 {
        display: flex;
        flex-flow: column;
        align-items: center;

        background-color: $primaryColor;
        color: $backgroundColor;

        width: 100%;
        padding: 8rem 0 13rem;

        h2 {
            color: $textColor;
        }

        p {
            text-align: center;
            font-size: 1.4rem;
            line-height: 2.2rem;
            max-width: 960px;

            color: $textColor;
        }
    }


</style>