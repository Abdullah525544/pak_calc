import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import * as InfoPages from '../InfoPages';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const MortgageTool = () => {
  const [homeValue, setHomeValue] = useState(15000000);
  const [downPayment, setDownPayment] = useState(3000000);
  const [interestRate, setInterestRate] = useState(18);
  const [tenure, setTenure] = useState(20);

  const loanAmount = homeValue - downPayment;
  const monthlyRate = (interestRate / 100) / 12;
  const totalMonths = tenure * 12;

  const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6 border border-slate-100">
          <h3 className="text-2xl font-bold">Property Details</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Property Value (PKR)</label>
              <input type="number" value={homeValue} onChange={e => setHomeValue(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Down Payment (PKR)</label>
              <input type="number" value={downPayment} onChange={e => setDownPayment(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Markup Rate (%)</label>
              <input type="number" value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Loan Tenure (Years)</label>
              <input type="number" value={tenure} onChange={e => setTenure(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-20 -mr-32 -mb-32"></div>

          <div className="text-center mb-8 relative z-10">
            <p className="text-slate-400 uppercase text-xs font-black tracking-widest mb-2">Estimated Monthly Installment</p>
            <h4 className="text-5xl font-black text-emerald-400">Rs. {Math.round(emi).toLocaleString()}</h4>
            <p className="text-[10px] text-slate-500 mt-2">KIBOR linked estimate for Pakistan</p>
          </div>

          <div className="space-y-3 pt-8 border-t border-white/10 relative z-10">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Total Loan Amount</span>
              <span className="font-bold">Rs. {loanAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Total Interest Payable</span>
              <span className="font-bold text-rose-400">Rs. {Math.round(totalInterest).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm pt-3 border-t border-white/5">
              <span className="font-bold">Total Cost of Property</span>
              <span className="font-black text-xl text-emerald-400">Rs. {Math.round(totalPayment + downPayment).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      <InfoPages.MortgageBlogContent />
    </div>
  );
};

