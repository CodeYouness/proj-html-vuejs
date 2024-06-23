<script>
export default {
    data() {
        return {
            categoryCards: [
                {
                    "id": 12,
                    "category": ["Fashion", "Lifestyle"],
                    "title": "Fashion Trend Now A Days",
                    "path": "./assets/anime-fashion.webp"
                },
                {
                    "id": 9,
                    "category": ["Culture", "Stories"],
                    "title": "The Best Succes Stories",
                    "path": "./assets/success-story.webp"
                },
                {
                    "id": 3,
                    "category": ["Food"],
                    "title": "The Best Healthy Foods",
                    "path": "./assets/healthy-foods.webp"
                },
                {
                    "id": 7,
                    "category": ["Lifestyle", "Travel"],
                    "title": "Reasons To Visit France",
                    "path": "./assets/visit-france.webp"
                },
                {
                    "id": 8,
                    "category": ["Stories", "Travel"],
                    "title": "Traveling Alone Is Awesome",
                    "path": "./assets/travel-alone.webp"
                },
                {
                    "id": 10,
                    "category": ["Travel", "Stories", "LifeStyle"],
                    "title": "Place For A Road Trip",
                    "path": "./assets/best-places.webp"
                },
                
            ],
        }
    },
    methods: {
        getImagePath: function(img){
            return new URL('./.' + img, import.meta.url).href;
        }
    },
}
</script>

<template>
    <div class="container-fluid mt-5 mb-1">
            <div class="d-flex row ">
                <div  v-for="card in categoryCards" :key="card.id" class="col-2 cards">
                    <article class="h-100 d-flex align-items-center justify-content-center position-relative">
                        <img :src="getImagePath(card.path)" :alt="card.title" class="rounded-2 h-100">
                        <div class="overlay position-absolute z-1 h-100 w-100 rounded-2">
                        </div>
                        <div class=" position-absolute z-2 h-100 w-100 justify-content-between ">
                                <div class="content-wrap">
                                    <span class=" centered" > {{ card.category[0] }}</span>
                                    <span class=" centered mt-5 active">3 Posts</span>
                                </div>
                            </div>
                    </article>
                </div>
            </div>
        </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;

.cards{
    height: 230px;
}

img{
    width: 100%;
    object-fit: cover;
}

span{
    color: white;
    text-transform: uppercase;
    font-weight: 650;
    font-size: 24px;
}
div.overlay {
    background-color: rgba(0, 0, 0, 0.3);
}
.centered {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}
article:hover .overlay {
    background-color: rgba(214, 11, 11, 0.534);
    transition: all .2s ease-out;
}
article:hover .content-wrap{
    border: 1px solid white;
    width: 75%;
    height: 75%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.active{
    display: none;
    font-size: 16px;
}
article:hover .active{
    display: block;
}
</style>