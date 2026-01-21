import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
import ComHeader from './header.mjs'
import ComFooter from './footer.mjs'

createApp({
    components:{
        ComHeader
    },
    template: `
        <com-header></com-header>
    `
}).mount('#header');

createApp({
    components:{
        ComFooter
    },
    template: `
        <com-footer></com-footer>
    `
}).mount('#footer');