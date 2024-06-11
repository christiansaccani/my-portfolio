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

    <section class="w-100 py-4">
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
        margin-bottom: 2rem;
        color: $textColor;
    }

    form {
        padding: 2rem 4rem;
        color: $textColor;
        border: 3px solid $primaryColor;

        label {
            font-weight: 500;
        }

        input, textarea {
            border: 2px solid $primaryColor;
        }

        #custom-btn {
            padding: 0.2rem 1.2rem;
            border-radius: 24px;
            transition: linear 0.4s all;
            border: 2px solid $primaryColor;
            color: $primaryColor;
            font-weight: 500;
        }
        
        #custom-btn:hover {
            background-color: $primaryColor;
            color: $backgroundColor;
        }
    }
}

// ----------

.custom-input:focus,
.custom-input:active {
    border-color: #84909B;
    box-shadow: 0 0 0 0.25rem #84909B;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}

input:-webkit-autofill{
    -webkit-text-fill-color: $textColor !important;
}

</style>

<!-- Manca solo l'effettivo collegamento alla mail -->