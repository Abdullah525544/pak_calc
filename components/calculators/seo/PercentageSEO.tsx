import React from 'react';
import { Link } from 'react-router-dom';

export const PercentageSEO = () => {
  return (
    <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
      {/* Header Section */}
      <header className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-purple-50 text-purple-700 rounded-full text-xs font-black uppercase tracking-widest border border-purple-100">
          Everyday Math Tools
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Percentage Calculator: <br />
          <span className="text-purple-600 italic">Fast, Simple, and Accurate</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
          From calculating Daraz 11.11 sale discounts to figuring out your exact GST on restaurant bills in Pakistan, percentages are an inescapable part of daily life. Our <strong>Basic Percentage Calculator</strong> is designed to be the fastest way to solve everyday math problems without needing to remember complex formulas.
        </p>
      </header>

      {/* Section: Common Uses in Pakistan */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-purple-500 pl-6">Common Uses in Daily Life</h2>
        <p className="text-slate-600 leading-relaxed">
          While the math is universal, here are the most common scenarios where Pakistanis need a quick percentage calculation on their phones:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">GST & PRA Taxes</h3>
            <p className="text-sm text-slate-700 mb-3">
              Restaurants in Punjab charge 16% PRA (Punjab Revenue Authority) tax, while Sindh charges 13% SRB. If your food bill is Rs. 4,500, simply ask the calculator: "What is 16% of 4500?" to know your exact tax amount.
            </p>
          </div>
          
          <div className="bg-purple-50 border border-purple-100 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Shopping Discounts</h3>
            <p className="text-sm text-slate-700 mb-3">
              When a brand offers a "Flat 40% OFF" on an item priced at Rs. 6,800, use this calculator to find the discount amount (Rs. 2,720) and subtract it to get your final payable amount.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Salary Increments</h3>
            <p className="text-sm text-slate-700 mb-3">
              Did HR give you an 8% annual appraisal? Calculate exactly how many rupees will be added to your current gross salary before income tax deductions.
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
              q: "What is the formula for calculating X% of Y?",
              a: "The mathematical formula is: (X ÷ 100) × Y. For example, to find 20% of 500, you divide 20 by 100 (which is 0.2) and multiply by 500. The answer is 100."
            },
            {
              q: "How do I calculate percentage increase or decrease?",
              a: "To find the percentage change: subtract the old value from the new value, divide the result by the old value, and multiply by 100. If your rent goes from 20k to 25k, the increase is ((25-20)/20)*100 = 25%."
            },
            {
              q: "What does 'Percent' actually mean?",
              a: "The word comes from Latin 'per centum', meaning 'by the hundred'. It is simply a fraction where the denominator is 100. So 50% literally means 50 out of 100, or one-half."
            },
            {
              q: "Are percentages reversible?",
              a: "Yes! A fun math trick is that X% of Y is exactly the same as Y% of X. So, 8% of 50 is the same as 50% of 8 (which is 4). Sometimes reversing the numbers makes it easier to calculate in your head."
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
      <section className="bg-purple-50 p-8 rounded-3xl text-center">
        <h3 className="font-bold text-purple-900 mb-4">Specific Percentage Calculators</h3>
        <p className="text-sm text-purple-800 mb-6">Need a specific type of percentage calculation?</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/profit-margin" className="px-6 py-2 bg-white rounded-full text-purple-700 font-bold shadow-sm hover:shadow-md transition-shadow">Business Margin Calculator</Link>
          <Link to="/marks-percentage" className="px-6 py-2 bg-white rounded-full text-purple-700 font-bold shadow-sm hover:shadow-md transition-shadow">Academic Marks Percentage</Link>
        </div>
      </section>

      {/* Footer Meta */}
      <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
          Updated: Sept 2026 | Everyday Math
        </div>
        <div className="flex gap-4 flex-wrap">
          <span className="px-3 py-1 bg-purple-100 rounded-full text-[10px] font-bold text-purple-700 italic">percentage formula</span>
          <span className="px-3 py-1 bg-purple-100 rounded-full text-[10px] font-bold text-purple-700 italic">how to calculate percentage</span>
        </div>
      </footer>
    </article>
  );
};
