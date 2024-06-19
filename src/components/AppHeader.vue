<script>
import { store } from "../store";

export default {
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row d-flex">
                <div class="col-6 d-flex ">
                    <h1 class="mb-0 ">news updates</h1>
                    <h2 class="">carousel</h2>
                </div>
                <div class="col-4">
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
            <div class="row d-flex">
                <div class="col-6 d-flex ">
                    <h1 class="mb-0 ">news updates</h1>
                    <h2 class="">carousel</h2>
                </div>
                <div class="col-4">
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
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;
section{
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
a:hover{
background-color: $background-color;
color: white;
transition: .4s;
}

</style>