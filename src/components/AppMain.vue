<script>
import { store } from "../store";
import axios from 'axios';
import MainPlayer from "./MainPlayer.vue";
import MainSmallCarousel from "./MainSmallCarousel.vue";
import MainLifestyle from "./MainLifestyle.vue";
import MainJumbotron from "./MainJumbotron.vue";
import MainBigCarousel from "./MainBigCarousel.vue";
import MainCategoryPost from "./MainCategoryPost.vue";
import MainBanner from "./MainBanner.vue";

export default {
    data() {
        return {
            store,
            animeFigure: [],
            currentArray: []
        }
    },
    components: {
        MainPlayer,
        MainSmallCarousel,
        MainLifestyle,
        MainJumbotron,
        MainBigCarousel,
        MainCategoryPost,
        MainBanner
    },
    methods:{
        getAnimeList(){
            axios.get('http://152.89.170.170:3000/events/geek')
            .then((response) => {
                // handle success
                console.log(response.data);
                this.store.apiList = response.data;
                this.animeFigure = response.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        },
        getFourCard(animeList) {
            this.currentArray = animeList.slice(0, 4);
            console.log(this.currentArray)
        },
    },
    created(){
        this.getAnimeList();
    },
    mounted(){
        this.getFourCard(this.store.apiList);
    }
}
</script>

<template>

    <MainSmallCarousel :currentArray="currentArray"/>
    <MainJumbotron/>
    <MainLifestyle/>
    <MainBanner/>
    <MainBigCarousel :animeFigure="animeFigure"/>
    <MainPlayer/>
    <MainCategoryPost/>

</template>

<style scoped lang="scss">
@use '../styles/partials/variable' as *;
@use '../styles/partials/mixin' as *;
</style>