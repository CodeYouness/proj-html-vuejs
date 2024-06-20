<script>
import { store } from '../store.js';
import MainLifestyle from './MainLifestyle.vue';

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
                    "path": "./assets/anime-fashion.webp"
                },
                {
                    "id": 8,
                    "category": ["Stories", "Travel"],
                    "title": "Traveling Alone Is Awesome",
                    "author": "demo",
                    "date": "December 26 , 2022",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim libero sint atque assumenda consectetur eaque tenetur ipsum, magnam maiores excepturi exercitationem numquam cum. Adipisci itaque perspiciatis, ab magnam officia eos.",
                    "path": "./assets/travel-alone.webp"
                },
                {
                    "id": 10,
                    "category": ["LifeStyle", "Stories", "Travel"],
                    "title": "Place For A Road Trip",
                    "author": "demo",
                    "date": "December 25 , 2022",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim libero sint atque assumenda consectetur eaque tenetur ipsum, magnam maiores excepturi exercitationem numquam cum. Adipisci itaque perspiciatis, ab magnam officia eos.",
                    "path": "./assets/best-places.webp"
                },
                {
                    "id": 11,
                    "category": ["Culture", "Lifestyle"],
                    "title": "Music The Love Of My Life",
                    "author": "demo",
                    "date": "December 25 , 2022",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim libero sint atque assumenda consectetur eaque tenetur ipsum, magnam maiores excepturi exercitationem numquam cum. Adipisci itaque perspiciatis, ab magnam officia eos.",
                    "path": "./assets/music-love.webp"
                },
                {
                    "id": 7,
                    "category": ["Lifestyle", "Travel"],
                    "title": "Reasons To Visit France",
                    "author": "demo",
                    "date": "December 26 , 2022",
                    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim libero sint atque assumenda consectetur eaque tenetur ipsum, magnam maiores excepturi exercitationem numquam cum. Adipisci itaque perspiciatis, ab magnam officia eos.",
                    "path": "./assets/visit-france.webp"
                },
            ],
            biggerArticle : 10,
        }
    },
    methods: {
        getImagePath: function(img){
            return new URL('./.' + img, import.meta.url).href;
        }
    },
    components: {
        MainLifestyle
    }
}
</script>

<template>
    <section id="jumbotron" class="mt-5 mb-5">
        <div class="container">
            <div class="row flex-column justify-content-between">
                <div v-for="article in trendingNews" :key="article.id" :class="(article.id === biggerArticle) ? 'col-6' : 'col-3'">
                    <article class="h-100 d-flex align-items-center justify-content-center position-relative text-center">
                        <img :src="getImagePath(article.path)" :alt="article.title" class="h-100">
                        <div class="overlay position-absolute z-1 h-100 w-100">
                        </div>
                        <div class="article-info position-absolute z-2 h-100 w-100 d-flex flex-column justify-content-between text-white fw-bold">
                                <div>
                                    <span class="tag bg-white fw-normal text-black px-3 py-1" v-for="(tag, index) in article.category" :key="tag.index"> {{ tag }}</span>
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
    border-radius: 8px;
    overflow-x: clip;
    cursor: pointer;

    div.overlay {
        background-color: rgba(0, 0, 0, 0.5);
    }

    .article-info {
        padding: 1.2rem;

        p> span{
            font-size: .9rem;
        }
    }
}

.tag {
    border-radius: 5px;
    margin: 0 .3rem;
}

article:hover .overlay {
    filter: contrast(50%);
    transition: all .2s ease-out;
}

div.col-3 {
    height: 48%;
}

div.col-6 {
    height: 100%;
}
</style>