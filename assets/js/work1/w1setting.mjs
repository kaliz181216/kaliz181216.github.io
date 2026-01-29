import { ref, reactive } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
import SectionItem from '../sectionitem.mjs'
import DetailItem from '../detailitem.mjs'
import ImgModal from '../imgmodal.mjs'

export default {
    components: {
        SectionItem,
        DetailItem,
        ImgModal
    },
    setup(){
        const listClassCol=ref('detail__list--col')

        const settinglist=reactive([
            {
                id: 1,
                topic: '企業名',
                body: '赤のひととき<br class="spbr">（英語名: apple tint）',
            }, 
            {
                id: 2,
                topic: '企業概要',
                body: '逢振（おうふる）という架空の銘柄の独自開発のりんごが主力商品。逢振の販売のほか、逢振の特徴を活かした商品展開をしている。近隣に観光地があることから、観光客向けに直営ショップを運営している。また、最近は販路拡大を目指し、通販にも力を入れている。生産地なので県内には他にもりんご農家がある設定。',
            }, 
            {
                id: 3,
                topic: '商品',
                body: '逢振は独自開発なため品種としての希少性は高いが、大量生産できないことから価格が他の品種よりも高めであり、希少性だけでは競争力に欠ける。逢振は生食用としても加工品としても優れたりんごというコンセプトで作られた品種なため、加工がしやすい。',
            }, 
            {
                id: 4,
                topic: '観光',
                body: '観光客向けに果樹園を開放している農家もあるが、逢振の栽培技術は社外秘なので解放する予定はない。直営ショップにおけるカフェ営業や土産物としての加工品販売で観光需要を取り込む。',
            }, 
            {
                id: 5,
                topic: '通販',
                body: '大手通販サイトで販売している農家も多いが、直営ショップの宣伝も兼ね、自社サイトを運営している。',
            }, 
        ])

        return{
            listClassCol,
            settinglist
        }
    },
    template: `
        <section-item isgray isjp>
            <template #header>企業設定</template>
            <template #body>
                <dl :class="[listClassCol]">
                    <detail-item iscol v-for="setting in settinglist">
                        <template #topic>
                            {{setting.topic}}
                        </template>
                        <template #body>
                            <span v-html=setting.body></span>
                        </template>
                    </detail-item>
                </dl>
                <div class="setting__img">
                    <img-modal :imgprop="{src:'assets/images/work1/position.png', alt:'ポジショニングマップ'}">
                        <template #imageCaption>他の品種と比較した場合の逢振の市場での立ち位置の概念図</template>
                    </img-modal>
                </div>
            </template>
        </section-item>
    `
}