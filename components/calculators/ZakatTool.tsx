import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import * as InfoPages from '../InfoPages';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const ZakatTool = ({ isUrdu }: { isUrdu: boolean }) => {
  const [nisabMode, setNisabMode] = useState<'government' | 'islamic'>('government');
  const [cash, setCash] = useState(500000);
  const [gold, setGold] = useState(0);    // grams
  const [silver, setSilver] = useState(0); // grams
  const [otherAssets, setOtherAssets] = useState(0);
  const [liabilities, setLiabilities] = useState(0);
  const [goldRate, setGoldRate] = useState(38900);   // PKR per gram (override if your local sarafa bazaar differs)
  const [silverRate, setSilverRate] = useState(420); // PKR per gram

  const totalAssets = cash + (gold * goldRate) + (silver * silverRate) + otherAssets;
  const netAssets = Math.max(0, totalAssets - liabilities);

  // Two Nisab modes — exactly as the SERP research surfaced:
  //  * "Government" → uses the SBP-notified fixed threshold (PKR 503,529).
  //    This is the threshold banks use on 1st Ramadan under the Zakat &
  //    Ushr Ordinance, 1980. Most Pakistanis think in this number.
  //  * "Islamic"    → uses the lower of gold-nisab or silver-nisab value
  //    at your live sarafa rates. Hanafi school uses silver (the lower
  //    standard, more inclusive). Use this if you pay Zakat manually
  //    before the bank's auto-deduction.
  const nisabIslamicValue = Math.min(
    NISAB_GOLD_GRAMS * goldRate,
    NISAB_SILVER_GRAMS * silverRate
  );
  const nisabThreshold = nisabMode === 'government' ? GOVERNMENT_NISAB_2026 : nisabIslamicValue;

  const isEligible = netAssets >= nisabThreshold;
  const zakat = isEligible ? netAssets * 0.025 : 0;
  const shortfall = Math.max(0, nisabThreshold - netAssets);

  return (
    <div className={`space-y-12 ${isUrdu ? 'rtl font-urdu' : ''}`}>
      {/* Nisab mode toggle + source line */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
        <div className="flex items-start gap-4 flex-wrap">
          <div className="flex-1 min-w-[260px]">
            <p className="text-xs font-bold text-emerald-700 uppercase mb-1">Nisab threshold</p>
            <p className="text-sm text-emerald-900">
              Government-notified Nisab (Zakat Year 1446-47 AH):{' '}
              <strong>Rs. {GOVERNMENT_NISAB_2026.toLocaleString()}</strong> per SBP BPRD Circular 03 of 2026
              (16 Feb 2026). Auto-deduction date: {DEDUCTION_DATE_2026}.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="grid grid-cols-2 gap-2 bg-white p-1.5 rounded-xl border border-emerald-200">
              <button
                type="button"
                onClick={() => setNisabMode('government')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${nisabMode === 'government' ? 'bg-emerald-600 text-white shadow' : 'text-emerald-700'}`}
              >
                Government (Rs 503,529)
              </button>
              <button
                type="button"
                onClick={() => setNisabMode('islamic')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${nisabMode === 'islamic' ? 'bg-emerald-600 text-white shadow' : 'text-emerald-700'}`}
              >
                Islamic (silver/gold)
              </button>
            </div>
            <p className="text-[10px] text-emerald-700 mt-1.5 text-right">
              {nisabMode === 'government'
                ? 'Matches the bank auto-deduction threshold.'
                : 'Hanafi silver standard — lower & more inclusive.'}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold">Your Zakatable Assets</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-500">Cash in Hand / Bank</label>
              <input type="number" value={cash} onChange={e => setCash(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
              <p className="text-[10px] text-slate-400 mt-1">Including savings, current, FCY, prize bonds</p>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500">Stocks / Business / Receivables</label>
              <input type="number" value={otherAssets} onChange={e => setOtherAssets(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
              <p className="text-[10px] text-slate-400 mt-1">Market value (not cost) for stocks</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-500">Gold (Grams)</label>
              <input type="number" value={gold} onChange={e => setGold(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
              <p className="text-[10px] text-slate-400 mt-1">24K weight — for 22K/21K divide by purity ratio</p>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500">Silver (Grams)</label>
              <input type="number" value={silver} onChange={e => setSilver(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-500">Liabilities / Short-term Debts</label>
            <input type="number" value={liabilities} onChange={e => setLiabilities(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            <p className="text-[10px] text-slate-400 mt-1">Bills, loans due within 12 months — do NOT deduct long-term mortgage</p>
          </div>

          <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] text-slate-400 font-bold uppercase">Gold Rate /g (PKR)</label>
              <input type="number" value={goldRate} onChange={e => setGoldRate(Number(e.target.value))} className="w-full p-2 bg-slate-50 border rounded-xl text-xs" />
            </div>
            <div>
              <label className="text-[10px] text-slate-400 font-bold uppercase">Silver Rate /g (PKR)</label>
              <input type="number" value={silverRate} onChange={e => setSilverRate(Number(e.target.value))} className="w-full p-2 bg-slate-50 border rounded-xl text-xs" />
            </div>
          </div>
        </div>

        <div className={`p-8 rounded-[2.5rem] shadow-xl text-center flex flex-col justify-center transition-colors ${isEligible ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500'}`}>
          <p className="text-slate-400 uppercase text-xs font-black mb-2">Total Zakat Payable (2.5%)</p>
          <h4 className={`text-5xl font-black ${isEligible ? 'text-emerald-400' : 'text-slate-400'}`}>
            Rs. {Math.round(zakat).toLocaleString()}
          </h4>

          <div className="mt-8 space-y-3 text-left">
            <div className="flex justify-between items-center px-4 py-2 bg-white/5 rounded-2xl">
              <span className="text-xs text-slate-400">Total Assets</span>
              <span className="font-bold">Rs. {Math.round(totalAssets).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center px-4 py-2 bg-white/5 rounded-2xl">
              <span className="text-xs text-slate-400">Liabilities</span>
              <span className="font-bold">Rs. {Math.round(liabilities).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center px-4 py-2 bg-white/5 rounded-2xl">
              <span className="text-xs text-slate-400">Net Wealth</span>
              <span className="font-bold">Rs. {Math.round(netAssets).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center px-4 py-2 bg-white/5 rounded-2xl">
              <span className="text-xs text-slate-400">
                Nisab Threshold ({nisabMode === 'government' ? 'Govt 2026' : 'Islamic (silver/gold)'})
              </span>
              <span className="font-bold">Rs. {Math.round(nisabThreshold).toLocaleString()}</span>
            </div>

            {isEligible ? (
              <p className="text-[11px] text-emerald-300 mt-3 italic">
                ✓ Your net wealth exceeds Nisab. Zakat is obligatory (provided Hawl — one full lunar year — is complete).
              </p>
            ) : (
              <p className="text-[11px] text-amber-400 mt-3 italic">
                ✗ Your net wealth is Rs. {Math.round(shortfall).toLocaleString()} below Nisab.
                Zakat is not obligatory at this level — but you may still give Sadaqah voluntarily.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Methodology block */}
      <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100">
        <h3 className="text-xl font-black text-slate-800 mb-4">Methodology & Sources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase mb-1">Method</p>
            <p className="text-slate-700">
              Add all Zakatable assets (cash, bank balances, gold, silver, business inventory at market
              value, receivables likely to be collected). Subtract short-term debts due within a year.
              If net wealth ≥ Nisab and has been held for a full lunar year (Hawl ≈ 354 days),
              Zakat = 2.5% of net wealth.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase mb-1">Which Nisab is correct?</p>
            <p className="text-slate-700">
              For matching what your bank deducts on 1st Ramadan, use the Government Nisab (Rs {GOVERNMENT_NISAB_2026.toLocaleString()})
              — it's set by SBP under the Zakat &amp; Ushr Ordinance 1980. For personal payment, many Hanafi scholars
              recommend the lower of gold-nisab or silver-nisab at live sarafa rates — that captures
              more people as Zakat-eligible.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase mb-1">If you want to opt out of bank auto-deduction</p>
            <p className="text-slate-700">
              Submit a CZ-50 declaration to your bank before 1st Ramadan. This tells the bank you will pay Zakat
              yourself. Banks deposit auto-deducted Zakat into Central Zakat Account No. CZ-08 with the SBP.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase mb-1">Source & last updated</p>
            <p className="text-slate-700">
              Ministry of Poverty Alleviation &amp; Social Safety, Notification CE-1001(36)/NISAB/1446-47/2026-48
              (16 Feb 2026). SBP BPRD Circular No. 03 of 2026. Last reviewed: September 2026.
              This calculator provides estimates, not a ruling — consult a qualified scholar for personal cases.
            </p>
          </div>
        </div>
      </div>

      <InfoPages.ZakatBlogContent />
      <InfoPages.ZakatSEOArticle isUrdu={isUrdu} />
    </div>
  );
};


