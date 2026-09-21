import React from 'react';
import { Link } from 'react-router-dom';

export const UnitConverterSEO = () => {
  return (
    <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
      {/* Header Section */}
      <header className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-amber-50 text-amber-700 rounded-full text-xs font-black uppercase tracking-widest border border-amber-100">
          Local Measurement Systems
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Unit Converter Pakistan: <br />
          <span className="text-amber-600 italic">Land & Gold Measurements</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
          Pakistan uses a unique blend of British Imperial, Metric, and historical South Asian measurement systems. Whether you are buying a plot in DHA (measuring in Marlas), buying gold for a wedding (measuring in Tolas), or dealing with Patwaris in villages (measuring in Kanals), our <strong>Pakistan Unit Converter</strong> bridges the gap between local and international units.
        </p>
      </header>

      {/* Section: The Marla Confusion */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-amber-500 pl-6">The "Marla" Confusion: 225 vs 272.25 Sq.Ft</h2>
        <p className="text-slate-600 leading-relaxed">
          The biggest real estate trap in Pakistan is the definition of a "Marla". Depending on where you are buying property, the size of a Marla changes drastically.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Urban Marla (225 Sq.Ft)</h3>
            <p className="text-sm text-slate-700 mb-4">
              Modern housing societies and urban development authorities (like DHA, Bahria Town, CDA, and LDA) have standardized the Marla at exactly <strong>225 Square Feet</strong> (25 Square Yards / Gaz). If you buy a 10 Marla plot in DHA, you are getting exactly 2250 Sq.Ft.
            </p>
          </div>
          
          <div className="bg-amber-50 border border-amber-100 p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Revenue/Rural Marla (272.25 Sq.Ft)</h3>
            <p className="text-sm text-slate-700 mb-4">
              In villages, agricultural lands, and older municipal areas regulated by the local <em>Patwari</em> system, the traditional Revenue Marla is used. This is strictly <strong>272.25 Square Feet</strong> (30.25 Square Yards). Always confirm which standard is being used before paying.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Gold Weights */}
      <section className="bg-white border border-slate-200 p-10 rounded-[3rem] shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">Gold Measurement in Pakistan</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center mt-8">
          <div className="flex-1">
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              The international market trades gold in Troy Ounces or Grams. However, the Pakistani Sarafa Market trades gold in <strong>Tolas</strong> and <strong>Mashas</strong>.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed font-bold">
              1 Tola = 11.664 Grams = 12 Mashas
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mt-4">
              Note: Do not confuse the Pakistani Tola (11.664g) with the Indian Tola, which is sometimes rounded to exactly 10g in modern retail systems, though historically they share the same root. Our calculator uses the official 11.664g standard used by the Karachi Sarafa Association.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl w-full md:w-1/3 text-center">
            <p className="text-xs uppercase font-bold tracking-widest text-amber-800 mb-2">1 Tola Equals</p>
            <h4 className="text-4xl font-black text-amber-600">11.664g</h4>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8 pt-10 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "How many Marlas are in 1 Kanal?",
              a: "There are exactly 20 Marlas in 1 Kanal. This ratio remains constant regardless of whether you are using the 225 Sq.Ft urban Marla or the 272.25 Sq.Ft rural Marla."
            },
            {
              q: "What is a 'Gaz'?",
              a: "Gaz is the Urdu/Hindi word for a Square Yard. 1 Gaz = 9 Square Feet. A standard 1 Kanal plot in DHA (20 Marla x 225 Sq.Ft) is 4500 Sq.Ft, which equals exactly 500 Gaz."
            },
            {
              q: "How many Kanals make an Acre?",
              a: "In the traditional land system, exactly 8 Kanals make 1 Acre (Killa). 25 Acres make 1 Murabba (Square)."
            },
            {
              q: "How do I calculate Zakat on gold using Tolas?",
              a: "The Nisab for gold is 7.5 Tolas (87.48 grams). If you possess gold equal to or exceeding this weight, you must pay 2.5% of its current market value as Zakat. Use our Zakat Calculator for exact financial calculations."
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
      <section className="bg-amber-50 p-8 rounded-3xl text-center">
        <h3 className="font-bold text-amber-900 mb-4">Related Calculators</h3>
        <p className="text-sm text-amber-800 mb-6">Use your converted units in our financial calculators.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/real-estate-roi" className="px-6 py-2 bg-white rounded-full text-amber-700 font-bold shadow-sm hover:shadow-md transition-shadow">Property Taxes & ROI</Link>
          <Link to="/zakat" className="px-6 py-2 bg-white rounded-full text-amber-700 font-bold shadow-sm hover:shadow-md transition-shadow">Calculate Gold Zakat</Link>
        </div>
      </section>

      {/* Footer Meta */}
      <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
          Updated: Sept 2026 | Local Measurement Standards
        </div>
        <div className="flex gap-4 flex-wrap">
          <span className="px-3 py-1 bg-amber-100 rounded-full text-[10px] font-bold text-amber-700 italic">marla to square feet</span>
          <span className="px-3 py-1 bg-amber-100 rounded-full text-[10px] font-bold text-amber-700 italic">tola to grams conversion</span>
        </div>
      </footer>
    </article>
  );
};
