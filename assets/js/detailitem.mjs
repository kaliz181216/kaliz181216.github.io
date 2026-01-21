import {ref} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

export default {
    props: {
        iscol: Boolean
    },
    setup(){
        const topicClass = ref('detail__topic')
        const topicClassCol = ref('detail__topic--col')
        const bodyClass = ref('detail__body')
        const bodyClassCol = ref('detail__body--col')
        
        return{
            topicClass,
            topicClassCol,
            bodyClass,
            bodyClassCol
        }
    },
    template: `
        <dt :class="[iscol ?  topicClassCol : topicClass]">
            <slot name="topic">detail topic</slot>
        </dt>
        <dd :class="[iscol ? bodyClassCol : bodyClass]">
            <slot name="body">detail body</slot>
        </dd>
    `
}

// about 段落クラス共通化　detailitem indexに実装