import DetailItem from '../detailitem.mjs'

export default {
    components: {
        DetailItem
    },
    template: `
        <detail-item iscol>
            <template #topic>企業名</template>
            <template #body>赤のひととき<br class="spbr">（英語名: apple tint）</template>
        </detail-item>
        <detail-item iscol>
            <template #topic>企業概要</template>
            <template #body>
            逢振（おうふる）という架空の銘柄の独自開発のりんごが主力商品。逢振の販売のほか、逢振の特徴を活かした商品展開をしている。近隣に観光地があることから、観光客向けに直営ショップを運営している。また、最近は販路拡大を目指し、通販にも力を入れている。生産地なので県内には他にもりんご農家がある設定。
            </template>
        </detail-item>
        <detail-item iscol>
            <template #topic>商品</template>
            <template #body>
            逢振は独自開発なため品種としての希少性は高いが、大量生産できないことから価格が他の品種よりも高めであり、希少性だけでは競争力に欠ける。逢振は生食用としても加工品としても優れたりんごというコンセプトで作られた品種なため、加工がしやすい。
            </template>
        </detail-item>
        <detail-item iscol>
            <template #topic>観光</template>
            <template #body>
            観光客向けに果樹園を開放している農家もあるが、逢振の栽培技術は社外秘なので解放する予定はない。直営ショップにおけるカフェ営業や土産物としての加工品販売で観光需要を取り込む。
            </template>
        </detail-item>
        <detail-item iscol>
            <template #topic>通販</template>
            <template #body>大手通販サイトで販売している農家も多いが、直営ショップの宣伝も兼ね、自社サイトを運営している。</template>
        </detail-item>
    `
}