<script>
import { store } from '../store.js';

export default{
    data(){
        return {
            store,
            filteredArray: [],
            randomArticlesArray: [],
            visibleArticlesArray: [],
            radioValue: '',
            isLoading: false,
        }
    },
    methods: {
        filterAnimeListArray: function(){
            switch (this.radioValue){
                case 'lifestyle':
                    this.filteredArray = this.store.animeList.filter((obj) => obj.category.includes('Lifestyle'));
                    this.randomizeArticles(this.filteredArray);
                    break;
                case 'stories':
                    this.filteredArray = this.store.animeList.filter((obj) => obj.category.includes('Stories'))
                    this.randomizeArticles(this.filteredArray);
                    break;
                default:
                    this.filteredArray = this.store.animeList.filter((obj) => obj.category.includes('Lifestyle') || obj.category.includes('Stories'));
                    this.randomizeArticles(this.filteredArray);
                    
            }
            // console.log(this.filteredArray);
        },
        randomizeArticles: function(originalArray){
            if(originalArray.length > 4){
                let index = 0;
                while (this.randomArticlesArray.length < 4){
                    const randomNumber = Math.floor(Math.random() * originalArray.length);
                    const newObj = originalArray[randomNumber];
                    if(!(this.randomArticlesArray.includes(newObj))){
                        this.randomArticlesArray.push(newObj);
                    }
                    index++;
                }
            } else {
                this.randomArticlesArray = originalArray;
            }

            this.visibleArticlesArray = this.randomArticlesArray;
            // console.log(this.visibleArticlesArray);
        },
        getImagePath: function(img){
            return new URL('./.' + img, import.meta.url).href;
        },
        changeValue: function(value){
            this.radioValue = value;
            this.loadingFunction();
            setTimeout(() => {
                this.filterAnimeListArray();
            }, 2150);
            this.isLoading = true;
            // console.log(this.radioValue);
        },
        loadingFunction: function(){
            setTimeout(() => {
                this.isLoading = false;
            }, 2000);
        }
    },
    created(){
        this.filterAnimeListArray();
    }
}
</script>

<template>
    <section id="lifestyle" class="mb-5">
        <div class="container">
            <div class="row text-uppercase mb-3">
                <div class="col-8">
                    <h3 class="fw-bold fs-4 mb-0">Lifestyle & stories</h3>
                </div>
                <div class="col-4 d-flex align-items-center justify-content-end">
                    <input type="radio" name="category-tag" id="tag-all" value="all" @click="changeValue('all')" checked>
                    <label for="tag-all">All</label>
                    <input type="radio" name="category-tag" id="tag-lifestyle" value="lifestyle" @click="changeValue('lifestyle')">
                    <label for="tag-lifestyle">Lifestyle</label>
                    <input type="radio" name="category-tag" id="tag-stories" value="stories" @click="changeValue('stories')">
                    <label for="tag-stories">Stories</label>
                </div>
            </div>
            <div class="article-wrapper row flex-column position-relative">
                <div v-if="isLoading === true" class="loader-overlay position-absolute top-0 z-3 h-100 w-100 p-0 mt-0">
                    <div class="loader"></div>
                </div>
                <div v-for="(article, index) in visibleArticlesArray" :key="article.index" :class="index === 0 ? 'col-8' : 'col-4'">
                    <article class="w-100 d-flex">
                        <div class="article-image position-relative" >
                            <img :src="getImagePath(article.path)" :alt="article.title" class="w-100 h-100 rounded">
                            <div class="overlay position-absolute rounded top-0 z-1 h-100 w-100">
                            </div>
                            <div class="position-absolute z-2 top-0 h-100 w-100 d-flex flex-column align-items-start justify-content-between ps-2 pt-3">
                                <span class="tag bg-white fw-normal text-black px-3 py-1"> {{ article.category[0] }}</span>
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

    input[type="radio"] {
        opacity: 0;
        position: fixed;
        width: 0;
    }

    label {
        display: inline-block;
        background-color: $my_bg-darkgrey;
        border-radius: 4px;
        color: white;
        margin-left: 1.2rem;
        padding: 0.3rem 1rem;
        cursor: pointer;
    }

    input[type="radio"]:checked + label,
    input[type="radio"].active + label,
    input[type="radio"]:focus + label,
    input[type="radio"]:hover + label {
        background-color: $primary-color;
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
                    color: $my_bg-darkgrey;
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

.loader-overlay {
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.loader {
    width: 40px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 4px solid $my_bg-darkgrey;
    border-right-color: black;
    animation: l2 1s infinite linear;
}
@keyframes l2 {to{transform: rotate(1turn)}}
</style>