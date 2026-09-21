import React from 'react';
import { Link } from 'react-router-dom';

export const FreelancerSEO = ({ isUrdu }: { isUrdu?: boolean }) => {
  if (isUrdu) return null;
  
  return (
    <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
      {/* Header Section */}
      <header className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100">
          IT Export & Remote Work
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Freelancer Tax Calculator Pakistan: <br />
          <span className="text-emerald-600 italic">Maximize Your IT Export Earnings</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
          Being a freelancer in Pakistan offers incredible opportunities but also comes with unique financial regulations. For the fiscal year 2025-2026, the tax regime for IT exporters provides massive benefits for those who are properly documented. Our <strong>Freelancer Income Calculator Pakistan</strong> is designed to help you calculate your net income in PKR while factoring in the FBR's specific export tax rules.
        </p>
      </header>

      {/* Section: 0.25% vs 1% Tax Rule */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-emerald-500 pl-6">The PSEB Registration Rule: 0.25% vs 1% Tax</h2>
        <p className="text-slate-600 leading-relaxed">
          The Federal Board of Revenue (FBR) heavily incentivizes bringing foreign currency into Pakistan. However, you must navigate the system correctly to claim these benefits. If you work on platforms like Upwork, Fiverr, or directly with international clients, your income is classified as "Export of IT and IT-enabled Services".
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Registered with PSEB (0.25%)</h3>
            <p className="text-sm text-slate-700 mb-4">
              If you are registered with the Pakistan Software Export Board (PSEB) or P@SHA, and you are an "Active Taxpayer" (Filer) with the FBR, your bank is authorized to deduct only a <strong>0.25% final withholding tax</strong> on your foreign remittances.
            </p>
            <div className="bg-emerald-100 text-emerald-800 p-3 rounded-xl text-xs font-bold text-center">
              Example: On $1,000 (~PKR 278,000), you pay only Rs. 695 in tax.
            </div>
          </div>
          
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Unregistered / Non-Filer (1% or more)</h3>
            <p className="text-sm text-slate-700 mb-4">
              If you are not registered with PSEB, the standard bank deduction for IT exports jumps to <strong>1%</strong>. Furthermore, if you are a Non-Filer or you receive the money through unofficial channels (Hawala/Hundi), your income is treated as local income and taxed at standard salaried/non-salaried slabs (up to 35%).
            </p>
            <div className="bg-slate-200 text-slate-700 p-3 rounded-xl text-xs font-bold text-center">
              Example: On $1,000 (~PKR 278,000), you pay Rs. 2,780 in tax.
            </div>
          </div>
        </div>
      </section>

      {/* Section: The 80% Rule */}
      <section className="bg-white border border-slate-200 p-10 rounded-[3rem] shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">The Crucial "80% Remittance" Rule</h2>
        <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
          To qualify for the reduced export tax rates (0.25% or 1%), the FBR mandates that at least <strong>80% of your total export receipts</strong> must be brought into Pakistan through official banking channels. You are allowed to retain up to 20% in foreign accounts (like Payoneer, Wise, or Elevate) to pay for software licenses, servers, or marketing. If you fail to bring 80% back into Pakistan, your entire income may lose its "Export" status and be taxed at standard local rates.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8 pt-10 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Frequently Asked Questions (Freelancer Taxes)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "How do I register with PSEB?",
              a: "You can register online through the PSEB portal. For individual freelancers, the registration process is streamlined and usually costs a nominal annual fee (e.g., Rs. 5,000). You will need your CNIC, bank account maintenance certificate, and a letter/contract proving your freelance work."
            },
            {
              q: "Does Payoneer count as an official banking channel?",
              a: "When you withdraw money from Payoneer directly to your local Pakistani bank account (e.g., JazzCash, Meezan, HBL), it is routed through the State Bank system as a foreign remittance. Ensure your bank issues a Proceed Realization Certificate (PRC) to prove it was an export remittance."
            },
            {
              q: "What is a PRC (Proceed Realization Certificate)?",
              a: "A PRC is an official document issued by your bank confirming that foreign currency was received and converted to PKR. You must retain these PRCs; your tax consultant will need them when filing your annual FBR return to prove your income qualifies for the 0.25% or 1% final tax regime."
            },
            {
              q: "Do I still need to file an annual tax return if tax is deducted by the bank?",
              a: "Yes! The bank deducts the tax at source, but you are legally required to file an annual income tax return with the FBR to declare your income, claim the 'Final Tax Regime' status, and update your wealth statement. This is how you maintain your 'Active Taxpayer' (Filer) status."
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
      <section className="bg-emerald-50 p-8 rounded-3xl text-center">
        <h3 className="font-bold text-emerald-900 mb-4">Related Financial Tools for Freelancers</h3>
        <p className="text-sm text-emerald-800 mb-6">Growing your freelance business? Use our other tools to manage your wealth.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/income-tax" className="px-6 py-2 bg-white rounded-full text-emerald-700 font-bold shadow-sm hover:shadow-md transition-shadow">Local Income Tax Calculator</Link>
          <Link to="/profit-margin" className="px-6 py-2 bg-white rounded-full text-emerald-700 font-bold shadow-sm hover:shadow-md transition-shadow">Agency Profit Margin Calc</Link>
        </div>
      </section>

      {/* Footer Meta */}
      <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
          Updated: Sept 2026 | FBR & PSEB IT Export Regulations
        </div>
        <div className="flex gap-4 flex-wrap">
          <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">freelancer tax calculator pakistan</span>
          <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">it export tax 2026</span>
        </div>
      </footer>
    </article>
  );
};
