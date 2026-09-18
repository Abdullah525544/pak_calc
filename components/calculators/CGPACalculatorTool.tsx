import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import * as InfoPages from '../InfoPages';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const CGPACalculatorTool = () => {
  const [scale, setScale] = useState(10);
  const [cgpa, setCgpa] = useState(8.5);

  let percentage = 0;
  if (scale === 10) {
    percentage = cgpa * 9.5;
  } else {
    percentage = (cgpa / scale) * 100;
  }

  // ensure no weird values out of bounds
  percentage = Math.min(100, Math.max(0, percentage));

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold">Academic Performance</h3>

          <div>
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Grading Scale</label>
            <div className="grid grid-cols-3 gap-2">
              {[10, 5, 4].map(val => (
                <button
                  key={val}
                  onClick={() => setScale(val)}
                  className={`p-3 rounded-2xl border text-sm font-bold transition-all ${scale === val ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'}`}
                >
                  {val}-Point
                </button>
              ))}
            </div>
            <p className="text-[10px] text-slate-400 mt-2">Select the maximum CGPA possible at your institution.</p>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Your CGPA</label>
            <input
              type="number"
              step="0.1"
              min="0"
              max={scale}
              value={cgpa}
              onChange={e => setCgpa(Number(e.target.value))}
              className="w-full p-4 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-2xl font-bold text-xl outline-none transition-all"
              placeholder={`Max: ${scale}`}
            />
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl border border-slate-900 flex flex-col items-center justify-center text-center relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-emerald-500/20 transition-all"></div>

          <p className="text-slate-400 uppercase text-xs font-black mb-4 tracking-widest relative z-10">Equivalent Percentage</p>
          <h4 className="text-7xl font-black text-emerald-400 mb-2 relative z-10 drop-shadow-lg">{percentage.toFixed(2)}%</h4>

          <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden mt-6 relative z-10 border border-white/5">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-300 h-full transition-all duration-1000" style={{ width: `${percentage}%` }}></div>
          </div>

          <div className="bg-white/5 px-6 py-3 rounded-2xl border border-white/10 mt-6 relative z-10">
            <p className="text-sm font-medium text-slate-300">
              {scale === 10 ? 'Based on the standard 9.5 multiplier formula.' : `Calculated proportionally: (${cgpa} ÷ ${scale}) × 100.`}
            </p>
          </div>
        </div>
      </div>
      <InfoPages.CGPACalculatorBlogContent />
    </div>
  );
};


