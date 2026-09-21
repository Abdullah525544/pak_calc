import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import { PasswordGenSEO } from './seo/PasswordGenSEO';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const PasswordGenTool = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generate = () => {
    let charset = 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let res = '';
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < length; i++) {
      res += charset[array[i] % charset.length];
    }
    setPassword(res);
  };

  useEffect(() => generate(), []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6 border border-slate-100">
          <h3 className="text-2xl font-bold">Customization</h3>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase block mb-2">Password Length: {length}</label>
              <input
                type="range"
                min="8" max="64"
                value={length}
                onChange={e => setLength(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-yellow-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" checked={includeUppercase} onChange={e => setIncludeUppercase(e.target.checked)} className="w-5 h-5 accent-yellow-500 rounded" />
                <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900">Uppercase</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" checked={includeNumbers} onChange={e => setIncludeNumbers(e.target.checked)} className="w-5 h-5 accent-yellow-500 rounded" />
                <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900">Numbers</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" checked={includeSymbols} onChange={e => setIncludeSymbols(e.target.checked)} className="w-5 h-5 accent-yellow-500 rounded" />
                <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900">Symbols</span>
              </label>
            </div>
          </div>

          <button
            onClick={generate}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg"
          >
            Regenerate Password
          </button>
        </div>

        <div className="bg-yellow-400 text-slate-900 p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center items-center text-center border-4 border-white">
          <p className="text-yellow-900 uppercase text-[10px] font-black mb-4 tracking-[0.2em]">Your Secure Password</p>
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl w-full break-all font-mono text-2xl font-bold mb-6 selection:bg-yellow-500">
            {password}
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-8 py-3 bg-white hover:bg-slate-50 rounded-full text-sm font-black shadow-md transition-all active:scale-95"
          >
            <span>âœ…</span> Copy Password
          </button>
        </div>
      </div>
      <PasswordGenSEO />
    </div>
  );
};


