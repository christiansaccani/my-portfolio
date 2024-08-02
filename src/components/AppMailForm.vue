<script>
import {store} from '../store.js';

export default {

    name: 'AppMailForm',

    data() {
        return {
            store
        };
    },

}
</script>

<!-- ---------------------------------------------------------------------------------- -->

<template>

    <section class="w-100 py-5">
        <h3>Non vedo l'ora di collaborare con voi!</h3>

        <form class="row g-3 rounded-4">
            <div class="col-md-6">
                <label for="name" class="form-label">Il tuo nome</label>
                <input type="name" class="form-control custom-input" id="name">
            </div>
            <div class="col-md-6">
                <label for="email" class="form-label">Il tuo indirizzo email *</label>
                <input type="mail" class="form-control custom-input" id="email" required>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Il tuo messaggio *</label>
                <textarea class="form-control custom-input" id="message" rows="5" required></textarea>
            </div>
            <div class="col-12 text-center">
                <button type="submit" class="btn btn-outline-light" id="custom-btn">Invia</button>
            </div>
        </form>
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
    background-color: $backgroundColor;

    h3 {
        margin-bottom: 3rem;
        color: $textColor;
    }

    form {
        padding: 2rem 4rem;
        color: $textColor;
        border: 3px solid $primaryColor;

        label {
            color: $textColor;
            font-weight: 500;
        }

        input, textarea {
            border: 2px solid $lightColor;
            background-color: $backgroundColor;
        }

        #custom-btn {
            padding: 0.2rem 1.2rem;
            border-radius: 24px;
            transition: linear 0.4s all;
            border: 3px solid $lightColor;
            color: $lightColor;
            font-weight: 500;
            font-size: large;
        }
        
        #custom-btn:hover {
            background-color: $backgroundColor;
            color: $lightColor;
            border-color: $highlightColor;
        }
    }
}

// ----------

.custom-input:focus,
.custom-input:active {
    border-color: $lightColor;
    background-color: $backgroundColor;
    box-shadow: 0 0 0 0.2rem $primaryColor;
    color: $textColor;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px $backgroundColor inset !important;
}

input:-webkit-autofill{
    -webkit-text-fill-color: $textColor !important;
}

</style>

<!-- Manca solo l'effettivo collegamento alla mail -->