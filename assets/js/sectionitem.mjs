import { ref } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

export default {
    props: {
        isgray: Boolean,
        isjp: Boolean
    },
    setup() {
        const graySection = ref('section--gray')
        const jpHeader = ref('section__header--jp')

        return {
            graySection,
            jpHeader,
        }
    },
    template: `
        <section class="section" :class="[isgray ? graySection : '']">
            <h2 class="section__header" :class="[isjp ? jpHeader : '']">
                <slot name="header">section header</slot>
            </h2>
            <div class="section__body">
                <slot name="body">section body</slot>
            </div>
        </section>
    `
}