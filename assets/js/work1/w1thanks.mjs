import { reactive } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import SectionItem from '../sectionitem.mjs'
import DetailItem from '../detailitem.mjs'

export default {
    components: {
        SectionItem,
        DetailItem
    },
    setup(){
        const thankslist=reactive([
            'Debby Hudson',
            'Diliara Garifulina',
            'Esra Afsar',
            'Filipp Romanovski',
            'Josephina Kolpachnikof',
            'Kelvin Woblick',
            'Nathan Hulsey',
            'Novila Misastra',
        ])

        return{
            thankslist
        }
    },
    template: `
        <section-item isgray isjp>
            <template #header>謝辞</template>
            <template #body>
                本ページの制作にあたり、 <a class="linkblue" href="https://unsplash.com/ja" target="_blank" rel="noopener noreferrer"> Unsplash</a>の以下のユーザー様の写真を利用させていただきました。この場を借りてお礼申し上げます。
                <ul v-for="name in thankslist" class="para-mt15">
                    <li class="thanks__name">{{name}} 様</li>
                </ul>
                <div class="thanks__img">
                    <img src="assets/images/work1/appendix.jpg" alt="商品パッケージ">
                    <p class="imgcaption">デザイン制作の参考にした商品パッケージ　合計約2700kcal!</p>
                </div>
            </template>
        </section-item>
    `
}