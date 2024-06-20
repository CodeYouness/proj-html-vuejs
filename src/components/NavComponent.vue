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
        <div class="container ">
            <div class="row ">
                <div class="col-2">
                    <nav class="navbar">
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
                                class="offcanvas m-0 d-flex justify-content-center offcanvas-start"
                                tabindex="-1"
                                id="offcanvasDarkNavbar"
                                aria-labelledby="offcanvasDarkNavbarLabel"
                                >
                                <div class="offcanvas-header my-5 ">
                                    <img  class="offcanvas-title " id="offcanvasDarkNavbarLabel" src="../assets/anime-logo.webp" alt="mainLogo">
                                    <button
                                    type="button"
                                    class="btn-close btn-close-white"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                    ></button>
                                </div>
                                <div class="offcanvas-body  justify-content-center align-middle">
                                    <ul class="navbar-nav pe-3">
                                        <li class="nav-item">
                                            <a class="nav-link" aria-current="page" href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic amet nesciunt officiis, repudiandae doloribus </a>
                                        </li>
                                        <li class="nav-item d-flex justify-content-center">
                                            <a class="nav-link  " href="#"><img src="../assets/music-love.webp" alt="img"></a>
                                            <a class="nav-link" href="#"><img src="../assets/best-places.webp" alt="img"></a>
                                            <a class="nav-link" href="#"><img src="../assets/anime-fashion.webp" alt="img"></a>
                                        </li>
                                    </ul>
                                    <ul class="navbar-nav   pe-3 my-3">
                                        <li class="nav-item d-flex justify-content-center my-2">
                                            <i class="fa-solid fa-clock px-2"></i><span> Sun - Sat: 9:00 AM - 18:00 PM</span>
                                        </li>
                                        <li class="nav-item d-flex justify-content-center my-2">
                                            <i class="fa-solid fa-envelope px-2"></i><span>contact@domain.com</span>
                                        </li>
                                        <li class="nav-item d-flex justify-content-center my-2">
                                            <i class="fa-solid fa-phone-volume px-2"></i><span>(+82)8123 456 789</span>
                                        </li>
                                    </ul>
                                    <ul class="nav d-flex justify-content-center zocial">
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
                    </nav>
                </div>
                <div class="col-8  d-flex">
                    <nav class="navbar navbar-expand-sm ">
                        <div class="container ">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#"><i class="fa-solid fa-house"></i>Home</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#"><i class="fa-solid fa-user"></i>about us</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true"><i class="fa-solid fa-suitcase"></i>
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
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-book-open-reader"></i>
                                        stories
                                        </a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-book"></i>
                                        pages
                                        </a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item " href="#"><i class="fa-solid fa-magnifying-glass"></i>search resoults</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-box-archive"></i>category archive</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-circle-user"></i>author archive</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-calendar-days"></i>date archive</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-bug"></i>error 404</a></li>
                                            </ul>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href="#"><i class="fa-solid fa-envelope"></i>contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div class="col-2">
                    <nav class="navbar navbar-expand-sm">
                        <div class="container">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                    <a class="nav-link search" aria-current="page" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
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

    li a:hover{
    color: $primary-color;
    transition: .4s;
}
li a:active{
    color: $primary-color;
}

ul li a i{
    padding-right: .4rem;
}

img{
    width: 50%;
}

li a img{
    width: 160px;
    margin: .3rem;
    border-radius: .4rem;
}

.offcanvas{
    
}

ul.zocial li a{
    background-color: $primary-color;
    color: white;
    a:hover{
        background-color:$background-color;
    }
}
</style>