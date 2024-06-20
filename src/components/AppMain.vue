<script>
import { store } from "../store";
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
            store
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
    }
}
</script>

<template>

    <MainSmallCarousel/>
    <MainJumbotron/>
    <MainLifestyle/>
    <MainBanner/>
    <MainBigCarousel/>
    <MainPlayer/>
    <MainCategoryPost/>

</template>

<style scoped lang="scss">
@use '../styles/partials/variable' as *;
@use '../styles/partials/mixin' as *;
</style>