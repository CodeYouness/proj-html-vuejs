<script>

export default {
    data() {
        return {
            listLink: [
                {
                    "id": 0,
                    "url": "https://www.youtube.com/embed/r8eQDtOnUsY?si=iZQc1p_vPALSVHcY",
                    "active": true,
                    "title": "「Never Break Down」リリックビデオ",
                    "thumbnail": "https://img.youtube.com/vi/r8eQDtOnUsY/0.jpg"
                },
                {
                    "id": 1,
                    "url": "https://www.youtube.com/embed/NnIjerAON8o?si=afwDhQyhn0T61b9T",
                    "active": true,
                    "title": "『 Frieren: Beyond Journey's End 』Epic OST",
                    "thumbnail": "https://img.youtube.com/vi/NnIjerAON8o/0.jpg"
                },
                {
                    "id": 2,
                    "url": "https://www.youtube.com/embed/quedt2IB9_Q?si=FtFsRtCuY6LutBQx",
                    "active": true,
                    "title": " Frieren vs Frieren | Frieren: Beyond Journey's End ",
                    "thumbnail": "https://img.youtube.com/vi/quedt2IB9_Q/0.jpg"
                },
                {
                    "id": 3,
                    "url": "https://www.youtube.com/embed/J3kytewub_Y?si=p9Oja7SlXGBV5dc8",
                    "active": true,
                    "title": "Tengen Toppa Gurren Lagann Movie: Lagann-hen.",
                    "thumbnail": "https://img.youtube.com/vi/J3kytewub_Y/0.jpg"
                },
                {
                    "id": 4,
                    "url": "https://www.youtube.com/embed/-Djq3QihTyA?si=KvL05CpXegn86QWf",
                    "active": true,
                    "title": " You have no enemies.",
                    "thumbnail": "https://img.youtube.com/vi/-Djq3QihTyA/0.jpg"
                },
            ],
            currentVideo: 'https://www.youtube.com/embed/r8eQDtOnUsY?si=iZQc1p_vPALSVHcY',
            currentIndex: 0
        }
    },
    methods: {
        playVideo(index) {
            this.currentVideo = this.listLink[index].url;
            this.currentIndex = index;
        },
    }
}
</script>

<template>
    <section class="d-flex border">
        <div>
            <iframe :src="currentVideo" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="d-flex flex-column overflow-y-auto">
            <div class="border text-center">
                <h1>Video Playlist</h1>
                <h2> {{ currentIndex + 1 }}/{{ listLink.length }} Video</h2>
            </div>
            <div class="d-flex border" v-for="(link, index) in listLink" :key="link.id" @click="playVideo(index)">
                <p class=" align-self-center mx-2 index-video text-white">{{ index }}</p>
                <img :src="link.thumbnail" alt="Thumbnail">
                <p class="align-self-center mx-2">{{ link.title }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;

section {
    max-height: 700px;
}

img {
    width: 70px;
    height: 70px;
    border-radius: 20%;
}

iframe {
    width: 1200px;
    height: 100%;
}

.index-video {
    background-color: black;
    border-radius: 20%;
}
</style>