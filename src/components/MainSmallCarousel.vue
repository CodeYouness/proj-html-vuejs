<script>
import { store } from "../store";

export default {
    data() {
        return {
            store,
            currentIndex: 4,
            backwardIndex: 0,
            isAutoScrollActive: false,
            carouselClock: null
        }
    },
    props: {
        currentArray: {
            type: Array,
            required:true 
        }
    },
    components: {
        store
    },
    methods:{
        nextPicCarousel(){
            this.currentArray.shift();
            this.currentArray.push(this.store.apiList[this.currentIndex]);
            this.currentIndex = (this.currentIndex + 1) % this.store.apiList.length;
            this.backwardIndex = (this.currentIndex - 4 + this.store.apiList.length ) % this.store.apiList.length;
        },
        forwardPicCarousel(){
            this.currentArray.pop();
            this.currentArray.unshift(this.store.apiList[this.backwardIndex]);
            this.backwardIndex = (this.backwardIndex - 1 + this.store.apiList.length) % this.store.apiList.length;
            this.currentIndex = (this.backwardIndex + 4) % this.store.apiList.length;
        },
        getClearedString(string){
            let clearedString = string.split(" ")
            clearedString.splice(clearedString.indexOf('convention'), 1)
            return clearedString
        },
        startCarouselClock: function (){
            if(this.isAutoScrollActive === false){
                this.carouselClock = setInterval(this.nextPicCarousel, 5000);
                this.isAutoScrollActive = true; 
            }
        },
        stopCarouselClock: function (){
            if(this.isAutoScrollActive === true){
                clearInterval(this.carouselClock);
                this.isAutoScrollActive = false; 
            }
        }
    },
    mounted() {
        this.startCarouselClock()
    }
}

</script>

<template>
    <div class="d-flex align-items-center bg-light p-4" @mouseover="stopCarouselClock()" @mouseleave="startCarouselClock()">
        <div class="w-100">
            <div class="d-flex justify-content-evenly position-relative">

                <div v-for="(pic,index) in currentArray" :key="index" class="custom-card card border-0">

                    <img :src="pic.image" :alt="pic.id" class="card-img-top">

                    <div class="card-img-overlay text-center pt-2">
                        <span class="badge text-bg-light me-2" v-for="(word,identificator) in getClearedString(pic.type)" :key="identificator">{{ word }}</span>
                    </div>
                    

                    <div class="card-body text-center">
                        <a class="card-text fw-bolder m-0">
                            {{ pic.event_name }}
                        </a>
                        <p class="card-text m-0">{{ pic.location }}</p>
                        <p class="card-text text-secondary m-0">{{ pic.start_date }} &rArr; {{ pic.end_date }}</p>
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
    transition: transform 0.5s ease, opacity 0.5s ease;
    cursor: pointer;
}

button {
    color: $primary-color;
    transition: background-color 0.5s ease, color 0.5s ease;
}

a {
    text-decoration: none;
    color: black;
}

a:hover {
    color: $primary-color;
}

button:hover {
    color: white;
    background-color: $primary-color;
}

</style>