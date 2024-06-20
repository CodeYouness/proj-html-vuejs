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
        getFourCard(animeList) {
            this.currentArray = animeList.slice(0, 4);
            console.log(this.currentArray, this.store.apiList)
        },
        nextPicCarousel(){
            this.currentArray.shift();
            this.currentArray.push(this.store.apiList[this.currentIndex]);
            this.currentIndex = (this.currentIndex + 1) % this.store.apiList.length;
            this.backwardIndex = (this.currentIndex - 4 + this.store.apiList.length ) % this.store.apiList.length;
            console.log(this.currentIndex)
        },
        forwardPicCarousel(){
            this.currentArray.pop();
            this.currentArray.unshift(this.store.apiList[this.backwardIndex]);
            this.backwardIndex = (this.backwardIndex - 1 + this.store.apiList.length) % this.store.apiList.length;
            this.currentIndex = (this.backwardIndex + 4) % this.store.apiList.length;
            console.log(this.backwardIndex);
        }
    },
    created() {
        this.getFourCard(this.store.apiList)
    }
}

</script>

<template>
    <div class="d-flex align-items-center">
        <div class="container">
            <div class="row d-flex position-relative">

                <div v-for="(pic,index) in currentArray" :key="index" class="col-3">
                    <div class="card border-0">
                        <img :src="pic.image" :alt="pic.id" class="card-img-top">
                        <div class="card-body">
                            <h2>
                                {{ pic.event_name }}
                            </h2>
                            <p>{{ pic.location }}</p>
                            <p>from {{ pic.start_date }} to {{ pic.end_date }}</p>
                        </div>

                    </div>

                </div>

                <span class="left">
                    <button @click="forwardPicCarousel" class="left"><</button>
                </span>

                <span class="right">
                    <button @click="nextPicCarousel" class="right">></button>
                </span>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;

.right {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0%, -50%);
    border-radius: 50%;
}

.left {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0%, -50%);
    border-radius: 50%;
}

</style>