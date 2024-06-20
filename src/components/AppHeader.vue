<script>
import { store } from "../store";
import NavComponent from "../components/NavComponent.vue";
export default {
    data() {
        return {
            store
        }
    },
    components: {
        NavComponent
    }
}
</script>

<template>
    <section class="primary">
        <div class="container">
            <div class="row d-flex">
                <div class="col-9 m-0 d-flex ">
                    <h1 class="mb-0 ">news updates</h1>
                    <h2 class="">carousel</h2>
                </div>
                <div class="col-3 m-0">
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link rounded-circle" href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link rounded-circle" href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link rounded-circle" href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link rounded-circle" href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
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
                    <img class="w-100 mt-3 mb-3 rounded" src="../assets/header-banner-300x38.webp" alt="banner">
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
    width: auto;
    
}
div{
    margin: 0 auto;
}
a{
    color:$primary-color;
    margin: .3rem;
    background-color: white;
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