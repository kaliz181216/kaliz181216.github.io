import { createApp, reactive } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
import SettingDetails from './w1setting.mjs'
import SurveyDetails from './w1survey.mjs'

//setting
createApp({
    components: {
        SettingDetails
    },
    template: `
        <setting-details></setting-details>
    `
}).mount('#setting__details');

//survey
createApp({
    components: {
        SurveyDetails
    },
    template: `
        <survey-details></survey-details>
    `
}).mount('#survey__details');

