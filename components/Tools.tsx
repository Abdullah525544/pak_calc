
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { SALARIED_TAX_SLABS } from '../constants';
import { getFinancialAdvice } from '../services/geminiService';
import { EMIBlogContent, TaxBlogContent, ZakatBlogContent, ProfitMarginBlogContent, BMIBlogContent, InvestmentBlogContent, RetirementBlogContent, RealEstateBlogContent, PFBlogContent, GratuityBlogContent, FreelancerBlogContent, UnitConverterBlogContent } from './InfoPages';
import { RelatedTools } from './RelatedTools';

const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];

// ... (Existing Tool components)

export const IncomeTaxTool = ({ isUrdu }: { isUrdu: boolean }) => {
  const [salary, setSalary] = useState(100000);
  const annualSalary = salary * 12;
  let tax = 0;

  const slab = SALARIED_TAX_SLABS.find((s, i) => {
    const nextSlab = SALARIED_TAX_SLABS[i + 1];
    return annualSalary <= (nextSlab?.threshold || Infinity);
  });

  if (slab) {
    const prevThreshold = SALARIED_TAX_SLABS[SALARIED_TAX_SLABS.indexOf(slab) - 1]?.threshold || 0;
    tax = slab.fixed + ((annualSalary - prevThreshold) * (slab.rate / 100));
  }

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl">
          <h3 className="text-2xl font-bold mb-6">Income Details</h3>
          <label className="block text-sm font-medium mb-2">Monthly Gross Salary (PKR)</label>
          <input type="number" value={salary} onChange={e => setSalary(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
        </div>
        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl text-center">
          <p className="text-slate-400 uppercase text-xs font-black mb-2">Monthly Tax Payable</p>
          <h4 className="text-5xl font-black text-emerald-400">Rs. {Math.round(tax / 12).toLocaleString()}</h4>
        </div>
      </div>
      <TaxBlogContent />
      <RelatedTools toolIds={['zakat', 'investment-return', 'provident-fund', 'freelancer-tax']} />
    </div>
  );
};

export const ZakatTool = () => {
  const [assets, setAssets] = useState(500000);
  const zakat = assets * 0.025;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl">
          <h3 className="text-2xl font-bold mb-6">Asset Valuation</h3>
          <label className="block text-sm font-medium mb-2">Total Zakatable Assets (PKR)</label>
          <input type="number" value={assets} onChange={e => setAssets(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
        </div>
        <div className="bg-emerald-600 text-white p-8 rounded-[2.5rem] shadow-xl text-center">
          <p className="text-emerald-100 uppercase text-xs font-black mb-2">Total Zakat Due</p>
          <h4 className="text-5xl font-black">Rs. {Math.round(zakat).toLocaleString()}</h4>
        </div>
      </div>
      <ZakatBlogContent />
      <RelatedTools toolIds={['income-tax', 'investment-return', 'real-estate-roi']} />
    </div>
  );
};

export const EMITool = () => {
  const [loan, setLoan] = useState(1000000);
  const [rate, setRate] = useState(15);
  const [years, setYears] = useState(5);

  const r = rate / 12 / 100;
  const n = years * 12;
  const emi = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-4">
          <h3 className="text-2xl font-bold">Loan Details</h3>
          <input type="number" placeholder="Loan Amount" value={loan} onChange={e => setLoan(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
          <input type="number" placeholder="Interest Rate %" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
          <input type="number" placeholder="Tenure (Years)" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
        </div>
        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl text-center">
          <p className="text-slate-400 uppercase text-xs font-black mb-2">Monthly EMI</p>
          <h4 className="text-5xl font-black text-blue-400">Rs. {Math.round(emi).toLocaleString()}</h4>
        </div>
      </div>
      <EMIBlogContent />
      <RelatedTools toolIds={['real-estate-roi', 'income-tax', 'investment-return']} />
    </div>
  );
};

export const ProfitMarginTool = () => {
  const [cost, setCost] = useState(1000);
  const [revenue, setRevenue] = useState(1500);
  const profit = revenue - cost;
  const margin = (profit / revenue) * 100;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-4">
          <h3 className="text-2xl font-bold">Business Figures</h3>
          <input type="number" placeholder="Cost" value={cost} onChange={e => setCost(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
          <input type="number" placeholder="Revenue" value={revenue} onChange={e => setRevenue(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
        </div>
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl text-center border">
          <p className="text-slate-400 uppercase text-xs font-black mb-2">Net Profit Margin</p>
          <h4 className="text-5xl font-black text-emerald-600">{Math.round(margin)}%</h4>
        </div>
      </div>
      <ProfitMarginBlogContent />
      <RelatedTools toolIds={['freelancer-tax', 'income-tax', 'unit-converter']} />
    </div>
  );
};

export const BMICalcTool = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const bmi = weight / Math.pow(height / 100, 2);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-4">
          <h3 className="text-2xl font-bold">Health Metrics</h3>
          <input type="number" placeholder="Weight (kg)" value={weight} onChange={e => setWeight(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
          <input type="number" placeholder="Height (cm)" value={height} onChange={e => setHeight(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
        </div>
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl text-center border">
          <p className="text-slate-400 uppercase text-xs font-black mb-2">Your BMI Index</p>
          <h4 className="text-5xl font-black text-rose-600">{bmi.toFixed(1)}</h4>
        </div>
      </div>
      <BMIBlogContent />
      <RelatedTools toolIds={['retirement-plan', 'unit-converter']} />
    </div>
  );
};

export const InvestmentReturnTool = () => {
  const [principal, setPrincipal] = useState(100000);
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const [compounding, setCompounding] = useState(12); // Monthly default
  const [data, setData] = useState<any[]>([]);
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    let total = principal;
    const ratePerPeriod = (rate / 100) / compounding;
    const chartData = [];

    for (let i = 0; i <= years; i++) {
      if (i > 0) {
        for (let m = 0; m < compounding; m++) {
          total = (total + (monthly * (12 / compounding))) * (1 + ratePerPeriod);
        }
      }
      chartData.push({
        year: `Year ${i}`,
        value: Math.round(total),
        invested: principal + (monthly * 12 * i)
      });
    }

    setData(chartData);
    setResult({
      total,
      invested: principal + (monthly * 12 * years),
      returns: total - (principal + (monthly * 12 * years))
    });
  };

  useEffect(() => calculate(), [principal, monthly, rate, years, compounding]);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold">Investment Plan</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-1">Initial (PKR)</label>
                <input type="number" value={principal} onChange={e => setPrincipal(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-1">Monthly Add (PKR)</label>
                <input type="number" value={monthly} onChange={e => setMonthly(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-1">Expected %</label>
                <input type="number" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-1">Years</label>
                <input type="number" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase text-slate-400 mb-1">Compounding Frequency</label>
              <select value={compounding} onChange={e => setCompounding(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold">
                <option value={12}>Monthly</option>
                <option value={4}>Quarterly</option>
                <option value={1}>Annually</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl flex flex-col border border-slate-50">
          {result && (
            <div className="mb-8 text-center">
              <p className="text-slate-400 uppercase text-xs font-black tracking-widest mb-1">Maturity Value</p>
              <h4 className="text-5xl font-black text-emerald-600">₨ {Math.round(result.total).toLocaleString()}</h4>
              <div className="flex justify-center gap-6 mt-4 text-[10px] font-bold text-slate-400">
                <span>Invested: ₨ {result.invested.toLocaleString()}</span>
                <span>Returns: ₨ {Math.round(result.returns).toLocaleString()}</span>
              </div>
            </div>
          )}
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" hide />
                <YAxis hide />
                <Tooltip
                  contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                  formatter={(v) => `₨ ${v.toLocaleString()}`}
                />
                <Area type="monotone" dataKey="value" stroke="#10b981" fill="#10b981" fillOpacity={0.1} strokeWidth={3} />
                <Area type="monotone" dataKey="invested" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.05} strokeWidth={2} strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <InvestmentBlogContent />
      <RelatedTools toolIds={['retirement-plan', 'real-estate-roi', 'zakat', 'income-tax']} />
    </div>
  );
};

export const RetirementTool = () => {
  const [currentAge, setCurrentAge] = useState(25);
  const [retireAge, setRetireAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(100000);
  const [inflation, setInflation] = useState(10);
  const [returns, setReturns] = useState(12);

  const yearsToRetire = Math.max(0, retireAge - currentAge);
  const futureExpense = monthlyExpense * Math.pow(1 + inflation / 100, yearsToRetire);
  const corpusNeeded = futureExpense * 12 * 20;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold">Retirement Profile</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-500">Current Age</label>
              <input type="number" value={currentAge} onChange={e => setCurrentAge(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500">Retire Age</label>
              <input type="number" value={retireAge} onChange={e => setRetireAge(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500">Monthly Expense (Today)</label>
            <input type="number" value={monthlyExpense} onChange={e => setMonthlyExpense(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-500">Inflation %</label>
              <input type="number" value={inflation} onChange={e => setInflation(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500">Return Rate %</label>
              <input type="number" value={returns} onChange={e => setReturns(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
          </div>
        </div>
        <div className="bg-slate-900 text-white p-12 rounded-[2.5rem] shadow-2xl flex flex-col justify-center space-y-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="text-center">
            <p className="text-slate-400 text-[10px] font-black tracking-widest uppercase mb-2">Future Monthly Expense (at {retireAge})</p>
            <h4 className="text-4xl font-black text-emerald-400">₨ {Math.round(futureExpense).toLocaleString()}</h4>
          </div>
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center">
            <p className="text-slate-400 text-[10px] font-black tracking-widest uppercase mb-4">Required Retirement Corpus</p>
            <h4 className="text-5xl font-black">₨ {Math.round(corpusNeeded / 10000000).toLocaleString()} <span className="text-xl">Cr</span></h4>
            <p className="text-[9px] text-slate-500 mt-4 italic">Assumes 20 years of post-retirement lifestyle maintenance.</p>
          </div>
        </div>
      </div>
      <RetirementBlogContent />
      <RelatedTools toolIds={['investment-return', 'provident-fund', 'gratuity']} />
    </div>
  );
};

export const RealEstateROITool = () => {
  const [purchasePrice, setPurchasePrice] = useState(10000000);
  const [stampDutyRate, setStampDutyRate] = useState(2); // %
  const [holdingYears, setHoldingYears] = useState(5);
  const [sellingPrice, setSellingPrice] = useState(15000000);
  const [monthlyRent, setMonthlyRent] = useState(45000);

  const totalCost = purchasePrice * (1 + (stampDutyRate / 100));
  const gain = sellingPrice - totalCost;
  const totalRent = monthlyRent * 12 * holdingYears;
  const totalReturn = gain + totalRent;
  const annualizedROI = (Math.pow((totalReturn + totalCost) / totalCost, 1 / holdingYears) - 1) * 100;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold">Property Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-500">Buy Price (PKR)</label>
              <input type="number" value={purchasePrice} onChange={e => setPurchasePrice(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500">Stamp Duty %</label>
              <input type="number" value={stampDutyRate} onChange={e => setStampDutyRate(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-500">Selling Price (PKR)</label>
              <input type="number" value={sellingPrice} onChange={e => setSellingPrice(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500">Holding Years</label>
              <input type="number" value={holdingYears} onChange={e => setHoldingYears(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500">Monthly Rental Income</label>
            <input type="number" value={monthlyRent} onChange={e => setMonthlyRent(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
          </div>
        </div>
        <div className="bg-slate-900 text-white p-12 rounded-[2.5rem] shadow-2xl flex flex-col justify-center space-y-8">
          <div className="text-center">
            <p className="text-slate-400 text-[10px] font-black tracking-widest uppercase mb-2">Total Net Gain</p>
            <h4 className="text-6xl font-black text-emerald-400">₨ {Math.round(totalReturn).toLocaleString()}</h4>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-slate-500 text-[10px] font-black uppercase">Annualized ROI</p>
              <p className="text-2xl font-black">{annualizedROI.toFixed(1)}%</p>
            </div>
            <div className="text-center">
              <p className="text-slate-500 text-[10px] font-black uppercase">Rental Yield</p>
              <p className="text-2xl font-black text-blue-400">{((monthlyRent * 12 / purchasePrice) * 100).toFixed(1)}%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
        <h4 className="text-2xl font-bold">Property Investment in Pakistan</h4>
        <p className="text-sm text-slate-500 leading-relaxed">
          Pakistan's real estate market offers two ways to earn: <strong>Capital Appreciation</strong> (increase in property value) and <strong>Rental Yield</strong>. In 2026, FBR Gain Tax applies on properties held for less than 6 years. Use this tool to see if your property investment is beating inflation (historically 12-15% in Pakistan).
        </p>
      </div>
      <RealEstateBlogContent />
      <RelatedTools toolIds={['loan-emi', 'zakat', 'investment-return']} />
    </div>
  );
};

export const PFTool = () => {
  const [salary, setSalary] = useState(100000);
  const [contribution, setContribution] = useState(10);
  const pf = (salary * (contribution / 100)) * 2; // Employee + Employer

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl">
      <h3 className="text-2xl font-bold mb-6">PF Calculator</h3>
      <input type="number" value={salary} onChange={e => setSalary(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl mb-4" />
      <p className="text-xl font-bold">Monthly PF Contribution: Rs. {Math.round(pf).toLocaleString()}</p>
      <PFBlogContent />
      <RelatedTools toolIds={['gratuity', 'retirement-plan', 'income-tax']} />
    </div>
  );
};

export const GratuityTool = () => {
  const [salary, setSalary] = useState(100000);
  const [years, setYears] = useState(5);
  const gratuity = (salary * 30 / 26) * years; // Simplified Pak Labor Law calculation

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl">
      <h3 className="text-2xl font-bold mb-6">Gratuity Calculator</h3>
      <input type="number" value={salary} onChange={e => setSalary(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl mb-4" />
      <input type="number" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl mb-4" />
      <p className="text-xl font-bold">Total Gratuity: Rs. {Math.round(gratuity).toLocaleString()}</p>
      <GratuityBlogContent />
      <RelatedTools toolIds={['provident-fund', 'retirement-plan', 'income-tax']} />
    </div>
  );
};

export const FreelancerTool = () => {
  const [income, setIncome] = useState(1000);
  const tax = income * 0.01; // 1% export tax for filer

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl">
      <h3 className="text-2xl font-bold mb-6">Freelancer Income</h3>
      <input type="number" value={income} onChange={e => setIncome(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl mb-4" />
      <p className="text-xl font-bold">Estimated Withholding Tax (1%): Rs. {Math.round(tax).toLocaleString()}</p>
      <FreelancerBlogContent />
      <RelatedTools toolIds={['profit-margin', 'income-tax', 'investment-return']} />
    </div>
  );
};

export const UnitConverterTool = () => {
  const [marla, setMarla] = useState(1);
  const sqft = marla * 272.25;

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl">
      <h3 className="text-2xl font-bold mb-6">Unit Converter</h3>
      <input type="number" value={marla} onChange={e => setMarla(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl mb-4" />
      <p className="text-xl font-bold">{marla} Marla = {sqft.toLocaleString()} Sq. Ft.</p>
      <UnitConverterBlogContent />
      <RelatedTools toolIds={['real-estate-roi', 'zakat']} />
    </div>
  );
};
