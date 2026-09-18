import React from 'react';
import { Link } from 'react-router-dom';

export const BMISEO = () => {
  return (
    <article className="mt-20 space-y-20 text-slate-700 leading-relaxed border-t border-slate-200 pt-20 max-w-5xl mx-auto px-4 font-sans text-justify">
      {/* Header Section */}
      <header className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-rose-50 text-rose-700 rounded-full text-xs font-black uppercase tracking-widest border border-rose-100">
          Health & Fitness
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          BMI Calculator Pakistan: <br />
          <span className="text-rose-600 italic">Check Your Body Mass Index</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed text-center">
          With changing dietary habits and increasingly sedentary lifestyles in urban Pakistan, keeping track of your health is more important than ever. Our <strong>BMI Calculator</strong> uses your height and weight to estimate your body fat, telling you whether you fall into the underweight, normal, overweight, or obese category according to World Health Organization (WHO) standards.
        </p>
      </header>

      {/* Section: The Asian BMI Problem */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 border-l-8 border-rose-500 pl-6">The "Asian BMI" Phenomenon</h2>
        <p className="text-slate-600 leading-relaxed">
          It is crucial for Pakistanis to understand that South Asians have a higher risk of cardiovascular diseases and type 2 diabetes at a much lower BMI compared to Caucasians. Because of our genetic disposition to store visceral fat (fat around the organs), the WHO has proposed lowered BMI cut-offs for Asian populations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Standard Global BMI</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><strong>Below 18.5:</strong> Underweight</li>
              <li><strong>18.5 – 24.9:</strong> Normal</li>
              <li><strong>25.0 – 29.9:</strong> Overweight</li>
              <li><strong>30.0 & Above:</strong> Obese</li>
            </ul>
          </div>
          
          <div className="bg-rose-50 border border-rose-100 p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Modified Asian BMI Guidelines</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><strong>Below 18.5:</strong> Underweight</li>
              <li><strong>18.5 – 22.9:</strong> Normal <span className="text-xs font-bold text-rose-600">(Lower cutoff!)</span></li>
              <li><strong>23.0 – 27.5:</strong> Overweight</li>
              <li><strong>27.5 & Above:</strong> Obese</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Beyond BMI */}
      <section className="bg-white border border-slate-200 p-10 rounded-[3rem] shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">Why BMI is Not the Complete Picture</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">Muscle Mass</h4>
            <p className="text-sm text-slate-600">BMI cannot distinguish between muscle and fat. A bodybuilder with low body fat might be classified as "Obese" simply because muscle is heavy.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">Age and Bone Density</h4>
            <p className="text-sm text-slate-600">Older adults naturally lose muscle and bone density over time. Their BMI might appear normal, but their body fat percentage could still be unhealthily high.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">Waist Circumference</h4>
            <p className="text-sm text-slate-600">Doctors strongly advise measuring your waist. For South Asian men, a waist over 35 inches (31.5 inches for women) drastically increases diabetes risk, regardless of BMI.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8 pt-10 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "Can children use this BMI calculator?",
              a: "No. Children and teenagers are still growing. Their BMI must be plotted on specific growth charts (BMI-for-age percentiles) provided by pediatricians, rather than using the standard adult formula."
            },
            {
              q: "How can I improve my BMI?",
              a: "If overweight, focus on a sustainable caloric deficit. Reduce processed carbohydrates and refined sugars (common in Pakistani bakery items and sweets), increase protein intake, and incorporate 150 minutes of moderate exercise per week."
            },
            {
              q: "Is BMI accurate for pregnant women?",
              a: "No. Pregnant women naturally gain weight to support the baby. Standard BMI charts do not apply during pregnancy."
            },
            {
              q: "Why is the obesity rate rising in Pakistan?",
              a: "A combination of a high-carb traditional diet (excessive wheat/rice and cooking oils), combined with a rapid shift towards a sedentary urban lifestyle and lack of open spaces for physical activity."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
              <p className="text-sm text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Meta */}
      <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
          Updated: Sept 2026 | Health & Wellness
        </div>
        <div className="flex gap-4 flex-wrap">
          <span className="px-3 py-1 bg-rose-100 rounded-full text-[10px] font-bold text-rose-700 italic">bmi calculator pakistan</span>
          <span className="px-3 py-1 bg-rose-100 rounded-full text-[10px] font-bold text-rose-700 italic">asian bmi guidelines</span>
        </div>
      </footer>
    </article>
  );
};
