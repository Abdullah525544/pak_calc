import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import { FreelancerSEO } from './seo/FreelancerSEO';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const FreelancerTool = ({ isUrdu }: { isUrdu: boolean }) => {
  const [income, setIncome] = useState(1000); // Monthly Income
  const [currency, setCurrency] = useState<'PKR' | 'USD'>('USD');
  const [exchangeRate, setExchangeRate] = useState(278); // Default est.
  const [isPSEB, setIsPSEB] = useState(true); // PSEB Registered?
  const [bankFee, setBankFee] = useState(0); // Optional fixed fee

  const grossPKR = currency === 'USD' ? income * exchangeRate : income;
  const taxRate = isPSEB ? 0.0025 : 0.01; // 0.25% vs 1%
  const taxAmount = grossPKR * taxRate;
  const netIncome = grossPKR - taxAmount - bankFee;
  const annualNet = netIncome * 12;

  return (
    <div className={`space-y-12 ${isUrdu ? 'rtl font-urdu' : ''}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold">{isUrdu ? 'ÙØ±ÛŒ Ù„Ø§Ù†Ø³Ø± Ø§Ù†Ú©Ù…' : 'Freelancer Income'}</h3>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">{isUrdu ? 'Ù…Ø§ÛØ§Ù†Û Ø¢Ù…Ø¯Ù†ÛŒ' : 'Monthly Income'}</label>
              <div className="flex gap-4">
                <div className="relative w-full">
                  <input
                    type="number"
                    value={income}
                    onChange={e => setIncome(Number(e.target.value))}
                    className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-lg"
                  />
                  <div className={`absolute ${isUrdu ? 'left-2' : 'right-2'} top-2 p-2 bg-slate-200 rounded-xl text-xs font-bold`}>{currency}</div>
                </div>
                <button
                  onClick={() => setCurrency(currency === 'USD' ? 'PKR' : 'USD')}
                  className="px-6 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors"
                >
                  {currency === 'USD' ? 'â†’ PKR' : 'â†’ USD'}
                </button>
              </div>
            </div>

            {currency === 'USD' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-slate-400 font-bold uppercase">{isUrdu ? 'Ø§ÛŒÚ©Ø³Ú†ÛŒÙ†Ø¬ Ø±ÛŒÙ¹ (PKR)' : 'Exchange Rate (PKR)'}</label>
                  <input
                    type="number"
                    value={exchangeRate}
                    onChange={e => setExchangeRate(Number(e.target.value))}
                    className="w-full p-4 bg-slate-50 border rounded-2xl"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 font-bold uppercase">{isUrdu ? 'Ø¨ÛŒÙ†Ú© ÙÛŒØ³ (Ø§Ú¯Ø± ÛÙˆ)' : 'Bank Fee (Optional)'}</label>
                  <input
                    type="number"
                    value={bankFee}
                    onChange={e => setBankFee(Number(e.target.value))}
                    className="w-full p-4 bg-slate-50 border rounded-2xl"
                  />
                </div>
              </div>
            )}

            <div className="p-4 bg-emerald-50 rounded-3xl border border-emerald-100">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-emerald-900 text-sm">{isUrdu ? 'PSEB Ø±Ø¬Ø³Ù¹Ø±ÛŒØ´Ù†' : 'PSEB Registration'}</h4>
                  <p className="text-[10px] text-emerald-600">{isUrdu ? 'Ú©ÛŒ Ú©ÛŒØ§ Ø¢Ù¾ PSEB Ú©Û’ Ø³Ø§ØªÚ¾ Ø±Ø¬Ø³Ù¹Ø±Úˆ ÙØ±ÛŒ Ù„Ø§Ù†Ø³Ø± ÛÛŒÚºØŸ' : 'Are you a registered IT exporter with PSEB?'}</p>
                </div>
                <button
                  onClick={() => setIsPSEB(!isPSEB)}
                  className={`w-14 h-8 rounded-full transition-colors relative ${isPSEB ? 'bg-emerald-500' : 'bg-slate-300'}`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${isPSEB ? (isUrdu ? 'left-1' : 'right-1') : (isUrdu ? 'right-1' : 'left-1')}`} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-slate-900 text-white p-8 rounded-[4rem] shadow-xl flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

          <div className="text-center relative z-10">
            <p className="text-slate-400 uppercase text-[10px] font-black tracking-widest mb-4">
              {isUrdu ? 'Ø¢Ù¾ Ú©ÛŒ Ø®Ø§Ù„Øµ Ù…Ø§ÛØ§Ù†Û Ø¢Ù…Ø¯Ù†ÛŒ' : 'Your Net Monthly Take-Home'}
            </p>
            <h4 className="text-5xl font-black text-emerald-400 mb-2">Rs. {Math.round(netIncome).toLocaleString()}</h4>
            <p className="text-slate-500 text-xs">
              {isUrdu ? `Ù¹ÛŒÚ©Ø³ Ú©Ù¹ÙˆØªÛŒ: Rs. ${Math.round(taxAmount).toLocaleString()} (${isPSEB ? '0.25%' : '1%'})` : `Tax Withheld: Rs. ${Math.round(taxAmount).toLocaleString()} (${isPSEB ? '0.25%' : '1%'})`}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 relative z-10 border-t border-white/10 pt-8">
            <div className="text-center">
              <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">{isUrdu ? 'Ø³Ø§Ù„Ø§Ù†Û Ø®Ø§Ù„Øµ Ø¢Ù…Ø¯Ù†ÛŒ' : 'Annual Net Income'}</p>
              <p className="font-black text-lg">Rs. {Math.round(annualNet).toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">{isUrdu ? 'Ú©ÙÙ„ Ú¯Ø±Ø§Ø³ (PKR)' : 'Gross Amount (PKR)'}</p>
              <p className="font-black text-lg text-slate-300">Rs. {Math.round(grossPKR).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
      <FreelancerSEO isUrdu={isUrdu} />
    </div>
  );
};


