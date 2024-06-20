import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '../node_modules/@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome'

import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faStar, faUser, faCalendarDays)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')