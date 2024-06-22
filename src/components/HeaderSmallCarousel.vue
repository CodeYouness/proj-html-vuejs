<script>
import { store } from "../store";

export default{
    data(){
        return {
            message: 'Header small carousel',
            store,
            carouselNewsIds: [1, 2, 3, 4],
            carouselNewsTime: ['05:37', '05:35', '05:32', '05:29'],
            carouselNews: [],
            activeIndex: 0,
            isAutoScrollActive: false,
            carouselClock: null
        }
    },
    methods: {
        getImagePath: function(img){
            return new URL('./.' + img, import.meta.url).href;
        },
        getCarouselNews: function(){
            this.carouselNews = this.store.animeList.filter((obj) => this.carouselNewsIds.includes(obj.id));            
            // console.log(this.carouselNews);
        },
        nextNews: function(){           
            if(this.activeIndex < this.carouselNews.length - 1){
                this.activeIndex++;
            } else {
                this.activeIndex = 0;
            }
        },
        prevNews: function(){
            if(this.activeIndex === 0){
                this.activeIndex = this.carouselNews.length - 1
            } else {
                this.activeIndex--;
            }
        },
        startCarouselClock: function (){
            if(this.isAutoScrollActive === false){
                this.carouselClock = setInterval(this.nextNews, 7000);
                this.isAutoScrollActive = true; 
            }
        },
        stopCarouselClock: function (){
            if(this.isAutoScrollActive === true){
                clearInterval(this.carouselClock);
                this.isAutoScrollActive = false; 
            }
        }
    },
    created(){
        this.getCarouselNews();
        this.startCarouselClock()
    },
    updated(){
        // this.carouselAutoScroll();
    }
}
</script>

<template>
    <section id="header-carousel" class="container-fluid">
        <div class="d-flex align-items-center justify-content-between text-uppercase text-white h-100">
            <div class="d-flex align-items-center h-100">
                <div class="news-head d-flex align-items-center h-100 fw-bold px-3 position-relative z-1">
                    <p class="mb-0" >news update</p>
                </div>
                <template v-for="(news, index) in this.carouselNews" :key="news.id">
                    <div class="news-body d-flex align-items-center h-100" v-if="index === this.activeIndex">
                        <div class="h-100 position-relative">
                            <img :src="getImagePath(news.path)" :alt="news.title" class="h-100 me-2 fade-in-image">
                            <font-awesome-icon class="image-icon position-absolute" icon="fa-solid fa-caret-right" />
                        </div>
                        <div class="d-flex align-items-center" @mouseover="stopCarouselClock()" @mouseleave="startCarouselClock()">
                            <template v-for="(time, index) in this.carouselNewsTime" :key="index">
                                <span v-if="index === this.activeIndex" class="me-2"> {{ time }} </span>
                            </template>
                            <span class="news-title typingEffect d-inline-block">{{ news.title }}</span>
                        </div>
                    </div>
                </template>
                
            </div>
            <div>
                <font-awesome-icon icon="fa-solid fa-angle-left" class="carousel-icon" @click="prevNews()"/>
                <font-awesome-icon icon="fa-solid fa-angle-right" class="carousel-icon ms-4" @click="nextNews()"/>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;

#header-carousel {
    height: 40px;
}

.news-head {
    background-color: $my_bg-darkgrey;
}

.image-icon {
    color: $primary-color;
    height: 100%;
    font-size: 1rem;
    right: 85%;
    overflow: clip;
}

img {
    width: 50px;
    object-fit: cover;
}

.carousel-icon,
.news-title {
    cursor: pointer;
}

.news-title:hover,
.carousel-icon:hover {
    color: $background-color;
}

.typingEffect {
    overflow: hidden;
    white-space: nowrap;
    width: 0;
    animation: typing 1s steps(80) forwards;
}

@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

.fade-in-image {
    animation: fadeIn .75s; 
}

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}
</style>