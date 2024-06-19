<script>
import { store } from "../store";

export default {
    data() {
        return {
            store
        }
    },
    components: {
        store
    },
    methods: {
        getConsoleLog() {
            console.log(this.store.animeList[0].path)
        },
        getImagePath : function (img) {
                return new URL(img , import.meta.url).href;
            }
        }
    }
    created() {
        this.getConsoleLog()
    }

</script>

<template>
    <div class="container-fluid d-flex align-items-center">
        <div class="row overflow-x-auto">
            <ul class="d-flex flex-nowrap">
                <li v-for="pic in store.animeList" :key="pic.id" class="card">
                    <img :src="" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;
</style>