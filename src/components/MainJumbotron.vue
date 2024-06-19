<script>
import { store } from '../store.js';

export default{
    data(){
        return {
            store
        }
    },
    methods: {
        getImagePath: function(img){
            return new URL(`../assets/${img}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <section id="jumbotron" class="py-3">
        <div class="container">
            <div class="row flex-column">
                <div class="col-3 mb-2">
                    <article class="d-flex align-items-center justify-content-center overflow-y-hidden">
                        A
                    </article>
                </div>
                <div class="col-3">
                    <article class="d-flex align-items-center justify-content-center overflow-y-hidden">
                        B
                    </article>
                </div>
                <div class="col-6 h-100">
                    <article class="d-flex align-items-center justify-content-center overflow-y-hidden h-100">
                        6
                    </article>
                </div>
                <div class="col-3 mb-2">
                    <article class="d-flex align-items-center justify-content-center overflow-y-hidden">
                        C
                    </article>
                </div>
                <div class="col-3">
                    <article class="d-flex align-items-center justify-content-center overflow-y-hidden">
                        D
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;

div.row {
    height: 450px;
}

article {
    text-align: center;
    color: black;
    border-radius: 8px;
}

div.col-3 article {
    border: 1px solid mediumorchid;
    height: 220px;
}

div.col-6 article{
    border: 1px solid darkblue;
}
</style>