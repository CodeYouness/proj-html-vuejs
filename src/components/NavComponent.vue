<script>
import { store } from "../store";

export default {
    data() {
        
        return {
            store,
            
        }
    },
}

</script>

<template>
    <section>
        <div class="container ">
            <div class="d-flex justify-content-between  ">
                <div class="">
                    <nav class="navbar">
                        <div class="container-fluid ">
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
                                class="offcanvas m-0 d-flex justify-content-center  w-50 offcanvas-start "
                                tabindex="-1"
                                id="offcanvasDarkNavbar"
                                aria-labelledby="offcanvasDarkNavbarLabel"
                                >
                                <div class="offcanvas-header my-5 align-self-center">
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
                                    <ul class="nav d-flex justify-content-center  zocial">
                                        <li class="nav-item ">
                                            <a class="nav-link rounded-circle" href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li class="nav-item ">
                                            <a class="nav-link rounded-circle" href="#"><i class="fa-brands fa-x-twitter"></i></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link rounded-circle " href="#"><i class="fa-brands fa-instagram"></i></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link rounded-circle" href="#"><i class="fa-brands fa-youtube"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div class="">
                    <nav class="navbar navbar-expand-sm ">
                        <div class="container ">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href="#"><i class="fa-solid fa-house"></i>Home</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#"><i class="fa-solid fa-user"></i>about us</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-suitcase"></i>
                                        lifestyle
                                        </a>
                                        <ul class="dropdown-menu text-center grande border border-0">
                                            <div class="wrapper p-4">
                                                <li class="megapadding">
                                                    <div class="card border border-0 rounded m-2" style="width:20rem;">
                                                        <img src="../assets/visit-france.webp" class="card-img-top w-100" alt="...">
                                                        <div class="card-body">
                                                            <p class="card-text">Reasons To Visit France</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="card border border-0 rounded m-2" style="width:20rem;">
                                                        <img src="../assets/best-places.webp" class="card-img-top w-100" alt="...">
                                                            <div class="card-body">
                                                                <p class="card-text">Place For A RoadTrip</p>
                                                            </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="card border border-0 rounded m-2" style="width:20rem;">
                                                        <img src="../assets/music-love.webp" class="card-img-top w-100" alt="...">
                                                        <div class="card-body">
                                                            <p class="card-text">Music The Love Of My Life</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="paddingr">
                                                    <div class="card border border-0 rounded m-2" style="width:20rem;">
                                                        <img src="../assets/anime-fashion.webp" class="card-img-top w-100" alt="...">
                                                        <div class="card-body">
                                                        <p class="card-text">Fashion Trend Now A Days</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                                
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-suitcase"></i>
                                        stories
                                        </a>
                                        <ul class="dropdown-menu text-center grande border border-0">
                                            <div class="wrapper2 p-4">
                                                <li class="megapadding2">
                                                    <div class="card border border-0 rounded m-2" style="width:20rem;">
                                                        <img src="../assets/ideas-anime.webp" class="card-img-top w-100" alt="...">
                                                        <div class="card-body">
                                                            <p class="card-text">Live Ideas You Migth Be Anime</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="card border border-0 rounded m-2" style="width:20rem;">
                                                        <img src="../assets/travel-alone.webp" class="card-img-top w-100" alt="...">
                                                        <div class="card-body">
                                                            <p class="card-text">Traveling Alone Is Awesome</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="card border border-0 rounded m-2" style="width:20rem;">
                                                        <img src="../assets/success-story.webp" class="card-img-top w-100" alt="...">
                                                        <div class="card-body">
                                                            <p class="card-text">The Best Succes Story</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="paddingr">
                                                    <div class="card border border-0 rounded m-2" style="width:20rem;">
                                                        <img src="../assets/best-places.webp" class="card-img-top w-100" alt="...">
                                                            <div class="card-body">
                                                                <p class="card-text">Place For A RoadTrip</p>
                                                            </div>
                                                    </div>
                                                </li>
                                            </div>
                                                
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
                <div class="">
                    <nav class="navbar navbar-expand-sm">
                        <div class="container">
                            <button  class="navbar-toggler"  type="button" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link search" aria-current="page" href="#"><i class="fa-solid fa-magnifying-glass"></i>
                                        </a>
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
.megapadding2{
    padding-left: 38rem;
}

.wrapper2{
    background-color: #e0ddddf8;
    display: flex;
    position: relative;
    left: -1300px;
    
}

.megapadding{
    padding-left: 36rem;
}

.paddingr{
    padding-right: 38rem;
}


.dropdown:hover .dropdown-menu{
    display: block;
}

.wrapper{
    background-color: #e0ddddf8;
    display: flex;
    position: relative;
    left: -1150px;
    
}

li a:hover{
    color: $primary-color;
    transition: .4s;
    display: block;
}

a :active{
    color: $primary-color;
}

ul li a i{
    padding-right: .4rem;
    justify-content: center;
    align-items: center;
}

img{
    width: 50%;
}

li a img{
    width: 160px;
    margin: .3rem;
    border-radius: .4rem;
}

li a{
    text-transform: uppercase;
    font-weight: 700;
    font-size: .8rem;
}

a.search i{
    font-size: 1.5rem;
}

ul.zocial li a{
    background-color: $primary-color;
    color: white;
    margin: .3rem;
    width: 33px;
    display: flex;
    justify-content: center;
    vertical-align: middle;
    padding: .6rem .3rem;
    padding-left: .5rem;
}

.zocial a:hover{
    background-color:$background-color;

}
</style>