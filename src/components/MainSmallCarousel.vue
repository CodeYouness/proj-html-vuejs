<script>
import { store } from "../store";

export default {
    data() {
        return {
            store,
            currentIndex: 4,
            backwardIndex: store.animeList.length - 1,
            currentArray: []
        }
    },
    components: {
        store
    },
    methods:{
        getImagePath(img) {
            return new URL(img , import.meta.url).href;
        },
        getFourCard(animeList) {
            this.currentArray = animeList.slice(0, 4);
            console.log(this.currentArray)
        },
        nextPicCarousel(){
            this.currentArray.shift();
            this.currentArray.push(this.store.animeList[this.currentIndex]);
            this.currentIndex = (this.currentIndex + 1) % originalArray.length;
        },
        forwardPicCarousel(){
            this.currentArray.pop();
            this.currentArray.unshift(this.store.animeList[this.backwardIndex]);
            this.reverseIndex = (this.reverseIndex - 1 + originalArray.length) % originalArray.length;
        }
    },
    created() {
        this.getFourCard(this.store.animeList)
    }
}

</script>

<template>
    <div class="container-fluid d-flex align-items-center">
        <div class="row overflow-x-auto">
            <div class="d-flex flex-nowrap">
                <li v-for="pic in currentArray" :key="pic.id" class="card">
                    <img :src="getImagePath(`.${pic.path}`)" :alt="pic.id">
                </li>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;
</style>