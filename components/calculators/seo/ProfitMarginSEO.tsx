import React from 'react';
import { Link } from 'react-router-dom';

export const ProfitMarginSEO = () => {
  return (
    <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
      {/* Header Section */}
      <header className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100">
          Business & E-Commerce
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Profit Margin Calculator Pakistan: <br />
          <span className="text-emerald-600 italic">Price Your Products Right</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
          Whether you are running a Daraz store, a Shopify e-commerce brand, or a physical retail shop in Pakistan, pricing your products correctly is the difference between thriving and going bankrupt. Our <strong>Profit Margin Calculator</strong> helps you find the exact selling price needed to hit your target margin, or calculates your actual net margin based on your costs.
        </p>
      </header>

      {/* Section: Margin vs Markup */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-emerald-500 pl-6">The Deadly Mistake: Margin vs. Markup</h2>
        <p className="text-slate-600 leading-relaxed">
          The most common financial mistake small business owners make in Pakistan is confusing Margin with Markup. If your product costs Rs. 1000, and you want a 30% Margin, adding 30% to the cost (Rs. 1300) is WRONG. That is a 30% Markup, which results in only a 23% Margin.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Markup (Percentage of Cost)</h3>
            <p className="text-sm text-slate-700 mb-4">
              Markup shows how much more your selling price is than the cost amount. It is calculated as <code>(Profit ÷ Cost) × 100</code>.
            </p>
            <div className="bg-slate-200 p-4 rounded-xl text-sm font-mono text-slate-800">
              Cost: Rs. 1000<br/>
              Sell: Rs. 1500<br/>
              Markup: 50%
            </div>
          </div>
          
          <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-xl font-bold text-emerald-900 mb-4">Margin (Percentage of Revenue)</h3>
            <p className="text-sm text-emerald-800 mb-4">
              Margin shows how much out of every Rupee of sales you actually keep as profit. It is calculated as <code>(Profit ÷ Revenue) × 100</code>.
            </p>
            <div className="bg-emerald-200 p-4 rounded-xl text-sm font-mono text-emerald-900">
              Cost: Rs. 1000<br/>
              Sell: Rs. 1500<br/>
              Margin: 33.3%
            </div>
          </div>
        </div>
      </section>

      {/* Section: E-Commerce Hidden Costs */}
      <section className="bg-white border border-slate-200 p-10 rounded-[3rem] shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">Hidden Costs That Destroy Your Margin</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">Platform Commissions</h4>
            <p className="text-sm text-slate-600">Selling on Daraz or Foodpanda? They charge category commissions ranging from 5% to 25%, plus payment processing fees. You must add this to your "Product Cost" before calculating your selling price.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">Customer Returns (RTO)</h4>
            <p className="text-sm text-slate-600">Return to Origin (RTO) rates in Pakistan's Cash on Delivery (COD) ecosystem average 15-20%. You pay shipping both ways for a returned item. Your margin must be high enough to absorb these losses.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">Packaging & Marketing</h4>
            <p className="text-sm text-slate-600">Flyers, bubble wrap, and Facebook/Instagram Ad Spend (Customer Acquisition Cost) must be factored into your total unit cost. A product sourced for Rs. 500 might actually cost you Rs. 900 to sell.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8 pt-10 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "What is a good profit margin for E-commerce in Pakistan?",
              a: "For fashion and apparel, a Gross Margin of 60-70% is standard to survive high marketing costs. For electronics, margins are lower (15-25%), relying on high sales volume instead."
            },
            {
              q: "How do I calculate the selling price if I want a 40% margin?",
              a: "Use our 'Find Selling Price' mode. The exact formula is: Selling Price = Cost ÷ (1 - 0.40). If your cost is Rs. 1000, your selling price must be Rs. 1667."
            },
            {
              q: "Does margin include overheads like rent and salaries?",
              a: "Gross Margin only subtracts the Cost of Goods Sold (COGS). Net Margin subtracts everything: COGS, rent, salaries, marketing, and taxes. Our calculator provides Gross Margin; include all expenses in your 'Cost' for Net Margin."
            },
            {
              q: "Why did my business fail despite a 50% markup?",
              a: "Because a 50% markup is only a 33% margin. If your marketing, shipping, and returns eat up 35% of your revenue, your business is losing money on every sale."
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
        <h3 className="font-bold text-emerald-900 mb-4">More Business Tools</h3>
        <p className="text-sm text-emerald-800 mb-6">Explore our suite of tools designed for Pakistani entrepreneurs.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/percentage" className="px-6 py-2 bg-white rounded-full text-emerald-700 font-bold shadow-sm hover:shadow-md transition-shadow">Percentage Calculator</Link>
          <Link to="/freelancer-tax" className="px-6 py-2 bg-white rounded-full text-emerald-700 font-bold shadow-sm hover:shadow-md transition-shadow">Calculate Freelancer Tax</Link>
        </div>
      </section>

      {/* Footer Meta */}
      <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
          Updated: Sept 2026 | E-commerce & Business
        </div>
        <div className="flex gap-4 flex-wrap">
          <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">margin vs markup</span>
          <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">ecommerce profit calculator</span>
        </div>
      </footer>
    </article>
  );
};
