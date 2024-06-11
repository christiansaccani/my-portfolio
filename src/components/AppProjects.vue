<script>
import {store} from '../store.js';

export default {

    name: 'AppProjects',

    data() {
        return {
            store
        };
    },

}
</script>

<!-- ---------------------------------------------------------------------------------- -->

<template>
<section class="py-4">

    <div class="card_container d-flex row w-100 justify-content-center gap-5">

        <div class="card px-1 py-3 rounded-4" style="width: 18rem;">
            <img class="card-img-top" src="D:\PPCoding\my-portfolio\src\assets\projects\MacBook Air top.png" alt="Boolivery">
            <!-- dare possibilità di aprire l'immagine -->
                <div class="card-body">
                    <h5 class="card-title">Boolivery</h5>
                    <p class="card-text">Il progetto simula una webapp di food delivery usando <strong>Vite</strong> e <strong>Laravel</strong> per un'esperienza utente rapida, sicura e moderna.</p>
                    <a href="#" class="btn me-2"><i class="fa-solid fa-play me-2"></i>Video</a>
                    <a href="#" class="btn"><i class="fa-brands fa-github me-2"></i>Codice</a>
                </div>
        </div>

        <div class="card px-1 py-3 rounded-4" style="width: 18rem;">
            <img class="card-img-top" src="D:\PPCoding\my-portfolio\src\assets\projects\comics.png" alt="Comics">
            <!-- dare possibilità di aprire l'immagine -->
                <div class="card-body">
                    <h5 class="card-title">Comics</h5>
                    <p class="card-text">Il progetto simula uno shop di comics attraverso <strong>Vite</strong>, affrontando la gestione di componenti indipendenti</p>
                    <a href="#" class="btn me-2"><i class="fa-solid fa-play me-2"></i>Video</a>
                    <a href="#" class="btn"><i class="fa-brands fa-github me-2"></i>Codice</a>
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
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;

    background-color: $primaryColor;
    color: $textColor;

    .card_container {
        max-width: 1440px;

        .card {
            border: 3px solid $primaryColor;
            outline: 4px solid $backgroundColor;

            img {
                transition: all .4s linear;
                cursor: pointer;
                &:hover {
                    opacity: .8;
                }
            }

            .btn {
                color: $primaryColor;
                background-color: $backgroundColor;
                border: 1px solid $primaryColor;
                transition: all .4s linear;
                &:hover {
                    background-color: $primaryColor;
                    color: $backgroundColor;
                }
            }
        }
    }
}

</style>