import React from 'react';
import { Link } from 'react-router-dom';

export const LandConverterSEO = () => {
  return (
    <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
      {/* Header Section */}
      <header className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100">
          Real Estate & Agriculture
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Land Area Converter: <br />
          <span className="text-emerald-600 italic">Kanal, Marla & Murabba</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
          Navigating Pakistan's real estate market requires an understanding of traditional land measurement units. Whether you are dealing with Patwaris for agricultural land or buying a plot in a housing society, our <strong>Land Converter</strong> accurately translates between Murabbas, Kanals, Marlas, and international square feet.
        </p>
      </header>

      {/* Section: The Traditional System */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-emerald-500 pl-6">Understanding the Patwari System</h2>
        <p className="text-slate-600 leading-relaxed">
          The traditional land measurement system used in Punjab and other parts of Pakistan has been passed down since the British Raj and Mughal eras. It is essential to know these conversions to avoid being shortchanged in property deals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Small to Medium Units</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li><strong>1 Sarsahi:</strong> ~30.25 Sq.Ft</li>
              <li><strong>1 Marla:</strong> 9 Sarsahis (272.25 Sq.Ft)</li>
              <li><strong>1 Kanal:</strong> 20 Marlas (5,445 Sq.Ft)</li>
            </ul>
            <p className="text-xs text-slate-500 mt-4">
              Note: This calculator uses the official Revenue Department standard (1 Marla = 272.25 sq ft). Modern urban societies (like DHA) use a 225 sq ft Marla. Use our standard Unit Converter for urban plots.
            </p>
          </div>
          
          <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-xl font-bold text-emerald-900 mb-4">Large Agricultural Units</h3>
            <ul className="space-y-3 text-sm text-emerald-800">
              <li><strong>1 Bigha:</strong> 4 Kanals</li>
              <li><strong>1 Acre (Killa):</strong> 8 Kanals (43,560 Sq.Ft)</li>
              <li><strong>1 Murabba (Square):</strong> 25 Acres (200 Kanals)</li>
            </ul>
            <p className="text-xs text-emerald-700 mt-4">
              These larger units are typically used for measuring agricultural farmland in rural areas.
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
              q: "How many Marlas make 1 Kanal?",
              a: "There are exactly 20 Marlas in 1 Kanal. This ratio is constant across all measurement standards in Pakistan."
            },
            {
              q: "What is a Murabba?",
              a: "A Murabba (also known as a Square) is a large unit of agricultural land equal to 25 Acres or 200 Kanals."
            },
            {
              q: "Why is a DHA Marla smaller?",
              a: "Urban development authorities standardized the Marla to exactly 25 Square Yards (225 Square Feet) for easier urban planning, while the traditional rural Marla remains 30.25 Square Yards (272.25 Square Feet)."
            },
            {
              q: "What is a Sarsahi?",
              a: "A Sarsahi is one-ninth (1/9) of a Marla. It is a very small unit of measurement, equal to exactly 1 Square Karam (a traditional measurement of length equal to 5.5 feet)."
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
        <h3 className="font-bold text-emerald-900 mb-4">Related Calculators</h3>
        <p className="text-sm text-emerald-800 mb-6">Explore our other property and financial calculators.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/real-estate-roi" className="px-6 py-2 bg-white rounded-full text-emerald-700 font-bold shadow-sm hover:shadow-md transition-shadow">Real Estate ROI & Taxes</Link>
          <Link to="/mortgage" className="px-6 py-2 bg-white rounded-full text-emerald-700 font-bold shadow-sm hover:shadow-md transition-shadow">Home Loan Mortgage</Link>
        </div>
      </section>

      {/* Footer Meta */}
      <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
          Updated: Sept 2026 | Property & Land
        </div>
        <div className="flex gap-4 flex-wrap">
          <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">kanal to marla</span>
          <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">marla to sq ft pakistan</span>
        </div>
      </footer>
    </article>
  );
};
