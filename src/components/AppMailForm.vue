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
    <form class="row g-3">
        <div class="col-md-6">
            <label for="name" class="form-label">Your Name</label>
            <input type="email" class="form-control custom-input" id="name">
        </div>
        <div class="col-md-6">
            <label for="email" class="form-label">Email Address</label>
            <input type="password" class="form-control custom-input" id="email">
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Your Message</label>
            <textarea class="form-control custom-input" id="message" rows="3"></textarea>
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
    justify-content: center;
    background-color: $primaryColor;

    form {
        color: $backgroundColor;

        input {
            border: none;
        }

        #custom-btn {
            padding: 0.2rem 1.2rem;
            border-radius: 24px;
            transition: linear 0.1s all;
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


</style>