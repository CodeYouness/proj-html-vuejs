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
    methods:{
        getImagePath : function (img) {
            return new URL(img , import.meta.url).href;
        }
    },
    created() {
    }
}

</script>

<template>
    <div class="container-fluid d-flex align-items-center">
        <div class="row overflow-x-auto">
            <div class="d-flex flex-nowrap">
                <li v-for="pic in store.animeList" :key="pic.id" class="card">
                    <img :src="getImagePath(`.${pic.path}`)" :alt="pic.id">
                </li>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;
</style>