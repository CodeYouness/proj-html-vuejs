<script>
import { store } from '../store.js';

export default{
    data(){
        return {
            store,
            lifestyleArray: [],
            randomArticlesArray: [],
        }
    },
    methods: {
        filterAnimeListArray: function(){
            this.lifestyleArray = this.store.animeList.filter((obj) => obj.category.includes('Lifestyle') || obj.category.includes('Stories'))
            // console.log(this.lifestyleArray);
        },
        randomizeArticles: function(){
            let index = 0;
            while (this.randomArticlesArray.length < 4){
                const randomNumber = Math.floor(Math.random() * this.lifestyleArray.length);
                const newObj = this.lifestyleArray[randomNumber];
                if(!(this.randomArticlesArray.includes(newObj))){
                    this.randomArticlesArray.push(newObj);
                }
                index++;
            }
            // console.log(this.randomArticlesArray);
        },
        getImagePath: function(img){
            return new URL('./.' + img, import.meta.url).href;
        },
        getRandomNumber: function(max){
            return Math.floor(Math.random() * max);
        }
    },
    created(){
        this.filterAnimeListArray();
        this.randomizeArticles();
    }
}
</script>

<template>
    <section id="lifestyle" class="mb-5">
        <div class="container">
            <div class="row">
                <div class="col-9 text-uppercase">
                    <h3 class="fw-bold fs-4">Lifestyle & stories</h3>
                </div>
                <div class="col-3">
                    <input type="radio" name="category-tag" id="tag-all">
                    <label for="tag-all">All</label>
                    <input type="radio" name="category-tag" id="tag-lifestyle">
                    <label for="tag-lifestyle">Lifestyle</label>
                    <input type="radio" name="category-tag" id="tag-stories">
                    <label for="tag-stories">Stories</label>
                </div>
            </div>
            <div class="article-wrapper row flex-column">
                <div v-for="(article, index) in randomArticlesArray" :key="article.index" :class="index === 0 ? 'col-8' : 'col-4'">
                    <article class="w-100 d-flex">
                        <div class="article-image position-relative" >
                            <img :src="getImagePath(article.path)" :alt="article.title" class="w-100 h-100 rounded">
                            <div class="overlay position-absolute rounded top-0 z-1 h-100 w-100">
                            </div>
                            <div class="position-absolute z-2 top-0 h-100 w-100 d-flex flex-column align-items-start justify-content-between ps-2 pt-3">
                                <span class="tag bg-white fw-normal text-black px-3 py-1"> {{ article.category[getRandomNumber(article.category.length)] }}</span>
                                <div v-if="index == 0" class="article-info fw-bold text-white p-3">
                                    <p class="mb-0 d-flex justify-content-center align-items-baseline">
                                        <font-awesome-icon icon="fa-solid fa-user"/>
                                        <span class="mx-1">{{ article.author }}</span>
                                        <font-awesome-icon icon="fa-solid fa-calendar-days" class="mx-1"/>
                                        <span>{{ article.date }}</span>
                                    </p>
                                    <p class="mb-0 fs-6"> {{ article.title }} </p>
                                </div>
                            </div>
                        </div>
                        <div v-if="index != 0" class="article-info fw-bold">
                            <p class="mb-0 d-flex justify-content-center align-items-baseline">
                                <font-awesome-icon icon="fa-solid fa-user"/>
                                <span class="mx-1">{{ article.author }}</span>
                                <font-awesome-icon icon="fa-solid fa-calendar-days" class="mx-1"/>
                                <span>{{ article.date }}</span>
                            </p>
                            <p class="mb-0 fs-6"> {{ article.title }} </p>
                        </div>
                    </article>
                    <hr class="w-100 my-0">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;

article {
    cursor: pointer;
}

.row.article-wrapper {
    height: 450px;

    img {
        object-fit: cover;
    }

    div.col-8{
        height: 100%;
        display: flex;
        align-items: flex-end;

        article{
            height: 98%;

            .article-image{
                width: 100%;

            }
        }

        hr {
            display: none;
        }
    }

    div.col-4 {
        height: 36%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 0;
        justify-content: space-around;

        article {
            height: 75%;

            .article-image {
                width: 40%;
            }

            .article-info{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                padding-left: .7rem;

                p:first-child{
                    color: #545454;
                }

                p> span{
                    font-size: .9rem;
                }
            }
        }

        hr {
            opacity: 1;
        }
    }

    div.col-4:last-child{
        height: 28%;

        article{
            height: 90%;
        }

        hr {
            display: none;
        }
    }

    div.overlay {
        background-color: rgba(0, 0, 0, 0.5);
    }

    article:hover .overlay {
        filter: contrast(50%);
        transition: all .2s ease-out;
    }

    .tag {
        border-radius: 5px;
        margin: 0 .3rem;
    }
}
</style>