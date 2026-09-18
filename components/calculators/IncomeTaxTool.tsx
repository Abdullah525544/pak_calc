import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,
  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026
} from '../../constants';
import { getFinancialAdvice } from '../../services/geminiService';
import * as InfoPages from '../InfoPages';
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

export const IncomeTaxTool = ({ isUrdu }: { isUrdu: boolean }) => {
  const [mode, setMode] = useState<'salaried' | 'non-salaried'>('salaried');
  const [salary, setSalary] = useState(100000);
  // Salaried-only: medical allowance is partially exempt (lower of actual
  // or 10% of annual basic salary). Most calculators ignore this — we don't.
  const [medicalAllowance, setMedicalAllowance] = useState(0);
  const annualIncome = salary * 12;

  // Medical-allowance exemption (salaried only): the lower of (a) actual
  // medical allowance for the year and (b) 10% of annual basic salary.
  // To keep this calculator simple, we exempt the user's medical-allowance
  // input up to 10% of annual gross (a conservative approximation).
  const medicalExemptAnnual = mode === 'salaried'
    ? Math.min(medicalAllowance * 12, annualIncome * 0.10)
    : 0;

  const taxableIncome = Math.max(0, annualIncome - medicalExemptAnnual);

  const slabs = mode === 'salaried' ? SALARIED_TAX_SLABS : NON_SALARIED_TAX_SLABS;

  // Slab-by-slab breakdown (so the user can see exactly which bracket each
  // rupee falls into — required for E-E-A-T and trust).
  const breakdown = useMemo(() => {
    let cumulative = 0;
    const rows: { label: string; lower: number; upper: number; rate: number; taxInBand: number; cumulative: number }[] = [];
    for (let i = 0; i < slabs.length; i++) {
      const row = slabs[i];
      const prevUpper = i === 0 ? 0 : slabs[i - 1].threshold;
      const upper = row.threshold === Infinity ? Math.max(taxableIncome, prevUpper) : row.threshold;
      const inBand = Math.max(0, Math.min(taxableIncome, upper) - prevUpper);
      const taxInBand = inBand * (row.rate / 100);
      cumulative += taxInBand;
      rows.push({
        label: prevUpper === 0
          ? `0 – ${upper.toLocaleString()}`
          : `${(prevUpper + 1).toLocaleString()} – ${upper.toLocaleString()}`,
        lower: prevUpper,
        upper,
        rate: row.rate,
        taxInBand,
        cumulative,
      });
      if (taxableIncome <= upper) break;
    }
    return rows;
  }, [taxableIncome, slabs]);

  const baseTax = breakdown.length ? breakdown[breakdown.length - 1].cumulative : 0;

  // 10% surcharge when taxable income > PKR 10M (FBR FY 2025-26).
  const surcharge = taxableIncome > SURCHARGE_THRESHOLD ? baseTax * SURCHARGE_RATE : 0;
  const totalTax = baseTax + surcharge;

  const effectiveRate = annualIncome > 0 ? (totalTax / annualIncome) * 100 : 0;
  const monthlyTax = totalTax / 12;

  // Pre-compute a "where do I land" hint.
  const currentSlab = breakdown.length ? breakdown[breakdown.length - 1] : null;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl">
          <h3 className="text-2xl font-bold mb-6">Income Details (FBR Tax Year 2025-26)</h3>

          <div className="mb-6">
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Taxpayer Type</label>
            <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-2xl">
              <button
                type="button"
                onClick={() => setMode('salaried')}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${mode === 'salaried' ? 'bg-white shadow text-emerald-700' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Salaried Person
              </button>
              <button
                type="button"
                onClick={() => setMode('non-salaried')}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${mode === 'non-salaried' ? 'bg-white shadow text-emerald-700' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Non-Salaried / AOP
              </button>
            </div>
            <p className="text-[11px] text-slate-400 mt-2 ml-1">
              {mode === 'salaried'
                ? 'Tax withheld monthly by your employer under section 149.'
                : 'AOP, business and freelance income — file annually via FBR IRIS.'}
            </p>
          </div>

          <label className="block text-sm font-medium mb-2">
            {mode === 'salaried' ? 'Monthly Gross Salary (PKR)' : 'Estimated Monthly Income (PKR)'}
          </label>
          <input
            type="number"
            value={salary}
            onChange={e => setSalary(Number(e.target.value))}
            className="w-full p-4 bg-slate-50 border rounded-2xl"
          />

          {mode === 'salaried' && (
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">
                Monthly Medical Allowance (PKR) <span className="text-slate-400 text-xs font-normal">— partially exempt up to 10% of annual gross</span>
              </label>
              <input
                type="number"
                value={medicalAllowance}
                onChange={e => setMedicalAllowance(Number(e.target.value))}
                className="w-full p-4 bg-slate-50 border rounded-2xl"
              />
            </div>
          )}

          <p className="text-xs text-slate-400 mt-3 ml-1">
            Annual taxable income: <strong>Rs. {Math.round(taxableIncome).toLocaleString()}</strong>
          </p>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl text-center flex flex-col justify-center">
          <p className="text-slate-400 uppercase text-xs font-black mb-2">
            {mode === 'salaried' ? 'Monthly Tax Withheld' : 'Estimated Monthly Set-Aside'}
          </p>
          <h4 className="text-5xl font-black text-emerald-400">Rs. {Math.round(monthlyTax).toLocaleString()}</h4>

          {currentSlab && (
            <p className="text-[11px] text-slate-400 mt-2">
              You fall in the <strong className="text-slate-300">{currentSlab.label}</strong> bracket @ {currentSlab.rate}%
            </p>
          )}

          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-3 text-left">
            <div>
              <p className="text-[10px] text-slate-500 uppercase">Base Tax</p>
              <p className="font-bold text-sm">Rs. {Math.round(baseTax).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase">Surcharge</p>
              <p className={`font-bold text-sm ${surcharge > 0 ? 'text-amber-300' : 'text-slate-500'}`}>
                {surcharge > 0 ? `Rs. ${Math.round(surcharge).toLocaleString()}` : 'Not applicable'}
              </p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase">Annual Tax (with surcharge)</p>
              <p className="font-bold text-sm">Rs. {Math.round(totalTax).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase">Effective Rate</p>
              <p className="font-bold text-sm">{effectiveRate.toFixed(2)}%</p>
            </div>
            <div className="col-span-2 pt-3 mt-3 border-t border-white/10">
              <p className="text-[10px] text-slate-500 uppercase">Net Monthly Take-Home</p>
              <p className="font-black text-2xl text-emerald-300">Rs. {Math.round(salary - monthlyTax).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slab breakdown table — the part competitors usually hide */}
      <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100">
        <div className="p-6 border-b border-slate-100 bg-slate-50">
          <h3 className="text-xl font-black text-slate-800">Slab Breakdown</h3>
          <p className="text-xs text-slate-500 mt-1">
            {mode === 'salaried' ? 'Salaried individual slabs' : 'Non-salaried / AOP / business slabs'} — FBR Finance Act 2025
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="text-left p-4 font-bold">Annual Income Range (PKR)</th>
                <th className="text-right p-4 font-bold">Marginal Rate</th>
                <th className="text-right p-4 font-bold">Your Tax in Band</th>
                <th className="text-right p-4 font-bold">Cumulative</th>
              </tr>
            </thead>
            <tbody>
              {breakdown.map((row, i) => {
                const isActiveBand = i === breakdown.length - 1 && taxableIncome > 0;
                return (
                  <tr key={i} className={`border-t border-slate-100 ${isActiveBand ? 'bg-emerald-50/60 font-semibold' : ''}`}>
                    <td className="p-4 text-slate-700">{row.label}</td>
                    <td className="p-4 text-right">{row.rate}%</td>
                    <td className="p-4 text-right">{row.taxInBand > 0 ? `Rs. ${Math.round(row.taxInBand).toLocaleString()}` : '—'}</td>
                    <td className="p-4 text-right">Rs. {Math.round(row.cumulative).toLocaleString()}</td>
                  </tr>
                );
              })}
              {surcharge > 0 && (
                <tr className="border-t border-amber-200 bg-amber-50">
                  <td className="p-4 text-amber-800 font-semibold">10% surcharge (income &gt; PKR 10M)</td>
                  <td className="p-4 text-right text-amber-800">10%</td>
                  <td className="p-4 text-right text-amber-800">Rs. {Math.round(surcharge).toLocaleString()}</td>
                  <td className="p-4 text-right text-amber-800 font-bold">Rs. {Math.round(totalTax).toLocaleString()}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Methodology block */}
      <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100">
        <h3 className="text-xl font-black text-slate-800 mb-4">Methodology & Sources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase mb-1">Method</p>
            <p className="text-slate-700">
              Annual income is split into FBR tax slabs. Each slab is taxed at its marginal rate;
              lower-bracket tax carries forward via the <em>fixed</em> column. The 10% surcharge
              is applied on the base tax when annual taxable income exceeds PKR 10,000,000.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase mb-1">Salaried person — how this maps to you</p>
            <p className="text-slate-700">
              Tax is withheld monthly by your employer under FBR section 149 and reconciled
              in your annual return on FBR IRIS. Use this number as an estimate; the final
              figure depends on exemptions, deductions and rebates you may claim.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase mb-1">Non-salaried / AOP — how this maps to you</p>
            <p className="text-slate-700">
              File annually via FBR IRIS. You may also owe advance tax in quarterly
              installments. The calculator above excludes any minimum turnover tax
              and section 236C / 236G withholding credits — talk to a tax practitioner.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase mb-1">Source & last updated</p>
            <p className="text-slate-700">
              FBR Finance Act 2025 (Pakistan Tax Year 2025-26, income earned
              1 Jul 2025 – 30 Jun 2026). Cross-checked against PWC Pakistan Tax
              Summaries. Last reviewed: September 2026.
            </p>
          </div>
        </div>
      </div>

      <InfoPages.TaxBlogContent />
      <InfoPages.IncomeTaxSEOArticle />
    </div>
  );
};


