import React from 'react';
import { Link } from 'react-router-dom';

export const GradeCalculatorSEO = () => {
  return (
    <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
      {/* Header Section */}
      <header className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100">
          Academic Tools
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Grade Calculator Pakistan: <br />
          <span className="text-blue-600 italic">Based on New IBCC 2025 Rules</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
          The grading system for Matric and FSc in Pakistan is undergoing a massive change. The Inter Board Coordination Commission (IBCC) has introduced a new 10-point grading system starting from 2024-2025. Our <strong>Grade Calculator Pakistan</strong> instantly converts your marks into the exact new grades (A++, A+, etc.) so you know exactly where you stand.
        </p>
      </header>

      {/* Section: The New IBCC Grading Policy */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-blue-500 pl-6">The New 2025 Grading Policy Explained</h2>
        <p className="text-slate-600 leading-relaxed">
          Previously, Pakistan's education boards used a 7-point scale where 80% and above was simply an "A-1". To align with international standards, the IBCC has rolled out a new absolute grading scale that rewards exceptional performance with higher distinction.
        </p>
        
        <div className="bg-slate-50 border border-slate-200 rounded-[2rem] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-100 text-slate-700 uppercase font-bold">
                <tr>
                  <th className="px-6 py-4">Percentage Range</th>
                  <th className="px-6 py-4">New Grade</th>
                  <th className="px-6 py-4">Status / Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-emerald-50">
                  <td className="px-6 py-4 font-bold">96% - 100%</td>
                  <td className="px-6 py-4 font-black text-emerald-700">A++</td>
                  <td className="px-6 py-4">Extraordinary</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold">91% - 95%</td>
                  <td className="px-6 py-4 font-black text-emerald-600">A+</td>
                  <td className="px-6 py-4">Exceptional</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold">86% - 90%</td>
                  <td className="px-6 py-4 font-black text-emerald-500">A</td>
                  <td className="px-6 py-4">Outstanding</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold">81% - 85%</td>
                  <td className="px-6 py-4 font-black text-blue-600">B++</td>
                  <td className="px-6 py-4">Excellent</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold">76% - 80%</td>
                  <td className="px-6 py-4 font-black text-blue-500">B+</td>
                  <td className="px-6 py-4">Very Good</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold">40% - 75%</td>
                  <td className="px-6 py-4 font-black text-amber-500">B to D</td>
                  <td className="px-6 py-4">Good to Emerging</td>
                </tr>
                <tr className="bg-rose-50">
                  <td className="px-6 py-4 font-bold">Below 40%</td>
                  <td className="px-6 py-4 font-black text-rose-600">U</td>
                  <td className="px-6 py-4">Ungraded (Fail)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section: Passing Marks Change */}
      <section className="bg-white border border-slate-200 p-10 rounded-[3rem] shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">Important: Passing Marks Increased</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center mt-8">
          <div className="flex-1">
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Alongside the new grades, the Federal Board (FBISE) and IBCC have officially increased the minimum passing marks for Matric (SSC) and Intermediate (HSSC) exams.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed font-bold">
              The passing percentage has been increased from 33% to 40%.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mt-4">
              This means if you score 38 out of 100 in a subject, under the old rules you would have passed, but under the new 2025 rules, you will receive a "U" (Ungraded/Fail). Our calculator uses this updated 40% threshold.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl w-full md:w-1/3 text-center">
            <p className="text-xs uppercase font-bold tracking-widest text-amber-800 mb-2">New Passing Threshold</p>
            <h4 className="text-5xl font-black text-amber-600">40%</h4>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8 pt-10 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "Does this grading scale apply to Cambridge O/A Levels?",
              a: "No. O/A Levels (CAIE) follow their own international grading boundaries. However, when you apply to IBCC for an Equivalence Certificate, your Cambridge grades are converted into Pakistani marks and percentages using a specific IBCC formula."
            },
            {
              q: "Are all provincial boards implementing this?",
              a: "Federal Board (FBISE) was the first to implement this. However, IBCC is the umbrella organization for all BISEs (Sindh, Punjab, KPK, Balochistan), and the policy is meant to be adopted nationwide."
            },
            {
              q: "What does 'U' mean?",
              a: "In the new system, 'F' (Fail) has been replaced with 'U', which stands for Ungraded. It means the candidate could not meet the minimum 40% requirement to be assigned a grade."
            },
            {
              q: "How do I calculate my overall grade?",
              a: "Add up your obtained marks from all subjects, divide by the total maximum marks, and multiply by 100 to get your aggregate percentage. Enter that percentage into our calculator to see your final overall grade."
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
        <h3 className="font-bold text-blue-900 mb-4">Other Student Tools</h3>
        <p className="text-sm text-blue-800 mb-6">Calculate precise percentages or convert university GPAs.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/marks-percentage" className="px-6 py-2 bg-white rounded-full text-blue-700 font-bold shadow-sm hover:shadow-md transition-shadow">Calculate Subject Percentage</Link>
          <Link to="/cgpa" className="px-6 py-2 bg-white rounded-full text-blue-700 font-bold shadow-sm hover:shadow-md transition-shadow">University CGPA Calculator</Link>
        </div>
      </section>

      {/* Footer Meta */}
      <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
          Updated: Sept 2026 | Federal Board & IBCC Grading Policy
        </div>
        <div className="flex gap-4 flex-wrap">
          <span className="px-3 py-1 bg-blue-100 rounded-full text-[10px] font-bold text-blue-700 italic">ibcc grading scheme 2025</span>
          <span className="px-3 py-1 bg-blue-100 rounded-full text-[10px] font-bold text-blue-700 italic">fbise passing marks</span>
        </div>
      </footer>
    </article>
  );
};
