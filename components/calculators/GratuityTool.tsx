import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import { GratuitySEO } from './seo/GratuitySEO';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const GratuityTool = () => {
  // Toggle lets the user pick whether to enter Last Drawn Gross Salary
  // (Standing Orders Ordinance 1968 calls this "wages") or Last Drawn
  // Basic Salary (the common private-sector convention).
  const [salaryMode, setSalaryMode] = useState<'gross' | 'basic'>('gross');
  const [lastDrawn, setLastDrawn] = useState(50000);
  const [years, setYears] = useState(5);

  // Formula: (Last drawn salary / 26) * 30 * years of service
  // The /26 × 30 idiom encodes "26 working days × 30 calendar days".
  const gratuity = (lastDrawn * years * 30) / 26;

  // Tax Exemptions
  const approvedExemption = Math.min(gratuity, 300000);
  const unapprovedExemption = Math.min(gratuity, 75000); // Simplification of "Lower of 75k or 50%"

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold">Service Details</h3>

          <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl flex gap-3">
            <span className="text-2xl">ðŸ’¡</span>
            <p className="text-xs text-indigo-800 leading-relaxed">
              <strong>Tip:</strong> According to Pakistan Labor Laws, Gratuity is usually calculated on your <strong>Last Drawn GROSS Salary</strong> (including COLA), not just Basic Salary.
            </p>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Salary basis</label>
            <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-2xl mt-2">
              <button
                type="button"
                onClick={() => setSalaryMode('gross')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${salaryMode === 'gross' ? 'bg-white shadow text-emerald-700' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Last Drawn Gross
              </button>
              <button
                type="button"
                onClick={() => setSalaryMode('basic')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${salaryMode === 'basic' ? 'bg-white shadow text-emerald-700' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Last Drawn Basic
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">
              Last Drawn {salaryMode === 'gross' ? 'Gross' : 'Basic'} Salary (PKR / month)
            </label>
            <input
              type="number"
              value={lastDrawn}
              onChange={e => setLastDrawn(Number(e.target.value))}
              className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Total Completed Years</label>
            <input
              type="number"
              value={years}
              onChange={e => setYears(Number(e.target.value))}
              className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl"
            />
            <p className="text-[10px] text-slate-400 mt-2 ml-1">Note: Service of more than 6 months in the last year is counted as a full year.</p>
          </div>
        </div>

        <div className="bg-indigo-700 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden">
          <div className="absolute left-0 top-0 w-64 h-64 bg-indigo-500 rounded-full blur-[120px] opacity-50 -ml-20 -mt-20"></div>

          <div className="relative z-10 text-center">
            <p className="text-indigo-200 uppercase text-xs font-black tracking-widest mb-4">Total Gratuity Payable</p>
            <h4 className="text-5xl font-black mb-2">Rs. {Math.round(gratuity).toLocaleString()}</h4>
            <p className="text-indigo-200 text-[11px] mt-1">
              Formula: ({salaryMode === 'gross' ? 'Gross' : 'Basic'} salary ÷ 26) × 30 × {years} yrs
            </p>

            <div className="mt-8 pt-8 border-t border-indigo-500/50 text-left space-y-3">
              <p className="text-xs font-black text-indigo-300 uppercase tracking-widest mb-2">Tax Exemption Limits</p>
              <div className="flex justify-between text-sm">
                <span className="opacity-80">If Approved Fund:</span>
                <span className="font-bold">Up to Rs. 300k Exempt</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-80">If Unapproved:</span>
                <span className="font-bold">Up to Rs. 75k Exempt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GratuitySEO />
    </div>
  );
};


