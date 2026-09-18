import React from 'react';
import { Link } from 'react-router-dom';

export const CGPASEO = () => {
  return (
    <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
      {/* Header Section */}
      <header className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100">
          Academic Utilities
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          CGPA to Percentage Calculator: <br />
          <span className="text-emerald-600 italic">For Pakistani Universities</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
          Whether you are applying for HEC scholarships, CSS exams, or corporate jobs in Pakistan, you will frequently need to convert your university CGPA into a standard percentage. Our <strong>CGPA to Percentage Calculator</strong> supports standard 4.0, 5.0, and 10.0 grading scales to give you an accurate, accepted conversion instantly.
        </p>
      </header>

      {/* Section: HEC Rules and University Variances */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-emerald-500 pl-6">HEC Guidelines vs. University Formulas</h2>
        <p className="text-slate-600 leading-relaxed">
          The Higher Education Commission (HEC) of Pakistan provides general guidelines for grading systems, but many universities (such as NUST, FAST-NU, LUMS, and Punjab University) have their own specific conversion formulas printed on the back of official transcripts.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">The 4.0 Scale</h3>
            <p className="text-sm text-slate-700 mb-3">
              The most common scale in Pakistan (NUST, FAST, COMSATS). Often, a proportional formula <code>(CGPA / 4.0) × 100</code> is used for rough estimates, though exact mapping depends on the university's absolute/relative grading rubrics.
            </p>
          </div>
          
          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">The 10.0 Scale</h3>
            <p className="text-sm text-slate-700 mb-3">
              Often used in engineering programs or adopted from international systems. The standard universal conversion formula is <code>CGPA × 9.5</code>, which our calculator applies automatically.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">The 5.0 Scale</h3>
            <p className="text-sm text-slate-700 mb-3">
              Used by medical colleges and certain specific faculties. The proportional conversion is simply <code>(CGPA / 5.0) × 100</code>.
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
              q: "Does HEC have a universal conversion formula?",
              a: "HEC issues guidelines, but the ultimate authority on CGPA to percentage conversion is the formula printed on the back of your official university transcript. Always refer to your transcript for official documentation purposes."
            },
            {
              q: "Why do some universities use relative grading?",
              a: "Relative grading (bell curve) assigns your GPA based on how you performed relative to your class, not absolute marks. This makes direct percentage conversion tricky, which is why institutions rely on fixed conversion multipliers (like x9.5)."
            },
            {
              q: "Can I use this for CSS or FPSC applications?",
              a: "Yes, for general estimates. However, FPSC usually requires an official conversion certificate from your university's Controller of Examinations if your transcript does not explicitly mention the percentage or conversion formula."
            },
            {
              q: "What is the difference between SGPA and CGPA?",
              a: "SGPA (Semester Grade Point Average) is your performance in a single semester. CGPA (Cumulative Grade Point Average) is the weighted average of all your semesters combined."
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
        <h3 className="font-bold text-emerald-900 mb-4">More Academic Tools</h3>
        <p className="text-sm text-emerald-800 mb-6">Explore our suite of tools designed for students in Pakistan.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/percentage" className="px-6 py-2 bg-white rounded-full text-emerald-700 font-bold shadow-sm hover:shadow-md transition-shadow">General Percentage Calculator</Link>
          <Link to="/marks-percentage" className="px-6 py-2 bg-white rounded-full text-emerald-700 font-bold shadow-sm hover:shadow-md transition-shadow">Matric/FSc Marks Calculator</Link>
        </div>
      </section>

      {/* Footer Meta */}
      <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
          Updated: Sept 2026 | Academic Tools
        </div>
        <div className="flex gap-4 flex-wrap">
          <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">cgpa to percentage pakistan</span>
          <span className="px-3 py-1 bg-emerald-100 rounded-full text-[10px] font-bold text-emerald-700 italic">hec cgpa conversion</span>
        </div>
      </footer>
    </article>
  );
};
