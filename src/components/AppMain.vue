<script>
import { store } from "../store";
import MainPlayer from "./MainPlayer.vue"
import MainSmallCarousel from "./MainSmallCarousel.vue"
import MainLifestyle from "./MainLifestyle.vue"

export default {
    data() {
        return {
            store
        }
    },
    components: {
        MainPlayer,
        MainSmallCarousel,
        MainLifestyle
    }
}
</script>

<template>
    
    <MainSmallCarousel/>
    <MainLifestyle/>
    <MainPlayer/>

</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;
</style>