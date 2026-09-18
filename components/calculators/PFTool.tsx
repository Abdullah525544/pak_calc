import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import { PFSEO } from './seo/PFSEO';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const PFTool = () => {
  const [basicSalary, setBasicSalary] = useState(100000);
  const [empContribution, setEmpContribution] = useState(10); // %
  const [employerContribution, setEmployerContribution] = useState(10); // %
  const [interestRate, setInterestRate] = useState(12); // %
  const [years, setYears] = useState(10);

  const monthlyEmpPF = basicSalary * (empContribution / 100);
  const monthlyEmployerPF = basicSalary * (employerContribution / 100);
  const totalMonthlyContribution = monthlyEmpPF + monthlyEmployerPF;

  // Detailed loop to track principal vs interest
  let totalBalance = 0;
  let totalPrincipal = 0;

  const yearlyContribution = totalMonthlyContribution * 12;

  for (let i = 0; i < years; i++) {
    totalPrincipal += yearlyContribution;
    totalBalance = (totalBalance + yearlyContribution) * (1 + interestRate / 100);
  }

  const totalInterest = totalBalance - totalPrincipal;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold">Provident Fund Calculation in Pakistan</h3>
          <p className="text-xs text-slate-500 mb-2">Easily find your PF deduction amount and PF percentage in salary.</p>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Monthly Basic Salary (PKR)</label>
            <input type="number" value={basicSalary} onChange={e => setBasicSalary(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Your Share %</label>
              <input type="number" value={empContribution} onChange={e => setEmpContribution(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Employer Share %</label>
              <input type="number" value={employerContribution} onChange={e => setEmployerContribution(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Return Rate %</label>
              <input type="number" value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Years</label>
              <input type="number" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-blue-900 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-30 -mr-32 -mt-32"></div>

          <div className="text-center mb-8 relative z-10">
            <p className="text-blue-200 uppercase text-xs font-black tracking-widest mb-2">Projected Maturity Amount</p>
            <h4 className="text-5xl font-black text-emerald-400">Rs. {Math.round(totalBalance).toLocaleString()}</h4>
            <p className="text-[10px] text-blue-300 mt-2">After {years} years of compounding</p>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/10 relative z-10">
            <div className="flex justify-between items-center text-sm">
              <span className="text-blue-200">Total Contributed (Principal)</span>
              <span className="font-bold">Rs. {Math.round(totalPrincipal).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-blue-200">Total Interest Earned</span>
              <span className="font-bold text-emerald-400">+ Rs. {Math.round(totalInterest).toLocaleString()}</span>
            </div>

            {/* Simple Bar Visualization */}
            <div className="w-full h-3 bg-blue-950 rounded-full mt-4 flex overflow-hidden">
              <div className="h-full bg-blue-400" style={{ width: `${(totalPrincipal / totalBalance) * 100}%` }}></div>
              <div className="h-full bg-emerald-400" style={{ width: `${(totalInterest / totalBalance) * 100}%` }}></div>
            </div>
            <div className="flex justify-between text-[10px] text-blue-300">
              <span>P: {Math.round((totalPrincipal / totalBalance) * 100)}%</span>
              <span>I: {Math.round((totalInterest / totalBalance) * 100)}%</span>
            </div>
          </div>
        </div>
      </div>
      <PFSEO />
    </div>
  );
};


