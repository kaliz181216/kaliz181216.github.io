import { reactive } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
import SectionItem from '../sectionitem.mjs'
import DetailItem from '../detailitem.mjs'

export default {
    components: {
        SectionItem,
        DetailItem
    },
    setup(){
        const worklist=reactive([
            {
                id: 1,
                topic: '企業デモサイト',
                link: 'fictional_apple/',
                img: 'assets/images/work1/apple_screenshot_pc.jpg',
                description: '架空の企業のWebサイト。ネット通販の拡大や直営ショップへの集客が目的という設定で作成しました。',
                tags: ['HTML/CSS','JavaScript']
            },
            {
                id: 2,
                topic: 'kaliz181216 Home',
                link: '#',
                img:'assets/images/home_screenshot.jpg',
                description: '私の個人サイト。仕事用なのでシンプルでビジネスライクなデザインにしました。',
                tags: ['HTML/CSS','JavaScript','Vue.js']
            },
        ])

        return{
            worklist
        }
    },
    template: `
        <section-item isgray>
            <template #header>Works</template>
            <template #body>
                <div class="section__body--works">
                    <article v-for="work in worklist" class="works__article">
                        <a class="works__link" :href="work.link" target="_blank" rel="noopener noreferrer"><img :src="work.img" :alt="work.topic"></a>
                        <h3 class="works__topic">{{work.topic}}</h3>
                        <p>{{work.description}}</p>
                        <ul class="works__tags">
                            <li v-for="tag in work.tags">{{tag}}</li>
                        </ul>
                    </article>
                </div>
            </template>
        </section-item>
    `
}