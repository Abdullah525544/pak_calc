import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import { BMISEO } from './seo/BMISEO';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const BMICalcTool = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const bmi = weight / Math.pow(height / 100, 2);

  let category = '';
  let color = '';
  let tip = '';

  if (bmi < 18.5) { category = 'Underweight'; color = 'text-blue-500'; tip = 'Focus on nutrient-rich foods to gain healthy weight.'; }
  else if (bmi < 25) { category = 'Normal Weight'; color = 'text-emerald-500'; tip = 'Great job! Maintain your balanced diet and activity.'; }
  else if (bmi < 30) { category = 'Overweight'; color = 'text-amber-500'; tip = 'Consider a slight calorie deficit and more daily movement.'; }
  else { category = 'Obese'; color = 'text-rose-500'; tip = 'Consult a healthcare provider for a personalized plan.'; }

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold">Body Stats</h3>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Weight (KG)</label>
            <input type="number" placeholder="Weight (kg)" value={weight} onChange={e => setWeight(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl text-xl font-bold" />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Height (CM)</label>
            <input type="number" placeholder="Height (cm)" value={height} onChange={e => setHeight(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl text-xl font-bold" />
            <p className="text-xs text-slate-400 mt-2 text-right">{Math.floor(height / 30.48)}ft {Math.round((height % 30.48) / 2.54)}in</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
          {/* Simple CSS Gauge Background */}
          <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-blue-400 via-emerald-400 via-amber-400 to-rose-500"></div>

          <p className="text-slate-400 uppercase text-xs font-black mb-4 tracking-widest">Your Result</p>
          <h4 className={`text-6xl font-black ${color} mb-2`}>{bmi.toFixed(1)}</h4>
          <p className={`text-xl font-bold ${color} mb-6`}>{category}</p>

          <div className="bg-slate-50 p-6 rounded-3xl w-full">
            <span className="text-2xl block mb-2">ðŸ’¡</span>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">{tip}</p>
          </div>
        </div>
      </div>
      <BMISEO />
    </div>
  );
};


