import { ref, reactive } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
import SectionItem from '../sectionitem.mjs'
import DetailItem from '../detailitem.mjs'

export default {
    components: {
        SectionItem,
        DetailItem
    },
    setup(){
        const listClassCol=ref('detail__list--col')

        return{
            listClassCol
        }
    },
    template: `
        <section-item isgray isjp>
            <template #header>コンセプト</template>
            <template #body>
                <dl :class="[listClassCol]">
                    <detail-item iscol>
                        <template #topic>デザイン</template>
                        <template #body>
                            逢振は独自開発の品種で大量生産できず、価格が他の品種よりもやや高めという設定なため、落ち着いた雰囲気にすることで特別感を演出する方針とし、色はりんごの赤を中心としたアースカラーでまとめて統一感を持たせました。品のある雰囲気を演出するため、文字は文字間にゆとりのある明朝体(Noto Serif JP)、セリフ体 (Lora)を採用しました。
                        </template>
                    </detail-item>
                    <detail-item iscol>
                        <template #topic>コンテンツ</template>
                        <template #body>
                            若年層では商品だけではなく商品を通じて得られる行動や体験などを重視する傾向があるため、商品情報に加えて商品に付随する背景などの情報を盛り込みました。
                            <p class="para-mt15">
                            インターネットを活用した販売に力を入れている設定なため、メインビジュアルのカルーセルにはSNS宣伝バナーを設置しました。加工用としても使いやすいことが商品の強みなため、SNSを活用して消費者に食べ方を提案することを目的としています。自社アカウントでは、直営ショップ内のカフェのメニュー等を紹介している設定としました。</p>
                        </template>
                    </detail-item>
                    <detail-item iscol>
                        <template #topic>その他</template>
                        <template #body>
                            企業名の「赤のひととき」は消費体験を重視した販売戦略を表現しており、あえて「りんご」というキーワードは使わずに「赤」と婉曲的に表現しました。欧米では日本と比べて直接的な表現が好まれる傾向があるので、英語名にはappleを採用し、ほんのりと色づいた雰囲気を表すtintをあわせました。
                        </template>
                    </detail-item>
                </dl>
            </template>
        </section-item>
    `
}