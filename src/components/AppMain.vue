<script>
import { store } from "../store";
import MainPlayer from "./MainPlayer.vue"

export default {
    data() {
        return {
            store
        }
    },
    components: {
        MainPlayer
    }
}
</script>

<template>

    <MainPlayer/>

</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;
</style>