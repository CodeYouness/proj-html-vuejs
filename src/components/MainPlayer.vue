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
                {
                    "id": 5,
                    "url": "https://www.youtube.com/embed/i-L0Gs2whvc?si=l0W5h-d_jatBm0Pq",
                    "active": true,
                    "title": " Dio VS Jotaro",
                    "thumbnail": "https://img.youtube.com/vi/i-L0Gs2whvc/0.jpg"
                },
                {
                    "id": 6,
                    "url": "https://www.youtube.com/embed/itKq_Qg-MHM?si=dMI4obUM4FjrUqqK",
                    "active": true,
                    "title": " Eren Transform",
                    "thumbnail": "https://img.youtube.com/vi/itKq_Qg-MHM/0.jpg"
                },
                {
                    "id": 7,
                    "url": "https://www.youtube.com/embed/dFlDRhvM4L0?si=TUS6jG3ilK_zD98H",
                    "active": true,
                    "title": " CHAINSAW MAN Opening│米津玄師 「KICK BACK」",
                    "thumbnail": "https://img.youtube.com/vi/dFlDRhvM4L0/0.jpg"
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
    <section class="d-flex container">
            <div class="w-75 ">
                <iframe :src="currentVideo" title="YouTube video player" frameborder="0" class="rounded-start-2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="d-flex flex-column w-25 playlist ">
                <div class="border  header-playlist container-fluid d-flex align-items-center rounded-end-2">
                    <div class="me-4">
                        <font-awesome-icon :icon="['fas', 'play']" class="fs-2 "/>
                    </div>
                    <div>
                        <h2 class="fs-6">Video Playlist</h2>
                        <h2 class="fs-6"> {{ currentIndex + 1 }}/{{ listLink.length }} Video</h2>
                    </div>
                </div>
                <div class="main overflow-y-auto rounded-end-2 ">
                    <div class="d-flex border videos-list align-items-center p-1" v-for="(link, index) in listLink" :key="link.id" @click="playVideo(index)">
                        <div class=" d-flex align-items-center justify-content-center index-wrapper">
                            <p class=" mx-2 index-video text-white">{{ index }}</p>
                        </div>
                        <div class="d-flex align-items-center justify-content-center">
                            <img :src="link.thumbnail" alt="Thumbnail">
                        </div>
                        <div class="d-flex align-items-center justify-content-center title-wrapper">
                            <p class=" mx-2 title">{{ link.title }}</p>
                        </div>

                        
                    </div>
                </div>
            </div>
    </section>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;
section,
.playlist{
    max-height: 550px;
}
.header-playlist{
    height: 20%;
    width: 100%;
    background-color: #333333;
    color: white;
}
iframe{
    width: 100%;
    height: 100%;
}
img {
    width: 60px;
    height: 45px;
    border-radius: 20%;
}
.index-video {
    background-color: black;
    width: 24px;
    height: 24px;
    text-align: center;
    border-radius: 10%;
}
.title{
    font-size: 12px;
}
.videos-list {
    &:hover {
        .title {
        color: red;
        }
        &:hover {
            .index-video{
                background-color: red; 
            }
        }
        }
    }
.videos-list{
    max-height: 90px;
}
.index-wrapper,
.title-wrapper{
    padding-top: 10px;
    
}
</style>