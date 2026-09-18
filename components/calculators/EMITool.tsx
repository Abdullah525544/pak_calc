import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import * as InfoPages from '../InfoPages';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const EMITool = () => {
  const [loan, setLoan] = useState(1000000);
  const [rate, setRate] = useState(15);
  const [years, setYears] = useState(5);

  const n = years * 12;
  // Guard against division-by-zero when rate is 0% (interest-free loan).
  // The standard annuity formula reduces to EMI = principal / months.
  const isZeroRate = rate <= 0;
  const r = rate / 12 / 100;
  const emi = isZeroRate
    ? loan / n
    : (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  const totalPayment = emi * n;
  const totalInterest = totalPayment - loan;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-4">
          <h3 className="text-2xl font-bold">Loan EMI Calculator Pakistan</h3>
          <p className="text-xs text-slate-500 mb-4">Calculate your monthly installment for car or bank loans instantly.</p>
          <div>
            <label className="text-xs font-bold text-slate-500">Loan Amount (PKR)</label>
            <input type="number" placeholder="Loan Amount" value={loan} onChange={e => setLoan(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-500">Interest Rate %</label>
              <input type="number" placeholder="Interest Rate %" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500">Tenure (Years)</label>
              <input type="number" placeholder="Tenure (Years)" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl text-center flex flex-col justify-center">
          <p className="text-slate-400 uppercase text-xs font-black mb-2">Monthly Installment (EMI)</p>
          <h4 className="text-5xl font-black text-blue-400">Rs. {Math.round(emi).toLocaleString()}</h4>

          <div className="mt-8 pt-8 border-t border-white/10 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Principal Amount</span>
              <span className="font-bold">Rs. {loan.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Total Interest</span>
              <span className="font-bold text-rose-400">Rs. {Math.round(totalInterest).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm pt-2 border-t border-white/5">
              <span className="text-slate-400">Total Amount Payable</span>
              <span className="font-bold text-emerald-400">Rs. {Math.round(totalPayment).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      <InfoPages.EMIBlogContent />
      <InfoPages.EMISEOArticle />
    </div>
  );
};


