
<script >
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { store } from "./store";
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';


export default {
    data() {
        return {
            store
        }
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    methods:{
        getAnimeList(){
            axios.get('http://152.89.170.170:3000/events/geek')
            .then((response) => {
                // handle success
                console.log(response.data);
                this.store.animeList = response.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
    },
    created(){
        this.getAnimeList()
    }
}
</script>

<template>

    <AppHeader/>
    <AppMain/>
    <AppFooter/>

</template>

<style lang="scss">
@use '../node_modules/bootstrap/scss/bootstrap.scss';
@use './styles/general.scss' as *;
</style>
