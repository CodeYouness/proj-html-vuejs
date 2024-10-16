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
            currentArray: [],
            newArray: []
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
            this.store.apiList = this.store.animeList;
            console.log(this.store.animeList);
                this.getFourCard(this.store.apiList);
                this.getThreeCard(this.store.apiList);
        },
        getFourCard(animeList) {
            this.currentArray = animeList.slice(0, 4);
            console.log(this.currentArray)
        },
        getThreeCard(animeList) {
            this.newArray = animeList.slice(0, 3);
            console.log(this.newArray)
        }
    },
    created(){
        this.getAnimeList();
    },
}
</script>

<template>

    <MainSmallCarousel :currentArray="currentArray"/>
    <MainJumbotron/>
    <MainLifestyle/>
    <MainBanner/>
    <MainBigCarousel :newArray="newArray"/>
    <MainPlayer/>
    <MainCategoryPost/>

</template>

<style scoped lang="scss">
@use '../styles/partials/variable' as *;
@use '../styles/partials/mixin' as *;
</style>
