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
            activeIndex: 0
        }
    },
    methods: {
        getImagePath: function(img){
            return new URL('./.' + img, import.meta.url).href;
        },
        getCarouselNews: function(){
            this.carouselNews = this.store.animeList.filter((obj) => this.carouselNewsIds.includes(obj.id));            
            console.log(this.carouselNews);
        }
    },
    created(){
        this.getCarouselNews();
    }
}
</script>

<template>
    <section id="header-carousel" class="container-fluid">
        <div class="d-flex align-items-center justify-content-between text-uppercase text-white h-100">
            <div class="d-flex align-items-center h-100">
                <div class="news-head d-flex align-items-center h-100 fw-bold px-3">
                    <p class="mb-0">news update</p>
                </div>
                <template v-for="(news, index) in this.carouselNews" :key="news.id">
                    <div class="news-body d-flex align-items-center h-100" v-if="index === this.activeIndex">
                        <img src="../assets/meal-time-150x150.webp" alt="" class="h-100 me-2">
                        <template v-for="(time, index) in this.carouselNewsTime" :key="index">
                            <span v-if="index === this.activeIndex" class="me-2"> {{ time }} </span>
                        </template>
                        <span>{{ news.title }}</span>
                    </div>
                </template>
                
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