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
                    <h3>Lifestyle & stories</h3>
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
                    <article class="border border-primary w-100">

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

.row.article-wrapper {
    height: 450px;

    div.col-8{
        height: 100%;
        display: flex;
        align-items: flex-end;

        article{
            height: 98%;
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
}
</style>