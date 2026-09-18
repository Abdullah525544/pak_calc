import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import { UnitConverterSEO } from './seo/UnitConverterSEO';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const UnitConverterTool = () => {
  const [activeTab, setActiveTab] = useState<'area' | 'weight'>('area');

  // Area State
  const [marla, setMarla] = useState(1);
  const [marlaType, setMarlaType] = useState<225 | 272.25>(225);

  // Weight State
  const [tola, setTola] = useState(1);
  const TOLA_TO_GRAM = 11.664;

  // Conversions
  const totalSqFt = marla * marlaType;
  const totalSqYards = totalSqFt / 9;
  const totalKanal = marla / 20;

  const totalGrams = tola * TOLA_TO_GRAM;
  const totalMasha = tola * 12;

  return (
    <div className="space-y-12">
      <div className="mb-4 text-slate-800 bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
        <h2 className="text-3xl font-black mb-4">Pakistan Unit Converter — Land, Weight & Length</h2>
        <p className="mb-2 leading-relaxed text-slate-600">This converts both Pakistani land units (murabba, kanal, marla, gaz, sarsahi) AND standard units (weight, length, temperature).</p>
        <p className="leading-relaxed text-slate-600">It is widely used by farmers, real estate buyers, and students across Pakistan.</p>
      </div>
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-white p-1 rounded-full border border-slate-100 shadow-sm inline-flex">
          <button
            onClick={() => setActiveTab('area')}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'area' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            Hasba/Land Area
          </button>
          <button
            onClick={() => setActiveTab('weight')}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'weight' ? 'bg-amber-500 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            Gold Weight
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeTab === 'area' ? (
          <>
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
              <h3 className="text-2xl font-bold">Land Measurement</h3>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Input Marla</label>
                <input
                  type="number"
                  value={marla}
                  onChange={e => setMarla(Number(e.target.value))}
                  className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Marla Standard</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setMarlaType(225)}
                    className={`p-4 rounded-2xl border text-sm font-bold transition-all ${marlaType === 225 ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-500'}`}
                  >
                    225 Sq.Ft <br /><span className="text-[10px] font-normal opacity-70">(DHA/Bahria)</span>
                  </button>
                  <button
                    onClick={() => setMarlaType(272.25)}
                    className={`p-4 rounded-2xl border text-sm font-bold transition-all ${marlaType === 272.25 ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-500'}`}
                  >
                    272.25 Sq.Ft <br /><span className="text-[10px] font-normal opacity-70">(Revenue/Village)</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center">
              <p className="text-slate-400 uppercase text-xs font-black mb-6 tracking-widest">Converted Area</p>

              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-3xl font-black">{totalSqFt.toLocaleString()}</span>
                  <span className="text-xs text-slate-400 uppercase font-bold">Square Feet</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-3xl font-black">{Math.round(totalSqYards).toLocaleString()}</span>
                  <span className="text-xs text-slate-400 uppercase font-bold">Square Yards (Gaz)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-black text-emerald-400">{totalKanal.toFixed(2)}</span>
                  <span className="text-xs text-slate-400 uppercase font-bold">Kanal</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-amber-900">Gold Weight</h3>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Input Tola</label>
                <input
                  type="number"
                  value={tola}
                  onChange={e => setTola(Number(e.target.value))}
                  className="w-full p-4 bg-amber-50 border border-amber-100 rounded-2xl font-bold text-xl text-amber-900 focus:ring-amber-500"
                />
              </div>
              <p className="text-sm text-slate-500">
                1 Tola = 11.664 Grams (Standard Pakistani Gold Rate Unit)
              </p>
            </div>

            <div className="bg-amber-500 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center relative overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-amber-400 rounded-full blur-[80px] opacity-50 -mr-20 -mt-20"></div>

              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-center border-b border-amber-400/30 pb-4">
                  <span className="text-4xl font-black">{totalGrams.toFixed(3)}</span>
                  <span className="text-xs text-amber-100 uppercase font-bold">Grams</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-4xl font-black">{totalMasha.toFixed(2)}</span>
                  <span className="text-xs text-amber-100 uppercase font-bold">Masha</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <UnitConverterSEO />
    </div>
  );
};


