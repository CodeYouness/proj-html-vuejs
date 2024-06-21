<script>
import { store } from "../store";

export default{
    data(){
        return {
            message: 'Header small carousel',
            store
        }
    }
}
</script>

<template>
    <section id="header-carousel">
        <div class="container-fluid d-flex align-items-center justify-content-between text-uppercase text-white h-100">
            <div class="d-flex align-items-center h-100">
                <div class="news-head d-flex align-items-center h-100 fw-bold px-3">
                    <p class="mb-0">news update</p>
                </div>
                <div class="news-body d-flex align-items-center h-100">
                    <img src="../assets/meal-time-150x150.webp" alt="" class="h-100">
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                </div>
            </div>
            <div>
                <font-awesome-icon icon="fa-solid fa-angle-left" />
                <font-awesome-icon icon="fa-solid fa-angle-right" class="ms-4"/>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;

#header-carousel {
    height: 51.2px;
}

.news-head {
    background-color: $my_bg-darkgrey;
}

</style>