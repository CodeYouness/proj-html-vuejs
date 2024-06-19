<script>

export default {
    data() {
        return {
            listLink: [
                {
                    "id": 0,
                    "url": "https://www.youtube.com/embed/r8eQDtOnUsY?si=iZQc1p_vPALSVHcY",
                    "active": true,
                    "title": "「Never Break Down」リリックビデオ"
                },
                {
                    "id": 1,
                    "url": "https://www.youtube.com/embed/NnIjerAON8o?si=afwDhQyhn0T61b9T",
                    "active": true,
                    "title": "『 Frieren: Beyond Journey's End 』Epic OST"
                },
                {
                    "id": 2,
                    "url": "https://www.youtube.com/embed/quedt2IB9_Q?si=FtFsRtCuY6LutBQx",
                    "active": true,
                    "title": " Frieren vs Frieren | Frieren: Beyond Journey's End "
                },
                {
                    "id": 3,
                    "url": "https://www.youtube.com/embed/J3kytewub_Y?si=p9Oja7SlXGBV5dc8",
                    "active": true,
                    "title": "Tengen Toppa Gurren Lagann Movie: Lagann-hen."
                },
                {
                    "id": 4,
                    "url": "https://www.youtube.com/embed/-Djq3QihTyA?si=KvL05CpXegn86QWf",
                    "active": true,
                    "title": " You have no enemies."
                },
            ]
        }
    },
}
</script>

<template>
    <section class="d-flex ">
        <div>
            <iframe width="600" height="600" src="https://www.youtube.com/embed/-Djq3QihTyA?si=KvL05CpXegn86QWf"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="d-flex flex-column overflow-y-auto">
            <div>
                <h1>Video Playlist</h1>
            </div>
            <div class="d-flex" v-for="(link, index) in listLink" :key="link.id">
                <p>{{ index }}</p>
                <iframe width="100" height="100" :src="link.url" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
                <p>{{ link.title }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;
</style>