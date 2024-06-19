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
                    <article class="d-flex align-items-center justify-content-center position-relative">
                        <img :src="getImagePath(article.path)" :alt="article.title" class="h-100">
                        <div class="overlay position-absolute h-100 w-100 d-flex flex-column justify-content-between fw-bold">
                            <div>
                                <span class="tag fw-normal px-3 py-1" v-for="(tag, index) in article.category" :key="tag.index"> {{ tag }}</span>
                            </div>
                            <div>
                                <p class="mb-0 d-flex justify-content-center align-items-baseline">
                                    <font-awesome-icon icon="fa-solid fa-user"/>
                                    <span class="mx-1">{{ article.author }}</span>
                                    <font-awesome-icon icon="fa-solid fa-calendar-days" class="mx-1"/>
                                    <span>{{ article.date }}</span>
                                </p>
                                <p class="mb-0 fs-6"> {{ article.title }} </p>
                            </div>
                        </div>
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
    cursor: pointer;

    div.overlay {
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
        color: white;
        padding: 1.2rem;

        p> span{
            font-size: .9rem;
        }
    }
}

.tag {
    background-color: white;
    color: black;
    border-radius: 5px;
    margin: 0 .3rem;
}

article:hover .overlay {
    filter: contrast(50%);
    transition: all .2s ease-out;
}

article:hover .overlay>div {
    filter: contrast(1.75);
}

div.col-3 {
    height: 48%;
}

div.col-6 {
    height: 100%;
}
</style>