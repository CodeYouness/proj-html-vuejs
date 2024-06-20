<script>
import { store } from '../store.js';

export default{
    data(){
        return {
            store
        }
    }
}
</script>

<template>
<div>MainLifestyle</div>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;
</style>