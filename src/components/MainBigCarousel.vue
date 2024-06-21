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
    props: {
        animeFigure: {
            type: Object,
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
            console.log(this.currentArray)
        },
        forwardPicCarousel(){
            this.currentArray.pop();
            this.currentArray.unshift(this.store.apiList[this.backwardIndex]);
            this.backwardIndex = (this.backwardIndex - 1 + this.store.apiList.length) % this.store.apiList.length;
            this.currentIndex = (this.backwardIndex + 4) % this.store.apiList.length;
            console.log(this.currentArray)
        },
        getClearedString(string){
            let clearedString = string.split(" ")
            clearedString.splice(clearedString.indexOf('convention'), 1)
            return clearedString
        }
    },
    mounted() {
        setInterval(this.nextPicCarousel, 5000)
    }
}
</script>

<template>
<div class="d-flex align-items-center bg-light p-4">
        <div class="container">
            <div class="d-flex justify-content-between">
                <h3 class="text-uppercase fw-bold">featured posts</h3>
                <div>
                    <button @click="forwardPicCarousel" class="left fw-bolder px-3 py-2 border-0 me-3"><</button>
                    <button @click="nextPicCarousel" class="left fw-bolder px-3 py-2 border-0">></button>
                </div>
            </div>
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
                        <p class="card-text m-0">{{ pic.start_date }} &rArr; {{ pic.end_date }}</p>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;

.left {
    border-radius: 50%;
}

img {
    height: 250px;
    object-fit: cover;
}

.custom-card {
    width: calc(25% - 1rem);
    transition: transform 0.5s ease, opacity 0.5s ease;
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