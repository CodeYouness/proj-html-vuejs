<script>
import { store } from "../store";

export default {
    data() {
        return {
            store,
            currentIndex: 4,
            backwardIndex: store.apiList.length - 1,
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
            this.currentArray.push(this.store.apiList[this.currentIndex]);
            this.currentIndex = (this.currentIndex + 1) % this.store.apiList.length;
        },
        forwardPicCarousel(){
            this.currentArray.pop();
            this.currentArray.unshift(this.store.apiList[this.backwardIndex]);
            this.backwardIndex = (this.backwardIndex - 1 + this.store.apiList.length) % this.store.apiList.length;
        }
    },
    created() {
        this.getFourCard(this.store.apiList)
    }
}

</script>

<template>
    <div class="container-fluid d-flex align-items-center">
        <div class="row overflow-x-auto">
            <div class="d-flex flex-nowrap">
                <button @click="forwardPicCarousel()"><</button>
                <li v-for="(pic,index) in currentArray" :key="index" class="card">
                    <img :src="pic.image" :alt="pic.id">
                </li>
                <button @click="nextPicCarousel()">></button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;
</style>