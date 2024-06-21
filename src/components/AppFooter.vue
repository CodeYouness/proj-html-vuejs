<!--<script>
export default {
    data() {
        return {
            message: '',

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
    },

    methods: {
        subSuccess() {
            this.message = "Subscription successful!"
        }
    }
}
</script>

<template>
 <div class="black-line"><font-awesome-icon icon="fa-solid fa-caret-down" class="arrow-down"/></div>
<footer class="wrapper">
    <div class="container">
            <section class="links mb-2">
            <nav>    
            <p class="text-light">get started</p>
            <ul v-for="(link, index) in getStartedLinks" :key="index">
                <li><a href="">{{ link.title }}</a></li>
            </ul>
            </nav>
             
            <nav>
            <p class="text-light">about</p>
            <ul v-for="(link, index) in aboutLinks" :key="index">
                <li><a href="">{{ link.title }}</a></li>
            </ul>
            </nav>

            <nav>
            <p class="text-light">features</p>
            <ul v-for="(link, index) in featuresLinks" :key="index">
                <li><a href="">{{ link.title }}</a></li>
            </ul>
            </nav>
             
            <nav>
            <p class="text-light">quick links</p>
            <ul v-for="(link, index) in quickLinks" :key="index">
                <li><a href="">{{ link.title }}</a></li>
            </ul>
            </nav>

            <div class="d-flex flex-column">
                <p class="text-light">subscribe to newsletter</p>
                <input type="email" id="email" placeholder="Email" required>
                <button @click="subSuccess">subscribe</button>
                <p class="text-light mt-1 sub">{{ message }}</p>
            </div>
            
            </section>
        
            <div class="line mb-3"></div>

            <section class="d-flex justify-content-between align-items-center">
                <div class="img-container">
                    <img src="../assets/anime-whitelogo.png" alt="">
                </div>
                
                <div class="align-items-center">
                <p class="text-light mb-0"><font-awesome-icon icon="fa-regular fa-copyright" class="me-2"/>Anime Tech, Theme by HasnainDEV</p>
                </div>
                
            </section>
    </div>
</footer>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;
@use '../../node_modules/bootstrap/scss/bootstrap.scss';

.black-line {
    background-color: #333333;
    padding: 3px 0;
    position: relative;

    .arrow-down {
        font-size: 55px;
        position: absolute;
        right: 50%;
        top: -20px;
        color: #333333;
        
    }
}

.wrapper {
    background-color: $primary-color;
    padding: 4rem 0 2rem 0;
}

.links {
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;

    p {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 20px;
    }

    .sub {
        font-size: 15px;
        text-transform: none;
        text-align: center;
    }

    input {
        margin-top: 0.3rem;
        padding: 0.5rem 1.5rem;
        border-radius: 5px;
        border: none;
    }

    button {
        margin-top: 0.3rem;
        text-transform: uppercase;
        font-weight: bold;
        border: none;
        background-color: #545454;
        padding: 0.5rem 1.5rem;
        border-radius: 5px;
    }


    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-transform: capitalize;
        font-weight: bold;
        
        li {
            font-size: 16px;
        }

        a {
            text-decoration: none;
        }
  
    }
}



.line {
    padding: 0.5px 0;
    background-color: white;
}

.img-container {
    width: 250px;

    img {
        width: 100%;
    }
}


</style>-->

<script>
export default {
    data() {
        return {
            message: '',

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
    },

    methods: {
        subSuccess() {
            this.message = "Subscription successful!"
        }
    }
}
</script>

<template>
 <div class="black-line"><font-awesome-icon icon="fa-solid fa-caret-down" class="arrow-down"/></div>
<footer class="wrapper">
    <div class="container">
            <section class="links mb-2">
            <nav>    
            <p class="text-light">get started</p>
            <ul v-for="(link, index) in getStartedLinks" :key="index">
                <li><a href="">{{ link.title }}</a></li>
            </ul>
            </nav>
             
            <nav>
            <p class="text-light">about</p>
            <ul v-for="(link, index) in aboutLinks" :key="index">
                <li><a href="">{{ link.title }}</a></li>
            </ul>
            </nav>

            <nav>
            <p class="text-light">features</p>
            <ul v-for="(link, index) in featuresLinks" :key="index">
                <li><a href="">{{ link.title }}</a></li>
            </ul>
            </nav>
             
            <nav>
            <p class="text-light">quick links</p>
            <ul v-for="(link, index) in quickLinks" :key="index">
                <li><a href="">{{ link.title }}</a></li>
            </ul>
            </nav>

            <div class="d-flex flex-column">
                <p class="text-light">subscribe to newsletter</p>
                <input type="email" id="email" placeholder="Email" required>
                <button @click="subSuccess">subscribe</button>
                <p class="text-light mt-1 sub">{{ message }}</p>
            </div>
            
            </section>
        
            <div class="line mb-3"></div>

            <section class="d-flex justify-content-between align-items-center">
                <div class="img-container">
                    <img src="../assets/anime-whitelogo.png" alt="">
                </div>
                
                <div class="align-items-center">
                <p class="text-light mb-0"><font-awesome-icon icon="fa-regular fa-copyright" class="me-2"/>Anime Tech, Theme by HasnainDEV</p>
                </div>
                
            </section>
    </div>
</footer>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variable' as *;
@use '../../node_modules/bootstrap/scss/bootstrap.scss';

.black-line {
    background-color: #333333;
    padding: 3px 0;
    position: relative;

    .arrow-down {
        font-size: 55px;
        position: absolute;
        right: 50%;
        top: -20px;
        color: #333333;
        
    }
}

.wrapper {
    background-color: $primary-color;
    padding: 4rem 0 2rem 0;
}

.links {
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;

    p {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 20px;
    }

    .sub {
        font-size: 15px;
        text-transform: none;
        text-align: center;
    }

    input {
        margin-top: 0.3rem;
        padding: 0.5rem 1.5rem;
        border-radius: 5px;
        border: none;
    }

    button {
        margin-top: 0.3rem;
        text-transform: uppercase;
        font-weight: bold;
        border: none;
        background-color: #545454;
        padding: 0.5rem 1.5rem;
        border-radius: 5px;
        color: white;

        &:hover {
            background-color: white;
            color: $primary-color;
            transition: 500ms;
        }
    }


    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-transform: capitalize;
        font-weight: bold;
        
        li {
            font-size: 16px;
        }

        a {
            text-decoration: none;
             color: white;
        }

        a:hover {
            color: #545454;
            transition: 200ms;
        }
  
    }
}



.line {
    padding: 0.5px 0;
    background-color: white;
}

.img-container {
    width: 250px;

    img {
        width: 100%;
    }
}


</style>