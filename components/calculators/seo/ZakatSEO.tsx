import React from 'react';

export const ZakatSEO = ({ isUrdu }: { isUrdu?: boolean }) => {
  if (isUrdu) return null;
  
  return (
    <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
      {/* Header Section */}
      <header className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-amber-50 text-amber-700 rounded-full text-xs font-black uppercase tracking-widest border border-amber-100">
          Islamic Core Values & Wealth Purification
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Zakat Calculator Pakistan: <br />
          <span className="text-amber-600 italic">Official SBP Nisab 2026 Guide</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
          Zakat is a fundamental spiritual obligation in Islam. In Pakistan, calculating Zakat correctly requires knowing the "Zakatable Assets", understanding the Nisab threshold, and following the State Bank of Pakistan's (SBP) specific deduction rules for Ramadan 1447 AH (2026). This tool ensures your Zakat on cash, gold, and investments is calculated with absolute precision.
        </p>
      </header>

      {/* Section: How to Calculate Zakat on Cash & Assets */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-amber-500 pl-6">How to Calculate Zakat on Cash and Assets</h2>
        <p className="text-slate-600 leading-relaxed">
          In Pakistan, Zakat is not just calculated on the cash in your bank account. According to Islamic jurisprudence, Zakatable wealth includes gold and silver, cash on hand, business inventory, and investments (like mutual funds), provided they meet the Nisab threshold and have been held for one full lunar year (Hawl).
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-amber-50 border border-amber-100 p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold text-slate-900 mb-4">The 2.5% Formula</h3>
            <ul className="list-disc pl-5 space-y-3 text-sm text-slate-700 marker:text-amber-600">
              <li><strong>Step 1:</strong> Sum up all cash, gold value, and investments.</li>
              <li><strong>Step 2:</strong> Subtract your immediate short-term liabilities (debts due within the year).</li>
              <li><strong>Step 3:</strong> Check if the Net Wealth is greater than the Nisab threshold (e.g., Rs 503,529 for SBP 2026).</li>
              <li><strong>Step 4:</strong> If yes, multiply the Net Wealth by <strong>0.025 (2.5%)</strong>.</li>
            </ul>
          </div>
          
          <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">What is Exempt from Zakat?</h3>
            <p className="text-sm text-slate-600 mb-4">
              Personal use items are entirely exempt from Zakat calculations. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 marker:text-amber-600">
              <li>The house you live in.</li>
              <li>Your personal vehicle/car.</li>
              <li>Household furniture and appliances.</li>
              <li>Long-term debts (like a 20-year mortgage, though the current year's installment can be deducted).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema Markup support structure */}
      <section className="space-y-8 pt-10 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Frequently Asked Questions (FAQs)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "What is the SBP Zakat Nisab for 2026 in Pakistan?",
              a: "For the Zakat year 1446-47 A.H. (2026), the State Bank of Pakistan (SBP) set the Nisab threshold at PKR 503,529 for mandatory deduction from bank accounts on the 1st of Ramadan."
            },
            {
              q: "What happens if I don't want the bank to deduct Zakat?",
              a: "If you wish to calculate and distribute Zakat personally, you must submit a CZ-50 Declaration form to your bank approximately a month before Ramadan begins."
            },
            {
              q: "How is Zakat calculated on gold in Pakistan?",
              a: "Zakat on gold is calculated by finding the total weight of your gold (e.g., in tolas or grams) and multiplying it by the current per-gram market rate (Sarafa rate). If your total net assets exceed the Nisab, you pay 2.5% of that total value."
            },
            {
              q: "What is the percentage of Zakat in Islam?",
              a: "Zakat is calculated at a fixed rate of 2.5% (which is mathematically 1/40th) of your total qualifying wealth above the Nisab."
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
          Updated: Sept 2026 | Calculations based on SBP BPRD Circular No. 03 of 2026
        </div>
        <div className="flex gap-4 flex-wrap">
          <span className="px-3 py-1 bg-amber-100 rounded-full text-[10px] font-bold text-amber-700 italic">zakat nisab pakistan 2026 sbp</span>
          <span className="px-3 py-1 bg-amber-100 rounded-full text-[10px] font-bold text-amber-700 italic">zakat calculator on cash</span>
        </div>
      </footer>
    </article>
  );
};
