const fs = require('fs');
const file = 'd:/Downloads/pakcalc---financial-suite/components/ToolArticle.tsx';
let content = fs.readFileSync(file, 'utf8');

const zakatStart = content.indexOf('const ZakatArticle');
const freelancerStart = content.indexOf('const FreelancerTaxArticle');
const investmentStart = content.indexOf('const InvestmentReturnArticle');

const newZakat = `const ZakatArticle = ({ isUrdu }: { isUrdu: boolean }) => {
    return (
        <ArticleWrapper>
            <h2>زکوٰۃ کیلکولیٹر پاکستان 2026: درست نصاب (سونا اور چاندی) اور کٹوتی کے اصول</h2>
            <p>
                زکوٰۃ اسلام کا ایک اہم رکن ہے، جس کی درست ادائیگی ہر صاحبِ نصاب مسلمان کا بنیادی دینی فریضہ ہے۔ ہمارا جدید <strong>زکوٰۃ کیلکولیٹر پاکستان (2025-2026)</strong> اس حساس عمل کو انتہائی آسان اور مستند بناتا ہے۔ یہ ٹول 100 فیصد حساب کو درست رکھتا ہے اور پاکستان میں سونے اور چاندی کی موجودہ مارکیٹ قیمتوں (PKR) کی بنیاد پر نصاب کا تعین کرتا ہے۔
            </p>

            <HighlightBox title="زکوٰۃ کے حساب میں مکمل شفافیت" icon="✨" color="amber">
                ہم نے اس جدید زکوٰۃ کیلکولیٹر کو اس طرح تیار کیا ہے کہ آپ آسانی سے اپنی کل مالیت جان سکیں۔ آپ کو صرف اپنے اثاثوں (Assets) کی تفصیل دینی ہے، اور ہمارا سسٹم فوری طور پر آپ کے ذمے 2.5 فیصد لاگو ہونے والی زکوٰۃ کا ایک روپیہ بھی چھوڑے بغیر درست حساب لگا لے گا۔
            </HighlightBox>

            <h3>قابلِ زکوٰۃ اثاثہ جات کی تفصیل</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 not-prose">
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm text-center">
                    <span className="text-4xl block mb-2">💵</span>
                    <strong className="block text-slate-900">نقد رقم اور بینک بیلنس</strong>
                    <span className="text-xs text-slate-500">بینک اکاؤنٹس اور گھر میں موجود تمام نقد رقم۔</span>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm text-center">
                    <span className="text-4xl block mb-2">🏅</span>
                        <strong className="block text-slate-900">سونا اور چاندی</strong>
                    <span className="text-xs text-slate-500">سونے اور چاندی کے موجودہ مارکیٹ ریٹ پر مالیت۔</span>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm text-center">
                    <span className="text-4xl block mb-2">📈</span>
                    <strong className="block text-slate-900">سرمایہ کاری اور شیئرز</strong>
                    <span className="text-xs text-slate-500">میوچل فنڈز، سٹاکس، اور پراویڈنٹ فنڈ مالیت۔</span>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm text-center">
                    <span className="text-4xl block mb-2">📦</span>
                    <strong className="block text-slate-900">کاروباری مالِ تجارت</strong>
                    <span className="text-xs text-slate-500">دکان یا گودام میں موجود اشیاء کی مارکیٹ قیمت۔</span>
                </div>
            </div>

            <h3>نصاب اور اس کی موجودہ شرح (2025-26)</h3>
            <p>
                نصاب وہ کم از کم حد ہے جس پر زکوٰۃ فرض ہوتی ہے، اور یہ مال پورے ایک اسلامی قمری سال تک ملکیت میں رہنا چاہیے۔ اسلامی اصولوں کے تحت نصاب کی دو بنیادی شکلیں ہیں۔
            </p>

            <StyledTable
                headers={['نصاب کا معیار', 'وزن اور وزن کی مقدار', 'اطلاق کیسے ہوتا ہے']}
                rows={[
                    [<strong className="text-amber-600">سونے کا نصاب</strong>, '87.48 گرام (7.5 تولہ)', 'یہ انفرادی طور پر تب لاگو ہوتا ہے جب آپ کے پاس صرف اور صرف سونا ہو (نقدی یا چاندی نہ ہو)۔'],
                    [<strong className="text-slate-500">چاندی کا نصاب</strong>, '612.36 گرام (52.5 تولہ)', 'علماء کا متفقہ فیصلہ ہے کہ غریبوں کے حق میں چاندی کا نصاب بہتر ہے۔ یہی بینکوں کی یکم رمضان کی کٹوتی کے لیے لاگو ہوتا ہے۔']
                ]}
            />

            <h3>زکوٰۃ کا درست حساب لگانے کے 4 آسان اقدامات</h3>
            <StepGrid steps={[
                { title: "اثاثوں کا حساب کریں", desc: "اپنے تمام بینک اکاؤنٹس کی رقم، سونے/چاندی کی قیمت اور مال تجارت درج کریں۔" },
                { title: "واجبات (قرضے) نکالیں", desc: "اگر آپ پر کوئی فوری ادا کرنے والا قرض یا بل باقی ہے، تو اسے منہا کریں۔" },
                { title: "نصاب سے موازنہ کریں", desc: "سسٹم خود بخود جانچ لے گا کہ آپ کی مالیت چاندی یا سونے کے نصاب سے زائد ہے یا نہیں۔" },
                { title: "درست کٹوتی کی مالیت", desc: "اگر مالیت نصاب سے زائد ہے، تو سسٹم 2.5 فیصد لاگو کر کے درست زکوٰۃ بتا دے گا۔" }
            ]} />

            <h3>سٹیٹ بینک آف پاکستان (SBP) زکوٰۃ کٹوتی کے قواعد</h3>
            <p>
                زکوٰۃ و عشر آرڈیننس 1980 کے تحت، سٹیٹ بینک آف پاکستان یکم رمضان المبارک کو تمام سیونگ (Savings) اور پرافٹ اینڈ لاس اکاؤنٹس سے 2.5 فیصد کے حساب سے زکوٰۃ خودکار طور پر کاٹ لیتا ہے، بشرطیکہ بیلنس حکومتی مقرر کردہ نصاب کی مالیت سے زیادہ ہو۔
            </p>
            <HighlightBox title="زکوٰۃ سے استثنیٰ (CZ-50 فارم)" icon="📜" color="slate">
                اگر آپ اپنی زکوٰۃ خو د مستحقین تک پہنچانا چاہتے ہیں، اور بینک کی سرکاری کٹوتی سے بچنا چاہتے ہیں، تو آپ کو مقررہ تاریخ سے قبل اپنے متعلقہ بینک میں قانونی حلف نامہ یعنی "CZ-50 Form" جمع کروانا لازمی ہوتا ہے۔
            </HighlightBox>
        </ArticleWrapper>
    );
}
`;

const newFreelancer = `const FreelancerTaxArticle = ({ isUrdu }: { isUrdu: boolean }) => {
    return (
        <ArticleWrapper>
            <h2>فری لانسر انکم اور ٹیکس کیلکولیٹر پاکستان 2026: آئی ٹی ایکسپورٹ ٹیکس قوانین</h2>
            <p>
                پاکستان عالمی سطح پر فری لانسنگ کے حوالے سے تیزی سے ابھرتی ہوئی مارکیٹ ہے۔ چاہے آپ Upwork، Fiverr کے ذریعے کما رہے ہوں یا بیرونِ ملک سے براہِ راست ادائیگی لے رہے ہوں، اصل اور خالص (Net) آمدنی کا اندازہ لگانا انتہائی پیچیدہ ہوتا ہے۔ ہمارا خاص <strong>فری لانسر ٹیکس اور انکم کیلکولیٹر پاکستان</strong> آپ کی کُل ڈالرز کی آمدنی کو روپے کے تبادلے، پلیٹ فارمز کی فیسوں اور لازمی ایف بی آر ٹیکس کٹوتی سے گزار کر آپ کو درست ہاتھ آنے والی رقم بتاتا ہے۔
            </p>

            <HighlightBox title="خالص آمدنی کا بالکل درست حساب" icon="💻" color="amber">
                عام ٹیکس کیلکولیٹرز میں یہ خامی ہوتی ہے کہ وہ فری لانسرز کے مخصوص کام اور فیسوں کو یکسر نظرانداز کر دیتے ہیں۔ وہ نہ تو پلیٹ فارم فیس کاٹتے ہیں اور نہ ہی بینک کی ڈالر خریدنے میں استعمال ہونے والے ایکسچینج ریٹ کو سمجھتے ہیں۔ ہمارا جدید ٹول ڈالر ملنے سے لے کر، بینک کے ذریعے آپ کے اکاؤنٹ میں پاکستانی روپے (PKR) کی منتقلی تک، تمام مرحلوں کی درست کیلکولیشن کرتا ہے۔
            </HighlightBox>

            <h3>ہماری فری لانس ایپ کس طرح حساب لگاتی ہے؟</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 not-prose">
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex gap-4 items-start">
                    <span className="text-3xl">💱</span>
                    <div>
                        <strong className="block text-slate-900 mb-1">کرنسی اور ایکسچینج ریٹ</strong>
                        <span className="text-xs text-slate-500">انٹربینک (Interbank) ڈالر ریٹ کو بنیاد بنا کر روپے کی قیمت نکالنا۔</span>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex gap-4 items-start">
                    <span className="text-3xl">🛡️</span>
                    <div>
                        <strong className="block text-slate-900 mb-1">پلیٹ فارم کی کٹوتی</strong>
                        <span className="text-xs text-slate-500">کلائنٹ سے ملنے والی رقم میں سے 20% کمیشن (Fiverr/Upwork فیس) کی خودکار کٹوتی۔</span>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex gap-4 items-start">
                    <span className="text-3xl">🏦</span>
                    <div>
                        <strong className="block text-slate-900 mb-1">مقامی بینک چارجز</strong>
                        <span className="text-xs text-slate-500">پاکستانی بینکوں (مثلاً HBL، Meezan) کے منافع یا کٹوتی کا حساب۔</span>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex gap-4 items-start">
                    <span className="text-3xl">📄</span>
                    <div>
                        <strong className="block text-slate-900 mb-1">ایف بی آر (FBR) ایکسپورٹ ٹیکس</strong>
                        <span className="text-xs text-slate-500">آپ کے فائلر سٹیٹس کے مطابق 0.25% یا 1% ود ہولڈنگ ٹیکس کی کٹوتی۔</span>
                    </div>
                </div>
            </div>

            <h3>حساب کتاب کرنے کے 4 آسان اقدامات</h3>
            <StepGrid steps={[
                { title: "ڈالر آمدنی لکھیں", desc: "وہ کُل رقم درج کریں جو آپ کے کلائنٹ نے کسی بھی فیس کی کٹوتی سے پہلے ادا کی۔" },
                { title: "مارکیٹ پلیس کی فیس سیٹ کریں", desc: "اس پلیٹ فارم کا نام یا خودکار فیس شامل کریں جو کم از کم 20 فیصد تک ہوتی ہے۔" },
                { title: "بینک کٹوتی کا حساب", desc: "ڈالر کے اصل انٹربینک ریٹ اور مقامی بینک کے خریدنے کے ریٹ میں فرق شامل کریں۔" },
                { title: "FBR کا ٹیکس درج کریں", desc: "اپنے فائلر ہونے کی حیثیت بتائیں۔ کیلکولیٹر خودکار قانون کے مطابق آئی ٹی استثنیٰ لگائے گا۔" }
            ]} />

            <h3>فری لانسرز اور آئی ٹی پروفیشنلز کے لیے FBR کے نئے قوانین (2025-2026)</h3>
            <p>
                وفاقی حکومت (FBR) پاکستان میں آئی ٹی سروسز اور ایکسپورٹس کی شاندار حوصلہ افزائی کے لیے سہولتیں فراہم کرتی ہے۔ اگر فری لانسر قانونی بینکنگ چینلز کے ذریعے اپنی رقم "زرمبادلہ" (Foreign Inward Remittance) کی صورت میں لاتے ہیں، تو ان کے لیے نارمل تنخواہ دار طبقے کے انکم ٹیکس قوانین لاگو نہیں ہوتے۔
            </p>

            <StyledTable
                headers={['ٹیکس فائلر ہونے کی حیثیت', 'آئی ٹی ٹیکس کی شرح (Withholding Tax)', 'قانون اور شرائط']}
                rows={[
                    [<strong className="text-emerald-600">PSEB رجسٹرڈ فائلر</strong>, 'بیرونی زرمبادلہ پر فقط 0.25%', 'یہ سب سے کم شرح ہے۔ آپ کو پاکستان سافٹ ویئر ایکسپورٹ بورڈ کے ساتھ رجسٹرڈ ہونا ضروری ہے۔'],
                    [<strong className="text-amber-500">عام ایکٹو فائلر (Non-PSEB)</strong>, 'بیرونی زرمبادلہ پر 1.00%', 'آپ کا نام FBR کی ایکٹو فائلر لسٹ میں شامل ہونا لازمی ہے۔ زیادہ تر فری لانسرز اسی کے اہل ہیں۔'],
                    [<strong className="text-rose-500">نان فائلر (Non-Filer)</strong>, 'غیر معمولی کٹوتی / پورا انکم ٹیکس قانون', 'حکومت اب نان فائلرز پر بھاری ٹیکس کٹوتیاں کر رہی ہے۔ ان کے لیے کسی بھی آئی ٹی ٹیکس کی چھوٹ کی اجازت نہیں ہے۔']
                ]}
            />
        </ArticleWrapper>
    );
};
`;

const finalStr = content.substring(0, zakatStart) + newZakat + '\n' + newFreelancer + '\n' + content.substring(investmentStart);

fs.writeFileSync(file, finalStr);
console.log('Script executed successfully!');
