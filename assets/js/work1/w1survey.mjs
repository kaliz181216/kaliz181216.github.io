import DetailItem from '../detailitem.mjs'

export default {
    components: {
        DetailItem
    },
    template: `
        <detail-item>
            <template #topic>
                <span class="detail__topic--survey">消費者層調査</span>
            </template>
            <template #body>
                <p>通販による販売ルートに力を入れている設定なため、まずは通信販売の利用者層を調査しました。インターネットショッピングを年1回以上利用する人の割合は、図1の通り、20代から40代が最も多くなっています。</p>
                <p class="para-mt15">また、インターネットショッピング利用者の年間平均利用回数は10代が最も多く、以降、年齢が上がるごとに回数が減少していく傾向が見られます。
                </p>
                <div class="survey__graphs">
                    <div class="survey__graph">
                        <img src="assets/images/work1/work1_graph1.png" alt="通販利用割合の推移">
                        <p class="imgcaption">図1　インターネットショッピングを年1回以上利用する人の割合の推移</p>
                        <p class="imgcaption survey__graphref">出典「生活者1万人アンケート（10回目）に見る日本人の価値観・消費行動の変化」　野村総合研究所　<a class="linkblue"
                        href="https://www.nri.com/jp/knowledge/report/2025forum384.html" target="_blank"
                        rel="noopener noreferrer">https://www.nri.com/jp/knowledge/report/2025forum384.html</a></p>
                    </div>
                    <div class="survey__graph">
                        <img src="assets/images/work1/work1_graph2.png" alt="通販利用回数の推移">
                        <p class="imgcaption survey__graphcaption">図2　インターネットショッピング利用者の年間平均利用回数の推移</p>
                        <p class="survey__graphref imgcaption">出典「生活者1万人アンケート（10回目）に見る日本人の価値観・消費行動の変化」　野村総合研究所　<a class="linkblue"
                        href="https://www.nri.com/jp/knowledge/report/2025forum384.html" target="_blank"
                        rel="noopener noreferrer">https://www.nri.com/jp/knowledge/report/2025forum384.html</a></p>
                    </div>
                </div>
            </template>
        </detail-item>
        <detail-item>
            <template #topic>
                <span class="detail__topic--survey">検索ワード調査</span>
            </template>
            <template #body>
                Googleのサジェストキーワードから、「りんご」と一緒に検索されているキーワードを調査したところ、いくつかの傾向がありました。
                <dl>
                    <dt class="survey__wordtype">「りんご」＋「品種」型</dt>
                    <dd class="survey__worddetail">「りんご ふじ」、「りんご 王林」など収穫時期を迎えたりんごの銘柄や、「りんご 種類」といったものも見られました。</dd>
                    <dt class="survey__wordtype">「りんご」＋「産地」型</dt>
                    <dd class="survey__worddetail">りんごの産地である青森県、長野県、岩手県、山形県が多く検索されていました。「りんご 弘前」のように県名ではなく市名で検索されたものも見られました。</dd>
                    <dt class="survey__wordtype">「りんご」＋「レシピ」型</dt>
                    <dd class="survey__worddetail">単に「りんご レシピ」といったものや、「りんご コンポート」、「りんご ジャム」、「りんご ケーキ」など料理に関する検索が見られました。また、「りんご大量消費」というような、おそらく通販サイト等で数kg単位でりんごを購入したと思われる検索もありました。</dd>
                </dl>
            </template>
        </detail-item>
        <detail-item>
            <template #topic>
                <span class="detail__topic--survey">ターゲット設定</span>
            </template>
            <template #body>
                ここまでの調査から、閲覧する状況は次の２つを想定しました。
                <ul>
                    <li>逢振（架空の銘柄のりんご）を通販で購入する時（「りんご」＋「品種」型）</li>
                    <li>振津県外に居住しており、振津県への旅行を検討している時（「りんご」＋「産地」型）</li>
                </ul>
                <p class="para-mt15">
                年齢層は、通販の利用率、利用回数ともに高い20代から30代で、普段から料理をするなど食に関心がある人物像という設定にしました。このため、産地やりんごを使った料理など、商品情報だけでなく、背景も重視する設計が有効と判断しました。</p>
            </template>
        </detail-item>
    `
}