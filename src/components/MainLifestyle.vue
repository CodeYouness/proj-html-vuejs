<script>
import { store } from '../store.js';

export default{
    data(){
        return {
            store,
            lifestyleArray: [],
        }
    },
    methods: {
        filterAnimeListArray: function(){
            this.lifestyleArray = this.store.animeList.filter((obj) => obj.category.includes('Lifestyle') || obj.category.includes('Stories'))
            // console.log(this.lifestyleArray);
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
                <div class="col-8">
                    <article class="border border-danger w-100">
                        8
                    </article>
                </div>
                <div class="col-4">
                    <article class="border border-info w-100">
                        A
                    </article>
                    <hr class="w-100 my-0">
                </div>
                <div class="col-4">
                    <article class="border border-info w-100">
                        B
                    </article>
                    <hr class="w-100 my-0">
                </div>
                <div class="col-4">
                    <article class="border border-info w-100">
                        C
                    </article>
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
    }

    div.col-4:last-child{
        height: 28%;

        article{
            height: 90%;
        }
    }
}

    .div.row.article-wrapper > hr {
        opacity: 0;
    }
</style>