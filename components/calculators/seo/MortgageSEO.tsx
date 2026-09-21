import React from 'react';
import { Link } from 'react-router-dom';

export const MortgageSEO = () => {
  return (
    <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
      {/* Header Section */}
      <header className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100">
          Real Estate Finance & Housing
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Mortgage & Home Loan Calculator Pakistan: <br />
          <span className="text-emerald-600 italic">Plan Your Dream Home</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
          Buying a home in Pakistan often requires significant financing through a bank's housing finance scheme (such as Meezan Easy Home or HBL Islamic Home Finance). Because these loans span 10 to 25 years, even a small difference in the interest/profit rate can cost you millions of rupees over time. Our <strong>Home Loan Calculator Pakistan</strong> helps you calculate your exact monthly installment and the total cost of your property.
        </p>
      </header>

      {/* Section: Islamic vs Conventional Home Finance */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-emerald-500 pl-6">Islamic vs. Conventional Housing Finance</h2>
        <p className="text-slate-600 leading-relaxed">
          In Pakistan, home financing is heavily dominated by Islamic Banking (Diminishing Musharakah). It is crucial to understand the difference before signing a 20-year contract.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Diminishing Musharakah (Islamic)</h3>
            <p className="text-sm text-slate-700 mb-4">
              You and the bank jointly purchase the property. For example, you own 20% and the bank owns 80%. You pay a monthly "Rent" for using the bank's share of the house, plus you buy back "Units" of the bank's share. Over time, your ownership increases to 100%, and the rent decreases.
            </p>
            <div className="bg-emerald-100 text-emerald-800 p-3 rounded-xl text-xs font-bold text-center">
              Most Popular: Meezan, BankIslami, DIB.
            </div>
          </div>
          
          <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Conventional Mortgage</h3>
            <p className="text-sm text-slate-700 mb-4">
              The bank lends you the money to purchase the house, and you pay back the principal amount plus compound interest (Markup). If you fail to pay, the bank can foreclose on the house to recover the debt.
            </p>
            <div className="bg-slate-100 text-slate-800 p-3 rounded-xl text-xs font-bold text-center">
              Pegged to KIBOR + Bank Margin.
            </div>
          </div>
        </div>
      </section>

      {/* Section: Key Factors */}
      <section className="bg-slate-50 border border-slate-200 p-10 rounded-[3rem] shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">Key Factors Affecting Your Installment</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">Down Payment (Equity)</h4>
            <p className="text-sm text-slate-600">The State Bank of Pakistan (SBP) mandates a minimum down payment, usually between 20% to 30% of the property value. A higher down payment means a lower monthly installment.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">KIBOR Fluctuations</h4>
            <p className="text-sm text-slate-600">Most home loans are variable rate. The bank will revise your interest rate every year (or every 6 months) based on the current KIBOR rate. If KIBOR rises, your EMI rises.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">Debt Burden Ratio (DBR)</h4>
            <p className="text-sm text-slate-600">SBP regulations state that your total monthly debt payments (including car loans, credit cards, and the new home loan) cannot exceed 50% of your net monthly income.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8 pt-10 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "Can Overseas Pakistanis apply for a home loan?",
              a: "Yes. Under the Roshan Digital Account (RDA) scheme, specifically 'Roshan Apna Ghar', Non-Resident Pakistanis (NRPs) can easily apply for housing finance at highly competitive rates digitally."
            },
            {
              q: "What is an Early Settlement Penalty?",
              a: "If you decide to pay off your 20-year loan in 5 years, banks will charge an early settlement fee (usually 3% to 5% of the outstanding principal) to recover their lost anticipated interest/profit."
            },
            {
              q: "Does the bank finance plots/land?",
              a: "Yes, but usually under strict conditions. Banks prefer financing constructed houses or financing the construction of a house on a plot you already own. Pure plot financing has higher rates and stricter SBP regulations."
            },
            {
              q: "What are the hidden costs of getting a home loan?",
              a: "Apart from the down payment, you must budget for Processing Fees (approx Rs. 15k-25k), Property Valuation Charges, Legal Opinion Fees, Life Insurance/Takaful, and Property Takaful."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
              <p className="text-sm text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Linking */}
      <section className="bg-emerald-50 p-8 rounded-3xl text-center">
        <h3 className="font-bold text-emerald-900 mb-4">Complete Your Property Analysis</h3>
        <p className="text-sm text-emerald-800 mb-6">Make sure you have accounted for property taxes and your DBR limit.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/income-tax" className="px-6 py-2 bg-white rounded-full text-emerald-700 font-bold shadow-sm hover:shadow-md transition-shadow">Calculate Net Income (DBR)</Link>
          <Link to="/real-estate-roi" className="px-6 py-2 bg-white rounded-full text-emerald-700 font-bold shadow-sm hover:shadow-md transition-shadow">Property ROI & Tax Calc</Link>
        </div>
      </section>

      {/* Footer Meta */}
      <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
          Updated: Sept 2026 | SBP Housing Finance Regulations
        </div>
        <div className="flex gap-4 flex-wrap">
          <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">home loan calculator pakistan</span>
          <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">meezan easy home calculator</span>
        </div>
      </footer>
    </article>
  );
};
