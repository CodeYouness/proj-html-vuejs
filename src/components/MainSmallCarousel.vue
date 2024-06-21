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
    watch: {
        'store.apiList': {
            immediate: true,
            handler() {
                this.getFourCard(this.store.apiList);
            }
        }
    },
    mounted() {
        this.getFourCard(this.store.apiList)
    }
}

</script>

<template>
    <div class="d-flex align-items-center bg-light p-4">
        <div class="w-100">
            <div class="d-flex justify-content-evenly position-relative">

                <div v-for="(pic,index) in currentArray" :key="index" class="custom-card card border-0">

                    <div class="measure" >
                        <img :src="pic.image" :alt="pic.id" class="card-img-top">
                    </div>

                    <div class="card-body text-center">
                        <p class="card-text fw-bolder">
                            {{ pic.event_name }}
                        </p>
                        <p class="card-text">{{ pic.location }}</p>
                        <p class="card-text">from {{ pic.start_date }} to {{ pic.end_date }}</p>
                    </div>

                </div>

                <span class="left">
                    <button @click="forwardPicCarousel" class="left fw-bolder px-3 py-2 border-0"><</button>
                </span>

                <span class="right">
                    <button @click="nextPicCarousel" class="right fw-bolder px-3 py-2 border-0">></button>
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
    transform: translateY(-50%);
    border-radius: 50%;
}

.left {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0%, -50%);
    border-radius: 50%;
}

img {
    height: 250px;
    object-fit: cover;
}

.custom-card {
    width: calc(25% - 1rem);
}

button {
    color: $primary-color;
}

button:hover {
    color: white;
    background-color: $primary-color;
}

</style>