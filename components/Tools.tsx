
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { SALARIED_TAX_SLABS } from '../constants';
import { getFinancialAdvice } from '../services/geminiService';
import { EMIBlogContent, TaxBlogContent, ZakatBlogContent, ProfitMarginBlogContent, BMIBlogContent, InvestmentBlogContent, RetirementBlogContent, RealEstateBlogContent, PFBlogContent, GratuityBlogContent, FreelancerBlogContent, UnitConverterBlogContent, LandConverterBlogContent, GradeCalculatorBlogContent, CGPACalculatorBlogContent, MarkPercentageBlogContent, IncomeTaxSEOArticle, ZakatSEOArticle, FreelancerSEOArticle, InvestmentSEOArticle, RetirementSEOArticle, RealEstateSEOArticle, PFSEOArticle, GratuitySEOArticle, EMISEOArticle, ProfitMarginSEOArticle, UnitConverterSEOArticle, LandConverterSEOArticle, BMISEOArticle, ElectricityBillBlogContent, PercentageBlogContent, PasswordGenBlogContent, MortgageBlogContent } from './InfoPages';


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
          <h3 className="text-2xl font-bold mb-6">Income Details (2025-2026)</h3>
          <label className="block text-sm font-medium mb-2">Monthly Gross Salary (PKR)</label>
          <input type="number" value={salary} onChange={e => setSalary(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
          <p className="text-xs text-slate-400 mt-2 ml-1">Based on latest FBR tax slabs for Salaried Individuals.</p>
        </div>
        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl text-center flex flex-col justify-center">
          <p className="text-slate-400 uppercase text-xs font-black mb-2">Monthly Tax Payable</p>
          <h4 className="text-5xl font-black text-emerald-400">Rs. {Math.round(tax / 12).toLocaleString()}</h4>

          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] text-slate-500 uppercase">Yearly Tax</p>
              <p className="font-bold">Rs. {Math.round(tax).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase">Net Monthly Income</p>
              <p className="font-bold">Rs. {Math.round(salary - (tax / 12)).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
      <TaxBlogContent />
      <IncomeTaxSEOArticle />
    </div>
  );
};

export const ZakatTool = ({ isUrdu }: { isUrdu: boolean }) => {
  const [cash, setCash] = useState(500000);
  const [gold, setGold] = useState(0); // grams
  const [silver, setSilver] = useState(0); // grams
  const [otherAssets, setOtherAssets] = useState(0);
  const [liabilities, setLiabilities] = useState(0);

  // 2026 Estimated Rates
  const [goldRate, setGoldRate] = useState(25000); // per gram approx
  const [silverRate, setSilverRate] = useState(300); // per gram approx

  const totalAssets = cash + (gold * goldRate) + (silver * silverRate) + otherAssets;
  const netAssets = Math.max(0, totalAssets - liabilities);

  const nisabGoldValue = 87.48 * goldRate;
  const nisabSilverValue = 612.36 * silverRate;
  const nisabThreshold = Math.min(nisabGoldValue, nisabSilverValue);

  const isEligible = netAssets >= nisabThreshold;
  const zakat = isEligible ? netAssets * 0.025 : 0;

  return (
    <div className={`space-y-12 ${isUrdu ? 'rtl font-urdu' : ''}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold">{isUrdu ? 'Ø²Ú©ÙˆÙ°Ûƒ Ú©Û’ Ù„ÛŒÛ’ Ø¢Ù¾ Ú©Û’ Ø§Ø«Ø§Ø«Û’ (Ù†ØµØ§Ø¨ 2026)' : 'Your Assets for Zakat (Nisab 2026)'}</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-500">{isUrdu ? 'Ù†Ù‚Ø¯ Ø±Ù‚Ù… (ÛØ§ØªÚ¾ Ù…ÛŒÚº ÛŒØ§ Ø¨ÛŒÙ†Ú©)' : 'Cash in Hand/Bank'}</label>
              <input type="number" value={cash} onChange={e => setCash(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500">{isUrdu ? 'Ø¯ÛŒÚ¯Ø± Ø§Ø«Ø§Ø«Û’ (Ø´ÛŒØ¦Ø±Ø² ÙˆØºÛŒØ±Û)' : 'Other Assets (Stocks etc)'}</label>
              <input type="number" value={otherAssets} onChange={e => setOtherAssets(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-500">{isUrdu ? 'Ø³ÙˆÙ†Ø§ (Ú¯Ø±Ø§Ù…)' : 'Gold (Grams)'}</label>
              <input type="number" value={gold} onChange={e => setGold(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500">{isUrdu ? 'Ú†Ø§Ù†Ø¯ÛŒ (Ú¯Ø±Ø§Ù…)' : 'Silver (Grams)'}</label>
              <input type="number" value={silver} onChange={e => setSilver(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500">{isUrdu ? 'ÙˆØ§Ø¬Ø¨Ø§Øª / Ù‚Ø±Ø¶Û’ (Ù…Ù†ÛØ§ Ú©Ø±Ù†Û’ Ú©Û’ Ù„ÛŒÛ’)' : 'Liabilities / Debts (to subtract)'}</label>
            <input type="number" value={liabilities} onChange={e => setLiabilities(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
          </div>

          <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] text-slate-400 font-bold uppercase">{isUrdu ? 'Ø³ÙˆÙ†Ø§ ÙÛŒ Ú¯Ø±Ø§Ù… (PKR)' : 'Gold Rate /g (PKR)'}</label>
              <input type="number" value={goldRate} onChange={e => setGoldRate(Number(e.target.value))} className="w-full p-2 bg-slate-50 border rounded-xl text-xs" />
            </div>
            <div>
              <label className="text-[10px] text-slate-400 font-bold uppercase">{isUrdu ? 'Ú†Ø§Ù†Ø¯ÛŒ ÙÛŒ Ú¯Ø±Ø§Ù… (PKR)' : 'Silver Rate /g (PKR)'}</label>
              <input type="number" value={silverRate} onChange={e => setSilverRate(Number(e.target.value))} className="w-full p-2 bg-slate-50 border rounded-xl text-xs" />
            </div>
          </div>
        </div>

        <div className={`p-8 rounded-[2.5rem] shadow-xl text-center flex flex-col justify-center transition-colors ${isEligible ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500'}`}>
          <p className="text-slate-400 uppercase text-xs font-black mb-2">{isUrdu ? 'Ù‚Ø§Ø¨Ù„Ù Ø§Ø¯Ø§Ø¦ÛŒÚ¯ÛŒ Ø²Ú©ÙˆÙ°Ûƒ (2.5%)' : 'Total Zakat Payable (2.5%)'}</p>
          <h4 className={`text-5xl font-black ${isEligible ? 'text-emerald-400' : 'text-slate-400'}`}>
            Rs. {Math.round(zakat).toLocaleString()}
          </h4>

          <div className="mt-8 space-y-3">
            <div className="flex justify-between items-center px-4 py-2 bg-white/5 rounded-2xl">
              <span className="text-xs text-slate-400">{isUrdu ? 'Ú©ÙÙ„ Ø§Ø«Ø§Ø«Û’' : 'Total Assets'}</span>
              <span className="font-bold">Rs. {Math.round(totalAssets).toLocaleString()}</span>
            </div>
            {!isEligible && (
              <p className="text-[10px] text-amber-400 italic mt-2">
                {isUrdu ? '* Ø¢Ù¾ Ú©Û’ Ø§Ø«Ø§Ø«Û’ Ù†ØµØ§Ø¨ Ø³Û’ Ú©Ù… ÛÛŒÚºÛ” Ø²Ú©ÙˆÙ°Ûƒ ÙØ±Ø¶ Ù†ÛÛŒÚº ÛÛ’Û”' : '* Assets are below Nisab threshold. Zakat not applicable.'}
              </p>
            )}
          </div>
        </div>
      </div>
      <ZakatBlogContent />
      <ZakatSEOArticle isUrdu={isUrdu} />
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

  const totalPayment = emi * n;
  const totalInterest = totalPayment - loan;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-4">
          <h3 className="text-2xl font-bold">Loan EMI Calculator Pakistan</h3>
          <p className="text-xs text-slate-500 mb-4">Calculate your monthly installment for car or bank loans instantly.</p>
          <div>
            <label className="text-xs font-bold text-slate-500">Loan Amount (PKR)</label>
            <input type="number" placeholder="Loan Amount" value={loan} onChange={e => setLoan(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-500">Interest Rate %</label>
              <input type="number" placeholder="Interest Rate %" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500">Tenure (Years)</label>
              <input type="number" placeholder="Tenure (Years)" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl text-center flex flex-col justify-center">
          <p className="text-slate-400 uppercase text-xs font-black mb-2">Monthly Installment (EMI)</p>
          <h4 className="text-5xl font-black text-blue-400">Rs. {Math.round(emi).toLocaleString()}</h4>

          <div className="mt-8 pt-8 border-t border-white/10 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Principal Amount</span>
              <span className="font-bold">Rs. {loan.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Total Interest</span>
              <span className="font-bold text-rose-400">Rs. {Math.round(totalInterest).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm pt-2 border-t border-white/5">
              <span className="text-slate-400">Total Amount Payable</span>
              <span className="font-bold text-emerald-400">Rs. {Math.round(totalPayment).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      <EMIBlogContent />
      <EMISEOArticle />
    </div>
  );
};

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
      <ProfitMarginBlogContent />
      <ProfitMarginSEOArticle />
    </div>
  );
};

export const BMICalcTool = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const bmi = weight / Math.pow(height / 100, 2);

  let category = '';
  let color = '';
  let tip = '';

  if (bmi < 18.5) { category = 'Underweight'; color = 'text-blue-500'; tip = 'Focus on nutrient-rich foods to gain healthy weight.'; }
  else if (bmi < 25) { category = 'Normal Weight'; color = 'text-emerald-500'; tip = 'Great job! Maintain your balanced diet and activity.'; }
  else if (bmi < 30) { category = 'Overweight'; color = 'text-amber-500'; tip = 'Consider a slight calorie deficit and more daily movement.'; }
  else { category = 'Obese'; color = 'text-rose-500'; tip = 'Consult a healthcare provider for a personalized plan.'; }

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold">Body Stats</h3>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Weight (KG)</label>
            <input type="number" placeholder="Weight (kg)" value={weight} onChange={e => setWeight(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl text-xl font-bold" />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Height (CM)</label>
            <input type="number" placeholder="Height (cm)" value={height} onChange={e => setHeight(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl text-xl font-bold" />
            <p className="text-xs text-slate-400 mt-2 text-right">{Math.floor(height / 30.48)}ft {Math.round((height % 30.48) / 2.54)}in</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
          {/* Simple CSS Gauge Background */}
          <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-blue-400 via-emerald-400 via-amber-400 to-rose-500"></div>

          <p className="text-slate-400 uppercase text-xs font-black mb-4 tracking-widest">Your Result</p>
          <h4 className={`text-6xl font-black ${color} mb-2`}>{bmi.toFixed(1)}</h4>
          <p className={`text-xl font-bold ${color} mb-6`}>{category}</p>

          <div className="bg-slate-50 p-6 rounded-3xl w-full">
            <span className="text-2xl block mb-2">ðŸ’¡</span>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">{tip}</p>
          </div>
        </div>
      </div>
      <BMIBlogContent />
      <BMISEOArticle />
    </div>
  );
};

export const InvestmentReturnTool = () => {
  const [principal, setPrincipal] = useState(100000);
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const [compounding, setCompounding] = useState(12); // Monthly default
  const [adjustInflation, setAdjustInflation] = useState(false);
  const [inflationRate, setInflationRate] = useState(8);

  const [data, setData] = useState<any[]>([]);
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    let total = principal;
    let totalInvested = principal;
    // Effective rate if inflation adjusted: Real Rate = (1 + Nominal) / (1 + Inflation) - 1
    // Simplified for tool: adjusting the final value or the rate?
    // Let's adjust the growth rate to be "Real Return" if toggle is on.
    const effectiveRate = adjustInflation ? ((1 + rate / 100) / (1 + inflationRate / 100) - 1) * 100 : rate;

    const ratePerPeriod = (effectiveRate / 100) / compounding;
    const chartData = [];

    for (let i = 0; i <= years; i++) {
      if (i > 0) {
        for (let m = 0; m < compounding; m++) {
          total = (total + (monthly * (12 / compounding))) * (1 + ratePerPeriod);
          totalInvested += (monthly * (12 / compounding));
        }
      }
      chartData.push({
        year: `Y${i}`,
        value: Math.round(total),
        invested: Math.round(totalInvested)
      });
    }

    setData(chartData);
    setResult({
      total,
      invested: totalInvested,
      returns: total - totalInvested
    });
  };

  useEffect(() => calculate(), [principal, monthly, rate, years, compounding, adjustInflation, inflationRate]);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold text-emerald-900">Investment Strategy</h3>

          <div className="flex items-center justify-between bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
            <div>
              <span className="text-sm font-bold text-emerald-900">Adjust for Inflation?</span>
              <p className="text-[10px] text-emerald-700">See "Real Value" in today's purchasing power</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={adjustInflation} onChange={e => setAdjustInflation(e.target.checked)} className="sr-only peer" />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Starting Amount</label>
                <input type="number" value={principal} onChange={e => setPrincipal(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Monthly Contribution</label>
                <input type="number" value={monthly} onChange={e => setMonthly(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Expected Return %</label>
                <input type="number" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Duration (Years)</label>
                <input type="number" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
              </div>
            </div>

            {adjustInflation && (
              <div className="animate-in fade-in slide-in-from-top-2">
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Expected Inflation %</label>
                <input type="number" value={inflationRate} onChange={e => setInflationRate(Number(e.target.value))} className="w-full p-4 bg-rose-50 border border-rose-100 rounded-2xl font-bold text-rose-900" />
              </div>
            )}
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl flex flex-col border border-slate-50 relative overflow-hidden">
          {result && (
            <div className="mb-8 text-center relative z-10">
              <p className="text-slate-400 uppercase text-xs font-black tracking-widest mb-1">
                {adjustInflation ? "Real Maturity Value (Today's Money)" : "Projected Maturity Value"}
              </p>
              <h4 className="text-5xl font-black text-emerald-600">Rs. {Math.round(result.total).toLocaleString()}</h4>

              <div className="flex justify-center gap-2 mt-6">
                <div className="px-4 py-2 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-[10px] uppercase font-bold text-blue-400">Total Invested</p>
                  <p className="text-lg font-black text-blue-900">Rs. {result.invested.toLocaleString()}</p>
                </div>
                <div className="px-4 py-2 bg-emerald-50 rounded-xl border border-emerald-100">
                  <p className="text-[10px] uppercase font-bold text-emerald-400">Total Profit</p>
                  <p className="text-lg font-black text-emerald-900">Rs. {Math.round(result.returns).toLocaleString()}</p>
                </div>
              </div>
            </div>
          )}

          <div className="h-48 w-full mt-auto relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <Tooltip
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontSize: '12px' }}
                  formatter={(v: number) => `Rs. ${v.toLocaleString()}`}
                  labelStyle={{ display: 'none' }}
                />
                <Area type="monotone" dataKey="value" stroke="#10b981" fillOpacity={1} fill="url(#colorValue)" strokeWidth={3} />
                <Area type="monotone" dataKey="invested" stroke="#3b82f6" fillOpacity={0} strokeWidth={2} strokeDasharray="4 4" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <InvestmentBlogContent />
      <InvestmentSEOArticle />
    </div>
  );
};

export const RetirementTool = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retireAge, setRetireAge] = useState(60);
  const [lifeExpectancy, setLifeExpectancy] = useState(80);
  const [monthlyExpense, setMonthlyExpense] = useState(100000);
  const [currentSavings, setCurrentSavings] = useState(500000);
  const [inflation, setInflation] = useState(10); // High inflation in PK
  const [preRetireReturn, setPreRetireReturn] = useState(12); // Equity/Mutual Funds
  const [postRetireReturn, setPostRetireReturn] = useState(10); // Safer debt funds

  // 1. Calculate expense at retirement
  const yearsToRetire = Math.max(0, retireAge - currentAge);
  const yearsInRetirement = Math.max(0, lifeExpectancy - retireAge);

  const expenseAtRetirement = monthlyExpense * Math.pow(1 + inflation / 100, yearsToRetire);

  // 2. Calculate Corpus Needed
  // Corpus = (Annual Expense at Retirement) * ((1 - (1+r)^-n ) / r) 
  // Where r = real rate of return during retirement (return - inflation)
  // Real Rate approx = (1+Ret)/ (1+Inf) - 1
  const realRatePostRetire = ((1 + postRetireReturn / 100) / (1 + inflation / 100)) - 1;
  const annualExpenseAtStart = expenseAtRetirement * 12;

  // PV of Annuity Due (assuming expense at start of year/month)
  // If Real Rate is 0 or negative (rare but possible in high inflation), handled carefully
  let corpusNeeded = 0;
  if (Math.abs(realRatePostRetire) < 0.0001) {
    corpusNeeded = annualExpenseAtStart * yearsInRetirement;
  } else {
    corpusNeeded = annualExpenseAtStart * ((1 - Math.pow(1 + realRatePostRetire, -yearsInRetirement)) / realRatePostRetire);
  }

  // 3. Gap Analysis
  // FV of current savings
  const fvCurrentSavings = currentSavings * Math.pow(1 + preRetireReturn / 100, yearsToRetire);
  const shortfall = Math.max(0, corpusNeeded - fvCurrentSavings);

  // 4. Monthly Savings Needed to cover shortfall
  // PMT formula: P = (FV * r) / ((1+r)^n - 1) * (1+r) if start of period? or end? Let's use standard end.
  const rMonthly = (preRetireReturn / 100) / 12;
  const nMonths = yearsToRetire * 12;
  const monthlySavingsNeeded = shortfall > 0 ? (shortfall * rMonthly) / (Math.pow(1 + rMonthly, nMonths) - 1) : 0;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold text-blue-900">Retirement Plan</h3>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Current Age</label>
              <input type="number" value={currentAge} onChange={e => setCurrentAge(Number(e.target.value))} className="w-full p-3 bg-slate-50 border rounded-xl font-bold" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Retire Age</label>
              <input type="number" value={retireAge} onChange={e => setRetireAge(Number(e.target.value))} className="w-full p-3 bg-slate-50 border rounded-xl font-bold" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Life Exp.</label>
              <input type="number" value={lifeExpectancy} onChange={e => setLifeExpectancy(Number(e.target.value))} className="w-full p-3 bg-slate-50 border rounded-xl font-bold" />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Current Monthly Expense</label>
            <input type="number" value={monthlyExpense} onChange={e => setMonthlyExpense(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl text-lg font-bold" />
          </div>

          <div>
            <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Current Savings (Optional)</label>
            <input type="number" value={currentSavings} onChange={e => setCurrentSavings(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase mb-3">Assumptions</p>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <span className="text-[10px] text-slate-500 block">Inflation</span>
                <input type="number" value={inflation} onChange={e => setInflation(Number(e.target.value))} className="w-full p-2 bg-white border rounded-lg text-xs font-bold" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">Pre-Ret %</span>
                <input type="number" value={preRetireReturn} onChange={e => setPreRetireReturn(Number(e.target.value))} className="w-full p-2 bg-white border rounded-lg text-xs font-bold" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">Post-Ret %</span>
                <input type="number" value={postRetireReturn} onChange={e => setPostRetireReturn(Number(e.target.value))} className="w-full p-2 bg-white border rounded-lg text-xs font-bold" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-30 -mr-32 -mt-32"></div>

          <div className="relative z-10 text-center space-y-8">
            <div>
              <p className="text-blue-200 uppercase text-[10px] font-black tracking-widest mb-2">Total Corpus Needed</p>
              <h4 className="text-4xl lg:text-5xl font-black text-white">Rs. {Math.round(corpusNeeded / 10000000).toFixed(2)} Cr</h4>
              <p className="text-[10px] text-blue-300 mt-2">
                To sustain {yearsInRetirement} years with inflation adjusted expenses (Rs. {Math.round(expenseAtRetirement).toLocaleString()}/mo at start)
              </p>
            </div>

            <div className="pt-8 border-t border-blue-800">
              <p className="text-blue-200 uppercase text-[10px] font-black tracking-widest mb-1">Gap & Required Action</p>
              <div className="flex flex-col items-center">
                <p className="text-3xl font-black text-emerald-400">Save Rs. {Math.round(monthlySavingsNeeded).toLocaleString()} <span className="text-sm text-emerald-200 font-normal">/ month</span></p>
                {currentSavings > 0 && <p className="text-[10px] text-blue-400 mt-2">considering your existing {Math.round(currentSavings / 100000).toFixed(1)} Lakh savings</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <RetirementBlogContent />
      <RetirementSEOArticle />
    </div>
  );
};

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
      <RealEstateBlogContent />
      <RealEstateSEOArticle />
    </div>
  );
};

export const PFTool = () => {
  const [basicSalary, setBasicSalary] = useState(100000);
  const [empContribution, setEmpContribution] = useState(10); // %
  const [employerContribution, setEmployerContribution] = useState(10); // %
  const [interestRate, setInterestRate] = useState(12); // %
  const [years, setYears] = useState(10);

  const monthlyEmpPF = basicSalary * (empContribution / 100);
  const monthlyEmployerPF = basicSalary * (employerContribution / 100);
  const totalMonthlyContribution = monthlyEmpPF + monthlyEmployerPF;

  // Detailed loop to track principal vs interest
  let totalBalance = 0;
  let totalPrincipal = 0;

  const yearlyContribution = totalMonthlyContribution * 12;

  for (let i = 0; i < years; i++) {
    totalPrincipal += yearlyContribution;
    totalBalance = (totalBalance + yearlyContribution) * (1 + interestRate / 100);
  }

  const totalInterest = totalBalance - totalPrincipal;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold">Provident Fund Calculation in Pakistan</h3>
          <p className="text-xs text-slate-500 mb-2">Easily find your PF deduction amount and PF percentage in salary.</p>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Monthly Basic Salary (PKR)</label>
            <input type="number" value={basicSalary} onChange={e => setBasicSalary(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Your Share %</label>
              <input type="number" value={empContribution} onChange={e => setEmpContribution(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Employer Share %</label>
              <input type="number" value={employerContribution} onChange={e => setEmployerContribution(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Return Rate %</label>
              <input type="number" value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Years</label>
              <input type="number" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-blue-900 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-30 -mr-32 -mt-32"></div>

          <div className="text-center mb-8 relative z-10">
            <p className="text-blue-200 uppercase text-xs font-black tracking-widest mb-2">Projected Maturity Amount</p>
            <h4 className="text-5xl font-black text-emerald-400">Rs. {Math.round(totalBalance).toLocaleString()}</h4>
            <p className="text-[10px] text-blue-300 mt-2">After {years} years of compounding</p>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/10 relative z-10">
            <div className="flex justify-between items-center text-sm">
              <span className="text-blue-200">Total Contributed (Principal)</span>
              <span className="font-bold">Rs. {Math.round(totalPrincipal).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-blue-200">Total Interest Earned</span>
              <span className="font-bold text-emerald-400">+ Rs. {Math.round(totalInterest).toLocaleString()}</span>
            </div>

            {/* Simple Bar Visualization */}
            <div className="w-full h-3 bg-blue-950 rounded-full mt-4 flex overflow-hidden">
              <div className="h-full bg-blue-400" style={{ width: `${(totalPrincipal / totalBalance) * 100}%` }}></div>
              <div className="h-full bg-emerald-400" style={{ width: `${(totalInterest / totalBalance) * 100}%` }}></div>
            </div>
            <div className="flex justify-between text-[10px] text-blue-300">
              <span>P: {Math.round((totalPrincipal / totalBalance) * 100)}%</span>
              <span>I: {Math.round((totalInterest / totalBalance) * 100)}%</span>
            </div>
          </div>
        </div>
      </div>
      <PFBlogContent />
      <PFSEOArticle />
    </div>
  );
};

export const GratuityTool = () => {
  const [basicSalary, setBasicSalary] = useState(50000); // Last Drawn GROSS Salary technically
  const [years, setYears] = useState(5);

  // Rule: (Last Drawn Gross Wages * Years * 30) / 26
  // Note: Some companies use Basic, but Law says "Wages" which is Gross. We will label it carefully.
  const gratuity = (basicSalary * years * 30) / 26;

  // Tax Exemptions
  const approvedExemption = Math.min(gratuity, 300000);
  const unapprovedExemption = Math.min(gratuity, 75000); // Simplification of "Lower of 75k or 50%"

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold">Service Details</h3>

          <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl flex gap-3">
            <span className="text-2xl">ðŸ’¡</span>
            <p className="text-xs text-indigo-800 leading-relaxed">
              <strong>Tip:</strong> According to Pakistan Labor Laws, Gratuity is usually calculated on your <strong>Last Drawn GROSS Salary</strong> (including COLA), not just Basic Salary.
            </p>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Last Monthly Gross Salary</label>
            <input
              type="number"
              value={basicSalary}
              onChange={e => setBasicSalary(Number(e.target.value))}
              className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Total Completed Years</label>
            <input
              type="number"
              value={years}
              onChange={e => setYears(Number(e.target.value))}
              className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl"
            />
            <p className="text-[10px] text-slate-400 mt-2 ml-1">Note: Service of more than 6 months in the last year is counted as a full year.</p>
          </div>
        </div>

        <div className="bg-indigo-700 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden">
          <div className="absolute left-0 top-0 w-64 h-64 bg-indigo-500 rounded-full blur-[120px] opacity-50 -ml-20 -mt-20"></div>

          <div className="relative z-10 text-center">
            <p className="text-indigo-200 uppercase text-xs font-black tracking-widest mb-4">Total Gratuity Payable</p>
            <h4 className="text-5xl font-black mb-2">Rs. {Math.round(gratuity).toLocaleString()}</h4>

            <div className="mt-8 pt-8 border-t border-indigo-500/50 text-left space-y-3">
              <p className="text-xs font-black text-indigo-300 uppercase tracking-widest mb-2">Tax Exemption Limits</p>
              <div className="flex justify-between text-sm">
                <span className="opacity-80">If Approved Fund:</span>
                <span className="font-bold">Up to Rs. 300k Exempt</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-80">If Unapproved:</span>
                <span className="font-bold">Up to Rs. 75k Exempt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GratuityBlogContent />
      <GratuitySEOArticle />
    </div>
  );
};

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
      <FreelancerBlogContent />
      <FreelancerSEOArticle />
    </div>
  );
};

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
      <UnitConverterBlogContent />
      <UnitConverterSEOArticle />
    </div>
  );
};

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
      <LandConverterBlogContent />
      <LandConverterSEOArticle />
    </div>
  );
};

export const MarkPercentageTool = () => {
  const [obtained, setObtained] = useState(850);
  const [total, setTotal] = useState(1100);
  const percentage = total > 0 ? (obtained / total) * 100 : 0;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <h3 className="text-2xl font-bold">Marks Details</h3>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Obtained Marks</label>
            <input type="number" value={obtained} onChange={e => setObtained(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl" />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Total Marks</label>
            <input type="number" value={total} onChange={e => setTotal(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl" />
          </div>
        </div>

        <div className="bg-emerald-600 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center text-center relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
          <p className="text-emerald-100 uppercase text-xs font-black mb-2 tracking-widest">Percentage Score</p>
          <h4 className="text-7xl font-black mb-4">{percentage.toFixed(2)}%</h4>
          <div className="w-full bg-black/20 h-3 rounded-full overflow-hidden mb-6">
            <div className="bg-white h-full transition-all duration-1000" style={{ width: `${Math.min(100, percentage)}%` }}></div>
          </div>
          <p className="text-emerald-100 text-sm font-medium">
            You obtained {obtained} out of {total} marks.
          </p>
        </div>
      </div>
      <MarkPercentageBlogContent />
    </div>
  );
};

export const GradeCalculatorTool = () => {
  const [obtained, setObtained] = useState(85);
  const [total, setTotal] = useState(100);
  const percentage = total > 0 ? (obtained / total) * 100 : 0;

  let grade = 'F';
  let color = 'text-rose-500';
  let status = 'Fail';

  if (percentage >= 80) { grade = 'A+'; color = 'text-emerald-500'; status = 'Exceptional'; }
  else if (percentage >= 70) { grade = 'A'; color = 'text-emerald-400'; status = 'Excellent'; }
  else if (percentage >= 60) { grade = 'B'; color = 'text-blue-500'; status = 'Good'; }
  else if (percentage >= 50) { grade = 'C'; color = 'text-amber-500'; status = 'Average'; }
  else if (percentage >= 40) { grade = 'D'; color = 'text-orange-500'; status = 'Pass'; }

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6 text-slate-800">
          <h3 className="text-2xl font-bold">Academic Performance</h3>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Marks Obtained</label>
            <input type="number" value={obtained} onChange={e => setObtained(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl" />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Total Marks</label>
            <input type="number" value={total} onChange={e => setTotal(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl" />
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500"></div>
          <p className="text-slate-400 uppercase text-xs font-black mb-4 tracking-widest">Calculated Grade</p>
          <h4 className={`text-8xl font-black ${color} mb-2`}>{grade}</h4>
          <p className={`text-2xl font-bold ${color} mb-6 tracking-tight uppercase`}>{status}</p>
          <div className="bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
            <p className="text-sm font-bold text-slate-600">Percentage: {percentage.toFixed(2)}%</p>
          </div>
        </div>
      </div>
      <GradeCalculatorBlogContent />
    </div>
  );
};

export const CGPACalculatorTool = () => {
  const [semesters, setSemesters] = useState([{ id: 1, sgpa: 3.5, credits: 18 }]);

  const addSemester = () => {
    setSemesters([...semesters, { id: Date.now(), sgpa: 0, credits: 0 }]);
  };

  const removeSemester = (id: number) => {
    if (semesters.length > 1) {
      setSemesters(semesters.filter(s => s.id !== id));
    }
  };

  const updateSemester = (id: number, field: 'sgpa' | 'credits', value: number) => {
    setSemesters(semesters.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const totalCredits = semesters.reduce((acc, s) => acc + s.credits, 0);
  const totalPoints = semesters.reduce((acc, s) => acc + (s.sgpa * s.credits), 0);
  const cgpa = totalCredits > 0 ? totalPoints / totalCredits : 0;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Semester Details</h3>
            <button
              onClick={addSemester}
              className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-bold hover:bg-emerald-700 transition-colors shadow-lg"
            >
              + Add Semester
            </button>
          </div>

          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {semesters.map((s, index) => (
              <div key={s.id} className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 relative animate-in fade-in slide-in-from-right-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Semester {index + 1} GPA</label>
                    <input
                      type="number"
                      step="0.01"
                      value={s.sgpa || ''}
                      onChange={e => updateSemester(s.id, 'sgpa', Number(e.target.value))}
                      className="w-full p-3 bg-white border rounded-xl font-bold"
                      placeholder="e.g. 3.5"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Credit Hours</label>
                    <input
                      type="number"
                      value={s.credits || ''}
                      onChange={e => updateSemester(s.id, 'credits', Number(e.target.value))}
                      className="w-full p-3 bg-white border rounded-xl font-bold"
                      placeholder="e.g. 18"
                    />
                  </div>
                </div>
                {semesters.length > 1 && (
                  <button
                    onClick={() => removeSemester(s.id)}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-lg hover:bg-rose-200 transition-colors shadow-sm"
                  >
                    Ã—
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-center text-center relative overflow-hidden">
          <div className="absolute left-0 bottom-0 w-full h-32 bg-gradient-to-t from-emerald-500/20 to-transparent"></div>
          <p className="text-slate-400 uppercase text-xs font-black mb-4 tracking-widest">Cumulative GPA (CGPA)</p>
          <h4 className="text-8xl font-black text-emerald-400 mb-6 drop-shadow-2xl">{cgpa.toFixed(2)}</h4>
          <div className="grid grid-cols-2 gap-4 bg-white/5 p-6 rounded-3xl border border-white/10 relative z-10">
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Total Credits</p>
              <p className="text-2xl font-bold">{totalCredits}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Total Grade Points</p>
              <p className="text-2xl font-bold">{totalPoints.toFixed(1)}</p>
            </div>
          </div>
        </div>
      </div>
      <CGPACalculatorBlogContent />
    </div>
  );
};

export const ElectricityBillTool = ({ isUrdu }: { isUrdu: boolean }) => {
  const [activeTab, setActiveTab] = useState<'bill' | 'watts'>('bill');
  const [units, setUnits] = useState(250);
  const [consumerType, setConsumerType] = useState<'residential-non-protected' | 'residential-protected' | 'commercial'>('residential-non-protected');
  const [fpa, setFpa] = useState(2.8);
  const [disco, setDisco] = useState('LESCO');

  // Watts to Units state
  const [wattage, setWattage] = useState(1500);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [daysPerMonth, setDaysPerMonth] = useState(30);
  const wattsUnits = (wattage * hoursPerDay * daysPerMonth) / 1000;

  // NEPRA Slabs 2025-26
  const calculateEnergyCost = (u: number, type: string) => {
    if (type === 'residential-protected') {
      if (u <= 100) return u * 10.54;
      if (u <= 200) return (100 * 10.54) + ((u - 100) * 13.01);
      return (100 * 10.54) + (100 * 13.01) + ((u - 200) * 22.44);
    } else if (type === 'commercial') {
      if (u <= 100) return u * 30.10;
      if (u <= 300) return (100 * 30.10) + ((u - 100) * 39.52);
      return (100 * 30.10) + (200 * 39.52) + ((u - 300) * 48.77);
    } else {
      let cost = 0;
      if (u <= 100) cost = u * 22.44;
      else if (u <= 200) cost = (100 * 22.44) + ((u - 100) * 28.91);
      else if (u <= 300) cost = (100 * 22.44) + (100 * 28.91) + ((u - 200) * 33.10);
      else if (u <= 400) cost = (100 * 22.44) + (100 * 28.91) + (100 * 33.10) + ((u - 300) * 37.99);
      else if (u <= 500) cost = (100 * 22.44) + (100 * 28.91) + (100 * 33.10) + (100 * 37.99) + ((u - 400) * 40.20);
      else if (u <= 600) cost = (100 * 22.44) + (100 * 28.91) + (100 * 33.10) + (100 * 37.99) + (100 * 40.20) + ((u - 500) * 41.62);
      else if (u <= 700) cost = (100 * 22.44) + (100 * 28.91) + (100 * 33.10) + (100 * 37.99) + (100 * 40.20) + (100 * 41.62) + ((u - 600) * 42.76);
      else cost = (100 * 22.44) + (100 * 28.91) + (100 * 33.10) + (100 * 37.99) + (100 * 40.20) + (100 * 41.62) + (100 * 42.76) + ((u - 700) * 47.69);
      return cost;
    }
  };

  const energyCost = calculateEnergyCost(units, consumerType);
  const fuelAdjustment = units * fpa;
  const duty = energyCost * 0.015;
  const fcSurcharge = units * 0.43;
  const tvFee = consumerType === 'commercial' ? 0 : 35;
  const totalTaxable = energyCost + fuelAdjustment + duty + fcSurcharge;
  const gst = totalTaxable * 0.18;
  const totalBill = totalTaxable + gst + tvFee;
  const perUnitEffective = units > 0 ? totalBill / units : 0;

  const discos = ['LESCO', 'MEPCO', 'IESCO', 'FESCO', 'PESCO', 'K-Electric', 'GEPCO', 'HESCO', 'SEPCO'];

  return (
    <div className="space-y-12 animate-in fade-in duration-700">

      {/* Tab Toggle */}
      <div className="flex justify-center">
        <div className="bg-white p-1 rounded-full border border-slate-100 shadow-sm inline-flex">
          <button
            onClick={() => setActiveTab('bill')}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'bill' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            Bill Calculator
          </button>
          <button
            onClick={() => setActiveTab('watts')}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'watts' ? 'bg-amber-500 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            Watts to Units
          </button>
        </div>
      </div>

      {activeTab === 'bill' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

          {/* Input Panel */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
            <h3 className="text-2xl font-bold">{isUrdu ? 'Ø¨Ø¬Ù„ÛŒ Ú©Û’ Ø¨Ù„ Ú©ÛŒ ØªÙØµÛŒÙ„Ø§Øª' : 'WAPDA Unit Calculator'}</h3>

            {/* DISCO Selector */}
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase mb-2 block tracking-widest">Distribution Company (DISCO)</label>
              <div className="flex flex-wrap gap-2">
                {discos.map(d => (
                  <button
                    key={d}
                    onClick={() => setDisco(d)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${disco === d ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-500 hover:border-slate-400'}`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Consumer Type */}
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase mb-2 block tracking-widest">Consumer Type</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setConsumerType('residential-protected')}
                  className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border ${consumerType === 'residential-protected' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'}`}
                >
                  Protected
                </button>
                <button
                  onClick={() => setConsumerType('residential-non-protected')}
                  className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border ${consumerType === 'residential-non-protected' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'}`}
                >
                  Residential
                </button>
                <button
                  onClick={() => setConsumerType('commercial')}
                  className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border ${consumerType === 'commercial' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'}`}
                >
                  Commercial
                </button>
              </div>
              {consumerType === 'residential-protected' && (
                <p className="text-[10px] text-emerald-600 mt-2 ml-1">Protected = under 200 units for the last 6 consecutive months.</p>
              )}
              {consumerType === 'commercial' && (
                <p className="text-[10px] text-blue-600 mt-2 ml-1">Commercial A-2 tariff applies. Higher per unit rate, no protected category.</p>
              )}
            </div>

            {/* Units Input */}
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase mb-2 block tracking-widest">Units Consumed (kWh)</label>
              <input
                type="number"
                value={units}
                onChange={e => setUnits(Number(e.target.value))}
                className="w-full p-4 bg-slate-50 border rounded-2xl font-black text-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              />
              <p className="text-[10px] text-slate-400 mt-2 ml-1">
                Based on NEPRA 2025-2026 tariff. Don't know your units?{' '}
                <button onClick={() => setActiveTab('watts')} className="text-amber-600 font-bold underline">Use Watts to Units tab.</button>
              </p>
            </div>

            {/* FPA */}
            <div className="pt-4 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Fuel Price Adjustment â€” FPA (Rs./unit)</label>
              <input
                type="number"
                value={fpa}
                onChange={e => setFpa(Number(e.target.value))}
                className="w-full p-3 bg-slate-50 border rounded-xl text-sm"
                step="0.1"
              />
              <p className="text-[10px] text-slate-400 mt-1 ml-1">NEPRA announces FPA monthly. Adjust to match your DISCO's current rate.</p>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32 group-hover:opacity-30 transition-opacity"></div>

            <div className="text-center mb-8 relative z-10">
              <p className="text-slate-400 uppercase text-[10px] font-black tracking-widest mb-1">Estimated Monthly Bill â€” {disco}</p>
              <h4 className="text-6xl lg:text-7xl font-black text-emerald-400 drop-shadow-lg">
                Rs. {Math.round(totalBill).toLocaleString()}
              </h4>
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-bold text-slate-400">Effective rate: Rs. {perUnitEffective.toFixed(2)} / unit (all-in)</span>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10 relative z-10">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Energy Cost ({units} units)</span>
                <span className="font-bold">Rs. {Math.round(energyCost).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Fuel Price Adj. (FPA)</span>
                <span className="font-bold">Rs. {Math.round(fuelAdjustment).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">FC Surcharge + Duty</span>
                <span className="font-bold">Rs. {Math.round(fcSurcharge + duty).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-rose-400">GST (18%)</span>
                <span className="text-rose-400 font-bold">Rs. {Math.round(gst).toLocaleString()}</span>
              </div>
              {tvFee > 0 && (
                <div className="flex justify-between items-center text-sm pt-3 border-t border-white/10">
                  <span className="text-slate-400">TV License Fee</span>
                  <span className="font-bold">Rs. {tvFee}</span>
                </div>
              )}
            </div>
          </div>
        </div>

      ) : (

        /* Watts to Units Calculator */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
            <h3 className="text-2xl font-bold">Watts to Units Calculator</h3>
            <p className="text-sm text-slate-500">Formula: <strong>Units = (Watts x Hours/Day x Days) / 1000</strong></p>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Appliance Wattage (W)</label>
              <input
                type="number"
                value={wattage}
                onChange={e => setWattage(Number(e.target.value))}
                className="w-full p-4 bg-amber-50 border border-amber-100 rounded-2xl font-black text-2xl text-amber-900 focus:ring-2 focus:ring-amber-400 outline-none"
                placeholder="e.g. 1500 for AC"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Hours Per Day</label>
                <input
                  type="number"
                  value={hoursPerDay}
                  onChange={e => setHoursPerDay(Number(e.target.value))}
                  className="w-full p-4 bg-slate-50 border rounded-2xl font-bold"
                  max={24}
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Days Per Month</label>
                <input
                  type="number"
                  value={daysPerMonth}
                  onChange={e => setDaysPerMonth(Number(e.target.value))}
                  className="w-full p-4 bg-slate-50 border rounded-2xl font-bold"
                  max={31}
                />
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-xs text-slate-400 mb-2 font-bold uppercase">Common Appliances â€” Click to Select</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: '1.5T Inverter AC', w: 1200 },
                  { name: '1.5T Non-Inverter', w: 1850 },
                  { name: 'Small Fridge', w: 150 },
                  { name: 'LED TV 42"', w: 90 },
                  { name: 'Water Motor', w: 750 },
                  { name: 'Iron', w: 1100 },
                ].map(a => (
                  <button
                    key={a.name}
                    onClick={() => setWattage(a.w)}
                    className="px-3 py-1 bg-white border border-slate-200 rounded-xl text-xs font-medium hover:border-amber-400 hover:bg-amber-50 transition-all"
                  >
                    {a.name} ({a.w}W)
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Watts Result */}
          <div className="bg-amber-500 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden">
            <div className="absolute right-0 top-0 w-48 h-48 bg-amber-400 rounded-full blur-[80px] opacity-50 -mr-24 -mt-24"></div>

            <div className="relative z-10 text-center mb-8">
              <p className="text-amber-100 uppercase text-[10px] font-black tracking-widest mb-2">Monthly Units Consumed</p>
              <h4 className="text-7xl font-black drop-shadow-lg">{wattsUnits.toFixed(1)}</h4>
              <p className="text-amber-200 text-sm mt-2">kWh / Units per Month</p>
            </div>

            <div className="relative z-10 space-y-3 pt-5 border-t border-amber-400/40">
              <div className="flex justify-between text-sm">
                <span className="text-amber-100">Formula used:</span>
                <span className="font-bold">({wattage}W x {hoursPerDay}h x {daysPerMonth}d) / 1000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-amber-100">WAPDA per unit (est.)</span>
                <span className="font-bold">Rs. 22.44 â€“ Rs. 47.69</span>
              </div>
              <div className="flex justify-between text-sm pt-3 border-t border-amber-400/30">
                <span className="text-amber-100 font-bold">Approx. Bill (Non-Prot.)</span>
                <span className="font-black text-xl">Rs. {Math.round(calculateEnergyCost(wattsUnits, 'residential-non-protected') * 1.25).toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={() => { setUnits(Math.round(wattsUnits)); setActiveTab('bill'); }}
              className="relative z-10 mt-6 w-full py-3 bg-white/20 hover:bg-white/30 border border-white/30 rounded-2xl text-sm font-bold transition-all"
            >
              Calculate Full Bill for {Math.round(wattsUnits)} Units
            </button>
          </div>
        </div>
      )}

      <ElectricityBillBlogContent />
    </div>
  );
};

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
      <PercentageBlogContent />
    </div>
  );
};

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
      <PasswordGenBlogContent />
    </div>
  );
};

export const MortgageTool = () => {
  const [homeValue, setHomeValue] = useState(15000000);
  const [downPayment, setDownPayment] = useState(3000000);
  const [interestRate, setInterestRate] = useState(18);
  const [tenure, setTenure] = useState(20);

  const loanAmount = homeValue - downPayment;
  const monthlyRate = (interestRate / 100) / 12;
  const totalMonths = tenure * 12;

  const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6 border border-slate-100">
          <h3 className="text-2xl font-bold">Property Details</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Property Value (PKR)</label>
              <input type="number" value={homeValue} onChange={e => setHomeValue(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Down Payment (PKR)</label>
              <input type="number" value={downPayment} onChange={e => setDownPayment(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Markup Rate (%)</label>
              <input type="number" value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Loan Tenure (Years)</label>
              <input type="number" value={tenure} onChange={e => setTenure(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-20 -mr-32 -mb-32"></div>

          <div className="text-center mb-8 relative z-10">
            <p className="text-slate-400 uppercase text-xs font-black tracking-widest mb-2">Estimated Monthly Installment</p>
            <h4 className="text-5xl font-black text-emerald-400">Rs. {Math.round(emi).toLocaleString()}</h4>
            <p className="text-[10px] text-slate-500 mt-2">KIBOR linked estimate for Pakistan</p>
          </div>

          <div className="space-y-3 pt-8 border-t border-white/10 relative z-10">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Total Loan Amount</span>
              <span className="font-bold">Rs. {loanAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Total Interest Payable</span>
              <span className="font-bold text-rose-400">Rs. {Math.round(totalInterest).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm pt-3 border-t border-white/5">
              <span className="font-bold">Total Cost of Property</span>
              <span className="font-black text-xl text-emerald-400">Rs. {Math.round(totalPayment + downPayment).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      <MortgageBlogContent />
    </div>
  );
};
