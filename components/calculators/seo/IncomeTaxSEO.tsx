import React from 'react';

export const IncomeTaxSEO = () => (
  <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans">
    {/* Header Section */}
    <header className="text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100">
        FBR Tax Year 2025-2026
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
        Income Tax Calculator Pakistan: <br />
        <span className="text-emerald-600 italic">Salary Tax Calculator Pakistan Guide</span>
      </h2>
      <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed">
        Navigating the complex tax landscape in Pakistan shouldn't be a headache. Whether you're a fresh graduate starting your first job or a seasoned professional, understanding how the online tax calculator Pakistan works based on Federal Board of Revenue (FBR) rules is essential for financial freedom. This guide breaks down the FBR tax calculator 2026 slabs, exemptions, and legal tax-saving strategies.
      </p>
    </header>

    {/* Section: How to Calculate Salary Tax */}
    <section className="space-y-12">
      <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-emerald-500 pl-6">How to Calculate Salary Tax in Pakistan (2025-26)</h2>
      <p className="text-slate-600 leading-relaxed">
        The Federal Board of Revenue (FBR) uses a progressive slab system for salaried individuals. Your annual tax is determined by your total annual gross salary minus any legal exemptions (such as medical allowances). 
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-[2rem]">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Step-by-Step Example: PKR 150,000/month</h3>
          <ol className="list-decimal pl-5 space-y-3 text-sm text-slate-700 marker:font-bold marker:text-emerald-600">
            <li><strong>Annual Gross:</strong> 150,000 × 12 = PKR 1,800,000</li>
            <li><strong>Find the Slab:</strong> Falls in Slab 3 (PKR 1,200,000 to PKR 2,200,000)</li>
            <li><strong>Base Tax:</strong> PKR 30,000 fixed for the first 1,200,000</li>
            <li><strong>Variable Tax:</strong> 15% on the amount exceeding 1,200,000 (1,800,000 - 1,200,000 = 600,000). 15% of 600,000 = 90,000</li>
            <li><strong>Total Annual Tax:</strong> 30,000 + 90,000 = PKR 120,000</li>
            <li><strong>Monthly Deduction:</strong> 120,000 / 12 = <strong>PKR 10,000/month</strong></li>
          </ol>
        </div>
        
        <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4">The Medical Exemption Rule</h3>
          <p className="text-sm text-slate-600 mb-4">
            Under FBR rules, if your employer pays you a separate "Medical Allowance" (and does not provide medical insurance/reimbursement), this allowance is <strong>exempt from tax up to 10% of your basic salary</strong>.
          </p>
          <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-500 border border-slate-100">
            <em>Pro Tip:</em> Ensure your HR explicitly marks the allowance as "Medical Allowance" on your payslip to claim this exemption during your annual tax return filing on IRIS.
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section with Schema Markup support structure */}
    <section className="space-y-8 pt-10 border-t border-slate-200">
      <h2 className="text-3xl font-bold text-slate-900 text-center">Frequently Asked Questions (FBR Taxes)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            q: "What is the minimum taxable salary in Pakistan for 2025-26?",
            a: "For salaried individuals, the minimum taxable income threshold is PKR 600,000 per year (PKR 50,000 per month). If your salary is below this, your tax is zero."
          },
          {
            q: "What is the difference between Salaried and Non-Salaried tax slabs?",
            a: "You are considered 'Salaried' if salary constitutes more than 75% of your total taxable income. Salaried slabs are generally lower/more favorable than Non-Salaried (business/AOP) slabs."
          },
          {
            q: "Does FBR tax my freelance income?",
            a: "Yes. Freelancers earning from foreign exports must register with PSEB to avail a reduced 0.25% withholding tax. Local freelance income falls under the Non-Salaried tax slabs."
          },
          {
            q: "What is the new 10% Surcharge for high earners?",
            a: "As per the Finance Act 2025-26, any individual (salaried or non-salaried) with an annual taxable income exceeding PKR 10 Million must pay an additional 10% surcharge on their calculated income tax."
          }
        ].map((faq, i) => (
          <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
            <p className="text-sm text-slate-600">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Footer Meta */}
    <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
        Updated: Sept 2026 | Federal Board of Revenue (FBR) Finance Act 2025-26
      </div>
      <div className="flex gap-4 flex-wrap">
        <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">income tax calculator pakistan 2025-26</span>
        <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">fbr tax calculator</span>
      </div>
    </footer>
  </article>
);
