import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import { LandConverterSEO } from './seo/LandConverterSEO';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const LandConverterTool = () => {
  const [inputValue, setInputValue] = useState(1);
  const [inputUnit, setInputUnit] = useState<'murabba' | 'kanal' | 'marla' | 'gaz' | 'sqft' | 'sarsahi'>('murabba');

  // Constants (relative to Marla for easier calculation)
  // Standard measuring in Pakistan rural & most plots: 1 Marla = 272.25 sq ft
  // 1 Sarsahi = 1 Marla / 9
  // 1 Gaz (Square Yard) = 9 sq ft
  const MARLA_TO_SQFT = 272.25;
  const MARLA_TO_SARSAHI = 9;
  const KANAL_TO_MARLA = 20;
  const ACRE_TO_KANAL = 8;
  const MURABBA_TO_ACRE = 25; // 200 Kanal
  const MURABBA_TO_KANAL = 200;

  // Convert input to Marlas as base unit
  let valueInMarla = 0;
  if (inputUnit === 'murabba') valueInMarla = inputValue * MURABBA_TO_KANAL * KANAL_TO_MARLA;
  else if (inputUnit === 'kanal') valueInMarla = inputValue * KANAL_TO_MARLA;
  else if (inputUnit === 'marla') valueInMarla = inputValue;
  else if (inputUnit === 'gaz') valueInMarla = inputValue / (MARLA_TO_SQFT / 9);
  else if (inputUnit === 'sqft') valueInMarla = inputValue / MARLA_TO_SQFT;
  else if (inputUnit === 'sarsahi') valueInMarla = inputValue / MARLA_TO_SARSAHI;

  // Calculate other units from base Marla
  const outMurabba = valueInMarla / (MURABBA_TO_KANAL * KANAL_TO_MARLA);
  const outKanal = valueInMarla / KANAL_TO_MARLA;
  const outMarla = valueInMarla;
  const outGaz = valueInMarla * (MARLA_TO_SQFT / 9);
  const outSqft = valueInMarla * MARLA_TO_SQFT;
  const outSarsahi = valueInMarla * MARLA_TO_SARSAHI;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold">Land Conversion</h3>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Input Value</label>
            <input
              type="number"
              value={inputValue}
              onChange={e => setInputValue(Number(e.target.value))}
              className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Select Unit</label>
            <div className="grid grid-cols-3 gap-2">
              <button onClick={() => setInputUnit('murabba')} className={`p-3 rounded-2xl border text-xs font-bold transition-all ${inputUnit === 'murabba' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-500'}`}>Murabba</button>
              <button onClick={() => setInputUnit('kanal')} className={`p-3 rounded-2xl border text-xs font-bold transition-all ${inputUnit === 'kanal' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-500'}`}>Kanal</button>
              <button onClick={() => setInputUnit('marla')} className={`p-3 rounded-2xl border text-xs font-bold transition-all ${inputUnit === 'marla' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-500'}`}>Marla</button>
              <button onClick={() => setInputUnit('gaz')} className={`p-3 rounded-2xl border text-xs font-bold transition-all ${inputUnit === 'gaz' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-500'}`}>Gaz (SqYd)</button>
              <button onClick={() => setInputUnit('sqft')} className={`p-3 rounded-2xl border text-xs font-bold transition-all ${inputUnit === 'sqft' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-500'}`}>Square Feet</button>
              <button onClick={() => setInputUnit('sarsahi')} className={`p-3 rounded-2xl border text-xs font-bold transition-all ${inputUnit === 'sarsahi' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-500'}`}>Sarsahi</button>
            </div>
            <p className="text-xs text-slate-400 mt-4 text-center italic">Calculations based on standard 272.25 sq ft Marla.</p>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center">
          <p className="text-slate-400 uppercase text-xs font-black mb-6 tracking-widest">Equivalent Area</p>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="text-2xl font-black">{outMurabba < 1 ? outMurabba.toFixed(6) : outMurabba.toLocaleString(undefined, { maximumFractionDigits: 3 })}</span>
              <span className="text-xs text-slate-400 uppercase font-bold">Murabba</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="text-2xl font-black">{outKanal < 1 ? outKanal.toFixed(4) : outKanal.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
              <span className="text-xs text-slate-400 uppercase font-bold">Kanal</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="text-2xl font-black text-emerald-400">{outMarla.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
              <span className="text-xs text-slate-400 uppercase font-bold">Marla</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="text-2xl font-black">{outGaz.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
              <span className="text-xs text-slate-400 uppercase font-bold">Gaz (Sq Yd)</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="text-2xl font-black">{outSqft.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
              <span className="text-xs text-slate-400 uppercase font-bold">Square Feet</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-black">{outSarsahi.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
              <span className="text-xs text-slate-400 uppercase font-bold">Sarsahi</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
        <h3 className="text-2xl font-bold mb-6 text-slate-800">Conversion Reference Table</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 uppercase text-xs tracking-wider">
                <th className="p-4 rounded-tl-xl border-b border-slate-100">Unit</th>
                <th className="p-4 rounded-tr-xl border-b border-slate-100">Values</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium text-slate-700 divide-y divide-slate-100">
              <tr><td className="p-4">1 Murabba</td><td className="p-4">25 Kanals</td></tr>
              <tr><td className="p-4">1 Kanal</td><td className="p-4">20 Marlas</td></tr>
              <tr><td className="p-4">1 Marla</td><td className="p-4">9 Sarsahi</td></tr>
              <tr><td className="p-4">1 Kanal</td><td className="p-4">605 Square Yards</td></tr>
              <tr><td className="p-4">1 Kanal</td><td className="p-4">500 Square Meters (approx)</td></tr>
              <tr><td className="p-4">1 Acre</td><td className="p-4">8 Kanals</td></tr>
              <tr><td className="p-4">1 Murabba</td><td className="p-4">25 Acres (approx)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <LandConverterSEO />
    </div>
  );
};


