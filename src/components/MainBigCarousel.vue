<script>
import { store } from "../store";

export default {
    data() {
        return {
            store,
            currentIndex: 3,
            backwardIndex: 0,
            isAutoScrollActive: false,
            carouselClock: null
        }
    },
    props: {
        newArray: {
            type: Object,
            required:true 
        }
    },
    components: {
        store
    },
    methods:{
        nextPicCarousel(){
            this.newArray.shift();
            this.newArray.push(this.store.apiList[this.currentIndex]);
            this.currentIndex = (this.currentIndex + 1) % this.store.apiList.length;
            this.backwardIndex = (this.currentIndex - 3 + this.store.apiList.length ) % this.store.apiList.length;
        },
        forwardPicCarousel(){
            this.newArray.pop();
            this.newArray.unshift(this.store.apiList[this.backwardIndex]);
            this.backwardIndex = (this.backwardIndex - 1 + this.store.apiList.length) % this.store.apiList.length;
            this.currentIndex = (this.backwardIndex + 3) % this.store.apiList.length;
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
            console.log(this.newArray)
        },
        getImagePath: function(img){
            return new URL('./.' + img, import.meta.url).href;
        },
    },
    mounted() {
        this.startCarouselClock()
    }
}
</script>

<template>
<div class="d-flex align-items-center p-4">
        <div class="container">
            <div class="d-flex justify-content-between mb-3">
                <h3 class="text-uppercase fw-bold">featured posts</h3>
                <div>
                    <button @click="forwardPicCarousel" class="rounded-circle fw-bolder px-3 py-2 border-0 me-3 btn-color"><</button>
                    <button @click="nextPicCarousel" class="rounded-circle fw-bolder px-3 py-2 border-0 btn-color">></button>
                </div>
            </div>
            <div class="d-flex justify-content-between position-relative" @mouseover="stopCarouselClock()" @mouseleave="startCarouselClock()">

                <div v-for="(pic,index) in newArray" :key="index" class="custom-card card border-0">

                    <img :src="getImagePath(pic.path)" :alt="pic.id" class="card-img-top">

                    <div class="card-img-overlay text-center pt-2">
                        <span class="badge text-bg-light me-2" v-for="(word,identificator) in pic.category" :key="identificator">{{ word }}</span>
                    </div>
                    

                    <div class="card-body text-center bg-light">
                        <a class="card-text fw-bolder m-0">
                            {{ pic.title }}
                        </a>
                        <p class="card-text text-secondary">{{ pic.date }}</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim numquam...</p>
                        <button type="button" class="btn btn-danger rounded-pill px-5">Read more</button>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;

img {
    height: 250px;
    object-fit: cover;
}

.custom-card {
    width: calc(100% / 3 - 0.4rem);
    transition: transform 0.5s ease, opacity 0.5s ease;
    cursor: pointer;
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