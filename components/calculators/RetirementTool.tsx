import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import * as InfoPages from '../InfoPages';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const RetirementTool = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retireAge, setRetireAge] = useState(60);
  const [lifeExpectancy, setLifeExpectancy] = useState(80);
  const [monthlyExpense, setMonthlyExpense] = useState(100000);
  const [currentSavings, setCurrentSavings] = useState(500000);
  const [inflation, setInflation] = useState(10); // High inflation in PK
  const [preRetireReturn, setPreRetireReturn] = useState(12); // Equity/Mutual Funds
  const [postRetireReturn, setPostRetireReturn] = useState(10); // Safer debt funds

  // 1. Calculate expense at retirement
  const yearsToRetire = Math.max(0, retireAge - currentAge);
  const yearsInRetirement = Math.max(0, lifeExpectancy - retireAge);

  const expenseAtRetirement = monthlyExpense * Math.pow(1 + inflation / 100, yearsToRetire);

  // 2. Calculate Corpus Needed
  // Corpus = (Annual Expense at Retirement) * ((1 - (1+r)^-n ) / r) 
  // Where r = real rate of return during retirement (return - inflation)
  // Real Rate approx = (1+Ret)/ (1+Inf) - 1
  const realRatePostRetire = ((1 + postRetireReturn / 100) / (1 + inflation / 100)) - 1;
  const annualExpenseAtStart = expenseAtRetirement * 12;

  // PV of Annuity Due (assuming expense at start of year/month)
  // If Real Rate is 0 or negative (rare but possible in high inflation), handled carefully
  let corpusNeeded = 0;
  if (Math.abs(realRatePostRetire) < 0.0001) {
    corpusNeeded = annualExpenseAtStart * yearsInRetirement;
  } else {
    corpusNeeded = annualExpenseAtStart * ((1 - Math.pow(1 + realRatePostRetire, -yearsInRetirement)) / realRatePostRetire);
  }

  // 3. Gap Analysis
  // FV of current savings
  const fvCurrentSavings = currentSavings * Math.pow(1 + preRetireReturn / 100, yearsToRetire);
  const shortfall = Math.max(0, corpusNeeded - fvCurrentSavings);

  // 4. Monthly Savings Needed to cover shortfall
  // PMT formula: P = (FV * r) / ((1+r)^n - 1) * (1+r) if start of period? or end? Let's use standard end.
  const rMonthly = (preRetireReturn / 100) / 12;
  const nMonths = yearsToRetire * 12;
  const monthlySavingsNeeded = shortfall > 0 ? (shortfall * rMonthly) / (Math.pow(1 + rMonthly, nMonths) - 1) : 0;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold text-blue-900">Retirement Plan</h3>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Current Age</label>
              <input type="number" value={currentAge} onChange={e => setCurrentAge(Number(e.target.value))} className="w-full p-3 bg-slate-50 border rounded-xl font-bold" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Retire Age</label>
              <input type="number" value={retireAge} onChange={e => setRetireAge(Number(e.target.value))} className="w-full p-3 bg-slate-50 border rounded-xl font-bold" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Life Exp.</label>
              <input type="number" value={lifeExpectancy} onChange={e => setLifeExpectancy(Number(e.target.value))} className="w-full p-3 bg-slate-50 border rounded-xl font-bold" />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Current Monthly Expense</label>
            <input type="number" value={monthlyExpense} onChange={e => setMonthlyExpense(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl text-lg font-bold" />
          </div>

          <div>
            <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Current Savings (Optional)</label>
            <input type="number" value={currentSavings} onChange={e => setCurrentSavings(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase mb-3">Assumptions</p>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <span className="text-[10px] text-slate-500 block">Inflation</span>
                <input type="number" value={inflation} onChange={e => setInflation(Number(e.target.value))} className="w-full p-2 bg-white border rounded-lg text-xs font-bold" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">Pre-Ret %</span>
                <input type="number" value={preRetireReturn} onChange={e => setPreRetireReturn(Number(e.target.value))} className="w-full p-2 bg-white border rounded-lg text-xs font-bold" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">Post-Ret %</span>
                <input type="number" value={postRetireReturn} onChange={e => setPostRetireReturn(Number(e.target.value))} className="w-full p-2 bg-white border rounded-lg text-xs font-bold" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-30 -mr-32 -mt-32"></div>

          <div className="relative z-10 text-center space-y-8">
            <div>
              <p className="text-blue-200 uppercase text-[10px] font-black tracking-widest mb-2">Total Corpus Needed</p>
              <h4 className="text-4xl lg:text-5xl font-black text-white">Rs. {Math.round(corpusNeeded / 10000000).toFixed(2)} Cr</h4>
              <p className="text-[10px] text-blue-300 mt-2">
                To sustain {yearsInRetirement} years with inflation adjusted expenses (Rs. {Math.round(expenseAtRetirement).toLocaleString()}/mo at start)
              </p>
            </div>

            <div className="pt-8 border-t border-blue-800">
              <p className="text-blue-200 uppercase text-[10px] font-black tracking-widest mb-1">Gap & Required Action</p>
              <div className="flex flex-col items-center">
                <p className="text-3xl font-black text-emerald-400">Save Rs. {Math.round(monthlySavingsNeeded).toLocaleString()} <span className="text-sm text-emerald-200 font-normal">/ month</span></p>
                {currentSavings > 0 && <p className="text-[10px] text-blue-400 mt-2">considering your existing {Math.round(currentSavings / 100000).toFixed(1)} Lakh savings</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoPages.RetirementBlogContent />
      <InfoPages.RetirementSEOArticle />
    </div>
  );
};


