import SectionItem from '../sectionitem.mjs'
import DetailItem from '../detailitem.mjs'

export default {
    components: {
        SectionItem,
        DetailItem
    },
    template: `
        <section-item isjp>
            <template #header>制作物</template>
            <template #body>
                <dl>
                    <detail-item>
                        <template #topic>
                            <span class="detail__topic--work">メインビジュアル</span>
                        </template>
                        <template #body>
                            <div class="work__content">
                                <div class="work__image">
                                  <img src="assets/images/work1/apple_screenshot_sp.jpg" alt="スマホ版デモサイトイメージ">
                                </div>
                                <div class="work__text">
                                    <p>メインビジュアルは生産地の果樹園で撮影した設定の写真としており、クリック時にStoryのセクションに移動するようになっています。</p>
                                    <p class="work__remark">農産物のページであることから、装飾や企業ロゴは植物の葉や実を模った模様とし、全体の雰囲気を損なわないように控えめなデザインとしました。</p>
                                </div>
                            </div>
                        </template>
                    </detail-item>
                    <detail-item>
                        <template #topic>
                            <span class="detail__topic--work">SNSバナー</span>
                        </template>
                        <template #body>
                            <div class="work__content">
                                <div class="work__image">
                                    <img src="assets/images/work1/sns-sp.jpg" alt="スマホ版SNS宣伝バナー">
                                </div>
                                <div class="work__text">
                                    <p>メインビジュアルで表示されるSNSバナーは全体の雰囲気とあわせて赤をベースにしつつも、気軽に投稿できるようにややポップなデザインにしました。本ページのフォントはセリフ体を使っていますが、このバナーのみサンセリフ体にしています。
                                    </p>
                                    <p class="para-mt15">SNSではレシピを紹介している設定なため、背景はテーブルクロスをイメージしたチェック柄としました。</p>
                                </div>
                            </div>
                        </template>
                    </detail-item>
                    <detail-item>
                        <template #topic>
                            <span class="detail__topic--work">生成AIについて</span>
                        </template>
                        <template #body>
                            <div class="work__content work__content--ai">
                                <div class="work__image--ai">
                                    <div class="work__iceimg">
                                        <img src="assets/images/work1/work1_img1.jpg" alt="アイスカップ画像">
                                        <p class="img__caption">アイス画像の元となった写真</p>
                                    </div>
                                    <div class="work__iceimg">
                                        <img class="work__imgwidth80" src="assets/images/work1/work1_img2.jpg" alt="制作中素材">
                                        <p class="work__icecaption img__caption">加工途中の画像</p>
                                    </div>
                                </div>
                                <div>
                                    <p>生成AIで画像生成をする際、プロンプトによる指示のみでイメージ通りの画像を生成することは困難な場合が多いため、アイス画像を生成する際の元となる画像として、撮影したアイスのカップの写真を使用しています。</p>
                                    <p class="para-mt15">効率的に作業を進めるためPhotoshopも活用しており、例の加工途中の画像ではアイスをスプーンで掬ったような跡をAdobe Fireflyに生成させた後、Photoshopの色調補正で下の層のアイスが見えているように加工しています。Adobe
                                    Fireflyの生成とPhotoshopによる加工のセットを複数ステップ繰り返すことで最終的な画像ができています。</p>
                                </div>
                            </div>
                        </template>
                    </detail-item>
                </dl>
            </template>
        </section-item>
    `
}
