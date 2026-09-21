import React from 'react';
import { Link } from 'react-router-dom';

export const MarksPercentageSEO = () => {
  return (
    <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
      {/* Header Section */}
      <header className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100">
          Academic Calculations
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Marks to Percentage Calculator: <br />
          <span className="text-emerald-600 italic">For Matric, FSc, and Entry Tests</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
          Whether you are calculating your Federal Board SSC results, Punjab Board HSSC aggregate, or ECAT/MDCAT score percentages, you need extreme precision. Our <strong>Marks to Percentage Calculator</strong> provides accurate percentage calculations down to two decimal places, which is crucial for university merit lists where every fraction matters.
        </p>
      </header>

      {/* Section: Why Precision Matters */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-emerald-500 pl-6">The Importance of Decimal Precision in Pakistan</h2>
        <p className="text-slate-600 leading-relaxed">
          In Pakistan's highly competitive academic landscape, specifically for Medical (MDCAT) and Engineering (ECAT/NUST) admissions, merit lists are determined down to the fourth decimal point.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold text-slate-900 mb-4">University Aggregates</h3>
            <p className="text-sm text-slate-700 mb-4">
              Universities use a weighted aggregate formula. For example, UET Lahore might use 30% Matric + 30% FSc + 40% ECAT. To calculate this accurately, you must first convert each of your individual component marks into exact percentages. Rounding off early will destroy your aggregate calculation.
            </p>
          </div>
          
          <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Scholarships & Qarz-e-Hasna</h3>
            <p className="text-sm text-slate-700 mb-4">
              Organizations like the Ihsan Trust or PEEF (Punjab Educational Endowment Fund) have strict minimum percentage cut-offs (often 70% or 75%) to qualify for educational financial assistance. Knowing your exact percentage is the first step in the application process.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Common Board Totals */}
      <section className="bg-slate-50 border border-slate-200 p-10 rounded-[3rem] shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">Standard Total Marks Reference</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 text-center">
            <h4 className="font-bold text-slate-900 mb-2">Matriculation (SSC)</h4>
            <p className="text-3xl font-black text-slate-400 mb-2">1100 / 1050</p>
            <p className="text-xs text-slate-500">Science / General Groups (varies slightly by board, normally 1100 in FBISE and Punjab)</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 text-center">
            <h4 className="font-bold text-slate-900 mb-2">Intermediate (HSSC)</h4>
            <p className="text-3xl font-black text-slate-400 mb-2">1100</p>
            <p className="text-xs text-slate-500">Pre-Medical, Pre-Engineering, ICS, I.Com, FA</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 text-center">
            <h4 className="font-bold text-slate-900 mb-2">MDCAT</h4>
            <p className="text-3xl font-black text-slate-400 mb-2">200</p>
            <p className="text-xs text-slate-500">Standard PMDC National Medical and Dental College Admission Test</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8 pt-10 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "What is the formula for calculating percentage?",
              a: "The formula is simple: (Obtained Marks ÷ Total Maximum Marks) × 100. Our calculator runs this equation instantly."
            },
            {
              q: "How does the IBCC grading system work now?",
              a: "Under the new 2025 rules, passing percentage is 40% (up from 33%). Scoring 96%+ gives an A++, 91-95% is an A+, and so on. Our calculator automatically shows your predicted IBCC grade."
            },
            {
              q: "Why do some universities deduct marks for A-Levels?",
              a: "When converting A-Level grades to Pakistani marks, IBCC caps an A* at 90 marks (out of 100), meaning a straight A* Cambridge student maxes out at 90% equivalence, whereas an FSc student can score 95%+. This structural difference affects aggregate calculations."
            },
            {
              q: "Is percentage the same as percentile?",
              a: "No. Percentage is your absolute score out of 100. Percentile is your relative rank compared to others (e.g., being in the 99th percentile means you scored better than 99% of test-takers). Entry tests often provide percentiles, not just percentages."
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
        <h3 className="font-bold text-emerald-900 mb-4">Next Steps</h3>
        <p className="text-sm text-emerald-800 mb-6">Convert your percentage to a grade or calculate your university CGPA.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/grade-calculator" className="px-6 py-2 bg-white rounded-full text-emerald-700 font-bold shadow-sm hover:shadow-md transition-shadow">IBCC Grade Calculator</Link>
          <Link to="/cgpa" className="px-6 py-2 bg-white rounded-full text-emerald-700 font-bold shadow-sm hover:shadow-md transition-shadow">University CGPA Calculator</Link>
        </div>
      </section>

      {/* Footer Meta */}
      <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
          Updated: Sept 2026 | Academic Calculations
        </div>
        <div className="flex gap-4 flex-wrap">
          <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">marks percentage calculator</span>
          <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">aggregate calculator pakistan</span>
        </div>
      </footer>
    </article>
  );
};
