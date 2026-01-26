import { createApp, reactive } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
import DetailItem from './detailitem.mjs'

//skills
createApp({
    components:{
        DetailItem
    },
    template: `
        <detail-item>
            <template #topic>システム管理</template>
            <template #body>システム管理者として、要件定義から構築、整備、運用までシステム管理の各プロセスを経験しました。</template>
        </detail-item>
        <detail-item>
            <template #topic>システム開発</template>
            <template #body>HTML, CSSはもちろんのこと、PHPによるバックエンド開発からJavaScriptによるフロントエンド開発まで一貫して担当しました。</template>
        </detail-item>
    `
}).mount("#itskills");

createApp({
    components:{
        DetailItem
    },
    template: `
        <detail-item>
            <template #topic>デザイン制作</template>
            <template #body>もとは趣味でGIMP,CLIP STUDIOを使ってイラストなどを制作していました。退職後は専門学校でPhotoshop, Illustrator,Figmaを使ってバナーやデザインカンプを制作しました。</template>
        </detail-item>
    `
}).mount("#designskills");


//works__articles
createApp({
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
    template:`
        <article v-for="work in worklist" class="works__article">
            <a class="works__link" :href="work.link" target="_blank" rel="noopener noreferrer"><img :src="work.img" :alt="work.topic"></a>
            <h3 class="works__topic">{{work.topic}}</h3>
            <p>{{work.description}}</p>
            <ul class="works__tags">
                <li v-for="tag in work.tags">{{tag}}</li>
            </ul>
        </article>
    `
}).mount('#works__articles');