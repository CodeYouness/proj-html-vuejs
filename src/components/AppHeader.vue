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
    <section>
        <div class="container">
            <div class="row ">
                <div class="col-2">
                    <nav class="navbar ">
                        <div class="container-fluid">
                            <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasDarkNavbar"
                            aria-controls="offcanvasDarkNavbar"
                            aria-label="Toggle navigation"
                            >
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div
                            class="offcanvas offcanvas-end text-bg-dark"
                            tabindex="-1"
                            id="offcanvasDarkNavbar"
                            aria-labelledby="offcanvasDarkNavbarLabel"
                            >
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                                Dark offcanvas
                                </h5>
                                <button
                                type="button"
                                class="btn-close btn-close-white"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                                ></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Link</a>
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div class="col-8 justify-center d-flex ">
                    <nav class="navbar navbar-expand-sm">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#">about us</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        lifestyle
                                        </a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><hr class="dropdown-divider"></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        stories
                                        </a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><hr class="dropdown-divider"></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        pages
                                        </a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><hr class="dropdown-divider"></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href="#">Home</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div class="col-2">
                    <nav class="navbar navbar-expand-sm">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href="#">cerca</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </section>
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
a:hover{
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