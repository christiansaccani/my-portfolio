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
<section class="py-5">

    <h2 class="mb-5">I miei Progetti</h2>

    <div class="card_container d-flex row w-100 justify-content-center gap-5">
        <div class="card px-2 py-4 rounded-4" style="width: 20rem;">
            <img class="card-img-top" src="D:\PPCoding\my-portfolio\src\assets\projects\MacBook Air top.png" alt="Boolivery" data-bs-toggle="modal" data-bs-target="#imageModal">
            <div class="card-body pb-0">
                <h4 class="card-title font-weight-bold">Boolivery</h4>
                <p class="card-text">Progetto finale 'Boolean', webapp di food delivery usando <strong>Vite</strong> e <strong>Laravel</strong> per un'esperienza utente rapida, sicura e moderna.</p>
                <div class="buttons">
                    <a href="#" target="_blank" class="btn rounded-5"><i class="fa-solid fa-play me-2"></i>Video</a>
                    <a href="https://github.com/stars/christiansaccani/lists/freaky-boolivery" target="_blank" class="btn rounded-5"><i class="fa-brands fa-github me-2"></i>Codice</a>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content rounded-4">
                    <div class="modal-header">
                        <h3 class="modal-title" id="imageModalLabel">Boolivery</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4">
                        <img src="D:\PPCoding\my-portfolio\src\assets\projects\MacBook Air top.png" alt="Boolivery" class="img-fluid">
                    </div>
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
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;

    background-color: $primaryColor;
    color: $textColor;

    h2 {
        color: $textColor;
    }

    .card_container {
        max-width: 1440px;

        .card {
            background-color: $primaryColor;
            color: $lightColor;
            border: 5px solid $backgroundColor;
            outline: 3px solid $highlightColor;

            img {
                transition: all .4s linear;
                cursor: pointer;
                &:hover {
                    opacity: .8;
                }
            }

            h4 {
                color: $textColor;
            }

            .buttons {
                display: flex; /* Usa Flexbox per centrare il contenuto */
                flex-flow: row nowrap;
                gap: 1rem;

                .btn {
                    color: $textColor;
                    background-color: $primaryColor;
                    border: 2px solid $highlightColor;
                    transition: all .4s linear;

                    font-weight: 500;
                    padding: .45rem 1.1rem;

                    i {
                        font-size: 1.2rem;
                    }

                    &:hover {
                        background-color: $highlightColor;
                    }
                }
            }
        }
    }
}

// Modal

.modal {
    color: $textColor;
}
</style>