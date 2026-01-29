import { reactive } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
import SectionItem from '../sectionitem.mjs'
import DetailItem from '../detailitem.mjs'

export default {
    components: {
        SectionItem,
        DetailItem
    },
    setup(){
        const skillsdetails=reactive([
            {
                type: 'IT Skill',
                imgsrc: 'assets/images/code.svg',
                imgalt: 'IT icon',
                details:[
                    {
                        id: 1,
                        topic: 'システム管理',
                        body: 'システム管理者として、要件定義から構築、整備、運用までシステム管理の各プロセスを経験しました。'
                    },
                    {
                        id: 2,
                        topic: 'システム開発',
                        body: 'HTML, CSSはもちろんのこと、PHPによるバックエンド開発からJavaScriptによるフロントエンド開発まで一貫して担当しました。'
                    },
                ]
            },
            {
                type: 'Design Skill',
                imgsrc: 'assets/images/design.svg',
                imgalt: 'design icon',
                details:[
                    {
                        id: 1,
                        topic: 'デザイン制作',
                        body: 'もとは趣味でGIMP,CLIP STUDIOを使ってイラストなどを制作していました。退職後は専門学校でPhotoshop, Illustrator,Figmaを使ってバナーやデザインカンプを制作しました。'
                    }
                ]
            }
        ])

        return{
            skillsdetails
        }
    },
    template: `
        <section-item>
            <template #header>Skills</template>
            <template #body>
                <div class="section__body--skills">
                    <div v-for="skillitem in skillsdetails" class="skills__content">
                        <div class="skills__topic">
                            <div class="skills__icon">
                                <img :src="skillitem.imgsrc" :alt="skillitem.imgalt">
                            </div>
                            <h3>{{skillitem.type}}</h3>
                        </div>
                        <dl>
                            <detail-item v-for="detail in skillitem.details">
                                <template #topic>
                                    {{detail.topic}}
                                </template>
                                <template #body>
                                    {{detail.body}}
                                </template>
                            </detail-item>
                        </dl>
                    </div>
                </div>
            </template>
        </section-item>
    `
}