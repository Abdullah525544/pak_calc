import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import { RealEstateSEO } from './seo/RealEstateSEO';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const RealEstateROITool = () => {
  const [purchasePrice, setPurchasePrice] = useState(10000000);
  const [sellingPrice, setSellingPrice] = useState(15000000);
  const [monthlyRent, setMonthlyRent] = useState(45000);
  const [holdingYears, setHoldingYears] = useState(5);

  // Expenses
  const [stampDutyRate, setStampDutyRate] = useState(3); // % (Transfer + Reg)
  const [annualMaintenance, setAnnualMaintenance] = useState(20000); // PKR per year
  const [commissionRate, setCommissionRate] = useState(1); // % Agent Fee (Buy + Sell)

  const buyCosts = purchasePrice * (stampDutyRate / 100) + (purchasePrice * commissionRate / 100);
  const totalCostBasis = purchasePrice + buyCosts;

  const totalRentCollected = monthlyRent * 12 * holdingYears;
  const totalMaintenance = annualMaintenance * holdingYears;
  const netRent = totalRentCollected - totalMaintenance;

  const capitalGain = sellingPrice - totalCostBasis - (sellingPrice * commissionRate / 100); // Sell commission

  const totalProfit = capitalGain + netRent;
  const annualizedROI = (Math.pow((totalProfit + purchasePrice) / purchasePrice, 1 / holdingYears) - 1) * 100;
  const rentalYield = ((monthlyRent * 12) / purchasePrice) * 100;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold text-slate-900">Property Deal</h3>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Purchase Price</label>
                <input type="number" value={purchasePrice} onChange={e => setPurchasePrice(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Expected Sale Price</label>
                <input type="number" value={sellingPrice} onChange={e => setSellingPrice(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-1">
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Rent/Mo</label>
                <input type="number" value={monthlyRent} onChange={e => setMonthlyRent(Number(e.target.value))} className="w-full p-3 bg-slate-50 border rounded-xl" />
              </div>
              <div className="col-span-1">
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Years Held</label>
                <input type="number" value={holdingYears} onChange={e => setHoldingYears(Number(e.target.value))} className="w-full p-3 bg-slate-50 border rounded-xl" />
              </div>
              <div className="col-span-1">
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Maint./Yr</label>
                <input type="number" value={annualMaintenance} onChange={e => setAnnualMaintenance(Number(e.target.value))} className="w-full p-3 bg-slate-50 border rounded-xl" />
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase mb-3">One-time Costs (%)</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-slate-500 block">Stamp Duty/Tax</span>
                  <input type="number" value={stampDutyRate} onChange={e => setStampDutyRate(Number(e.target.value))} className="w-full p-2 bg-white border rounded-lg text-xs font-bold" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Agent Comm.</span>
                  <input type="number" value={commissionRate} onChange={e => setCommissionRate(Number(e.target.value))} className="w-full p-2 bg-white border rounded-lg text-xs font-bold" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden">
          <div className="absolute left-0 bottom-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent"></div>

          <div className="relative z-10 text-center mb-8">
            <p className="text-slate-400 uppercase text-[10px] font-black tracking-widest mb-2">Total Net Profit</p>
            <h4 className="text-5xl font-black text-emerald-400">Rs. {Math.round(totalProfit).toLocaleString()}</h4>
            <div className="inline-flex gap-4 mt-2">
              <span className="text-xs text-slate-400">Yield: <b className="text-white">{rentalYield.toFixed(1)}%</b></span>
              <span className="text-xs text-slate-400">CAGR: <b className="text-white">{annualizedROI.toFixed(1)}%</b></span>
            </div>
          </div>

          <div className="relative z-10 space-y-3 bg-white/5 p-6 rounded-3xl border border-white/10">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Capital Gain (Net)</span>
              <span className="font-bold">Rs. {Math.round(capitalGain).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Rental Income (Net)</span>
              <span className="font-bold">Rs. {Math.round(netRent).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm pt-3 border-t border-white/10">
              <span className="text-rose-300 text-xs">Total Buying Costs</span>
              <span className="text-rose-300 text-xs">- Rs. {Math.round(buyCosts).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      <RealEstateSEO />
    </div>
  );
};


