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
            isHover: false
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
        startScrollInterval: function (){
            setInterval(() => {
                if(this.activeIndex < this.carouselNews.length - 1){
                    this.activeIndex++;
                } else {
                    this.activeIndex = 0;
                }
            }, 7000);
        },
        carouselAutoScroll: function(){
            if(this.isHover = false){
                this.startScrollInterval();
                // console.log(this.isHover);
            } else {
                clearInterval(this.startScrollInterval);
                // console.log(this.isHover);
            }
        }
    },
    created(){
        this.getCarouselNews();
        this.startScrollInterval()
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
                <div class="news-head d-flex align-items-center h-100 fw-bold px-3">
                    <p class="mb-0" >news update</p>
                </div>
                <template v-for="(news, index) in this.carouselNews" :key="news.id">
                    <div class="news-body d-flex align-items-center h-100" v-if="index === this.activeIndex">
                        <img :src="getImagePath(news.path)" :alt="news.title" class="h-100 me-2">
                        <div class="d-flex align-items-center">
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
    height: 51.2px;
}

.news-head {
    background-color: $my_bg-darkgrey;
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
</style>