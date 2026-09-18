import React from 'react';
import { Link } from 'react-router-dom';

export const EMISEO = () => {
  return (
    <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
      {/* Header Section */}
      <header className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100">
          Consumer Finance & Loans
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Loan EMI Calculator Pakistan: <br />
          <span className="text-blue-600 italic">Plan Your Monthly Installments</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
          Whether you are applying for an auto loan (car financing), a personal loan, or financing a solar panel system, knowing your exact Equated Monthly Installment (EMI) is crucial. High interest rates in Pakistan (KIBOR + Bank Margin) can drastically increase your total payable amount. Our <strong>Loan EMI Calculator</strong> breaks down your principal and interest components to help you avoid debt traps.
        </p>
      </header>

      {/* Section: How EMI Works */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-blue-500 pl-6">Understanding Auto & Personal Loans in Pakistan</h2>
        <p className="text-slate-600 leading-relaxed">
          Banks in Pakistan (such as HBL, Meezan, Bank Alfalah) calculate loan installments based on a reducing balance method. This means you pay interest only on the remaining loan amount, not the original principal.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold text-slate-900 mb-4">What Determines Your EMI?</h3>
            <ul className="list-disc pl-5 space-y-3 text-sm text-slate-700 marker:text-blue-500">
              <li><strong>Loan Principal:</strong> The actual amount you borrow from the bank.</li>
              <li><strong>Interest Rate (KIBOR + Margin):</strong> Most consumer loans in Pakistan use a variable rate linked to the Karachi Interbank Offered Rate (KIBOR).</li>
              <li><strong>Tenure:</strong> The number of years you have to repay (usually 1 to 5 years for cars/personal loans).</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Impact of Tenure</h3>
            <p className="text-sm text-slate-700 mb-4">
              A longer tenure (e.g., 5 years instead of 3 years) lowers your monthly EMI, making it easier on your monthly budget. However, it significantly increases the total interest you pay to the bank over the life of the loan.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Islamic vs Conventional Financing */}
      <section className="bg-white border border-slate-200 p-10 rounded-[3rem] shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">Conventional vs. Islamic Car Financing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h4 className="font-bold text-blue-900 text-lg mb-2">Conventional Auto Loan</h4>
            <p className="text-sm text-slate-600">
              In conventional banking, the bank lends you money to buy the car and charges interest on the principal. If you pay late, the bank charges a late fee penalty that goes into the bank's income. The rate is explicitly called "Interest" or "Mark-up."
            </p>
          </div>
          <div>
            <h4 className="font-bold text-blue-900 text-lg mb-2">Islamic Auto Ijarah/Murabaha</h4>
            <p className="text-sm text-slate-600">
              In Islamic banking, the bank purchases the car and rents it to you (Ijarah) or sells it to you at a markup on deferred payment (Murabaha). While the monthly payment (rental) often mirrors conventional EMIs (pegged to KIBOR), the legal contract is asset-backed. Late payment penalties are strictly donated to charity, not kept by the bank.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8 pt-10 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "What is KIBOR?",
              a: "KIBOR (Karachi Interbank Offered Rate) is the benchmark interest rate at which banks lend to each other. Consumer loans are usually priced at KIBOR plus a bank margin (e.g., 1 Year KIBOR + 3%). If KIBOR goes up, your EMI increases on your loan anniversary."
            },
            {
              q: "Can I pay off my loan early in Pakistan?",
              a: "Yes, this is called 'Early Settlement' or 'Pre-payment'. However, most banks charge an Early Settlement Penalty (usually 4% to 5% of the remaining principal). Always check this clause before taking the loan."
            },
            {
              q: "Does this EMI calculator include Car Insurance (Takaful)?",
              a: "No, this calculator only calculates the pure financing EMI. For auto loans, banks require comprehensive insurance (usually 2% to 3% of the car's value annually), which is added to your monthly bank payment."
            },
            {
              q: "Why did my EMI increase this year?",
              a: "If you took a variable-rate loan, the bank resets your interest rate annually on the loan anniversary based on the current KIBOR. If KIBOR increased from last year, your new EMI will be higher."
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
        <h3 className="font-bold text-blue-900 mb-4">Evaluate Your Financial Capacity</h3>
        <p className="text-sm text-blue-800 mb-6">Before taking a loan, verify your net income to ensure you can afford the EMI.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/income-tax" className="px-6 py-2 bg-white rounded-full text-blue-700 font-bold shadow-sm hover:shadow-md transition-shadow">Calculate Net Salary</Link>
          <Link to="/mortgage" className="px-6 py-2 bg-white rounded-full text-blue-700 font-bold shadow-sm hover:shadow-md transition-shadow">Home Loan / Mortgage Calc</Link>
        </div>
      </section>

      {/* Footer Meta */}
      <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
          Updated: Sept 2026 | Consumer Financing & State Bank Regulations
        </div>
        <div className="flex gap-4 flex-wrap">
          <span className="px-3 py-1 bg-blue-100 rounded-full text-[10px] font-bold text-blue-700 italic">auto loan calculator pakistan</span>
          <span className="px-3 py-1 bg-blue-100 rounded-full text-[10px] font-bold text-blue-700 italic">meezan car ijarah calculator</span>
        </div>
      </footer>
    </article>
  );
};
