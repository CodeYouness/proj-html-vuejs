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
<footer>
    <div class="wrapper">
        <section class="links">
            <p>get started</p>
            <ul v-for="(link, index) in getStartedLinks" :key="index">
                <li>{{ link.title }}</li>
            </ul>
             
            <p>about</p>
            <ul v-for="(link, index) in aboutLinks" :key="index">
                <li>{{ link.title }}</li>
            </ul>

            <p>features</p>
            <ul v-for="(link, index) in featuresLinks" :key="index">
                <li>{{ link.title }}</li>
            </ul>

            <p>quick links</p>
            <ul v-for="(link, index) in quickLinks" :key="index">
                <li>{{ link.title }}</li>
            </ul>
        </section>
    </div>
</footer>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;

* {
    @include reset;
}

.wrapper {
    background-color: $primary-color;
}
</style>