<script>
import { store } from '../store.js';

export default {
    name: 'AppSkill',

    data() {
        return {
            store,
            isHoveredLang: Array(store.arrayLanguages.length).fill(false),
            isHoveredLibr: Array(store.arrayLibraries.length).fill(false),
        };
    },

    methods: {
    startAnimationLang(index) {
        this.isHoveredLang[index] = true;
    },
    resetAnimationLang(index) {
        this.isHoveredLang[index] = false;
    },
    startAnimationLibr(index) {
        this.isHoveredLibr[index] = true;
    },
    resetAnimationLibr(index) {
        this.isHoveredLibr[index] = false;
    }
  }
}
</script>

<!-- ---------------------------------------------------------------------------------- -->

<template>

<section>
    <div id="container">
        <div class="py-2 container-inside">
            <p>
                <i class="fa-solid fa-code"></i>
            </p>
            <h3 class="pb-2">
                languages I speak
            </h3>
            <div class="thoughtdiv">
                <div v-for="(currentItem, index) in store.arrayLanguages" :key="index">
                    <p
                        @mouseenter="startAnimationLang(index)"
                        @mouseleave="resetAnimationLang(index)">
                        <span v-html="currentItem.icon"></span>
                    </p>
                    <span v-if="isHoveredLang[index]" class="text">{{ currentItem.name }}</span>
                </div>
            </div>
        </div>
        <div class="py-2 container-inside">
            <p>
                <i class="fa-solid fa-book-open"></i>
            </p>
            <h3 class="pb-2">
                libraries I use
            </h3>
            <div class="thoughtdiv">
                <div v-for="(currentItem, index) in store.arrayLibraries" :key="index">
                    <p 
                    @mouseenter="startAnimationLibr(index)"
                    @mouseleave="resetAnimationLibr(index)">
                        <span v-html="currentItem.icon"></span>
                    </p>
                    <span v-if="isHoveredLibr[index]" class="text">{{ currentItem.name }}</span>
                </div>
            </div>
        </div>
    </div>
</section>


</template>

<!-- ---------------------------------------------------------------------------------- -->

<style lang="scss" scoped>

@use '../style/variables' as *;
@use '../style/mixins' as *;

section {
    position: relative;
    height: 490px;

    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
    padding-bottom: 200px;

    background-color: $backgroundColor;
    color: $textColor;

    #container {
        display: flex;
        flex-flow: nowrap;
        justify-content: space-evenly;
        margin-bottom: 1rem;

        max-width: 1440px;
        width: 100%;

        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, -25%);

        .container-inside {

            @include skillcontainer;
            background-color: $backgroundColor;
            border: 2px solid $highlightColor;
            outline: 8px solid $backgroundColor;

            .thoughtdiv {

                height: 100%;
                display: flex;
                flex-flow: column;
                justify-content: center;

                div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                    font-size: 1.2rem;
                    font-weight: 500;
                    cursor: default;

                    position: relative;

                    p {
                        width: 3.5rem;
                        height: 3.5rem;
                        border-radius: 50%;

                        transition: linear 0.4s all;
                        border: 2px solid $primaryColor;
                        color: $textColor;

                        display: grid;
                        place-items: center;
                        font-size: 1.8rem;

                        transition: all .5s linear;
                        margin-bottom: 0;
                    }

                    p:hover {
                        background-color: $primaryColor;
                        color: $backgroundColor;
                        transform: rotate(360deg);
                    }
                    
                    p:hover .text {
                        animation: slide .9s linear forwards;
                    }

                    .text {
                        user-select: none;
                        pointer-events: none;
                        color: $textColor;

                        position: absolute;
                        right: 50%;
                        top: 50%;
                        transform: translate(0%, -50%);

                        text-align: end;

                        animation: slide .5s linear forwards;
                        opacity: 1;

                    }
                }
            }

            i {
                font-size: 28px;
                margin-top: 1rem;
                padding: 16px 12.5px;
                background-color: $highlightColor;
                color: $textColor;
                border-radius: 50%;
            }
        }
    }
}

@keyframes slide {
        0% {
            transform: translate(0em, -50%);
            opacity: 0;
        }
        75% {
            opacity: 0;
        }
        100% {
            transform: translate(7.5em, -50%);
            opacity: 1;
        }
    }

</style>