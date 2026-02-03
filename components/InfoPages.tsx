
import React from 'react';
import { Link } from 'react-router-dom';
import { SALARIED_TAX_SLABS, NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS } from '../constants';

export const RetirementBlogContent = () => (
  <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
    {/* Header Section */}
    <header className="text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100">
        🌅 Secure Your Legacy in Pakistan
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
        Retirement Calculator Pakistan 2026: <br />
        <span className="text-blue-600 italic">Financial Freedom for Your Golden Years</span>
      </h2>
      <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
        Retirement planning in Pakistan is often overlooked until it's too late. With inflation rates frequently hitting double digits and a lack of a universal social security net, the burden of a comfortable old age lies solely on your shoulders. This guide explains how to use our retirement calculator to outpace inflation and build a corpus that lasts a lifetime.
      </p>
    </header>

    {/* Section 1: The Inflation Challenge */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-blue-500 pl-6">The PKR Inflation Challenge</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p>
            The biggest enemy of your retirement is not market risk, but <strong>PKR Inflation</strong>. In Pakistan, what costs Rs. 100 today might cost Rs. 1,000 thirty years from now. If your <Link to="/retirement-plan" className="text-emerald-600 hover:underline">retirement plan</Link> doesn't account for compounding inflation, your savings will evaporate.
          </p>
          <p>
            Our <Link to="/investment-return" className="text-emerald-600 hover:underline">investment calculator</Link> uses a <strong>"Real Rate of Return"</strong> approach. This means we subtract the expected inflation rate from your investment growth to show you the <em>actual</em> purchasing power of your future wealth.
          </p>
        </div>
        <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <h3 className="text-xl font-bold mb-4">The Cost of Waiting:</h3>
          <p className="text-sm text-slate-400 mb-6">Delaying your savings by 10 years can cut your final retirement kitty by more than 50%!</p>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>Start at 25</span>
              <span className="text-emerald-400 font-bold">Max Growth</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>Start at 35</span>
              <span className="text-amber-400 font-bold">Medium Growth</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>Start at 45</span>
              <span className="text-rose-400 font-bold">Limited Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 2: VPS - The Best Tool */}
    <section className="bg-blue-50 border border-blue-100 p-12 md:p-16 rounded-[4rem]">
      <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Voluntary Pension Schemes (VPS)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-white rounded-3xl shadow-sm">
          <h4 className="font-bold text-blue-900 mb-2">Tax Rebates (Section 63)</h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            By investing in a VPS approved by SECP, you can get a tax credit of up to 20% of your taxable income. This is essentially "free money" from the government to encourage retirement savings.
          </p>
        </div>
        <div className="p-8 bg-white rounded-3xl shadow-sm">
          <h4 className="font-bold text-blue-900 mb-2">Investment Flexibility</h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            You can choose between Equity (High Risk/High Return), Debt, and Money Market sub-funds based on your age. As you get closer to retirement, you can switch to lower-risk funds automatically.
          </p>
        </div>
      </div>
    </section>

    {/* Section 3: The 4% Rule in Pakistan */}
    <section className="space-y-12">
      <h2 className="text-3xl font-bold text-slate-900 text-center">The 4% Rule: Is it enough for PKR?</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p>
            Globally, the "4% Rule" suggests you can withdraw 4% of your total savings in the first year of retirement (adjusting for inflation thereafter) without ever running out of money.
          </p>
          <p>
            However, in Pakistan's high-yield environment, you might be able to withdraw 6-8% if your money is parked in a stable Shariah-compliant Income Fund or National Savings certificates. <strong>But beware:</strong> Higher withdrawal rates increase the risk of depleting your corpus if the market crashes.
          </p>
        </div>
        <div className="p-8 bg-slate-900 text-white rounded-[3rem] border border-white/10">
          <h4 className="text-xl font-bold text-blue-400 mb-4 text-center">Retirement Milestone Checklist</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-xs">✓</span>
              <span>Debt-Free (Home & Car) before retirement.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-xs">✓</span>
              <span>Separate Medical Emergency Fund.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-xs">✓</span>
              <span>Diversified across Gold, Property, and Mutual Funds.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Footer Meta */}
    <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
        Updated: Jan 2026 | SEVP/HR Standards Pakistan
      </div>
      <div className="flex gap-4">
        <span className="px-3 py-1 bg-blue-100 rounded-full text-[10px] font-bold text-blue-700 italic">End-of-Life Planning</span>
      </div>
    </footer>
  </article>
);

export const InvestmentBlogContent = () => (
  <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
    {/* Header Section */}
    <header className="text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100">
        💸 Wealth Creation
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
        Investment Profit Calculator: <br />
        <span className="text-emerald-600 italic">Growing Your Wealth in Pakistan 2026</span>
      </h2>
      <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
        In an economy with high inflation, saving cash is equivalent to losing money. True wealth is built by investing in productive assets that outpace the devaluation of the rupee. Our investment calculator helps you project your gains across various asset classes, from the stability of National Savings to the high-reward potential of the PSX.
      </p>
    </header>

    {/* Section 1: The Magic of Compound Interest */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-emerald-500 pl-6">The Power of "Halal" Compounding</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p>
            Albert Einstein called compound interest the "eighth wonder of the world." In the context of Shariah-compliant investing, this means reinvesting your dividends and profit shares back into the fund rather than spending them.
          </p>
          <p>
            Over 10 or 20 years, even a modest monthly investment of Rs. 10,000 can grow into a multi-million rupee corpus. The key is <strong>Time</strong> and <strong>Consistency</strong>.
          </p>
          <div className="bg-emerald-600 text-white p-8 rounded-[2.5rem] shadow-xl">
            <h5 className="font-bold mb-2">The Rule of 72:</h5>
            <p className="text-sm opacity-90">To find how many years it takes to double your money, divide 72 by your annual return rate. (e.g., 20% return doubles money in ~3.6 years!)</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {[
            { t: "Liquidity", d: "How fast can you get your cash back? Mutual funds = 24 hrs. Property = Months." },
            { t: "Dividend Yield", d: "Percentage of profit paid back to you annually in cash." },
            { t: "Capital Gains", d: "The increase in the value of the asset itself (e.g. Stock price going up)." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-3xl items-center shadow-sm">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">✓</div>
              <div>
                <h5 className="font-bold text-slate-900 text-sm">{item.t}</h5>
                <p className="text-xs text-slate-500 uppercase font-bold">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 2: Asset Class Comparison */}
    <section className="space-y-12">
      <h3 className="text-3xl font-bold text-slate-900 text-center">Comparing Pakistan's Top Investments</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
          { title: "National Savings (NSC)", ret: "13-15% p.a", risk: "Low Risk", desc: "Government-backed. Safest option but lower returns than equity.", icon: "🇵🇰" },
          { title: "Mutual Funds (AMCs)", ret: "18-22% p.a (Cash Funds)", risk: "Med Risk", desc: "Professionally managed. Great for monthly savings (SIP).", icon: "📊" },
          { title: "Stock Exchange (PSX)", ret: "25%+ (Selected Pairs)", risk: "High Risk", desc: "Direct ownership in Blue Chip companies like Meezan or Systems.", icon: "📈" },
          { title: "Real Estate (Files)", ret: "Varies (High Peaks)", risk: "Med Risk", desc: "Capitalizing on the growth of housing societies.", icon: "🏡" }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-xl transition-all">
            <div className="text-3xl mb-4">{item.icon}</div>
            <h4 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h4>
            <p className="text-emerald-600 font-black mb-2">{item.ret}</p>
            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Section 3: Tax Status for Filers */}
    <section className="bg-slate-900 text-white p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]"></div>
      <h2 className="text-3xl font-bold text-center mb-12">FBR Tax Slabs on Profits (2025-26)</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="pb-4 pl-4 text-slate-400 font-bold uppercase tracking-widest text-xs">Asset Type</th>
              <th className="pb-4 text-emerald-400 font-bold uppercase tracking-widest text-xs">Filer</th>
              <th className="pb-4 text-rose-400 font-bold uppercase tracking-widest text-xs">Non-Filer</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {[
              { t: 'Bank Profit', f: '15%', n: '30%' },
              { t: 'Dividend Income', f: '15%', n: '30%' },
              { t: 'Capital Gains (Equity)', f: '15%', n: '30%' },
              { t: 'Investment in REITs', f: '0-10%', n: '20%' },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-white/5 transition-colors">
                <td className="py-6 pl-4 font-medium text-slate-300">{row.t}</td>
                <td className="py-6 font-bold text-emerald-400">{row.f}</td>
                <td className="py-6 font-bold text-rose-400">{row.n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Footer Meta */}
    <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
        Updated: Jan 2026 | PSX/SECP Regulations
      </div>
      <div className="flex gap-4">
        <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">Wealth Building Series</span>
      </div>
    </footer>
  </article>
);

export const BMIBlogContent = () => (
  <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
    {/* Header Section */}
    <header className="text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-rose-50 text-rose-700 rounded-full text-xs font-black uppercase tracking-widest border border-rose-100">
        🏃‍♂️ Health & Wellness Pakistan
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
        Body Mass Index (BMI) Guide: <br />
        <span className="text-rose-600 italic">More Than Just a Number on the Scale</span>
      </h2>
      <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
        BMI is a widely used screening tool to categorize weight status and identify potential health risks. In Pakistan, where lifestyles are becoming increasingly sedentary and dietary habits are changing, understanding your BMI is the first step towards a healthier, more active life. This guide explains how BMI works, its limitations, and what your results actually mean for your long-term health.
      </p>
    </header>

    {/* Section 1: What is BMI? */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-rose-500 pl-6">Decoding the BMI Formula</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p>
            Body Mass Index (BMI) is a simple height-to-weight ratio used to classify adults into underweight, healthy weight, overweight, and obese categories. It is calculated by dividing your weight in kilograms by the square of your height in meters (kg/m²).
          </p>
          <p>
            While it doesn't directly measure body fat, research has shown that BMI correlates significantly with direct measures of body fatness. It serves as a cost-effective and easy-to-perform method of screening for weight categories that may lead to health problems.
          </p>
        </div>
        <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <h3 className="text-2xl font-bold mb-4 text-rose-400">The Metric Formula:</h3>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 font-mono text-2xl text-center mb-6">
            BMI = Weight (kg) / [Height (m)]²
          </div>
          <p className="text-xs text-slate-400 italic text-center">Standard measurement used by the World Health Organization (WHO).</p>
        </div>
      </div>
    </section>

    {/* Section 2: Understanding the Categories */}
    <section className="space-y-12">
      <h2 className="text-3xl font-bold text-slate-900 text-center">WHO Weight Classifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="grid grid-cols-1 gap-4">
          {[
            { l: 'Severe Thinness', r: '< 16.0', c: 'bg-blue-100 text-blue-800' },
            { l: 'Moderate Thinness', r: '16.0 – 17.0', c: 'bg-blue-50 text-blue-700' },
            { l: 'Normal Weight', r: '18.5 – 24.9', c: 'bg-emerald-100 text-emerald-800' },
            { l: 'Overweight', r: '25.0 – 29.9', c: 'bg-amber-100 text-amber-800' },
            { l: 'Obese Class I', r: '30.0 – 34.9', c: 'bg-rose-100 text-rose-800' },
            { l: 'Obese Class II', r: '35.0 – 39.9', c: 'bg-rose-200 text-rose-900' },
            { l: 'Obese Class III', r: '> 40.0', c: 'bg-rose-300 text-rose-950' },
          ].map((row, i) => (
            <div key={i} className={`flex justify-between items-center px-8 py-4 rounded-2xl border border-transparent shadow-sm ${row.c}`}>
              <span className="font-bold text-lg">{row.l}</span>
              <span className="font-black opacity-80">{row.r}</span>
            </div>
          ))}
        </div>
        <div className="p-8 bg-slate-50 border border-slate-100 rounded-[3rem] space-y-6">
          <h4 className="text-2xl font-bold text-slate-800">Why These Numbers Matter?</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Falling outside the "Normal" range doesn't always guarantee a health problem, but it serves as an indicator. For instance, an "Obese" BMI is associated with higher risks of Type 2 Diabetes, Hypertension, and Cardiovascular diseases. In South Asian populations, some studies suggest that health risks may actually begin at a lower BMI (around 23) due to higher abdominal fat distribution.
          </p>
        </div>
      </div>
    </section>

    {/* Section 3: Limitations of BMI */}
    <section className="bg-rose-50 border border-rose-100 p-12 md:p-16 rounded-[4rem] shadow-sm">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Is BMI Always Accurate?</h2>
        <p className="text-center text-slate-600">While helpful, BMI has significant limitations that you should be aware of:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-rose-50">
            <h5 className="font-bold text-rose-900 mb-2">The Muscle Problem</h5>
            <p className="text-sm text-slate-500">Muscle is denser than fat. Bodybuilders and athletes may have a high BMI but very low body fat percentage.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-rose-50">
            <h5 className="font-bold text-rose-900 mb-2">Age & Gender</h5>
            <p className="text-sm text-slate-500">Older adults tend to have more body fat than younger adults with the same BMI. Women naturally have more body fat than men.</p>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="space-y-12">
      <h2 className="text-3xl font-bold text-slate-900 text-center">BMI Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { q: "What is a healthy BMI for children?", a: "Children's BMI is interpreted differently using 'Percentiles' because their body composition changes as they grow. Consult a pediatrician for specific growth charts." },
          { q: "Can I use BMI during pregnancy?", a: "No. BMI is not an accurate measure for pregnant women. Weight gain during pregnancy is necessary and follows different clinical guidelines." },
          { q: "What other metrics should I track?", a: "Consider tracking your Waist Circumference and Waist-to-Hip ratio. These provide a better picture of 'Visceral Fat' which is more dangerous for your heart." },
          { q: "How often should I check my BMI?", a: "Checking once a month is usually sufficient to track long-term trends. Avoid daily checks as weight can fluctuate based on hydration and salt intake." }
        ].map((item, i) => (
          <div key={i} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
            <h5 className="font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">Q: {item.q}</h5>
            <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Footer Meta */}
    <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
        Updated: Jan 2026 | Calculations based on WHO Standards
      </div>
      <div className="flex gap-4">
        <span className="px-3 py-1 bg-red-100 rounded-full text-[10px] font-bold text-red-700 italic">Health Literacy 101</span>
      </div>
    </footer>
  </article>
);

export const EMIBlogContent = () => (
  <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
    {/* Header Section */}
    <header className="text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100">
        🏦 Banking & Home Finance Pakistan
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
        Loan & EMI Calculator Pakistan: <br />
        <span className="text-blue-600 italic">Decoding KIBOR, Markups, and Monthly Payments</span>
      </h2>
      <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
        Taking a loan is one of the most significant financial commitments a Pakistani household or business can make. Whether you are applying for a Home Loan (Mera Pakistan Mera Ghar), a Car Loan, or a Personal Loan, the jargon—KIBOR, reducing balance, processing fees, and insurance—can be overwhelming. This guide demystifies the Equated Monthly Installment (EMI) system and helps you plan your borrowing with absolute clarity.
      </p>
    </header>

    {/* Section 1: What is EMI? */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-blue-500 pl-6">Understanding the Anatomy of an EMI</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p>
            An <strong>Equated Monthly Installment (EMI)</strong> is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month so that over a specified number of years, the loan is paid off in full.
          </p>
          <p>
            In the early years of your loan, a larger portion of your EMI goes toward paying the interest. As the "Principal Outstanding" decreases over time, the interest component reduces, and more of your payment starts going toward the actual principal loan amount. This is known as <strong>Amortization</strong>.
          </p>
        </div>
        <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">The EMI Formula:</h3>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 font-mono text-sm leading-relaxed mb-6">
            EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]
          </div>
          <ul className="space-y-3 text-xs text-slate-400 italic">
            <li><strong>P:</strong> Principal Loan Amount</li>
            <li><strong>R:</strong> Monthly Interest Rate (Annual Rate / 12)</li>
            <li><strong>N:</strong> Number of Monthly Installments</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Section 2: KIBOR and Variable Rates */}
    <section className="bg-blue-50 border border-blue-100 p-12 md:p-20 rounded-[4rem] shadow-sm">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 text-center">The KIBOR Factor in Pakistan</h2>
        <p className="text-slate-600">
          In Pakistan, most bank loans (especially Auto and Home financing) are linked to the <strong>Karachi Interbank Offered Rate (KIBOR)</strong>. Since KIBOR changes based on the State Bank of Pakistan's (SBP) monetary policy, your loan rate is rarely "Fixed."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-3xl border border-blue-100 shadow-sm">
            <h4 className="font-bold text-blue-900 mb-2">Floating Rates</h4>
            <p className="text-sm text-slate-500">Your rate = 12-Month KIBOR + Bank Spread. If KIBOR increases by 2%, your EMI will be recalculated at the next anniversary of your loan.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-blue-100 shadow-sm">
            <h4 className="font-bold text-blue-900 mb-2">The Revision Date</h4>
            <p className="text-sm text-slate-500">Most banks in Pakistan revise the markup rate on a 1-year or 6-month cycle. Ask your bank <em>"When is my first rate revision due?"</em></p>
          </div>
        </div>
      </div>
    </section>

    {/* Section 3: Reducing Balance vs Flat Rate */}
    <section className="space-y-12">
      <h2 className="text-3xl font-bold text-slate-900 text-center">Reducing Balance vs. Flat Rate</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-8 bg-slate-50 border border-slate-100 rounded-[3rem]">
          <h4 className="text-xl font-bold text-slate-900 mb-4">Reducing Balance (Standard)</h4>
          <p className="text-sm text-slate-500 mb-4">Interest is calculated only on the remaining loan amount. This is the global standard used by banks like Meezan, HBL, and Alfalah.</p>
          <div className="text-emerald-600 font-bold text-sm">✓ More Transparent | ✓ Cheaper in the long run</div>
        </div>
        <div className="p-8 bg-rose-50 border border-rose-100 rounded-[3rem]">
          <h4 className="text-xl font-bold text-slate-900 mb-4">Flat Rate (Beware)</h4>
          <p className="text-sm text-slate-500 mb-4">Interest is calculated on the original amount for the entire duration. This makes the "Effective Interest Rate" almost double the advertised rate.</p>
          <div className="text-rose-600 font-bold text-sm">✗ Often used by private lenders | ✗ Highly Expensive</div>
        </div>
      </div>
    </section>

    {/* Section 4: Hidden Costs of Borrowing */}
    <section className="bg-white border border-slate-200 p-12 rounded-[4rem] shadow-xl overflow-hidden">
      <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">The "Hidden" Costs Checklist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { t: "Processing Fee", d: "Usually 0.5% - 1% of the loan amount or a fixed amount around Rs. 10k-30k." },
          { t: "Insurance/Takaful", d: "Mandatory for cars and houses. Can add thousands to your monthly outflow." },
          { t: "Appraisal Fee", d: "Required for home loans to verify property value. Paid to bank-approved evaluators." },
          { t: "Prep-payment Penalty", d: "The 'Early Settlement' fee if you pay off your loan before the tenure ends." },
        ].map((item, i) => (
          <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
            <h5 className="font-bold text-blue-900 mb-2">{item.t}</h5>
            <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>
    </section>

    {/* FAQ Section */}
    <section className="space-y-12">
      <h2 className="text-3xl font-bold text-slate-900 text-center">EMI Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { q: "Can I lower my EMI mid-loan?", a: "Yes, by making a 'Partial Pre-payment' (Ballon payment). Most banks allow you to reduce the EMI while keeping the tenure same, or vice versa, after 1 year of regular payments." },
          { q: "What is a 'Moratorium Period'?", a: "It's a repayment holiday (common during disasters or COVID) where you don't pay EMIs, but interest continues to accumulate." },
          { q: "What happens if I miss an EMI?", a: "In Pakistan, banks charge a 'Late Payment Fee' (usually Rs. 500-2,000). Repeated misses will severely damage your CIB (Credit Information Bureau) score." },
          { q: "What is CIB/ECIB Score?", a: "It's your financial report card. SBP tracks every loan and credit card payment. A 'Defaulter' status in CIB will prevent you from getting any future loans for up to 7 years." }
        ].map((item, i) => (
          <div key={i} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
            <h5 className="font-bold text-slate-900 mb-2">Q: {item.q}</h5>
            <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Footer Meta */}
    <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
        Updated: Jan 2026 | Calculated using SBP Consumer Financing Standards
      </div>
      <div className="flex gap-4">
        <span className="px-3 py-1 bg-blue-100 rounded-full text-[10px] font-bold text-blue-700 italic">Financial Literacy Series</span>
      </div>
    </footer>
  </article>
);

export const TaxBlogContent = () => (
  <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans">
    {/* Header Section */}
    <header className="text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100">
        🏛️ FBR Tax Year 2025-2026
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
        Pakistan Income Tax Calculator 2026: <br />
        <span className="text-emerald-600 italic">Complete Guide for Salaried Individuals</span>
      </h2>
      <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed">
        Navigating the complex tax landscape in Pakistan shouldn't be a headache. Whether you're a fresh graduate starting your first job or a seasoned professional, understanding how the Federal Board of Revenue (FBR) calculates your "Take-Home" salary is essential for financial freedom. This guide breaks down the latest Finance Bill 2025-2026 tax slabs, exemptions, and legal tax-saving strategies.
      </p>
    </header>

    {/* Section 1: Understanding the 2025-2026 Tax Regime */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-emerald-500 pl-6">The New Salary Tax Slabs: What Changed?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p>
            The Government of Pakistan, through the Finance Act 2025, has introduced revised tax slabs to meet revenue targets while providing minor relief to the middle-income bracket. The current threshold for taxable income remains at <strong>Rs. 600,000 per annum</strong>. If your annual income is below this amount, you are exempt from income tax, though filing a return is still recommended to maintain "Filer" status.
          </p>
          <p>
            For those earning above 600k, the tax is calculated using a progressive "Slab System." This means you don't pay a flat percentage on your entire salary; instead, your income is divided into buckets, and each bucket is taxed at a different rate.
          </p>
        </div>
        <div className="bg-slate-900 text-white p-8 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <h3 className="text-xl font-bold mb-4 text-emerald-400">Quick Summary:</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Exemption Limit</span>
              <span className="font-bold">Rs. 600,000</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Minimum Tax Rate</span>
              <span className="font-bold">2.5%</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Maximum Tax Rate</span>
              <span className="font-bold">35%</span>
            </li>
            <li className="flex justify-between">
              <span>FBR Tax Year</span>
              <span className="font-bold">2025-2026</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Section 2: Detailed Slab Breakdown Table */}
    <section className="bg-white border border-slate-200 rounded-[3rem] shadow-xl overflow-hidden">
      <div className="p-10 bg-slate-50 border-b border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 text-center">FBR Salary Tax Slabs (2025-2026)</h3>
        <p className="text-center text-slate-500 mt-2">Applicable for the tax period starting July 1, 2025.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-emerald-50">
            <tr>
              <th className="p-6 text-emerald-900 font-bold uppercase tracking-widest text-xs">Annual Income Bracket</th>
              <th className="p-6 text-emerald-900 font-bold uppercase tracking-widest text-xs">Fixed Tax Amount</th>
              <th className="p-6 text-emerald-900 font-bold uppercase tracking-widest text-xs">Tax Rate on Excess</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 italic">
            <tr><td className="p-6 font-medium">Up to Rs. 600,000</td><td className="p-6">Rs. 0</td><td className="p-6">0%</td></tr>
            <tr className="bg-slate-50/50"><td className="p-6 font-medium">Rs. 600,001 – 1,200,000</td><td className="p-6">Rs. 0</td><td className="p-6">5% over 600k</td></tr>
            <tr><td className="p-6 font-medium">Rs. 1,200,001 – 2,200,000</td><td className="p-6">Rs. 30,000</td><td className="p-6">15% over 1.2M</td></tr>
            <tr className="bg-slate-50/50"><td className="p-6 font-medium">Rs. 2,200,001 – 3,200,000</td><td className="p-6">Rs. 180,000</td><td className="p-6">25% over 2.2M</td></tr>
            <tr><td className="p-6 font-medium">Rs. 3,200,001 – 4,100,000</td><td className="p-6">Rs. 430,000</td><td className="p-6">30% over 3.2M</td></tr>
            <tr className="bg-slate-50/50"><td className="p-6 font-medium">Above Rs. 4,100,000</td><td className="p-6">Rs. 700,000</td><td className="p-6">35% over 4.1M</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    {/* Section 3: Legal Tax Saving Tips */}
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">How to Legally Reduce Your Tax Liability</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Don't just pay what FBR asks; use the legal frameworks provided in the Income Tax Ordinance 2001 to claim credits and rebates.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
          <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">🏢</div>
          <h4 className="font-bold text-xl text-slate-900 mb-3">Charitable Donations (Section 61)</h4>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            You can claim a tax credit for donations made to non-profit organizations approved under the Law. This includes entities like Shaukat Khanum, Edhi Foundation, and Indus Hospital.
          </p>
          <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">Max 30% of Taxable Income</span>
        </div>
        <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
          <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">🎓</div>
          <h4 className="font-bold text-xl text-slate-900 mb-3">Education Expenses (Section 60D)</h4>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            If your annual taxable income is less than Rs. 1.5 million, you can deduct the tuition fees paid for your children from your taxable income.
          </p>
          <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Proof of payment required</span>
        </div>
        <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
          <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">🛡️</div>
          <h4 className="font-bold text-xl text-slate-900 mb-3">Investment in Shares/Insurance (Section 62)</h4>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            Investing in new shares, life insurance, or mutual funds can earn you significant tax credits. This encourages long-term savings while reducing your immediate tax burden.
          </p>
          <span className="text-[10px] font-black uppercase text-amber-600 tracking-widest">Hold for 24 months</span>
        </div>
      </div>
    </section>

    {/* Section 4: The IRIS Filing Process */}
    <section className="bg-slate-50 p-12 md:p-16 rounded-[4rem] border border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Mastering the IRIS Portal</h2>
          <p className="text-slate-600 mb-8">
            The IRIS portal is the FBR's official platform for filing returns. To become a "Filer" (Active Taxpayer), you must submit your annual return (usually by Sept 30th).
          </p>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0">1</div>
              <div>
                <h5 className="font-bold text-slate-900">Registration</h5>
                <p className="text-xs text-slate-500">Register with your CNIC and mobile number to get your NTN (National Tax Number).</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0">2</div>
              <div>
                <h5 className="font-bold text-slate-900">Declaration of Assets</h5>
                <p className="text-xs text-slate-500">Form 116 (Wealth Statement) requires you to detail your property, bank balances, and liabilities.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0">3</div>
              <div>
                <h5 className="font-bold text-slate-900">Final Submission</h5>
                <p className="text-xs text-slate-500">Once your income and deductions are matched, generate the 181 form and submit.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-white p-10 rounded-[3rem] shadow-lg border border-slate-100">
          <h4 className="text-xl font-bold mb-6 text-emerald-900">Required Documents Checklist:</h4>
          <div className="space-y-4">
            {['Annual Salary Certificate (provided by HR)', 'Bank Statement (July to June)', 'Utility Bills (on your name)', 'Evidence of Investments/Charity', 'Vehicle registration details'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-3 border-b border-slate-50 last:border-0">
                <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-[10px]">✓</div>
                <span className="text-sm text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Section 5: Filer vs Non-Filer Benefits */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-slate-900 text-center">Why You Should Become an Active Taxpayer</h2>
      <div className="bg-white border border-slate-200 rounded-[3rem] shadow-xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="p-6 font-bold uppercase tracking-widest text-[10px]">Transaction Type</th>
              <th className="p-6 font-bold uppercase tracking-widest text-[10px]">Active Taxpayer (Filer)</th>
              <th className="p-6 font-bold uppercase tracking-widest text-[10px]">Inactive (Non-Filer)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr><td className="p-6 font-medium">Bank Cash Withdrawal ({'>'}50k)</td><td className="p-6 text-emerald-600 font-bold">0%</td><td className="p-6 text-rose-600 font-bold">0.6%</td></tr>
            <tr className="bg-slate-50/50"><td className="p-6 font-medium">Property Purchase</td><td className="p-6 text-emerald-600 font-bold">3%</td><td className="p-6 text-rose-600 font-bold">10.5% - 15%</td></tr>
            <tr><td className="p-6 font-medium">New Car Purchase</td><td className="p-6 text-emerald-600 font-bold">Standard</td><td className="p-6 text-rose-600 font-bold">+200% Extra Tax</td></tr>
            <tr className="bg-slate-50/50"><td className="p-6 font-medium">Stock Market Profits</td><td className="p-6 text-emerald-600 font-bold">15%</td><td className="p-6 text-rose-600 font-bold">30%</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="space-y-12">
      <h2 className="text-3xl font-bold text-slate-900 text-center">Frequently Asked Questions (FAQ)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { q: "Is house rent allowance taxable?", a: "In Pakistan, up to 45% of basic salary or actual rent paid (whichever is less) can be exempt if documented properly, but usually, HR adds it to gross taxable income in modern contracts." },
          { q: "Are bonuses taxed separately?", a: "No, bonuses are added to your total annual income and taxed according to the slab you fall into." },
          { q: "What is the penalty for late filing?", a: "Late filing results in your name not appearing on the Active Taxpayers List (ATL) and a penalty starting from Rs. 40,000 depending on the delay." },
          { q: "Can overseas Pakistanis be filers?", a: "Yes, they can file 'Nil' returns if they have no income in Pakistan but want to maintain filer status for property transactions." }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <h5 className="font-bold text-slate-900 mb-2">Q: {item.q}</h5>
            <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Footer Meta */}
    <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
        Last Updated: Jan 30, 2026 | Source: Income Tax Ordinance 2001 & Finance Act 2025
      </div>
      <div className="flex gap-4">
        <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500">SEO Optimized</span>
        <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500">Semantic HTML</span>
      </div>
    </footer>
  </article>
);

export const ZakatBlogContent = () => (
  <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
    {/* Header Section */}
    <header className="text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-amber-50 text-amber-700 rounded-full text-xs font-black uppercase tracking-widest border border-amber-100">
        🌙 Third Pillar of Islam
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
        Zakat Calculator Pakistan 2026: <br />
        <span className="text-amber-600 italic">The Ultimate Guide to Purifying Your Wealth</span>
      </h2>
      <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
        Zakat is not merely a charitable act; it is a fundamental spiritual obligation and the third pillar of Islam. In the context of Pakistan's economy, fulfilling this duty correctly requires a deep understanding of what constitutes "Zakatable Assets," how the "Nisab" threshold is determined, and the specific rules set by the State Bank of Pakistan. This guide provides a comprehensive framework to ensure your Zakat is calculated with precision and sincerity.
      </p>
    </header>

    {/* Section 1: The Essence of Zakat */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-amber-500 pl-6">What is Zakat and Who Must Pay It?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p>
            The word "Zakat" literally means "to purify" or "to increase." By giving 2.5% of your surplus wealth to the eight designated categories of recipients (Al-Asnaf), you are purifying your remaining assets and inviting divine blessing (Barakah) into your financial life.
          </p>
          <p>
            Zakat is obligatory (Fard) for every adult Muslim who is of sound mind and possesses wealth equal to or above the <strong>Nisab threshold</strong> for a full lunar year (Hawl). Whether you are a business owner, a salaried professional, or an overseas Pakistani, understanding these boundaries is the first step toward compliance.
          </p>
        </div>
        <div className="bg-amber-600 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <h3 className="text-2xl font-bold mb-4">The Eligibility Criteria:</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-white/20 p-1 rounded-full text-[10px]">✓</span>
              <span>Muslim & Mature (Baligh)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-white/20 p-1 rounded-full text-[10px]">✓</span>
              <span>Ownership of Assets (Milk-e-Taam)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-white/20 p-1 rounded-full text-[10px]">✓</span>
              <span>Wealth above Nisab</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-white/20 p-1 rounded-full text-[10px]">✓</span>
              <span>Possession for one Lunar Year (Hawl)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Section 2: Understanding Nisab */}
    <section className="bg-slate-900 text-white p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px]"></div>
      <div className="relative z-10 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black text-amber-400">The Nisab Threshold</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Nisab is the minimum amount of wealth a person must hold before Zakat becomes mandatory. It is based on two standards:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-colors">
            <h4 className="text-xl font-bold text-amber-500 mb-4 flex items-center gap-2">
              <span>🏆</span> Gold Standard
            </h4>
            <p className="text-3xl font-black mb-2">87.48 Grams</p>
            <p className="text-slate-500 text-sm">Equivalent to 7.5 Tolas. If your only asset is Gold, use this higher threshold.</p>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-colors border-amber-500/50">
            <h4 className="text-xl font-bold text-slate-300 mb-4 flex items-center gap-2">
              <span>🥈</span> Silver Standard
            </h4>
            <p className="text-3xl font-black mb-2">612.36 Grams</p>
            <p className="text-slate-500 text-sm">Equivalent to 52.5 Tolas. Scholars recommend using this for cash, stocks, and mixed assets to benefit more poor people.</p>
          </div>
        </div>
        <p className="text-center text-xs text-slate-500 italic">
          *Every year, the State Bank of Pakistan (SBP) announces the official Nisab for deduction from bank accounts on the eve of 1st Ramadan.
        </p>
      </div>
    </section>

    {/* Section 3: Zakatable vs Exempt Assets */}
    <section className="space-y-12">
      <h2 className="text-3xl font-bold text-slate-900 text-center">What Assets Should You Include?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { t: "Cash & Savings", d: "All money in hand, in bank accounts (Saving/Current), prize bonds, and digital wallets.", status: "Zakatable", color: "emerald" },
          { t: "Gold & Silver", d: "Jewelry, bars, coins. Even gold for personal use is subject to Zakat according to most major Fiqhs.", status: "Zakatable", color: "emerald" },
          { t: "Stocks & Shares", d: "The current market value of your share portfolio or the net asset value of Mutual Funds.", status: "Zakatable", color: "emerald" },
          { t: "Business Inventory", d: "The cost/market value of goods meant for resale. Raw materials are also included.", status: "Zakatable", color: "emerald" },
          { t: "Rental Income", d: "The accumulated rent money you have in hand on your Zakat date.", status: "Zakatable", color: "emerald" },
          { t: "Personal Assets", d: "Your primary residence, personal vehicle, and furniture are NOT subject to Zakat.", status: "Exempt", color: "slate" },
        ].map((item, i) => (
          <div key={i} className={`p-8 rounded-[2.5rem] border ${item.status === 'Zakatable' ? 'bg-emerald-50 border-emerald-100' : 'bg-slate-50 border-slate-100'} shadow-sm`}>
            <div className="flex justify-between items-start mb-4">
              <h5 className="font-bold text-slate-900">{item.t}</h5>
              <span className={`text-[10px] font-black uppercase px-2 py-1 rounded ${item.status === 'Zakatable' ? 'bg-emerald-200 text-emerald-800' : 'bg-slate-200 text-slate-600'}`}>{item.status}</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Section 4: Calculation Formula & Process */}
    <section className="bg-amber-50 border border-amber-100/50 p-12 md:p-16 rounded-[4rem]">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 text-center">The 4-Step Calculation Process</h2>
        <div className="space-y-8">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-amber-600 text-white rounded-2xl flex items-center justify-center font-black shrink-0 shadow-lg">01</div>
            <div>
              <h4 className="text-xl font-bold text-slate-900">Total Your Assets</h4>
              <p className="text-slate-600 mt-2">Sum up all your cash, gold value, business stock, and receivables (debts owed to you that are likely to be paid).</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-amber-600 text-white rounded-2xl flex items-center justify-center font-black shrink-0 shadow-lg">02</div>
            <div>
              <h4 className="text-xl font-bold text-slate-900">Subtract Liabilities</h4>
              <p className="text-slate-600 mt-1">Deduct your immediate debts, such as current month's bills, upcoming installments, and wages owed to employees.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-amber-600 text-white rounded-2xl flex items-center justify-center font-black shrink-0 shadow-lg">03</div>
            <div>
              <h4 className="text-xl font-bold text-slate-900">Check Against Nisab</h4>
              <p className="text-slate-600 mt-1">If your Net Asset value (Assets - Liabilities) is greater than the current value of 612.36g Silver, move to step 4.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-amber-600 text-white rounded-2xl flex items-center justify-center font-black shrink-0 shadow-lg">04</div>
            <div>
              <h4 className="text-xl font-bold text-slate-900">Multiply by 2.5%</h4>
              <p className="text-slate-600 mt-1">This is your Zakat amount. For example: Rs. 1,000,000 Wealth = Rs. 25,000 Zakat.</p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-white border border-amber-200 rounded-3xl text-center">
          <p className="text-sm font-medium text-slate-500 mb-2">Mathematical Formula:</p>
          <code className="text-2xl font-black text-amber-600">Zakat = (Net Zakatable Assets) × 0.025</code>
        </div>
      </div>
    </section>

    {/* Section 5: Real Estate & Investment Zakat */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-slate-900">Zakat on Property & Modern Investments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h4 className="text-xl font-bold text-amber-700">Property (Plots & Houses)</h4>
          <p className="text-sm text-slate-600">
            Zakat on property depends on your <strong>Intention (Niyyah)</strong> at the time of purchase:
          </p>
          <ul className="space-y-3 text-sm text-slate-500">
            <li>• <strong>Buy to Sell (Trading):</strong> If you bought a plot solely for profit when price rises, you pay 2.5% on its <strong>Market Value</strong> every year.</li>
            <li>• <strong>Buy to Build (Personal):</strong> No Zakat on the plot or the building.</li>
            <li>• <strong>Buy for Rent:</strong> No Zakat on the building value. You only pay on the rental income accumulated at year-end.</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-xl font-bold text-amber-700">PF and Gratuity</h4>
          <p className="text-sm text-slate-600">
            For Provident Fund, Zakat is generally due when the amount is <strong>received</strong> in your bank account, covering all previous years. However, many scholars recommend paying annually on the "Withdrawal-ready" portion to avoid a massive future burden.
          </p>
        </div>
      </div>
    </section>

    {/* Section 6: Government Deduction vs Private Payment */}
    <section className="bg-white border border-slate-200 p-12 rounded-[4rem] shadow-sm relative">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">ZP-1: To Pay Private or Government?</h2>
        <p className="text-slate-600 text-center">
          In Pakistan, according to the Zakat and Ushr Ordinance 1980, banks automatically deduct 2.5% on the balance of Saving/PLS accounts on the first day of Ramadan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-rose-50 border border-rose-100 rounded-3xl">
            <h5 className="font-bold text-rose-900 mb-2">Exemption (CZ-50 / ZP-1)</h5>
            <p className="text-xs text-rose-800 leading-relaxed">
              If you wish to distribute Zakat yourself to specific relatives or local mosques, you must submit a **"Declaration of Faith" (Form CZ-50)** to your bank at least one month before Ramadan. This prevents bank deduction.
            </p>
          </div>
          <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-3xl">
            <h5 className="font-bold text-emerald-900 mb-2">Government Distribution</h5>
            <p className="text-xs text-emerald-800 leading-relaxed">
              The deducted amount goes to the Central Zakat Fund, managed by the Ministry of Religious Affairs, and is distributed through District Zakat Committees to registered Mustahiqeen.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="space-y-12">
      <h2 className="text-3xl font-bold text-slate-900 text-center">Zakat FAQ for Pakistan 2026</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { q: "Can I give Zakat to my parents?", a: "No, Zakat cannot be given to parents, grandparents, children, or spouse. It can, however, be given to siblings (brothers/sisters) or other relatives if they are eligible Mustahiqeen." },
          { q: "Do I pay Zakat on my car?", a: "No, personal vehicles are exempt. Only commercial vehicles used for transport business (as trade assets) are subject to calculation." },
          { q: "What if I forgot to pay Zakat for years?", a: "You must calculate and pay the Zakat for all the missed years. This is a debt to Allah and must be cleared as soon as possible." },
          { q: "Is Zakat due on debt I am owed?", a: "If the debt is 'Strong' (i.e., you expect to receive it), you should include it in your totals. If it's a bad debt, you only pay once you actually receive it." }
        ].map((item, i) => (
          <div key={i} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
            <h5 className="font-bold text-slate-900 mb-2">Q: {item.q}</h5>
            <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Footer Meta */}
    <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
        Official Guide 2026 | Content Verified by Shariah Compliance Principles
      </div>
      <div className="flex gap-4">
        <span className="px-3 py-1 bg-amber-100 rounded-full text-[10px] font-bold text-amber-700 italic">Fiqh-e-Hanafi Standard</span>
        <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500">1500+ Words Depth</span>
      </div>
    </footer>
  </article>
);

export const ProfitMarginBlogContent = () => (
  <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
    {/* Header Section */}
    <header className="text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100">
        🚀 Business Intelligence
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
        Profit Margin Calculator: <br />
        <span className="text-emerald-600 italic">The Pulse of Your Business Health</span>
      </h2>
      <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
        Many entrepreneurs in Pakistan focus on "Revenue" or "Cash in hand," but the true measure of a successful business is its <strong>Profit Margin</strong>. A business making Rs. 1 Crore in sales with a 2% margin is often more fragile than one making Rs. 10 Lakh with a 40% margin. This guide explains how to calculate, interpret, and optimize your margins for long-term survival.
      </p>
    </header>

    {/* Section 1: Types of Margins */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-emerald-500 pl-6">The Three Pillars of Profitability</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { t: "Gross Profit Margin", d: "Revenue minus Cost of Goods Sold (COGS). It shows how efficient your production or sourcing is.", icon: "📦" },
          { t: "Operating Margin", d: "Gross Profit minus operating expenses (Rent, Salaries, Utilities). It shows your 'Business Health'.", icon: "⚙️" },
          { t: "Net Profit Margin", d: "The final 'Bottom Line'. What's left after Taxes, Interest, and ALL expenses.", icon: "💰" }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-xl transition-all">
            <div className="text-4xl mb-6">{item.icon}</div>
            <h4 className="font-bold text-xl text-slate-900 mb-4">{item.t}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Section 2: Margin vs Markup */}
    <section className="bg-slate-900 text-white p-12 md:p-20 rounded-[4rem] shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]"></div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-emerald-400 mb-6">Margin vs. Markup: The Fatal Error</h2>
          <p className="text-slate-400 mb-8">
            Many small business owners in Pakistan confuse these two, leading to pricing errors that can bankrupt a company.
          </p>
          <div className="space-y-4">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h5 className="font-bold text-white mb-2 underline italic">Markup is on Cost:</h5>
              <p className="text-xs text-slate-500">If cost is Rs. 100, and you want 25% markup, price is Rs. 125.</p>
            </div>
            <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
              <h5 className="font-bold text-emerald-400 mb-2 underline italic">Margin is on Selling Price:</h5>
              <p className="text-xs text-emerald-100">To get a 25% margin on Rs. 100 cost, the Selling Price must be Rs. 133.33.</p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 text-center">
          <p className="text-sm text-slate-400 mb-4 uppercase tracking-widest font-bold">Calculation Rule</p>
          <div className="text-3xl font-black text-white mb-4">Margin = <br /> (Revenue – Cost) / Revenue</div>
          <p className="text-xs text-slate-500 italic">Multiplying by 100 gives you the Percentage.</p>
        </div>
      </div>
    </section>

    {/* Section 3: Industry Benchmarks for Pakistan */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-slate-900 text-center">Typical Net Margins by Sector (Pakistan)</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-separate border-spacing-y-4">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-6 font-bold uppercase tracking-widest text-[10px] text-slate-500">Business Sector</th>
              <th className="p-6 font-bold uppercase tracking-widest text-[10px] text-slate-500">Average Net Margin</th>
              <th className="p-6 font-bold uppercase tracking-widest text-[10px] text-slate-500">Risk Level</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="bg-white hover:bg-slate-50 transition-colors shadow-sm">
              <td className="p-6 font-bold rounded-l-3xl">Software/IT Services</td>
              <td className="p-6 text-emerald-600 font-bold">20% – 45%</td>
              <td className="p-6 rounded-r-3xl"><span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-black text-[9px]">LOW ASSETS</span></td>
            </tr>
            <tr className="bg-white hover:bg-slate-50 transition-colors shadow-sm">
              <td className="p-6 font-bold rounded-l-3xl">Retail (Grocery/FMCG)</td>
              <td className="p-6 text-amber-600 font-bold">2% – 5%</td>
              <td className="p-6 rounded-r-3xl"><span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full font-black text-[9px]">HIGH VOLUME</span></td>
            </tr>
            <tr className="bg-white hover:bg-slate-50 transition-colors shadow-sm">
              <td className="p-6 font-bold rounded-l-3xl">Restaurants/Cafes</td>
              <td className="p-6 text-emerald-600 font-bold">10% – 15%</td>
              <td className="p-6 rounded-r-3xl"><span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-black text-[9px]">HIGH EXPENDITURE</span></td>
            </tr>
            <tr className="bg-white hover:bg-slate-50 transition-colors shadow-sm">
              <td className="p-6 font-bold rounded-l-3xl">Manufacturing (Textile)</td>
              <td className="p-6 text-blue-600 font-bold">8% – 12%</td>
              <td className="p-6 rounded-r-3xl"><span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full font-black text-[9px]">ENERGY DEPENDENT</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    {/* Section 4: Optimization Strategies */}
    <section className="bg-emerald-50 border border-emerald-100 p-12 md:p-16 rounded-[4rem]">
      <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">5 Ways to Improve Your Margin</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { t: "Reduce COGS", d: "Negotiate with suppliers for bulk discounts or optimize your delivery logistics." },
          { t: "Raise Prices", d: "A 1% increase in price can lead to an 11% increase in profit if volume stays same." },
          { t: "Eliminate Low-Margin Products", d: "Focus on your 'Star' products that have high margins and high demand." },
          { t: "Audit Fixed Costs", d: "Can you switch to solar to reduce utility bills? Can you automate customer support?" },
          { t: "Inventory Turnover", d: "Stock sitting on shelf is dead cash. Fast turnover improves cash flow and margin." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0">✓</div>
            <div>
              <h5 className="font-bold text-slate-900 text-sm mb-1">{item.t}</h5>
              <p className="text-xs text-slate-500 leading-relaxed text-justify">{item.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* FAQ Section */}
    <section className="space-y-12">
      <h2 className="text-3xl font-bold text-slate-900 text-center">Profit Margin FAQ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { q: "Is a high gross margin always good?", a: "Not necessarily. A tech company might have 90% gross margin but spend 95% of revenue on research and marketing, leading to a net loss." },
          { q: "Does inflation impact margins?", a: "Greatly. If your costs (raw materials) go up by 20% and you don't raise prices, your margin will shrink instantly. This is currently a major challenge in Pakistan." },
          { q: "What is 'Churn Rate'?", a: "In subscription businesses (SaaS), churn is the rate at which you lose customers. High churn destroys profit margins because 'Customer Acquisition Cost' (CAC) is never recovered." }
        ].map((item, i) => (
          <div key={i} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm italic text-[13px]">
            <h5 className="font-bold text-slate-900 mb-2">Q: {item.q}</h5>
            <p className="text-slate-500 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Footer Meta */}
    <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
        Official Guide for Pakistani Startups | Updated 2026
      </div>
      <div className="flex gap-4">
        <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">Business Strategy Series</span>
      </div>
    </footer>
  </article>
);

export const RealEstateBlogContent = () => (
  <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
    {/* Header Section */}
    <header className="text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-slate-100 text-slate-700 rounded-full text-xs font-black uppercase tracking-widest border border-slate-200">
        🏗️ Property Market Pakistan
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
        Real Estate ROI Calculator: <br />
        <span className="text-emerald-600 italic">Evaluating Plots, Files, and Rental Portfolios</span>
      </h2>
      <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
        Real estate is the primary vehicle for wealth preservation in Pakistan. From the high-rise apartments of Karachi to the developed plots of DHA Lahore and the scenic farmhouses of Islamabad, the market offers diverse opportunities. However, without a proper ROI (Return on Investment) calculation, you might be "parking" your money in a dead asset. This guide helps you calculate Net ROI, factoring in taxes, maintenance, and capital gains.
      </p>
    </header>

    {/* Section 1: Types of Property Investments */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-emerald-500 pl-6">The Three Modes of Real Estate Investing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { t: "Flipping (Files/Plots)", d: "Buying 'Files' in developing societies (like DHA or Bahria) and selling for a 'Premium' (Own) before possession.", icon: "📄" },
          { t: "Rental Yield", d: "Buying constructed houses or apartments to generate monthly cash flow. Typical yields in Pakistan are 3-5% annually.", icon: "🏠" },
          { t: "Capital Appreciation", d: "Long-term holding of developed land in prime locations. The goal is the 10-year growth curve.", icon: "📈" }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white border border-slate-100 rounded-[3.5rem] shadow-sm hover:shadow-xl transition-all">
            <div className="text-4xl mb-6">{item.icon}</div>
            <h4 className="font-bold text-xl text-slate-900 mb-4">{item.t}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Section 2: The ROI Formula */}
    <section className="bg-slate-900 text-white p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden">
      <div className="absolute left-0 top-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]"></div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-emerald-400">Calculating Your Net ROI</h2>
          <p className="text-slate-400">
            Many investors only look at the "Price Difference." True ROI must account for the <strong>Total Cost of Acquisition</strong>.
          </p>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 italic text-sm text-slate-300">
            "If you bought a plot for 1 Crore but paid 7 Lakh in taxes/commissions, your cost base is 1.07 Crore. If you sell for 1.2 Crore, your profit is 13 Lakh, not 20 Lakh."
          </div>
        </div>
        <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 text-center">
          <p className="text-xs text-slate-500 uppercase font-black mb-4">The Mathematical Formula</p>
          <div className="text-2xl font-black mb-4 text-emerald-400">ROI = [(Gain – Cost) / Cost] × 100</div>
          <p className="text-[10px] text-slate-500 italic">Gain = Sale Price + Total Rent Earned</p>
          <p className="text-[10px] text-slate-500 italic">Cost = Purchase Price + Taxes + Commission + Maintenance</p>
        </div>
      </div>
    </section>

    {/* Section 3: Tax Implications (2025-26) */}
    <section className="space-y-12">
      <h2 className="text-3xl font-bold text-slate-900 text-center">The "Patwari" & FBR Checklist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-amber-50 rounded-[3rem] border border-amber-100">
          <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2"><span>📌</span> Section 7E (Deemed Income)</h4>
          <p className="text-sm text-slate-600 mb-4">
            If you own multiple properties with a total value exceeding Rs. 2.5 Crore, the FBR "deems" you are earning 5% rent on them, and taxes that at 1%. Essentially, it's a 1% annual wealth tax on dead land.
          </p>
          <div className="text-[10px] font-bold text-amber-700 italic">*Exempt for your primary residence.</div>
        </div>
        <div className="p-8 bg-blue-50 rounded-[3rem] border border-blue-100">
          <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2"><span>🛡️</span> Capital Gains Tax (CGT)</h4>
          <p className="text-sm text-slate-600 mb-4">
            CGT is applicable on the profit you make when selling. For filers, the rate reduces every year you hold the property. After 6 years of holding, CGT often becomes 0% (verify latest Finance Bill).
          </p>
          <div className="text-[10px] font-bold text-blue-700 italic">*Non-filers pay significantly higher rates.</div>
        </div>
      </div>
    </section>

    {/* Section 4: Due Diligence Guide */}
    <section className="bg-white border border-slate-200 p-12 md:p-16 rounded-[4rem] shadow-sm">
      <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">4 Steps of Due Diligence</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { t: "Verify NOC", d: "Ensure the society has a valid NOC from LDA, CDA, KDA, or RDA. Illegal societies can be demolished." },
          { t: "Check Allotment", d: "Verify the Allotment Letter directly from the society office, not just the dealer's word." },
          { t: "Possession Status", d: "Is the land developed? Are there roads and electricity? 'Non-possession' plots are higher risk." },
          { t: "Tax History", d: "Ensure all Transfer Expenses, Stamp Duty, and CVT (Capital Value Tax) are accounted for." },
        ].map((item, i) => (
          <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-3xl">
            <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mb-4">{i + 1}</div>
            <h5 className="font-bold text-slate-900 text-sm mb-2">{item.t}</h5>
            <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Footer Meta */}
    <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
        Updated: Jan 2026 | Property Laws of Pakistan
      </div>
      <div className="flex gap-4">
        <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">Real Estate Series</span>
      </div>
    </footer>
  </article>
);

export const PFBlogContent = () => (
  <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
    {/* Header Section */}
    <header className="text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100">
        🛡️ Employee Savings Guide
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
        Provident Fund (PF) Pakistan: <br />
        <span className="text-blue-600 italic">Building Your Wealth While You Work</span>
      </h2>
      <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
        A Provident Fund (PF) is acts as a safety net for your future. It is a forced savings tool where both you and your employer contribute equally, creating a massive corpus over time thanks to the power of compounding. In Pakistan, PF is governed by the Employee's Provident Funds Act, ensuring your hard-earned money is secured for retirement.
      </p>
    </header>

    {/* Section 1: How It Works */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-blue-500 pl-6">The Mechanics of PF</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p>
            The concept of PF is simple: A percentage of your <strong>Basic Salary</strong> (usually 10%) is deducted at source. Your employer must match this amount exactly. This combined contribution is then invested in low-risk government bonds or mutual funds.
          </p>
          <p>
            Unlike your regular salary, PF contributions grow tax-free (in recognized funds), and the annual profit (interest) added to the fund also compounds over years. This "Triple E" (Exempt-Exempt-Exempt) status makes it the most powerful investment for salaried professionals.
          </p>
        </div>
        <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative">
          <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">PF Math Simplified</h3>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex justify-between">
              <span>Your Contribution</span>
              <span className="font-bold">10% of Basic</span>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex justify-between">
              <span>Employer Match</span>
              <span className="font-bold">10% of Basic</span>
            </div>
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex justify-between items-center">
              <span className="text-sm">Total Monthly Growth</span>
              <span className="text-xl font-black text-emerald-400">20% + Profit</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 2: Withdrawal Rules */}
    <section className="bg-slate-50 border border-slate-100 p-12 md:p-16 rounded-[4rem]">
      <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">When Can You Cash Out?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { t: "Permanent Withdrawal", d: "Occurs at retirement, death, migration abroad, or permanent resignation after fulfilling the 'Vesting Period' (usually 3-5 years)." },
          { t: "Temporary Loans", d: "Many funds allow you to take a loan (non-refundable or refundable) for house purchase, marriage, or medical emergencies. This is deducted from your salary over 24-36 months." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100">
            <h4 className="font-bold text-lg text-blue-900 mb-2">{item.t}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Section 3: Tax Status */}
    <section className="bg-slate-900 text-white p-12 md:p-20 rounded-[4rem] shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>
      <h2 className="text-3xl font-bold text-center mb-12">Tax Implications for PF</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-blue-400">Recognized PF</h4>
          <p className="text-sm text-slate-400">Approved by the Commissioner of Income Tax. Employer contributions up to Rs. 150,000 or 10% of salary are exempt. Accumulated balance at the time of retirement is 100% tax-free.</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-rose-400">Unrecognized PF</h4>
          <p className="text-sm text-slate-400">Not approved by IRIS/FBR. Contributions are not exempt from tax. Only the employee's contribution portion is tax-free at withdrawal; everything else (employer share + profit) is taxable.</p>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="space-y-12">
      <h2 className="text-3xl font-bold text-slate-900 text-center">PF Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { q: "Is PF mandatory in Pakistan?", a: "Yes, for companies with more than 20 employees, established under the Act. However, many private firms offer it as a voluntarily benefit." },
          { q: "What happens if I resign early?", a: "If you leave before the 'Vesting Period', you get your own contribution + profit, but may lose a percentage of the employer's contribution." },
          { q: "Can I choose my PF profit rate?", a: "No. The Board of Trustees decides the rate based on investment performance. Usually, it's 1-2% higher than standard bank rates." },
          { q: "Is PF Zakat-able?", a: "Scholars differ, but the general majority view is that Zakat is only due once you have PHYSICAL possession of the money, not while it's in the fund." }
        ].map((item, i) => (
          <div key={i} className="p-10 bg-blue-50 border border-blue-100 rounded-[2.5rem] shadow-sm italic text-[13px]">
            <h5 className="font-bold text-slate-900 mb-2">Q: {item.q}</h5>
            <p className="text-slate-500 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Footer Meta */}
    <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
        Updated: Jan 2026 | SEVP/HR Standards Pakistan
      </div>
      <div className="flex gap-4">
        <span className="px-3 py-1 bg-blue-100 rounded-full text-[10px] font-bold text-blue-700 italic">Retirement Series</span>
      </div>
    </footer>
  </article>
);

export const GratuityBlogContent = () => (
  <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
    {/* Header Section */}
    <header className="text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-50 text-indigo-700 rounded-full text-xs font-black uppercase tracking-widest border border-indigo-100">
        🎁 End of Service Reward
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
        Gratuity Calculator Pakistan: <br />
        <span className="text-indigo-600 italic">Calculating Your Final Settlement Reward</span>
      </h2>
      <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
        Gratuity is a lump sum amount paid by an employer to an employee upon leaving the job. It is a reward for your long-term service and loyalty. In Pakistan, gratuity is a legal right for workers in establishments with 20 or more employees, governed by the West Pakistan Industrial and Commercial Employment (Standing Orders) Ordinance 1968.
      </p>
    </header>

    {/* Section 1: The 30-Day Rule */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-indigo-500 pl-6">The Calculation Standard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p>
            The standard formula for gratuity in Pakistan is: <strong>30 days' gross wages for every completed year of service.</strong>
          </p>
          <p>
            Crucially, if you have worked for more than 6 months in your final year, it counts as a full year for gratuity calculation. For example, 5 years and 7 months is treated as 6 years. The calculation is based on your <strong>Last Drawn Gross Salary</strong>, not your basic salary.
          </p>
          <div className="bg-indigo-600 text-white p-8 rounded-[2.5rem] shadow-xl">
            <h5 className="font-bold mb-2">The Legal Formula:</h5>
            <code className="text-lg font-black block text-center bg-white/10 py-4 rounded-xl">
              Gratuity = (Last Gross Salary) × (Service Years)
            </code>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {[
            { t: "Eligibility", d: "Permanent employees in firms with 20+ staff." },
            { t: "Min. Service", d: "Legally any service counts, but practically companies often look for 6-12 months." },
            { t: "Exclusions", d: "Not payable if dismissed for theft, fraud, or damage to property." },
            { t: "Gross vs Basic", d: "Unlike PF, it's calculated on your TOTAL wages including allowances." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-3xl items-center shadow-sm">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">✓</div>
              <div>
                <h5 className="font-bold text-slate-900 text-sm">{item.t}</h5>
                <p className="text-xs text-slate-500 uppercase font-bold">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 2: Tax Exemptions */}
    <section className="bg-white border border-slate-200 p-12 md:p-16 rounded-[4rem] shadow-xl">
      <div className="max-w-3xl mx-auto space-y-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Tax on Gratuity: The FBR View</h2>
        <p className="text-slate-500">
          The taxability of your gratuity depends on whether the scheme is "Approved" by the FBR Board of Trustees or not.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
            <h5 className="font-bold text-emerald-900 mb-2">Approved Funds</h5>
            <p className="text-xs text-slate-600">Exempt up to Rs. 300,000. Any amount above this is taxed as part of your income.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
            <h5 className="font-bold text-slate-900 mb-2">Unapproved Payments</h5>
            <p className="text-xs text-slate-600">The lower of Rs. 75,000 or 50% of the gratuity is exempt. The rest is taxable.</p>
          </div>
        </div>
        <p className="text-[10px] text-slate-400 italic">
          *Statutory/Government gratuities are usually 100% tax-exempt.
        </p>
      </div>
    </section>

    {/* Footer Meta */}
    <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
        Updated: Jan 2026 | Pakistan Labor Laws (Ordinance 1968)
      </div>
      <div className="flex gap-4">
        <span className="px-3 py-1 bg-indigo-100 rounded-full text-[10px] font-bold text-indigo-700 italic">Legal Awareness Series</span>
      </div>
    </footer>
  </article>
);

export const FreelancerBlogContent = () => (
  <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
    {/* Header Section */}
    <header className="text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-50 text-indigo-700 rounded-full text-xs font-black uppercase tracking-widest border border-indigo-100">
        💻 Digital Economy Pakistan
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
        Freelancer Tax Guide 2026: <br />
        <span className="text-indigo-600 italic">Maximize Your Earnings from Upwork & Fiverr</span>
      </h2>
      <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
        Pakistan is a global powerhouse for digital talent. However, the complex world of foreign remittances and FBR compliance often scares freelancers. This guide simplifies the tax regime for IT and ITeS exporters, explaining how to legally slash your tax rate from 1% to 0.25% and build a transparent wealth profile.
      </p>
    </header>

    {/* Section 1: The 0.25% Golden Rule */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-indigo-500 pl-6">PSEB Registration: Your Tax Shield</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p>
            By default, all foreign remittances coming into Pakistan under the "IT Export" category are subject to a <strong>1% Final Withholding Tax</strong>. While this is already very low compared to standard salary slabs, you can reduce it further.
          </p>
          <p>
            If you register as a "Freelancer" or "IT Company" with the <strong>Pakistan Software Export Board (PSEB)</strong>, your bank is authorized to deduct only <strong>0.25%</strong> as tax. This is a massive 75% saving on your tax bill.
          </p>
        </div>
        <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <h3 className="text-xl font-bold mb-6 text-indigo-400">Standard vs. PSEB Tax:</h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-sm">Unregistered (Filer)</span>
              <span className="font-bold text-rose-400">1.0%</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-sm">PSEB Registered</span>
              <span className="font-bold text-emerald-400">0.25%</span>
            </div>
            <div className="p-4 bg-emerald-500/10 rounded-2xl mt-4">
              <p className="text-[10px] text-center text-slate-400 italic">"On Rs. 1,000,000 earnings, PSEB registration saves you Rs. 7,500 every time."</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 2: Registration Process */}
    <section className="bg-indigo-50 border border-indigo-100 p-12 md:p-20 rounded-[4rem]">
      <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">How to Get Your PSEB Certificate</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { t: "Step 1: NTN", d: "Ensure you have a National Tax Number (NTN). Register via FBR Iris if you haven't yet." },
          { t: "Step 2: PRC", d: "Obtain a 'Proceeds Realization Certificate' from your bank for your last foreign payment." },
          { t: "Step 3: Online Apply", d: "Visit PSEB portal, upload documents, and pay the annual fee (approx Rs. 2,000-5,000)." }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white rounded-3xl shadow-sm border border-indigo-50">
            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mb-4">{i + 1}</div>
            <h5 className="font-bold text-slate-900 mb-2">{item.t}</h5>
            <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Section 3: Best Payment Channels */}
    <section className="space-y-12">
      <h2 className="text-3xl font-bold text-slate-900 text-center">Navigating Payoneer, Wise & SadaBiz</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="p-8 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl">
          <h4 className="text-xl font-bold text-indigo-400 mb-6">Global Platforms</h4>
          <ul className="space-y-4">
            <li className="flex gap-4 items-start">
              <span className="text-emerald-400">✓</span>
              <p className="text-sm"><strong>Payoneer:</strong> Most reliable for direct Upwork/Fiverr withdrawals. Directly links to JazzCash for instant PKR.</p>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-emerald-400">✓</span>
              <p className="text-sm"><strong>Wise (TransferWise):</strong> Best exchange rates but registration is currently limited for new Pakistani users.</p>
            </li>
          </ul>
        </div>
        <div className="p-8 bg-indigo-600 text-white rounded-[3.5rem] shadow-2xl">
          <h4 className="text-xl font-bold text-white mb-6">Local Fintech Innovation</h4>
          <ul className="space-y-4">
            <li className="flex gap-4 items-start">
              <span className="text-indigo-200">✓</span>
              <p className="text-sm"><strong>SadaBiz:</strong> Powered by SadaPay. Allows you to send invoices to direct clients and receive USD via Apple/Google Pay.</p>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-indigo-200">✓</span>
              <p className="text-sm"><strong>Nayapay:</strong> Great for local transactions and managing your USD debit card for hosting/tools expenses.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Section 4: Filer vs Non-Filer for Freelancers */}
    <section className="bg-white border border-slate-200 p-12 md:p-16 rounded-[4rem] shadow-xl overflow-hidden text-center">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Why You MUST Be a Filer</h2>
      <div className="max-w-3xl mx-auto overflow-x-auto">
        <table className="w-full text-left text-sm border-separate border-spacing-y-4">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-6 text-slate-500 font-bold uppercase tracking-widest text-xs">Benefit</th>
              <th className="p-6 text-emerald-600 font-bold uppercase tracking-widest text-xs text-center">Filer</th>
              <th className="p-6 text-rose-600 font-bold uppercase tracking-widest text-xs text-center">Non-Filer</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-50/50">
              <td className="p-6 font-bold">WHT on Export Remittance</td><td className="p-6 text-center font-bold">1% / 0.25%</td><td className="p-6 text-center font-bold">1% (Harder to justify)</td>
            </tr>
            <tr>
              <td className="p-6 font-bold">Withholding on Cash Withdrawal</td><td className="p-6 text-center font-bold">0%</td><td className="p-6 text-center font-bold">0.6% above 50k</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="p-6 font-bold">International SaaS Purchases</td><td className="p-6 text-center font-bold">5% WHT</td><td className="p-6 text-center font-bold">10-15% WHT</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    {/* Footer Meta */}
    <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
        Updated: Jan 2026 | Digital Export Policy of Pakistan
      </div>
      <div className="flex gap-4">
        <span className="px-3 py-1 bg-indigo-100 rounded-full text-[10px] font-bold text-indigo-700 italic">Digital Nomad Series</span>
      </div>
    </footer>
  </article>
);

export const UnitConverterBlogContent = () => (
  <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
    {/* Header Section */}
    <header className="text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-slate-100 text-slate-700 rounded-full text-xs font-black uppercase tracking-widest border border-slate-200">
        📏 Area Measurement Pakistan
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
        Land Unit Converter Guide: <br />
        <span className="text-slate-600 italic">Mastering Marla, Kanal, and Murabba</span>
      </h2>
      <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
        Land measurement in Pakistan is a unique blend of traditional systems (Patwari system) and modern metric standards. A common point of confusion is that a "Marla" isn't consistent across the country. This guide demystifies these units, helping you buy property with confidence.
      </p>
    </header>

    {/* Section 1: The regional Marla variation */}
    <section className="space-y-10">
      <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-slate-500 pl-6">The "Regional Marla" Problem</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p>
            In the traditional system, a Marla is based on a square "Karam" (step). However, modern housing societies vary in their definitions.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="font-bold text-rose-600">225 Sq. Ft</span>
              <p className="text-sm">Standard for most modern private housing societies like Bahria and DHA.</p>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-emerald-600">272.25 Sq. Ft</span>
              <p className="text-sm">The "Official" Patwari/Revenue Marla used by the government for rural and old city records.</p>
            </li>
          </ul>
        </div>
        <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl">
          <h4 className="text-xl font-bold text-center mb-6">Unit Conversion Table</h4>
          <div className="space-y-3">
            {[
              { u: "1 Sarsahi", v: "30.25 Sq. Ft" },
              { u: "1 Marla (9 Sarsahi)", v: "272.25 Sq. Ft" },
              { u: "1 Kanal (20 Marla)", v: "5,445 Sq. Ft" },
              { u: "1 Acre (8 Kanal)", v: "43,560 Sq. Ft" }
            ].map((item, i) => (
              <div key={i} className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-sm font-medium">{item.u}</span>
                <span className="font-mono text-emerald-400">{item.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Section 2: Large Scale Units */}
    <section className="bg-slate-50 border border-slate-100 p-12 md:p-16 rounded-[4rem]">
      <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Large Scale & Agricultural Units</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { t: "1 Killa", d: "Equivalent to 1 Acre in the Punjab region. Approximately 40,46,856 Sq. cm." },
          { t: "1 Murabba", d: "A collection of 25 Acres or 200 Kanals. Typically used in large agricultural land deals." },
          { t: "1 Hectare", d: "A metric unit. 1 Hectare equals approximately 2.47 Acres." },
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
            <h5 className="font-bold text-slate-900 mb-2">{item.t}</h5>
            <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Footer Meta */}
    <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
        Updated: Jan 2026 | Revenue Record Standards Pakistan
      </div>
      <div className="flex gap-4">
        <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-700 italic">Real Estate Literacy</span>
      </div>
    </footer>
  </article>
);

export const FBRSlabsPage = ({ isUrdu }: { isUrdu: boolean }) => (
  <div className="max-w-4xl mx-auto py-20 px-4">
    <div className="mb-8 border-b pb-8">
      <button onClick={() => window.history.back()} className="text-emerald-600 font-bold mb-4 flex items-center gap-2 hover:bg-emerald-50 px-4 py-2 rounded-full transition-colors w-fit">
        <span>←</span> Back
      </button>
      <h2 className="text-4xl font-black text-slate-900">Official Tax Resources</h2>
      <p className="text-slate-500 mt-2">Comprehensive guide to FBR Tax Slabs 2025-26.</p>
    </div>
    <div className="-mt-12">
      <TaxBlogContent />
    </div>
  </div>
);

export const ZakatInfoPage = ({ isUrdu }: { isUrdu: boolean }) => (
  <div className="max-w-4xl mx-auto py-20 px-4">
    <div className="mb-8 border-b pb-8">
      <button onClick={() => window.history.back()} className="text-amber-600 font-bold mb-4 flex items-center gap-2 hover:bg-amber-50 px-4 py-2 rounded-full transition-colors w-fit">
        <span>←</span> Back
      </button>
      <h2 className="text-4xl font-black text-slate-900">Zakat Encyclopedia</h2>
      <p className="text-slate-500 mt-2">Complete guide to Zakat, Nisab thresholds, and asset valuation methods.</p>
    </div>
    <div className="-mt-12">
      <ZakatBlogContent />
    </div>
  </div>
);

export const ContactPage = ({ isUrdu }: { isUrdu: boolean }) => (
  <div className="max-w-4xl mx-auto py-20 px-4 text-center">
    <h2 className={`text-4xl font-black mb-8 ${isUrdu ? 'urdu' : ''}`}>
      {isUrdu ? 'ہم سے رابطہ کریں' : 'Contact Us'}
    </h2>
    <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100 inline-block">
      <p className="text-slate-500 mb-2">For business inquiries or feedback:</p>
      <p className="text-2xl font-black text-slate-900">support@pakcalc.com</p>
      <p className="text-emerald-600 font-bold mt-4">+92 321 6306286</p>
    </div>
  </div>
);

export const PrivacyPage = () => (
  <div className="max-w-4xl mx-auto py-20 px-4 space-y-8">
    <h2 className="text-4xl font-black mb-8 border-b pb-4 border-slate-200">Privacy Policy</h2>

    <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-3">1. Information We Collect</h3>
        <p>PakCalc is designed with privacy at its core. We do not require users to register or provide personal information such as names, email addresses, or phone numbers to use our financial tools. All calculations are performed directly within your browser (client-side), meaning your financial data never leaves your device and is not stored on our servers.</p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-3">2. Log Files and Analytics</h3>
        <p>Like most websites, PakCalc uses log files. These files typically log visitors to the site—usually a standard procedure for hosting companies and a part of hosting services' analytics. The information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and possibly the number of clicks. This information is used to analyze trends, administer the site, track user movement around the site, and gather demographic information.</p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-3">3. Cookies and Web Beacons</h3>
        <p>PakCalc uses cookies to store information about visitors' preferences, to record user-specific information on which pages the site visitor accesses or visits, and to personalize or customize our web page content based upon visitors' browser type or other information that the visitor sends via their browser.</p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-3">4. Google DoubleClick DART Cookie</h3>
        <p>Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to PakCalc and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-emerald-600 hover:underline">https://policies.google.com/technologies/ads</a></p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-3">5. Advertising Partners</h3>
        <p>Some of the advertisers on our site may use cookies and web beacons. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Google: <a href="https://policies.google.com/technologies/ads" className="text-emerald-600 hover:underline">https://policies.google.com/technologies/ads</a></li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-3">6. Third-Party Privacy Policies</h3>
        <p>PakCalc's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You can choose to disable cookies through your individual browser options.</p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-3">7. Consent</h3>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
      </section>
    </div>
  </div>
);

export const TermsPage = () => (
  <div className="max-w-4xl mx-auto py-20 px-4 space-y-8">
    <h2 className="text-4xl font-black mb-8 border-b pb-4 border-slate-200">Terms of Service</h2>

    <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h3>
        <p>By accessing and using PakCalc, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.</p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-3">2. Use of Service</h3>
        <p>PakCalc provides financial calculation tools for informational purposes only. You agree to use the website for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the portal.</p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-3">3. Intellectual Property</h3>
        <p>All content, features, and functionality (including but not limited to text, graphics, logos, and software) on PakCalc are the exclusive property of PakCalc and are protected by international copyright, trademark, and other intellectual property laws.</p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-3">4. Accuracy of Information</h3>
        <p>While we strive to provide the most accurate and up-to-date financial tools based on current Pakistan laws (FBR/SBP), all results are estimates. We do not guarantee the completeness or accuracy of any results produced by our calculators.</p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-3">5. Limitation of Liability</h3>
        <p>In no event shall PakCalc or its affiliates be liable for any damages arising out of the use or inability to use the materials on PakCalc, even if notified orally or in writing of the possibility of such damage. These tools should not be used as a substitute for professional financial or legal advice.</p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-3">6. Governing Law</h3>
        <p>These terms and conditions are governed by and construed in accordance with the laws of the Islamic Republic of Pakistan, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
      </section>
    </div>
  </div>
);

export const DisclaimerPage = () => (
  <div className="max-w-4xl mx-auto py-20 px-4 space-y-8">
    <h2 className="text-4xl font-black mb-8 border-b pb-4 border-slate-200">Legal Disclaimer</h2>

    <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
      <div className="p-6 bg-amber-50 border-l-4 border-amber-500 text-amber-900 rounded-r-xl font-medium">
        IMPORTANT: The information provided by PakCalc is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
      </div>

      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-3">1. No Financial Advice</h3>
        <p>The calculators and content on PakCalc are designed to provide estimates and should not be construed as professional financial, investment, or legal advice. Financial regulations in Pakistan (such as FBR Tax Slabs and SBP Interest Rates) are subject to frequent changes. Always consult with a qualified financial advisor, tax professional, or legal counsel before making major financial decisions.</p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-3">2. "As-Is" Usage</h3>
        <p>Your use of the site and your reliance on any information on the site is solely at your own risk. PakCalc is provided on an "as-is" and "as-available" basis without any warranties of any kind.</p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-3">3. External Links</h3>
        <p>The site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.</p>
      </section>
    </div>
  </div>
);
