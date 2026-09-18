import React from 'react';
import { Link } from 'react-router-dom';

export const ElectricityBillSEO = ({ isUrdu }: { isUrdu?: boolean }) => {
  if (isUrdu) return null;
  
  return (
    <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
      {/* Header Section */}
      <header className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100">
          Utility & Energy Planning
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Electricity Bill Calculator Pakistan: <br />
          <span className="text-emerald-600 italic">Check Your FY 2024-25 LESCO/K-Electric Bill</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
          With rising energy costs, understanding your electricity bill in Pakistan is more critical than ever. Whether you are a consumer of LESCO, K-Electric, MEPCO, or any other DISCO, our <strong>Electricity Bill Calculator Pakistan</strong> helps you estimate your monthly costs. We use the official NEPRA FY 2024-25 uniform base tariffs and breakdown complex charges like FPA, QTA, and FC Surcharge so you know exactly what you are paying for.
        </p>
      </header>

      {/* Section: Protected vs Unprotected */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-emerald-500 pl-6">Protected vs. Non-Protected Consumers</h2>
        <p className="text-slate-600 leading-relaxed">
          The most significant factor in your electricity bill is whether NEPRA classifies you as a "Protected" or "Non-Protected" consumer. This classification dramatically changes the per-unit base tariff you are charged.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Protected Consumers</h3>
            <p className="text-sm text-slate-700 mb-4">
              To be considered a "Protected" consumer, your electricity consumption must remain at or below <strong>200 units consistently for the past 6 months</strong>. If you meet this criteria, you benefit from a heavily subsidized tariff rate.
            </p>
            <div className="bg-emerald-100 text-emerald-800 p-3 rounded-xl text-xs font-bold text-center">
              Benefit: Much lower per-unit rate (e.g., Rs. 10.54 for first 100 units).
            </div>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Non-Protected Consumers</h3>
            <p className="text-sm text-slate-700 mb-4">
              If your consumption crosses 200 units in <em>any single month</em> during a 6-month period, you automatically lose your protected status. You are then billed according to the significantly higher non-protected slabs.
            </p>
            <div className="bg-amber-100 text-amber-800 p-3 rounded-xl text-xs font-bold text-center">
              Warning: Rates can jump from Rs. 10.54 to Rs. 22.44+ immediately.
            </div>
          </div>
        </div>
      </section>

      {/* Section: Surcharges & Adjustments */}
      <section className="bg-white border border-slate-200 p-10 rounded-[3rem] shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">Demystifying FPA, QTA, and Surcharges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">FPA (Fuel Price Adjustment)</h4>
            <p className="text-sm text-slate-600">The difference between the estimated fuel cost (used to generate electricity) and the actual cost. It fluctuates monthly based on global oil/coal prices and is treated as an estimate based on user input.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">QTA (Quarterly Tariff Adj)</h4>
            <p className="text-sm text-slate-600">Adjustments made every 3 months by NEPRA to account for capacity charges, transmission losses, and overall system costs, incorporated as estimates based on user input.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">FC Surcharge</h4>
            <p className="text-sm text-slate-600">Financing Cost Surcharge (typically Rs. 0.43/unit) is levied to pay off the circular debt markups of power generation companies.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8 pt-10 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Frequently Asked Questions (Electricity Bills)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "Is the tariff the same for LESCO, MEPCO, and K-Electric?",
              a: "For all EX-WAPDA distribution companies (like LESCO, MEPCO, IESCO), the base tariff is uniform across Pakistan. K-Electric generally follows the same base tariff but may have specific variations in surcharges and regional adjustments."
            },
            {
              q: "How can I regain 'Protected' status?",
              a: "To regain protected status, your electricity consumption must strictly remain at or below 200 units for six consecutive months. On the seventh month, you will be re-classified as protected."
            },
            {
              q: "Why did my bill double when I consumed 201 units?",
              a: "This is due to the loss of 'Protected' status. The moment you hit 201 units, NEPRA shifts you to the non-protected tariff slab, which applies a significantly higher rate retroactively to the first 200 units as well."
            },
            {
              q: "What is the Watts to Units Calculator?",
              a: "Our Watts to Units calculator helps you estimate how many units a specific appliance (like an AC or Iron) consumes. By entering the wattage and daily hours of usage, it calculates the monthly units (kWh) added to your bill."
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
        <h3 className="font-bold text-emerald-900 mb-4">Plan Your Household Finances</h3>
        <p className="text-sm text-emerald-800 mb-6">Rising utility bills affect your overall budget. Use our other tools to maintain financial stability.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/income-tax" className="px-6 py-2 bg-white rounded-full text-emerald-700 font-bold shadow-sm hover:shadow-md transition-shadow">Calculate Net Salary</Link>
          <Link to="/loan-emi" className="px-6 py-2 bg-white rounded-full text-emerald-700 font-bold shadow-sm hover:shadow-md transition-shadow">Solar Panel Financing EMI</Link>
        </div>
      </section>

      {/* Footer Meta */}
      <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
          Updated: Sept 2026 | Based on NEPRA FY 2024-25 Uniform Base Tariff
        </div>
        <div className="flex gap-4 flex-wrap">
          <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">electricity bill calculator pakistan</span>
          <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">lesco bill calculator</span>
        </div>
      </footer>
    </article>
  );
};
