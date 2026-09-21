import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import { MarksPercentageSEO } from './seo/MarksPercentageSEO';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const MarkPercentageTool = () => {
  const [obtained, setObtained] = useState(850);
  const [total, setTotal] = useState(1100);
  const percentage = total > 0 ? (obtained / total) * 100 : 0;

  let grade = 'U';
  if (percentage >= 96) grade = 'A++';
  else if (percentage >= 91) grade = 'A+';
  else if (percentage >= 86) grade = 'A';
  else if (percentage >= 81) grade = 'B++';
  else if (percentage >= 76) grade = 'B+';
  else if (percentage >= 71) grade = 'B';
  else if (percentage >= 61) grade = 'C+';
  else if (percentage >= 51) grade = 'C';
  else if (percentage >= 40) grade = 'D';

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold">Marks Details</h3>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Obtained Marks</label>
            <input type="number" value={obtained} onChange={e => setObtained(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl" />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Total Marks</label>
            <input type="number" value={total} onChange={e => setTotal(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl" />
          </div>
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
            <p className="text-xs text-blue-800">Based on IBCC 2025 10-point scale: Grade <strong>{grade}</strong></p>
          </div>
        </div>

        <div className="bg-emerald-600 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center text-center relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
          <p className="text-emerald-100 uppercase text-xs font-black mb-2 tracking-widest">Percentage Score</p>
          <h4 className="text-7xl font-black mb-4">{percentage.toFixed(2)}%</h4>
          <div className="w-full bg-black/20 h-3 rounded-full overflow-hidden mb-6">
            <div className="bg-white h-full transition-all duration-1000" style={{ width: `${Math.min(100, percentage)}%` }}></div>
          </div>
          <p className="text-emerald-100 text-sm font-medium">
            You obtained {obtained} out of {total} marks.
          </p>
        </div>
      </div>
      <MarksPercentageSEO />
    </div>
  );
};


