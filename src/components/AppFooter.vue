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
            <p>get started</p>
            <ul v-for="(link, index) in getStartedLinks" :key="index">
                <li>{{ link.title }}</li>
            </ul>
            </nav>
             
            <nav>
            <p>about</p>
            <ul v-for="(link, index) in aboutLinks" :key="index">
                <li>{{ link.title }}</li>
            </ul>
            </nav>

            <nav>
            <p>features</p>
            <ul v-for="(link, index) in featuresLinks" :key="index">
                <li>{{ link.title }}</li>
            </ul>
            </nav>
             
            <nav>
            <p>quick links</p>
            <ul v-for="(link, index) in quickLinks" :key="index">
                <li>{{ link.title }}</li>
            </ul>
            </nav>

            <div>
                <p>subscribe to newsletter</p>
                <input type="email" id="email" placeholder="Email">
                <button>subscribe</button>
            </div>
            
            </section>
         
       
        
    </div>
</footer>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;
@use '../../node_modules/bootstrap/scss/bootstrap.scss';

.links {
    display: flex;
    justify-content: space-between;
}

ul {
    list-style: none;
}

.wrapper {
    background-color: $primary-color;
}
</style>