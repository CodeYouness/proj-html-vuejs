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
            console.log(this.currentArray, this.store.apiList)
        },
        nextPicCarousel(){
            this.currentArray.shift();
            this.currentArray.push(this.store.apiList[this.currentIndex]);
            this.currentIndex = (this.currentIndex + 1) % this.store.apiList.length;
            this.backwardIndex = (this.currentIndex - 4 + this.store.apiList.length ) % this.store.apiList.length
            console.log(this.currentIndex)
        },
        forwardPicCarousel(){
            this.currentArray.pop();
            this.currentArray.unshift(this.store.apiList[this.backwardIndex]);
            this.backwardIndex = (this.backwardIndex - 1 + this.store.apiList.length) % this.store.apiList.length;
            this.currentIndex = (this.backwardIndex + 4) % this.store.apiList.length
            console.log(this.backwardIndex)
        }
    },
    created() {
        this.getFourCard(this.store.apiList)
    }
}

</script>

<template>
    <div class="d-flex align-items-center">
        <div class="container position-relative">
            <div class="row d-flex">

                <li v-for="(pic,index) in currentArray" :key="index" class="card col-3">
                    <img :src="pic.image" :alt="pic.id">
                </li>

                <span class="left">
                    <button @click="forwardPicCarousel"><</button>
                </span>

                <span class="right">
                    <button @click="nextPicCarousel">></button>
                </span>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;

// .right {
//     position: absolute;
//     right: 0;
//     border-radius: 50%;
// }

// .left {
//     position: absolute;
//     left: 0;
//     border-radius: 50%;
// }

</style>