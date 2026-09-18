import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import * as InfoPages from '../InfoPages';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const ProfitMarginTool = () => {
  const [mode, setMode] = useState<'margin' | 'markup'>('margin');
  const [cost, setCost] = useState(1000);
  const [revenue, setRevenue] = useState(1500); // For Margin Mode
  const [desiredMargin, setDesiredMargin] = useState(30); // For Markup Mode

  // Mode 1: Known Cost & Revenue -> Find Margin
  const profit = revenue - cost;
  const margin = (profit / revenue) * 100;
  const markup = (profit / cost) * 100;

  // Mode 2: Known Cost & Desired Margin -> Find Revenue
  // Revenue = Cost / (1 - Margin%)
  const requiredRevenue = cost / (1 - (desiredMargin / 100));
  const projectedProfit = requiredRevenue - cost;

  return (
    <div className="space-y-12">
      <div className="flex justify-center mb-8">
        <div className="bg-white p-1 rounded-full border border-slate-100 shadow-sm inline-flex">
          <button
            onClick={() => setMode('margin')}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${mode === 'margin' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            Find Margin %
          </button>
          <button
            onClick={() => setMode('markup')}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${mode === 'markup' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            Find Selling Price
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold">Business Data</h3>

          <div>
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Product Cost</label>
            <input type="number" value={cost} onChange={e => setCost(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl" />
          </div>

          {mode === 'margin' ? (
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Selling Price</label>
              <input type="number" value={revenue} onChange={e => setRevenue(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl" />
            </div>
          ) : (
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Desired Margin %</label>
              <input type="number" value={desiredMargin} onChange={e => setDesiredMargin(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl" />
              <p className="text-[10px] text-slate-400 mt-2">How much of the final price should be profit?</p>
            </div>
          )}
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center text-center">
          {mode === 'margin' ? (
            <>
              <p className="text-slate-400 uppercase text-xs font-black mb-2">Net Profit Margin</p>
              <h4 className="text-6xl font-black text-emerald-400 mb-6">{margin.toFixed(1)}%</h4>

              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-black">Profit Amount</p>
                  <p className="font-bold text-xl">Rs. {Math.round(profit).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-black">Markup %</p>
                  <p className="font-bold text-xl text-blue-400">{markup.toFixed(1)}%</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="text-slate-400 uppercase text-xs font-black mb-2">Suggested Selling Price</p>
              <h4 className="text-5xl font-black text-emerald-400 mb-6">Rs. {Math.round(requiredRevenue).toLocaleString()}</h4>

              <div className="bg-white/10 p-4 rounded-2xl">
                <p className="text-[10px] text-slate-300 uppercase mb-1">Expected Profit</p>
                <p className="font-bold text-2xl">Rs. {Math.round(projectedProfit).toLocaleString()}</p>
              </div>
            </>
          )}
        </div>
      </div>
      <InfoPages.ProfitMarginBlogContent />
      <InfoPages.ProfitMarginSEOArticle />
    </div>
  );
};


