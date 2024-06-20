<script>
export default {
    data() {
        return {

            getStartedLinks: [
                {
                    title: 'resources'
                },
                {
                    title: 'tutorials'
                },
                {
                    title: 'examples'
                },
                {
                    title: 'docs'
                }
            ],
            aboutLinks: [
                {
                    title: 'stories'
                },
                {
                    title: 'community'
                },
                {
                    title: 'blog'
                },
                {
                    title: 'brand assets'
                }
            ],
            featuresLinks: [
                {
                    title: 'overview'
                },
                {
                    title: 'design'
                },
                {
                    title: 'code'
                },
                {
                    title: 'collaborate'
                }
            ],
            quickLinks:[
                {
                    title: 'stories'
                },
                {
                    title: 'community'
                },
                {
                    title: 'blog'
                },
                {
                    title: 'brand assets'
                }
            ]

            

        }
    }
}
</script>

<template>
<footer class="wrapper">
    <div class="container">
            <section class="links">
            <nav>    
            <p class="text-light">get started</p>
            <ul class="text-light" v-for="(link, index) in getStartedLinks" :key="index">
                <li class="text-light">{{ link.title }}</li>
            </ul>
            </nav>
             
            <nav>
            <p class="text-light">about</p>
            <ul class="text-light" v-for="(link, index) in aboutLinks" :key="index">
                <li class="text-light">{{ link.title }}</li>
            </ul>
            </nav>

            <nav>
            <p class="text-light">features</p>
            <ul class="text-light" v-for="(link, index) in featuresLinks" :key="index">
                <li class="text-light">{{ link.title }}</li>
            </ul>
            </nav>
             
            <nav>
            <p class="text-light">quick links</p>
            <ul class="text-light" v-for="(link, index) in quickLinks" :key="index">
                <li class="text-light">{{ link.title }}</li>
            </ul>
            </nav>

            <div class="d-flex flex-column">
                <p class="text-light">subscribe to newsletter</p>
                <input type="email" id="email" placeholder="Email">
                <button class="text-light">subscribe</button>
            </div>
            
            </section>
        
            <div class="line">
                <hr class="text-light">
            </div>

            <section class="d-flex justify-content-between align-items-center">
                <div class="img-container">
                    <img src="../assets/anime-whitelogo.png" alt="">
                </div>
                <p class="text-light">Anime Tech, Theme by HasnainDEV</p>
            </section>
    </div>
</footer>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;
@use '../../node_modules/bootstrap/scss/bootstrap.scss';

.wrapper {
    background-color: $primary-color;
}

.links {
    display: flex;
    justify-content: space-between;

    ul {
        list-style: none;
        padding: 0;
    }
}

.line {
    padding: 0.5rem 0;
}

.img-container {
    width: 250px;

    img {
        width: 100%;
    }
}
</style>