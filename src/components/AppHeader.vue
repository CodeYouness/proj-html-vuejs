<script>
import { store } from "../store";
import NavComponent from "../components/NavComponent.vue";
import HeaderSmallCarousel from './HeaderSmallCarousel.vue'
export default {
    data() {
        return {
            store
        }
    },
    components: {
        NavComponent,
        HeaderSmallCarousel,
        NavComponent
    },
    methods:{
    }
}
</script>

<template>
    <section class="primary">
        <div class="container">
            <div class="row">
                <div class="col-9 m-0 d-flex align-middle ">
                    <HeaderSmallCarousel />
                </div>
                <div class="col-3 m-0 ">
                    <ul class="nav justify-content-end align-items-center h-100">
                        <li class="nav-item ">
                            <a class="nav-link rounded-circle" href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link rounded-circle" href="#"><i class="fa-brands fa-x-twitter"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link rounded-circle" href="#"><i class="fa-brands fa-instagram"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link rounded-circle " href="#"><i class="fa-brands fa-youtube"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="border-bottom">
        <div class="container">
            <div class="row ">
                <div class="col-4">
                    <a href="#"><img class="mainlogo w-75 m-4" src="../assets/anime-logo.webp" alt="mainLogo"></a>
                    
                </div>
                <div class="col-8 banner">
                    <img class="w-100 mt-3 mb-3 rounded" src="../assets/header-banner.webp" alt="banner">
                </div>
            </div>
        </div>
    </section>
    <NavComponent/>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;
.primary{
    background-color: $primary-color;
}
h1{
    
    background-color: #545454;
    text-transform: uppercase;
    color: white;
    font-size: 1.2rem;
    font-weight: bolder;
}
div{
    margin: 0 auto;
}
ul li a{
    color:$primary-color;
    margin: .3rem;
    background-color: white;
    width: 30px;
    display: flex;
    text-align: center;
    justify-content: center;
    vertical-align: middle;
    padding: .4rem;
}
.nav a:hover{
background-color: $background-color;
color: white;
transition: .4s;
}

nav ul li a{
    color: $background-color;
    a:hover{
        color:$primary-color;
        background-color: white;
    }
}



</style>