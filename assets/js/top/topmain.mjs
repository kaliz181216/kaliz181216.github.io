import { createApp, reactive } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
import DetailItem from '../detailitem.mjs'
import SectionSkills from './topskills.mjs'
import SectionWorks from './topworks.mjs'

createApp({
    components:{
        SectionSkills,
        SectionWorks,
    },
    template: `
        <section-skills></section-skills>
        <section-works></section-works>
    `
}).mount("#vueWrapper");