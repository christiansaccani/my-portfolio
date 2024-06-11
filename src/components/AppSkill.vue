<script>
import { store } from '../store.js';

export default {
    name: 'AppSkill',

    data() {
        return {
            store,
            isHoveredLang: Array(store.arrayLanguages.length).fill(false),
            isHoveredLibr: Array(store.arrayLibraries.length).fill(false),
            isHoveredSocials: Array(store.arraySocials.length).fill(false),
            isImageHovered: false,
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
    },
    startAnimationSocial(index) {
        this.isHoveredSocials[index] = true;
    },
    resetAnimationSocial(index) {
        this.isHoveredSocials[index] = false;
    },
    startAnimationImage() {
      this.isImageHovered = true;
    },
    resetAnimationImage() {
      this.isImageHovered = false;
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
                linguaggi che scrivo
                <!-- languages I speak -->
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
                strumenti che uso
                <!-- tools I use -->
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

        <div class="py-2 container-inside">
            <p>
                <i class="fa-solid fa-location-dot"></i>
            </p>
            <h3 class="pb-2">
                dove puoi trovarmi
                <!-- find me here -->
            </h3>
            <div class="thoughtdiv">
                <div v-for="(currentItem, index) in store.arraySocials" :key="index">
                    <a :href="currentItem.link" target="_blank">
                        <p
                            @mouseenter="startAnimationSocial(index)"
                            @mouseleave="resetAnimationSocial(index)">
                            <span v-html="currentItem.icon"></span>
                        </p>
                        <span v-if="isHoveredSocials[index]" class="text">{{ currentItem.name }}</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.codewars.com/users/christiansaccani" target="_blank">
                        <p
                            @mouseenter="startAnimationImage"
                            @mouseleave="resetAnimationImage">
                            <img src="D:\PPCoding\my-portfolio\src\assets\codewars-svgrepo-com.svg" alt="Codewars Logo" />
                        </p>
                        <span v-if="isImageHovered" class="text">Codewars</span>
                    </a>
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
    height: 450px;

    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;

    background-color: $backgroundColor;
    color: $textColor;

    #container {
        display: flex;
        flex-flow: nowrap;
        justify-content: center;
        gap: 4rem;
        margin-bottom: 1rem;

        max-width: 1440px;
        width: 100%;

        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, -25%);

        padding: 0 1rem;

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

                        border: 2px solid $primaryColor;
                        color: $textColor;

                        display: grid;
                        place-items: center;
                        font-size: 1.8rem;

                        transition: all .4s linear;
                        margin-bottom: 0;

                        img {
                            width: 28px;
                            transition: all .4s linear;
                        }
                    }

                    p:hover {
                        background-color: $primaryColor;
                        color: $backgroundColor;
                        opacity: .2;
                    }

                    p:hover img{
                        filter: invert(1);
                    }

                    .text {
                        user-select: none;
                        pointer-events: none;
                        color: $textColor;
                        font-size: 1.5rem;

                        position: absolute;
                        right: 50%;
                        top: 50%;
                        transform: translate(50%, -50%);

                        animation: txtOpacity .4s linear forwards;
                    }
                }
            }

            i {
                font-size: 28px;
                width: 60px;
                height: 60px;
                margin-top: 1rem;

                display: flex;
                justify-content: center;
                align-items: center;
                
                background-color: $highlightColor;
                color: $textColor;
                border-radius: 50%;
            }
        }
    }
}

@keyframes txtOpacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

</style>