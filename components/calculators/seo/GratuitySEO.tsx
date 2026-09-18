import React from 'react';
import { Link } from 'react-router-dom';

export const GratuitySEO = () => {
  return (
    <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
      {/* Header Section */}
      <header className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-50 text-indigo-700 rounded-full text-xs font-black uppercase tracking-widest border border-indigo-100">
          Labor Laws & End of Service
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Gratuity Calculator Pakistan: <br />
          <span className="text-indigo-600 italic">Know Your End-of-Service Rights</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
          In Pakistan, Gratuity is a statutory right for employees serving in commercial or industrial establishments under the <em>Industrial and Commercial Employment (Standing Orders) Ordinance, 1968</em>. It is a lump sum amount paid by an employer as a token of appreciation for an employee's past services. Use our <strong>Gratuity Calculator Pakistan</strong> to determine your exact payout based on legal formulas.
        </p>
      </header>

      {/* Section: How Gratuity is Calculated */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-indigo-500 pl-6">The Legal Gratuity Formula (30 Days Rule)</h2>
        <p className="text-slate-600 leading-relaxed">
          Previously, gratuity was calculated based on 20 days of salary. However, amendments in the labor laws now mandate that gratuity must be calculated based on <strong>30 days of wages</strong> for every completed year of service.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-indigo-50 border border-indigo-100 p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Calculation Method</h3>
            <p className="text-sm text-slate-700 mb-4">
              The law defines a "month" as 26 working days. Therefore, the daily wage is calculated by dividing your monthly salary by 26. This daily wage is then multiplied by 30 days, and finally by the number of years you have served.
            </p>
            <div className="bg-indigo-100 text-indigo-800 p-3 rounded-xl text-xs font-bold text-center">
              Formula: (Last Drawn Salary / 26) × 30 × Years of Service
            </div>
          </div>
          
          <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Gross vs. Basic Salary</h3>
            <p className="text-sm text-slate-700 mb-4">
              Under the Standing Orders Ordinance, gratuity must be calculated on "Wages," which includes Basic Salary plus Cost of Living Allowance (COLA). It <em>does not</em> include bonuses, overtime, or specific allowances like housing or travel. Many private companies incorrectly calculate it on Basic Salary alone; ensure you know your contract terms.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Tax Exemptions */}
      <section className="bg-white border border-slate-200 p-10 rounded-[3rem] shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">FBR Tax Exemptions on Gratuity</h2>
        <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
          Is gratuity taxable in Pakistan? It depends on whether the gratuity fund/scheme is approved by the Federal Board of Revenue (FBR) or the Commissioner of Inland Revenue.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">Approved Gratuity Funds</h4>
            <p className="text-sm text-slate-600">If your company's gratuity fund is officially approved by the FBR, the entire gratuity amount received upon retirement or resignation is <strong>completely exempt from tax up to Rs. 300,000</strong>.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">Unapproved / Unrecognized Funds</h4>
            <p className="text-sm text-slate-600">If the scheme is not approved, the exemption limit is severely restricted. Only <strong>Rs. 75,000 or 50% of the receivable amount (whichever is less)</strong> is exempt. The rest is taxed as standard salary income.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8 pt-10 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "Who is eligible for Gratuity?",
              a: "To be eligible, an employee must have completed at least six months of continuous service. If your employment ends (resignation, termination, retirement), you are entitled to gratuity, provided your company has 20 or more workers and does not offer a matching Provident Fund."
            },
            {
              q: "How are fractional years counted?",
              a: "Under the law, any period of service exceeding 6 months is treated as a full year. For example, if you worked for 3 years and 7 months, your gratuity will be calculated for 4 years."
            },
            {
              q: "Can a company offer both PF and Gratuity?",
              a: "Yes. While the law mandates providing at least one (either Provident Fund or Gratuity), many multinational and large local corporations offer both as part of their employee retention benefits."
            },
            {
              q: "What if I am terminated for misconduct?",
              a: "If an employee is dismissed for severe misconduct (like theft, fraud, or riotous behavior), the employer has the legal right to forfeit the gratuity payout."
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
      <section className="bg-indigo-50 p-8 rounded-3xl text-center">
        <h3 className="font-bold text-indigo-900 mb-4">Complete Your Salary Assessment</h3>
        <p className="text-sm text-indigo-800 mb-6">Make sure you are maximizing your corporate benefits.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/provident-fund" className="px-6 py-2 bg-white rounded-full text-indigo-700 font-bold shadow-sm hover:shadow-md transition-shadow">Calculate Provident Fund</Link>
          <Link to="/income-tax" className="px-6 py-2 bg-white rounded-full text-indigo-700 font-bold shadow-sm hover:shadow-md transition-shadow">Calculate Salary Tax</Link>
        </div>
      </section>

      {/* Footer Meta */}
      <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
          Updated: Sept 2026 | Pakistan Labor Laws & Standing Orders
        </div>
        <div className="flex gap-4 flex-wrap">
          <span className="px-3 py-1 bg-indigo-100 rounded-full text-[10px] font-bold text-indigo-700 italic">gratuity calculator pakistan</span>
          <span className="px-3 py-1 bg-indigo-100 rounded-full text-[10px] font-bold text-indigo-700 italic">gratuity rules in pakistan</span>
        </div>
      </footer>
    </article>
  );
};
