import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
import SectionSetting from './w1setting.mjs'
import SectionSurvey from './w1survey.mjs'
import SectionConcept from './w1concept.mjs'
import SectionWork from './w1work.mjs'
import SectionThanks from './w1thanks.mjs'

createApp({
    components:{
        SectionSetting,
        SectionSurvey,
        SectionConcept,
        SectionWork,
        SectionThanks,
    },
    template:`
        <section-setting></section-setting>
        <section-survey></section-survey>
        <section-concept></section-concept>
        <section-work></section-work>
        <section-thanks></section-thanks>
    `
}).mount('#vueWrapper');


