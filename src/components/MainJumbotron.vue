<script>
import { store } from '../store.js';

export default{
    data(){
        return {
            store,
            trendingNews: [
                {
                    "id": 12,
                    "category": ["Fashion", "Lifestyle"],
                    "title": "Fashion Trend Now A Days",
                    "author": "demo",
                    "date": "December 25 , 2022",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim libero sint atque assumenda consectetur eaque tenetur ipsum, magnam maiores excepturi exercitationem numquam cum. Adipisci itaque perspiciatis, ab magnam officia eos.",
                    "path": "anime-fashion.webp"
                },
                {
                    "id": 8,
                    "category": ["Stories", "Travel"],
                    "title": "Traveling Alone Is Awesome",
                    "author": "demo",
                    "date": "December 26 , 2022",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim libero sint atque assumenda consectetur eaque tenetur ipsum, magnam maiores excepturi exercitationem numquam cum. Adipisci itaque perspiciatis, ab magnam officia eos.",
                    "path": "travel-alone.webp"
                },
                {
                    "id": 10,
                    "category": ["LifeStyle", "Stories", "Travel"],
                    "title": "Place For A Road Trip",
                    "author": "demo",
                    "date": "December 25 , 2022",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim libero sint atque assumenda consectetur eaque tenetur ipsum, magnam maiores excepturi exercitationem numquam cum. Adipisci itaque perspiciatis, ab magnam officia eos.",
                    "path": "best-places.webp"
                },
                {
                    "id": 11,
                    "category": ["Culture", "Lifestyle"],
                    "title": "Music The Love Of My Life",
                    "author": "demo",
                    "date": "December 25 , 2022",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim libero sint atque assumenda consectetur eaque tenetur ipsum, magnam maiores excepturi exercitationem numquam cum. Adipisci itaque perspiciatis, ab magnam officia eos.",
                    "path": "music-love.webp"
                },
                {
                    "id": 7,
                    "category": ["Lifestyle", "Travel"],
                    "title": "Reasons To Visit France",
                    "author": "demo",
                    "date": "December 26 , 2022",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim libero sint atque assumenda consectetur eaque tenetur ipsum, magnam maiores excepturi exercitationem numquam cum. Adipisci itaque perspiciatis, ab magnam officia eos.",
                    "path": "visit-france.webp"
                },
            ],
            biggerArticle : 10,
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
            <div class="row flex-column justify-content-between">
                <div v-for="article in trendingNews" :key="article.id" :class="(article.id === biggerArticle) ? 'col-6' : 'col-3'">
                    <article class="d-flex align-items-center justify-content-center">
                        <img :src="getImagePath(article.path)" :alt="article.title" class="h-100">
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
    overflow-x: clip;
    height: 100%;
}

div.col-3 {
    height: 48%;
}

div.col-6 {
    height: 100%;
}
</style>