import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import { InvestmentReturnSEO } from './seo/InvestmentReturnSEO';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const InvestmentReturnTool = () => {
  const [principal, setPrincipal] = useState(100000);
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const [compounding, setCompounding] = useState(12); // Monthly default
  const [adjustInflation, setAdjustInflation] = useState(false);
  const [inflationRate, setInflationRate] = useState(8);

  const [data, setData] = useState<any[]>([]);
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    let total = principal;
    let totalInvested = principal;
    // Effective rate if inflation adjusted: Real Rate = (1 + Nominal) / (1 + Inflation) - 1
    // Simplified for tool: adjusting the final value or the rate?
    // Let's adjust the growth rate to be "Real Return" if toggle is on.
    const effectiveRate = adjustInflation ? ((1 + rate / 100) / (1 + inflationRate / 100) - 1) * 100 : rate;

    const ratePerPeriod = (effectiveRate / 100) / compounding;
    const chartData = [];

    for (let i = 0; i <= years; i++) {
      if (i > 0) {
        for (let m = 0; m < compounding; m++) {
          total = (total + (monthly * (12 / compounding))) * (1 + ratePerPeriod);
          totalInvested += (monthly * (12 / compounding));
        }
      }
      chartData.push({
        year: `Y${i}`,
        value: Math.round(total),
        invested: Math.round(totalInvested)
      });
    }

    setData(chartData);
    setResult({
      total,
      invested: totalInvested,
      returns: total - totalInvested
    });
  };

  useEffect(() => calculate(), [principal, monthly, rate, years, compounding, adjustInflation, inflationRate]);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold text-emerald-900">Investment Strategy</h3>

          <div className="flex items-center justify-between bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
            <div>
              <span className="text-sm font-bold text-emerald-900">Adjust for Inflation?</span>
              <p className="text-[10px] text-emerald-700">See "Real Value" in today's purchasing power</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={adjustInflation} onChange={e => setAdjustInflation(e.target.checked)} className="sr-only peer" />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Starting Amount</label>
                <input type="number" value={principal} onChange={e => setPrincipal(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Monthly Contribution</label>
                <input type="number" value={monthly} onChange={e => setMonthly(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Expected Return %</label>
                <input type="number" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Duration (Years)</label>
                <input type="number" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
              </div>
            </div>

            {adjustInflation && (
              <div className="animate-in fade-in slide-in-from-top-2">
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Expected Inflation %</label>
                <input type="number" value={inflationRate} onChange={e => setInflationRate(Number(e.target.value))} className="w-full p-4 bg-rose-50 border border-rose-100 rounded-2xl font-bold text-rose-900" />
              </div>
            )}
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl flex flex-col border border-slate-50 relative overflow-hidden">
          {result && (
            <div className="mb-8 text-center relative z-10">
              <p className="text-slate-400 uppercase text-xs font-black tracking-widest mb-1">
                {adjustInflation ? "Real Maturity Value (Today's Money)" : "Projected Maturity Value"}
              </p>
              <h4 className="text-5xl font-black text-emerald-600">Rs. {Math.round(result.total).toLocaleString()}</h4>

              <div className="flex justify-center gap-2 mt-6">
                <div className="px-4 py-2 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-[10px] uppercase font-bold text-blue-400">Total Invested</p>
                  <p className="text-lg font-black text-blue-900">Rs. {result.invested.toLocaleString()}</p>
                </div>
                <div className="px-4 py-2 bg-emerald-50 rounded-xl border border-emerald-100">
                  <p className="text-[10px] uppercase font-bold text-emerald-400">Total Profit</p>
                  <p className="text-lg font-black text-emerald-900">Rs. {Math.round(result.returns).toLocaleString()}</p>
                </div>
              </div>
            </div>
          )}

          <div className="h-48 w-full mt-auto relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <Tooltip
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontSize: '12px' }}
                  formatter={(v: number) => `Rs. ${v.toLocaleString()}`}
                  labelStyle={{ display: 'none' }}
                />
                <Area type="monotone" dataKey="value" stroke="#10b981" fillOpacity={1} fill="url(#colorValue)" strokeWidth={3} />
                <Area type="monotone" dataKey="invested" stroke="#3b82f6" fillOpacity={0} strokeWidth={2} strokeDasharray="4 4" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <InvestmentReturnSEO />
    </div>
  );
};


