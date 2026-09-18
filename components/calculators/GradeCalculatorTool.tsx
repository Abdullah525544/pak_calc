import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import * as InfoPages from '../InfoPages';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const GradeCalculatorTool = () => {
  const [obtained, setObtained] = useState(85);
  const [total, setTotal] = useState(100);
  const percentage = total > 0 ? (obtained / total) * 100 : 0;

  // IBCC 2025 Grading Scale
  if (percentage >= 96) { grade = 'A++'; color = 'text-emerald-600'; status = 'Extraordinary'; }
  else if (percentage >= 91) { grade = 'A+'; color = 'text-emerald-500'; status = 'Exceptional'; }
  else if (percentage >= 86) { grade = 'A'; color = 'text-emerald-400'; status = 'Outstanding'; }
  else if (percentage >= 81) { grade = 'B++'; color = 'text-blue-600'; status = 'Excellent'; }
  else if (percentage >= 76) { grade = 'B+'; color = 'text-blue-500'; status = 'Very Good'; }
  else if (percentage >= 71) { grade = 'B'; color = 'text-blue-400'; status = 'Good'; }
  else if (percentage >= 61) { grade = 'C+'; color = 'text-amber-500'; status = 'Fairly Good'; }
  else if (percentage >= 51) { grade = 'C'; color = 'text-amber-400'; status = 'Above Average'; }
  else if (percentage >= 40) { grade = 'D'; color = 'text-orange-500'; status = 'Emerging'; }
  else { grade = 'U'; color = 'text-rose-500'; status = 'Ungraded (Fail)'; }

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6 text-slate-800">
          <h3 className="text-2xl font-bold">Academic Performance</h3>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Marks Obtained</label>
            <input type="number" value={obtained} onChange={e => setObtained(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl" />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Total Marks</label>
            <input type="number" value={total} onChange={e => setTotal(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl" />
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500"></div>
          <p className="text-slate-400 uppercase text-xs font-black mb-4 tracking-widest">Calculated Grade</p>
          <h4 className={`text-8xl font-black ${color} mb-2`}>{grade}</h4>
          <p className={`text-2xl font-bold ${color} mb-6 tracking-tight uppercase`}>{status}</p>
          <div className="bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
            <p className="text-sm font-bold text-slate-600">Percentage: {percentage.toFixed(2)}%</p>
          </div>
        </div>
      </div>
      <InfoPages.GradeCalculatorBlogContent />
    </div>
  );
};


