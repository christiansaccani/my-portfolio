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
    <h3>write to me here...</h3>

    <form class="row g-3">
        <div class="col-md-6">
            <label for="name" class="form-label">Your Name</label>
            <input type="name" class="form-control custom-input" id="name">
        </div>
        <div class="col-md-6">
            <label for="email" class="form-label">Email Address</label>
            <input type="mail" class="form-control custom-input" id="email">
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Your Message</label>
            <textarea class="form-control custom-input" id="message" rows="5"></textarea>
        </div>
        <div class="col-12 text-center">
            <button type="submit" class="btn btn-outline-light" id="custom-btn">Send It</button>
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
    background-color: $primaryColor;

    h3 {
        margin-bottom: 2rem;
        color: $backgroundColor
    }

    form {
        color: $backgroundColor;

        input {
            border: none;
        }

        #custom-btn {
            padding: 0.2rem 1.2rem;
            border-radius: 24px;
            transition: linear 0.4s all;
            border: 2px solid $backgroundColor;
            font-weight: 500;
        }
        
        #custom-btn:hover {
            color: $primaryColor;
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