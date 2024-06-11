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
                <a href="#" class="btn me-2"><i class="fa-solid fa-play me-2"></i>Video</a>
                <a href="#" class="btn"><i class="fa-brands fa-github me-2"></i>Codice</a>
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
        color: $backgroundColor;
    }

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

// Modal

.modal {
    color: $textColor;
}
</style>