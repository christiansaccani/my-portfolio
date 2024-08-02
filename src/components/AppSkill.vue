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
            isImage2Hovered: false,
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
    },
    startAnimationImage2() {
      this.isImage2Hovered = true;
    },
    resetAnimationImage2() {
      this.isImage2Hovered = false;
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
                <i class="fa-solid fa-code" style="color: #e8e9eb;"></i>
            </p>
            <h3 class="pb-1">
                Linguaggi
                <!-- languages I speak -->
            </h3>
            <p class="sub-title">
                che ho appreso fino ad oggi, senza perdermi le novità
            </p>
            <div class="thoughtdiv">
                <div v-for="(currentItem, index) in store.arrayLanguages" :key="index">
                    <p
                        @mouseenter="startAnimationLang(index)"
                        @mouseleave="resetAnimationLang(index)">
                        <span class="pt-1" v-html="currentItem.icon"></span>
                    </p>
                    <span v-if="isHoveredLang[index]" class="text">{{ currentItem.name }}</span>
                </div>
                <div>
                    <p
                        @mouseenter="startAnimationImage"
                        @mouseleave="resetAnimationImage">
                        <img src="D:\PPCoding\my-portfolio\src\assets\cobol_icon_132525.svg" alt="Codewars Logo" />
                    </p>
                    <span v-if="isImageHovered" class="text">Cobol</span>
                </div>
                <div>
                    <p
                        @mouseenter="startAnimationImage2"
                        @mouseleave="resetAnimationImage2">
                        <img src="D:\PPCoding\my-portfolio\src\assets\IBM_RPG_logo.png" alt="Codewars Logo" style="width: 40px;"/>
                    </p>
                    <span v-if="isImage2Hovered" class="text">RPG</span>
                </div>
            </div>
        </div>

        <div class="py-2 container-inside">
            <p>
                <i class="fa-solid fa-book-open" style="color: #e8e9eb;"></i>
            </p>
            <h3 class="pb-2">
                Strumenti
                <!-- tools I use -->
            </h3>
            <p class="sub-title">
                che utilizzo per gestire e organizzare al meglio il mio lavoro
            </p>
            <div class="thoughtdiv">
                <div v-for="(currentItem, index) in store.arrayLibraries" :key="index">
                    <p 
                    @mouseenter="startAnimationLibr(index)"
                    @mouseleave="resetAnimationLibr(index)">
                        <span class="pt-1" v-html="currentItem.icon"></span>
                    </p>
                    <span v-if="isHoveredLibr[index]" class="text">{{ currentItem.name }}</span>
                </div>
            </div>
        </div>

        <div class="py-2 container-inside">
            <p>
                <i class="fa-solid fa-location-dot" style="color: #e8e9eb;"></i>
            </p>
            <h3 class="pb-2">
                Community
                <!-- find me here -->
            </h3>
            <p class="sub-title">
                dove mi puoi trovare, come sviluppatore e non
            </p>
            <div class="thoughtdiv">
                <div v-for="(currentItem, index) in store.arraySocials" :key="index">
                    <a :href="currentItem.link" target="_blank">
                        <p
                            @mouseenter="startAnimationSocial(index)"
                            @mouseleave="resetAnimationSocial(index)">
                            <span class="pt-1" v-html="currentItem.icon"></span>
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
    height: 490px;

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

            .sub-title {
                color: $lightColor;
                text-align: center;
                font-size: 18px;
                max-width: 80%;
            }

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

                        border: 2px solid $lightColor;
                        color: $lightColor;

                        display: grid;
                        place-items: center;
                        font-size: 1.8rem;

                        transition: all .4s linear;
                        margin-bottom: 0;

                        img {
                            width: 28px;
                            transition: all .4s linear;
                            filter: invert(44%) sepia(7%) saturate(460%) hue-rotate(182deg) brightness(93%) contrast(89%);
                        }
                    }

                    p:hover {
                        background-color: $primaryColor;
                        border-color: $textColor;
                        opacity: .1;
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

h3 {
    font-weight: 600;
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