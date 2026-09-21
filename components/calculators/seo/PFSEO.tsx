import React from 'react';
import { Link } from 'react-router-dom';

export const PFSEO = () => {
  return (
    <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
      {/* Header Section */}
      <header className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100">
          Corporate Benefits & Savings
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Provident Fund Calculator Pakistan: <br />
          <span className="text-blue-600 italic">Secure Your Retirement</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
          The Provident Fund (PF) is one of the most reliable wealth-building tools for corporate employees in Pakistan. By combining your monthly deduction with an equal employer match and compounding interest, your PF balance grows significantly over time. Use our <strong>Provident Fund Calculator Pakistan</strong> to project your exact PF maturity amount and understand how your salary deductions translate into long-term wealth.
        </p>
      </header>

      {/* Section: How PF Works */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-blue-500 pl-6">How is Provident Fund Calculated in Pakistan?</h2>
        <p className="text-slate-600 leading-relaxed">
          In Pakistan, the Provident Fund is governed by the Provident Funds Act 1925 and the Income Tax Ordinance 2001. A standard PF scheme requires both the employee and the employer to contribute an equal percentage of the employee's basic salary every month into a trusted fund.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Standard Formula (10% Rule)</h3>
            <ul className="list-disc pl-5 space-y-3 text-sm text-slate-700 marker:text-blue-500">
              <li>Contributions are calculated strictly on your <strong>Basic Salary</strong>, not your gross salary (which includes allowances).</li>
              <li>The most common deduction rate in corporate Pakistan is <strong>8.33% to 10%</strong>.</li>
              <li>Your employer matches this exact amount. Therefore, if you contribute 10%, a total of 20% of your basic salary goes into the fund.</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Magic of Compounding Interest</h3>
            <p className="text-sm text-slate-700 mb-4">
              The PF trust invests the accumulated funds in secure, government-backed securities (like PIBs or T-Bills) or Islamic mutual funds. At the end of the financial year, the trust declares a profit rate (usually between <strong>10% to 16%</strong> annually in Pakistan). This interest is compounded yearly, leading to exponential growth over a 10 to 30-year career.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Tax Implications */}
      <section className="bg-white border border-slate-200 p-10 rounded-[3rem] shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">FBR Tax Exemptions on Provident Funds</h2>
        <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
          The FBR provides significant tax relief for Recognized Provident Funds. Under the Income Tax Ordinance 2001:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">Employer Match Tax Exemption</h4>
            <p className="text-sm text-slate-600">The employer's contribution is exempt from your income tax up to 10% of your basic salary OR Rs. 150,000 per year (whichever is lower).</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">Interest Tax Exemption</h4>
            <p className="text-sm text-slate-600">The annual interest credited to your account is tax-exempt up to 16% of the accumulated balance OR one-third of your basic salary.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">Withdrawal Tax Exemption</h4>
            <p className="text-sm text-slate-600">When you resign or retire, the entire lump-sum amount withdrawn from a Recognized Provident Fund is 100% tax-free.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8 pt-10 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "Can I withdraw my Provident Fund before resigning?",
              a: "Most company PF trusts do not allow premature withdrawal. However, many trusts permit you to take a 'PF Loan' (a refundable advance) against your own accumulated balance for emergencies, weddings, or buying a house."
            },
            {
              q: "What is the difference between PF and Gratuity?",
              a: "Provident Fund requires a deduction from your own salary, which the employer matches. Gratuity, on the other hand, is entirely funded by the employer as a reward for your long-term service (usually a month's basic salary per year worked). Gratuity involves no deductions from your monthly pay."
            },
            {
              q: "Is Provident Fund mandatory in Pakistan?",
              a: "Under the labor laws of Pakistan, providing a Provident Fund is not universally mandatory for all employers, but if a company has a certain number of employees or operates in specific sectors, it must offer either a PF or a Gratuity scheme."
            },
            {
              q: "Are there Islamic/Shariah-compliant Provident Funds?",
              a: "Yes. Many modern corporations in Pakistan now offer a 'Shariah-compliant' PF option. In this scheme, your funds are invested in Islamic banking instruments (like Sukuks or Islamic mutual funds) instead of conventional interest-bearing bonds."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
              <p className="text-sm text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Linking */}
      <section className="bg-blue-50 p-8 rounded-3xl text-center">
        <h3 className="font-bold text-blue-900 mb-4">Complete Your Salary Assessment</h3>
        <p className="text-sm text-blue-800 mb-6">Understand all components of your corporate compensation package.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/income-tax" className="px-6 py-2 bg-white rounded-full text-blue-700 font-bold shadow-sm hover:shadow-md transition-shadow">Calculate Net Salary</Link>
          <Link to="/gratuity" className="px-6 py-2 bg-white rounded-full text-blue-700 font-bold shadow-sm hover:shadow-md transition-shadow">Calculate Final Gratuity</Link>
        </div>
      </section>

      {/* Footer Meta */}
      <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
          Updated: Sept 2026 | FBR & Provident Funds Act Regulations
        </div>
        <div className="flex gap-4 flex-wrap">
          <span className="px-3 py-1 bg-blue-100 rounded-full text-[10px] font-bold text-blue-700 italic">provident fund calculator pakistan</span>
          <span className="px-3 py-1 bg-blue-100 rounded-full text-[10px] font-bold text-blue-700 italic">pf deduction percentage in salary</span>
        </div>
      </footer>
    </article>
  );
};
