import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import { PercentageSEO } from './seo/PercentageSEO';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const PercentageTool = ({ isUrdu }: { isUrdu: boolean }) => {
  const [value1, setValue1] = useState<number>(10);
  const [value2, setValue2] = useState<number>(100);
  const [result, setResult] = useState<number | null>(10);

  const calculateBasic = () => {
    setResult((value1 / value2) * 100);
  };

  useEffect(() => calculateBasic(), [value1, value2]);

  return (
    <div className={`space-y-12 ${isUrdu ? 'rtl font-urdu' : ''}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6 border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900">Basic Percentage</h3>
          <div className="flex flex-wrap items-center gap-4 text-lg">
            <span>What is</span>
            <input
              type="number"
              value={value1}
              onChange={e => setValue1(Number(e.target.value))}
              className="w-24 p-3 bg-slate-50 border rounded-xl font-bold text-center"
            />
            <span>% of</span>
            <input
              type="number"
              value={value2}
              onChange={e => setValue2(Number(e.target.value))}
              className="w-32 p-3 bg-slate-50 border rounded-xl font-bold text-center"
            />
            <span>?</span>
          </div>
        </div>

        <div className="bg-purple-600 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center text-center relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <p className="text-purple-100 uppercase text-xs font-black mb-2 tracking-widest text-center w-full">Calculation Result</p>
          <h4 className="text-6xl font-black text-white">
            {result !== null ? (value1 * value2 / 100).toLocaleString() : '0'}
          </h4>
          <p className="text-purple-200 mt-4 text-sm">
            {value1}% of {value2} is {value1 * value2 / 100}
          </p>
        </div>
      </div>
      <PercentageSEO />
    </div>
  );
};


