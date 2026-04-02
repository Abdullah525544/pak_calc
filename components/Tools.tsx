 ª  
import React, { useState, useEffect } from 'react';                                                                                                                                     
import { SALARIED_TAX_SLABS } from '../constants';                                                                 
import { EMIBlogContent, TaxBlogContent, ZakatBlogContent, ProfitMarginBlogContent, BMIBlogContent, InvestmentBlogContent, RetirementBlogContent, RealEstateBlogContent, PFBlogContent, GratuityBlogContent, FreelancerBlogContent, UnitConverterBlogContent, GradeCalculatorBlogContent, CGPACalculatorBlogContent, MarkPercentageBlogContent, IncomeTaxSEOArticle, ZakatSEOArticle, FreelancerSEOArticle, InvestmentSEOArticle, RetirementSEOArticle, RealEstateSEOArticle, PFSEOArticle, GratuitySEOArticle, EMISEOArticle, ProfitMarginSEOArticle, UnitConverterSEOArticle, BMISEOArticle, ElectricityBillBlogContent } from './InfoPages';  
const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];  
// ... (Existing Tool components)  
export const IncomeTaxTool = ({ isUrdu }: { isUrdu: boolean }) => {                                                 
  const annualSalary = salary * 12;                
                                                    
    const nextSlab = SALARIED_TAX_SLABS[i + 1];                                     Ä                          
  });  
  if (slab) {                                                                                   Ä                  
    tax = slab.fixed + ((annualSalary - prevThreshold) * (slab.rate / 100));     
            
    <div className="space-y-12">                                                               
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl">                                                                                   
          <label className="block text-sm font-medium mb-2">Monthly Gross Salary (PKR)</label>                                                                                                                                                          
          <p className="text-xs text-slate-400 mt-2 ml-1">Based on latest FBR tax slabs for Salaried Individuals.</p>                
        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl text-center flex flex-col justify-center">                                                                                                   
          <h4 className="text-5xl font-black text-emerald-400">Rs. {Math.round(tax / 12).toLocaleString()}</h4>  
          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">                   
              <p className="text-[10px] text-slate-500 uppercase">Yearly Tax</p>                                                                                   
            </div>                   
              <p className="text-[10px] text-slate-500 uppercase">Net Monthly Income</p>                                                                                                   
            </div>                  
        </div>              
      <TaxBlogContent />                               
    </div>      
};  
export const ZakatTool = ({ isUrdu }: { isUrdu: boolean }) => {                                             
  const [gold, setGold] = useState(0); // grams                                                     
  const [otherAssets, setOtherAssets] = useState(0);                                                      
                           
  const [goldRate, setGoldRate] = useState(25000); // per gram approx                                                                         
                                                                                       
  const netAssets = Math.max(0, totalAssets - liabilities);  
  const nisabGoldValue = 87.48 * goldRate;                                                 
  const nisabThreshold = Math.min(nisabGoldValue, nisabSilverValue);  
  const isEligible = netAssets >= nisabThreshold;                            Ä                         
            
    <div className={`space-y-12 ${isUrdu ‚î 'rtl font-urdu' : ''}`}>                                                               
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">                                                      Ä   ≤⁄ àŸ É ⁄ í Ÿ å€  ¢Ÿ  ©€  ßÿ ßÿ í (Ÿ µÿ ® 2026)' : 'Your Assets for Zakat (Nisab 2026)'}</h3>                                                    
            <div>                                                                           Ä   ÜŸ Ø ÿ ÇŸ   Åÿ ™⁄  Ö€ ∫ € ß ÿ åŸ © Ÿ å⁄                                   
              <input type="number" value={cash} onChange={e => setCash(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />                    
            <div>                                                                           Ä   Ø€ Øÿ  ßÿ ßÿ í (ÿ åÿ ±ÿ  àÿ åÿ Å)' : 'Other Assets (Stocks etc)'}</label>                                                                                                                                                                        
            </div>                  
          <div className="grid grid-cols-2 gap-4">                   
              <label className="text-xs font-bold text-slate-500">{isUrdu ‚î 'ÿ àŸ ß (⁄ ±ÿ Ö)' : 'Gold (Grams)'}</label>                                                                                                                                                          
            </div>                   
              <label className="text-xs font-bold text-slate-500">{isUrdu ‚î '⁄ ßŸ Ø€   Øÿ ßŸ                                
              <input type="number" value={silver} onChange={e => setSilver(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />                    
          </div>                 
            <label className="text-xs font-bold text-slate-500">{isUrdu ‚î 'Ÿ ßÿ ®ÿ ™ / Ÿ ±ÿ í (Ÿ Ü€ ß ⁄ ±Ÿ í ⁄ í Ÿ å€                                                   
            <input type="number" value={liabilities} onChange={e => setLiabilities(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />                  
                                                                                   
            <div>                                                                                         Ä   ≥Ÿ Üÿ  Å€  Øÿ ßŸ                                         
              <input type="number" value={goldRate} onChange={e => setGoldRate(Number(e.target.value))} className="w-full p-2 bg-slate-50 border rounded-xl text-xs" />                    
            <div>                                                                                         Ä   Üÿ Üÿ å Ÿ å ⁄ ±ÿ Ö (PKR)' : 'Silver Rate /g (PKR)'}</label>                                                                                                                                                                             
            </div>                  
        </div>  
        <div className={`p-8 rounded-[2.5rem] shadow-xl text-center flex flex-col justify-center transition-colors ${isEligible ‚î 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500'}`}>                                                                                   Ä   Çÿ ®Ÿ  ßÿ ßÿ å⁄ å ⁄ Ñ ÿ ©Ÿ ∞€                                              
          <h4 className={`text-5xl font-black ${isEligible ‚î 'text-emerald-400' : 'text-slate-400'}`}>                                                      
          </h4>  
          <div className="mt-8 space-y-3">                                                                                                  
              <span className="text-xs text-slate-400">{isUrdu ‚î '⁄ Ñ ÿ ´ÿ ´€                            
              <span className="font-bold">Rs. {Math.round(totalAssets).toLocaleString()}</span>                    
            {!isEligible && (                                                                      
                {isUrdu ‚î '* ÿ æ ⁄ í ÿ ´ÿ ´€  Üÿ ßÿ  ≥€  ©Ÿ  Å€ ∫€  ≤⁄ àŸ É Ÿ ±ÿ  Ü€ å⁄  Å€ î' : '* Assets are below Nisab threshold. Zakat not applicable.'}                    
            )}                  
        </div>              
      <ZakatBlogContent />                                           
    </div>      
};  
export const EMITool = () => {                                              
  const [rate, setRate] = useState(15);                                          
                              
  const n = years * 12;                                                                           
                                 
  const totalInterest = totalPayment - loan;  
  return (                                  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">                                                                             
          <h3 className="text-2xl font-bold">Loan EMI Calculator Pakistan</h3>                                                                                                                              
          <div>                                                                                           
            <input type="number" placeholder="Loan Amount" value={loan} onChange={e => setLoan(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />                  
          <div className="grid grid-cols-2 gap-4">                   
              <label className="text-xs font-bold text-slate-500">Interest Rate %</label>                                                                                                                                                                                        
            </div>                   
              <label className="text-xs font-bold text-slate-500">Tenure (Years)</label>                                                                                                                                                                                         
            </div>                  
        </div>  
        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl text-center flex flex-col justify-center">                                                                                                         
          <h4 className="text-5xl font-black text-blue-400">Rs. {Math.round(emi).toLocaleString()}</h4>  
          <div className="mt-8 pt-8 border-t border-white/10 space-y-2">                                                            
              <span className="text-slate-400">Principal Amount</span>                                                                              
            </div>                                                            
              <span className="text-slate-400">Total Interest</span>                                                                                                                 
            </div>                                                                                         
              <span className="text-slate-400">Total Amount Payable</span>                                                                                                                   
            </div>                  
        </div>              
      <EMIBlogContent />                         
    </div>      
};  
export const ProfitMarginTool = () => {                                                                    
  const [cost, setCost] = useState(1000);                                                                    
  const [desiredMargin, setDesiredMargin] = useState(30); // For Markup Mode  
  // Mode 1: Known Cost & Revenue -> Find Margin                                  
  const margin = (profit / revenue) * 100;                                         
                                                          
  // Revenue = Cost / (1 - Margin%)                                                               
  const projectedProfit = requiredRevenue - cost;  
  return (                                  
      <div className="flex justify-center mb-8">                                                                                                   
          <button                                               
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${mode === 'margin' ‚î 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}             
            Find Margin %                     
          <button                                               
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${mode === 'markup' ‚î 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}             
            Find Selling Price                     
        </div>              
                                                               
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">                                                                 
                 
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Product Cost</label>                                                                                                                                                                          
          </div>  
          {mode === 'margin' ‚î (                   
              <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Selling Price</label>                                                                                                                                                                                  
            </div>                 
            <div>                                                                                                                 
              <input type="number" value={desiredMargin} onChange={e => setDesiredMargin(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl" />                                                                                                          Ä      
            </div>              
        </div>  
        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center text-center">                              Ä    
            <>                                                                                                     
              <h4 className="text-6xl font-black text-emerald-400 mb-6">{margin.toFixed(1)}%</h4>  
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">                       
                  <p className="text-[10px] text-slate-500 uppercase font-black">Profit Amount</p>                                                                                                  
                </div>                       
                  <p className="text-[10px] text-slate-500 uppercase font-black">Markup %</p>                                                                                           
                </div>                      
            </>                 
            <>                                                                                                           
              <h4 className="text-5xl font-black text-emerald-400 mb-6">Rs. {Math.round(requiredRevenue).toLocaleString()}</h4>  
              <div className="bg-white/10 p-4 rounded-2xl">                                                                                              
                <p className="font-bold text-2xl">Rs. {Math.round(projectedProfit).toLocaleString()}</p>                      
            </>              
        </div>              
      <ProfitMarginBlogContent />                                  
    </div>      
};  
export const BMICalcTool = () => {                                             
  const [height, setHeight] = useState(170);                                                   
                      
  let color = '';                 
                                                                                                                                        
  else if (bmi < 25) { category = 'Normal Weight'; color = 'text-emerald-500'; tip = 'Great job! Maintain your balanced diet and activity.'; }                                                                                                                                                 
  else { category = 'Obese'; color = 'text-rose-500'; tip = 'Consult a healthcare provider for a personalized plan.'; }  
  return (                                  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">                                                                             
          <h3 className="text-2xl font-bold">Body Stats</h3>                 
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Weight (KG)</label>                                                                                                                                                                                                        
          </div>                 
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Height (CM)</label>                                                                                                                                                                                                        
            <p className="text-xs text-slate-400 mt-2 text-right">{Math.floor(height / 30.48)}ft {Math.round((height % 30.48) / 2.54)}in</p>                  
        </div>  
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden">                                               
          <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-blue-400 via-emerald-400 via-amber-400 to-rose-500"></div>  
          <p className="text-slate-400 uppercase text-xs font-black mb-4 tracking-widest">Your Result</p>                                                                                     
          <p className={`text-xl font-bold ${color} mb-6`}>{category}</p>  
          <div className="bg-slate-50 p-6 rounded-3xl w-full">                                                   ü°</span>                                                                                         
          </div>                
      </div>                          
      <BMISEOArticle />            
  );    
                                             
  const [principal, setPrincipal] = useState(100000);                                                 
  const [rate, setRate] = useState(12);                                           
  const [compounding, setCompounding] = useState(12); // Monthly default                                                                  
  const [inflationRate, setInflationRate] = useState(8);  
  const [data, setData] = useState<any[]>([]);                                                    
                             
    let total = principal;                                    
    // Effective rate if inflation adjusted: Real Rate = (1 + Nominal) / (1 + Inflation) - 1                                                                  Ä  
    // Let's adjust the growth rate to be "Real Return" if toggle is on.                                           Ä                                                                   
                                                                
    const chartData = [];  
    for (let i = 0; i <= years; i++) {                    
        for (let m = 0; m < compounding; m++) {                                                                                   
          totalInvested += (monthly * (12 / compounding));           
      }                        
        year: `Y${i}`,                                   
        invested: Math.round(totalInvested)           
    }  
    setData(chartData);                 
      total,                                
      returns: total - totalInvested         
  };  
  useEffect(() => calculate(), [principal, monthly, rate, years, compounding, adjustInflation, inflationRate]);  
  return (                                  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">                                                                             
          <h3 className="text-2xl font-bold text-emerald-900">Investment Strategy</h3>  
          <div className="flex items-center justify-between bg-emerald-50 p-4 rounded-2xl border border-emerald-100">                   
              <span className="text-sm font-bold text-emerald-900">Adjust for Inflation‚î</span>                                                                                                            
            </div>                                                                                  
              <input type="checkbox" checked={adjustInflation} onChange={e => setAdjustInflation(e.target.checked)} className="sr-only peer" />                                                                                                                                                                                                                                                                                                                                                                                        
            </label>                  
                                       
            <div className="grid grid-cols-2 gap-4">                     
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Starting Amount</label>                                                                                                                                                                                
              </div>                     
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Monthly Contribution</label>                                                                                                                                                                            
              </div>                    
                                                      
              <div>                                                                                                                   
                <input type="number" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />                      
              <div>                                                                                                                  
                <input type="number" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl" />                      
            </div>  
            {adjustInflation && (                                                                        
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Expected Inflation %</label>                                                                                                                                                                                                                     
              </div>                
          </div>                
                                                                                                                                 
          {result && (                                                              
              <p className="text-slate-400 uppercase text-xs font-black tracking-widest mb-1">                                  Ä                                                                      
              </p>                                                                                                                          
                                                                
                <div className="px-4 py-2 bg-blue-50 rounded-xl border border-blue-100">                                                                                                   
                  <p className="text-lg font-black text-blue-900">Rs.  {result.invested.toLocaleString()}</p>                        
                <div className="px-4 py-2 bg-emerald-50 rounded-xl border border-emerald-100">                                                                                                    
                  <p className="text-lg font-black text-emerald-900">Rs.  {Math.round(result.returns).toLocaleString()}</p>                        
              </div>                    
          )}  
          <div className="h-48 w-full mt-auto relative z-10">                                                              
              <AreaChart data={data}>                        
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">                                                                                
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />                                     
                </defs>                                                                                           
                <Tooltip                                                                                                                                       
                  formatter={(v: number) => `Rs.  ${v.toLocaleString()}`}                                                    
                />                                                                                                                                   
                <Area type="monotone" dataKey="invested" stroke="#3b82f6" fillOpacity={0} strokeWidth={2} strokeDasharray="4 4" />                            
            </ResponsiveContainer>                  
        </div>              
      <InvestmentBlogContent />                                
    </div>      
};  
export const RetirementTool = () => {                                                     
  const [retireAge, setRetireAge] = useState(60);                                                             
  const [monthlyExpense, setMonthlyExpense] = useState(100000);                                                                 
  const [inflation, setInflation] = useState(10); // High inflation in PK                                                                                      
  const [postRetireReturn, setPostRetireReturn] = useState(10); // Safer debt funds  
  // 1. Calculate expense at retirement                                                              
  const yearsInRetirement = Math.max(0, lifeExpectancy - retireAge);  
  const expenseAtRetirement = monthlyExpense * Math.pow(1 + inflation / 100, yearsToRetire);  
  // 2. Calculate Corpus Needed                                                                       
  // Where r = real rate of return during retirement (return - inflation)                                              
  const realRatePostRetire = ((1 + postRetireReturn / 100) / (1 + inflation / 100)) - 1;                                                          
                                                                  
  // If Real Rate is 0 or negative (rare but possible in high inflation), handled carefully                         
  if (Math.abs(realRatePostRetire) < 0.0001) {                                                              
  } else {                                                                                                                              
  }  
  // 3. Gap Analysis                            
  const fvCurrentSavings = currentSavings * Math.pow(1 + preRetireReturn / 100, yearsToRetire);                                                                   
                                                   
  // PMT formula: P = (FV * r) / ((1+r)^n - 1) * (1+r) if start of period‚î or end‚î Let's use standard end.                                                  
  const nMonths = yearsToRetire * 12;                                              Ä                                                                      
            
    <div className="space-y-12">                                                               
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">                                                                                 
                                                    
            <div>                                                                                                           
              <input type="number" value={currentAge} onChange={e => setCurrentAge(Number(e.target.value))} className="w-full p-3 bg-slate-50 border rounded-xl font-bold" />                    
            <div>                                                                                                          
              <input type="number" value={retireAge} onChange={e => setRetireAge(Number(e.target.value))} className="w-full p-3 bg-slate-50 border rounded-xl font-bold" />                    
            <div>                                                                                                         
              <input type="number" value={lifeExpectancy} onChange={e => setLifeExpectancy(Number(e.target.value))} className="w-full p-3 bg-slate-50 border rounded-xl font-bold" />                    
          </div>  
          <div>                                                                                                                     
            <input type="number" value={monthlyExpense} onChange={e => setMonthlyExpense(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl text-lg font-bold" />                  
                 
            <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Current Savings (Optional)</label>                                                                                                                                                                            
          </div>  
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">                                                                                            
            <div className="grid grid-cols-3 gap-2">                     
                <span className="text-[10px] text-slate-500 block">Inflation</span>                                                                                                                                                                                    
              </div>                     
                <span className="text-[10px] text-slate-500 block">Pre-Ret %</span>                                                                                                                                                                                                
              </div>                     
                <span className="text-[10px] text-slate-500 block">Post-Ret %</span>                                                                                                                                                                                                  
              </div>                    
          </div>                
                                                                                                                                        
          <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-30 -mr-32 -mt-32"></div>  
          <div className="relative z-10 text-center space-y-8">                   
              <p className="text-blue-200 uppercase text-[10px] font-black tracking-widest mb-2">Total Corpus Needed</p>                                                                                                                                        
              <p className="text-[10px] text-blue-300 mt-2">                                                                                                                                                            
              </p>                    
                                                             
              <p className="text-blue-200 uppercase text-[10px] font-black tracking-widest mb-1">Gap & Required Action</p>                                                            
                <p className="text-3xl font-black text-emerald-400">Save Rs.  {Math.round(monthlySavingsNeeded).toLocaleString()} <span className="text-sm text-emerald-200 font-normal">/ month</span></p>                                                                                                                                                                                   
              </div>                    
          </div>                
      </div>                                 
      <RetirementSEOArticle />            
  );    
                                          
  const [purchasePrice, setPurchasePrice] = useState(10000000);                                                               
  const [monthlyRent, setMonthlyRent] = useState(45000);                                                        
               
  const [stampDutyRate, setStampDutyRate] = useState(3); // % (Transfer + Reg)                                                                                      
  const [commissionRate, setCommissionRate] = useState(1); // % Agent Fee (Buy + Sell)  
  const buyCosts = purchasePrice * (stampDutyRate / 100) + (purchasePrice * commissionRate / 100);                                                    
                                                               
  const totalMaintenance = annualMaintenance * holdingYears;                                                          
                                                                                                                 
                                              
  const annualizedROI = (Math.pow((totalProfit + purchasePrice) / purchasePrice, 1 / holdingYears) - 1) * 100;                                                                   
            
    <div className="space-y-12">                                                               
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">                                                                                
                                       
            <div className="grid grid-cols-2 gap-4">                     
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Purchase Price</label>                                                                                                                                                                                        
              </div>                     
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1">Expected Sale Price</label>                                                                                                                                                                                      
              </div>                    
                                                      
              <div className="col-span-1">                                                                                                         
                <input type="number" value={monthlyRent} onChange={e => setMonthlyRent(Number(e.target.value))} className="w-full p-3 bg-slate-50 border rounded-xl" />                      
              <div className="col-span-1">                                                                                                            
                <input type="number" value={holdingYears} onChange={e => setHoldingYears(Number(e.target.value))} className="w-full p-3 bg-slate-50 border rounded-xl" />                      
              <div className="col-span-1">                                                                                                           
                <input type="number" value={annualMaintenance} onChange={e => setAnnualMaintenance(Number(e.target.value))} className="w-full p-3 bg-slate-50 border rounded-xl" />                      
            </div>  
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">                                                                                                     
              <div className="grid grid-cols-2 gap-4">                       
                  <span className="text-[10px] text-slate-500 block">Stamp Duty/Tax</span>                                                                                                                                                                                              
                </div>                       
                  <span className="text-[10px] text-slate-500 block">Agent Comm.</span>                                                                                                                                                                                                
                </div>                      
            </div>                  
        </div>  
        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden">                                                                                                                      
                                                            
            <p className="text-slate-400 uppercase text-[10px] font-black tracking-widest mb-2">Total Net Profit</p>                                                                                                                       
            <div className="inline-flex gap-4 mt-2">                                                                                                                              
              <span className="text-xs text-slate-400">CAGR: <b className="text-white">{annualizedROI.toFixed(1)}%</b></span>                    
          </div>  
          <div className="relative z-10 space-y-3 bg-white/5 p-6 rounded-3xl border border-white/10">                                                            
              <span className="text-slate-400">Capital Gain (Net)</span>                                                                                                 
            </div>                                                            
              <span className="text-slate-400">Rental Income (Net)</span>                                                                                             
            </div>                                                                                          
              <span className="text-rose-300 text-xs">Total Buying Costs</span>                                                                                                            
            </div>                  
        </div>              
      <RealEstateBlogContent />                                
    </div>      
};  
export const PFTool = () => {                                                           
  const [empContribution, setEmpContribution] = useState(10); // %                                                                              
  const [interestRate, setInterestRate] = useState(12); // %                                           
                                                               
  const monthlyEmployerPF = basicSalary * (employerContribution / 100);                                                                      
                                                   
  let totalBalance = 0;                           
                                                             
                                     
    totalPrincipal += yearlyContribution;                                                                                    
  }  
  const totalInterest = totalBalance - totalPrincipal;  
  return (                                  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">                                                                             
          <h3 className="text-2xl font-bold">Provident Fund Calculation in Pakistan</h3>                                                                                                                            
          <div>                                                                                                              
            <input type="number" value={basicSalary} onChange={e => setBasicSalary(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl" />                  
          <div className="grid grid-cols-2 gap-4">                   
              <label className="text-xs font-bold text-slate-500 uppercase">Your Share %</label>                                                                                                                                                                                
            </div>                   
              <label className="text-xs font-bold text-slate-500 uppercase">Employer Share %</label>                                                                                                                                                                                          
            </div>                  
          <div className="grid grid-cols-2 gap-4">                   
              <label className="text-xs font-bold text-slate-500 uppercase">Return Rate %</label>                                                                                                                                                                          
            </div>                   
              <label className="text-xs font-bold text-slate-500 uppercase">Years</label>                                                                                                                                                            
            </div>                  
        </div>  
        <div className="bg-blue-900 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden">                                                                                                                                   
                                                            
            <p className="text-blue-200 uppercase text-xs font-black tracking-widest mb-2">Projected Maturity Amount</p>                                                                                                                       
            <p className="text-[10px] text-blue-300 mt-2">After {years} years of compounding</p>                  
                                                                                   
            <div className="flex justify-between items-center text-sm">                                                                                    
              <span className="font-bold">Rs. {Math.round(totalPrincipal).toLocaleString()}</span>                    
            <div className="flex justify-between items-center text-sm">                                                                            
              <span className="font-bold text-emerald-400">+ Rs. {Math.round(totalInterest).toLocaleString()}</span>                    
                                              
            <div className="w-full h-3 bg-blue-950 rounded-full mt-4 flex overflow-hidden">                                                                                                                         
              <div className="h-full bg-emerald-400" style={{ width: `${(totalInterest / totalBalance) * 100}%` }}></div>                    
            <div className="flex justify-between text-[10px] text-blue-300">                                                                                    
              <span>I: {Math.round((totalInterest / totalBalance) * 100)}%</span>                    
          </div>                
      </div>                         
      <PFSEOArticle />            
  );    
                                     
  const [basicSalary, setBasicSalary] = useState(50000); // Last Drawn GROSS Salary technically                                          
                                                       
  // Note: Some companies use Basic, but Law says "Wages" which is Gross. We will label it carefully.                                                     
                     
  const approvedExemption = Math.min(gratuity, 300000);                                                                                                     
            
    <div className="space-y-12">                                                               
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">                                                                   
                                                                                              
            <span className="text-2xl">í         
            <p className="text-xs text-indigo-800 leading-relaxed">                                                                                                                                                                                                
            </p>                  
                 
            <label className="text-xs font-bold text-slate-500 uppercase">Last Monthly Gross Salary</label>                    
              type="number"                                   
              onChange={e => setBasicSalary(Number(e.target.value))}                                                                                       
            />                  
          <div>                                                                                                         
            <input                             
              value={years}                                                                
              className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl"                
            <p className="text-[10px] text-slate-400 mt-2 ml-1">Note: Service of more than 6 months in the last year is counted as a full year.</p>                  
        </div>  
        <div className="bg-indigo-700 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden">                                                                                                                                    
                                                       
            <p className="text-indigo-200 uppercase text-xs font-black tracking-widest mb-4">Total Gratuity Payable</p>                                                                                                       
                                                                                           
              <p className="text-xs font-black text-indigo-300 uppercase tracking-widest mb-2">Tax Exemption Limits</p>                                                              
                <span className="opacity-80">If Approved Fund:</span>                                                                          
              </div>                                                              
                <span className="opacity-80">If Unapproved:</span>                                                                         
              </div>                    
          </div>                
      </div>                               
      <GratuitySEOArticle />            
  );    
                                                                      
  const [income, setIncome] = useState(1000); // Monthly Income                                                                   
  const [exchangeRate, setExchangeRate] = useState(278); // Default est.                                                                 Ä  
  const [bankFee, setBankFee] = useState(0); // Optional fixed fee  
  const grossPKR = currency === 'USD' ‚î income * exchangeRate : income;                          Ä                                
  const taxAmount = grossPKR * taxRate;                                                     
  const annualNet = netIncome * 12;  
  return (                                          Ä                           
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">                               
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">                                                      Ä   Åÿ å Ÿ ßŸ ≥ÿ  ßŸ ©Ÿ                               
                                       
            <div>                                                                                     Ä   Öÿ Åÿ Ü€  ¢Ÿ ØŸ å' : 'Monthly Income'}</label>                                            
                <div className="relative w-full">                          
                    type="number"                                    
                    onChange={e => setIncome(Number(e.target.value))}                                                                                             
                  />                                                      Ä                                                                                               
                </div>                         
                  onClick={() => setCurrency(currency === 'USD' ‚î 'PKR' : 'USD')}                                                                                                                       
                >                                       Ä   ¢‚†‚ô PKR' : '√ Ä Ä        
                </button>                      
            </div>  
            {currency === 'USD' && (                                                        
                <div>                                                                                             Ä   ß€ ©ÿ Ü€ Üÿ  ±€ π (PKR)' : 'Exchange Rate (PKR)'}</label>                          
                    type="number"                                          
                    onChange={e => setExchangeRate(Number(e.target.value))}                                                                           
                  />                        
                <div>                                                                                             Ä   ®€ Ü⁄  Å€ ≥ (ÿ Æÿ åÿ ±€                                     
                  <input                                   
                    value={bankFee}                                                                        
                    className="w-full p-4 bg-slate-50 border rounded-2xl"                      
                </div>                      
            )}  
            <div className="p-4 bg-emerald-50 rounded-3xl border border-emerald-100">                                                                   
                <div>                                                                              Ä        ±ÿ ≥Ÿ ±€ ¥Ÿ                               
                  <p className="text-[10px] text-emerald-600">{isUrdu ‚î '⁄ åÿ  ¢Ÿ       ©€  ≥ÿ ™⁄  ±ÿ ≥Ÿ ±⁄  ¢ÿ å Ÿ å ÿ å⁄ ≥Ÿ àÿ πÿ  Å€ ∫ÿ                                                Ä        
                </div>                         
                  onClick={() => setIsPSEB(!isPSEB)}                                                                                         Ä                                       
                >                                                                                                         Ä          Ä                                  Ä                              
                </button>                      
            </div>                  
        </div>  
        {/* Results Section */}                                                                                                                                            
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>  
          <div className="text-center relative z-10">                                                                                                  
              {isUrdu ‚î 'ÿ æ ⁄ å ÿ ßŸ µ Ÿ ß€ ßŸ Å ÿ Öÿ Ü€                                   
            </p>                                                                                                                         
            <p className="text-slate-500 text-xs">                       Ä   π€ ©ÿ  ©Ÿ àÿ å: Rs. ${Math.round(taxAmount).toLocaleString()} (${isPSEB ‚î '0.25%' : '1%'})` : `Tax Withheld: Rs. ${Math.round(taxAmount).toLocaleString()} (${isPSEB ‚î '0.25%' : '1%'})`}                  
          </div>  
          <div className="mt-10 grid grid-cols-2 gap-6 relative z-10 border-t border-white/10 pt-8">                                           
              <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">{isUrdu ‚î 'ÿ ßŸ ßŸ Å ÿ ßŸ µ ÿ Öÿ Ü€                              
              <p className="font-black text-lg">Rs. {Math.round(annualNet).toLocaleString()}</p>                    
            <div className="text-center">                                                                                          Ä   ©Ÿ  Øÿ ßÿ                                     
              <p className="font-black text-lg text-slate-300">Rs. {Math.round(grossPKR).toLocaleString()}</p>                    
          </div>                
      </div>                                 
      <FreelancerSEOArticle />            
  );    
                                          
  const [activeTab, setActiveTab] = useState<'area' | 'weight'>('area');  
  // Area State                                          
  const [marlaType, setMarlaType] = useState<225 | 272.25>(225);  
  // Weight State                                        
  const TOLA_TO_GRAM = 11.664;  
  // Conversions                                        
  const totalSqYards = totalSqFt / 9;                                  
                                           
  const totalMasha = tola * 12;  
  return (                                  
      {/* Tabs */}                                                  
        <div className="bg-white p-1 rounded-full border border-slate-100 shadow-sm inline-flex">                   
            onClick={() => setActiveTab('area')}                                                                                                        Ä                                                                              
          >                             
          </button>                   
            onClick={() => setActiveTab('weight')}                                                                                                          Ä                                                                              
          >                         
          </button>                
      </div>  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">                               Ä    
          <>                                                                                 
              <h3 className="text-2xl font-bold">Land Measurement</h3>                     
                <label className="text-xs font-bold text-slate-500 uppercase">Input Marla</label>                        
                  type="number"                                 
                  onChange={e => setMarla(Number(e.target.value))}                                                                                           
                />                      
              <div>                                                                                                                 
                <div className="grid grid-cols-2 gap-4">                           
                    onClick={() => setMarlaType(225)}                                                                                                             Ä                                                                                             
                  >                                                                                                              
                  </button>                           
                    onClick={() => setMarlaType(272.25)}                                                                                                                Ä                                                                                             
                  >                                                                                                                      
                  </button>                        
              </div>                    
                                                                                                                   
              <p className="text-slate-400 uppercase text-xs font-black mb-6 tracking-widest">Converted Area</p>  
              <div className="space-y-6">                                                                                                   
                  <span className="text-3xl font-black">{totalSqFt.toLocaleString()}</span>                                                                                                   
                </div>                                                                                                   
                  <span className="text-3xl font-black">{Math.round(totalSqYards).toLocaleString()}</span>                                                                                                          
                </div>                                                                     
                  <span className="text-3xl font-black text-emerald-400">{totalKanal.toFixed(2)}</span>                                                                                             
                </div>                      
            </div>               
        ) : (              
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">                                                                                  
              <div>                                                                                                  
                <input                                 
                  value={tola}                                                                   
                  className="w-full p-4 bg-amber-50 border border-amber-100 rounded-2xl font-bold text-xl text-amber-900 focus:ring-amber-500"                    
              </div>                                                      
                1 Tola = 11.664 Grams (Standard Pakistani Gold Rate Unit)                    
            </div>  
            <div className="bg-amber-500 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center relative overflow-hidden">                                                                                                                                       
                                                         
                <div className="flex justify-between items-center border-b border-amber-400/30 pb-4">                                                                                        
                  <span className="text-xs text-amber-100 uppercase font-bold">Grams</span>                        
                <div className="flex justify-between items-center">                                                                                        
                  <span className="text-xs text-amber-100 uppercase font-bold">Masha</span>                        
              </div>                    
          </>            
      </div>                                                       
      <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 mt-12">                                                                                                           
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">                                              
            <thead>                                                            
                <th className="text-left py-2 font-bold text-slate-400 uppercase tracking-widest text-[10px]">From Unit</th>                                                                                                                            
                <th className="text-right py-2 font-bold text-slate-400 uppercase tracking-widest text-[10px]">Value</th>                     
            </thead>                                                           
              <tr><td className="py-2">1 Murabba</td><td className="py-2">Kanal</td><td className="py-2 text-right font-bold">200 Kanal</td></tr>                                                                                                                                                  
              <tr><td className="py-2">1 Kanal</td><td className="py-2">Marla</td><td className="py-2 text-right font-bold">20 Marla</td></tr>                                                                                                                                                          
            </tbody>                    
          <div className="bg-white p-6 rounded-3xl border border-slate-100 flex flex-col justify-center">                                                                           
              "In Pakistan, land measurements vary by region. Urban areas like DHA/Bahria use 225 Sq.Ft per Marla, while rural villages use the Revenue standard of 272.25 Sq.Ft."                  
          </div>                
      </div>  
      <UnitConverterBlogContent />                                   
    </div>      
};  
export const MarkPercentageTool = () => {                                                  
  const [total, setTotal] = useState(1100);                                Ä                                
            
    <div className="space-y-12">                                                               
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">                                                                 
          <div>                                                                                                             
            <input type="number" value={obtained} onChange={e => setObtained(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl" />                  
          <div>                                                                                                          
            <input type="number" value={total} onChange={e => setTotal(Number(e.target.value))} className="w-full p-4 bg-slate-50 border rounded-2xl font-bold text-xl" />                  
        </div>  
        <div className="bg-emerald-600 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center text-center relative overflow-hidden">                                                                                                                       
          <p className="text-emerald-100 uppercase text-xs font-black mb-2 tracking-widest">Percentage Score</p>                                                                                  
          <div className="w-full bg-black/20 h-3 rounded-full overflow-hidden mb-6">                                                                                                                                     
          </div>                                                                
            You obtained {obtained} out of {total} marks.                
        </div>              
      <MarkPercentageBlogContent />            
  );    
                                            
  const [obtained, setObtained] = useState(85);                                            
  const percentage = total > 0 ‚î (obtained / total) * 100 : 0;  
  let grade = 'F';                                
  let status = 'Fail';  
  if (percentage >= 80) { grade = 'A+'; color = 'text-emerald-500'; status = 'Exceptional'; }                                                                                                 
  else if (percentage >= 60) { grade = 'B'; color = 'text-blue-500'; status = 'Good'; }                                                                                             
  else if (percentage >= 40) { grade = 'D'; color = 'text-orange-500'; status = 'Pass'; }  
  return (                                  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">                                                                                            
          <h3 className="text-2xl font-bold">Academic Performance</h3>                 
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Marks Obtained</label>                                                                                                                                                                                  
          </div>                 
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Total Marks</label>                                                                                                                                                                            
          </div>                
                                                                                                                                                                          
          <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500"></div>                                                                                                                
          <h4 className={`text-8xl font-black ${color} mb-2`}>{grade}</h4>                                                                                                   
          <div className="bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">                                                                                                      
          </div>                
      </div>                                      
    </div>      
};  
export const CGPACalculatorTool = () => {                                                                                    
                               
    setSemesters([...semesters, { id: Date.now(), sgpa: 0, credits: 0 }]);      
                                            
    if (semesters.length > 1) {                                                         
    }      
                                                                                      
    setSemesters(semesters.map(s => s.id === id ‚î { ...s, [field]: value } : s));      
                                                                          
  const totalPoints = semesters.reduce((acc, s) => acc + (s.sgpa * s.credits), 0);                                 Ä                                  
            
    <div className="space-y-12">                                                               
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">                                                                    
            <h3 className="text-2xl font-bold">Semester Details</h3>                     
              onClick={addSemester}                                                                                                                                             
            >                              
            </button>                  
                                                                                           
            {semesters.map((s, index) => (                                                                                                                                                     
                <div className="grid grid-cols-2 gap-4">                         
                    <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Semester {index + 1} GPA</label>                            
                      type="number"                                   
                      value={s.sgpa || ''}                                                                                            
                      className="w-full p-3 bg-white border rounded-xl font-bold"                                              
                    />                          
                  <div>                                                                                                                        
                    <input                                     
                      value={s.credits || ''}                                                                                               
                      className="w-full p-3 bg-white border rounded-xl font-bold"                                             
                    />                          
                </div>                                            
                  <button                                                          
                    className="absolute -top-2 -right-2 w-8 h-8 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-lg hover:bg-rose-200 transition-colors shadow-sm"                     
                    √ Ä  
                  </button>                    
              </div>                 
          </div>                
                                                                                                                                                     
          <div className="absolute left-0 bottom-0 w-full h-32 bg-gradient-to-t from-emerald-500/20 to-transparent"></div>                                                                                                                     
          <h4 className="text-8xl font-black text-emerald-400 mb-6 drop-shadow-2xl">{cgpa.toFixed(2)}</h4>                                                                                                                    
            <div>                                                                                                     
              <p className="text-2xl font-bold">{totalCredits}</p>                    
            <div>                                                                                                          
              <p className="text-2xl font-bold">{totalPoints.toFixed(1)}</p>                    
          </div>                
      </div>                                     
    </div>      
};  
export const ElectricityBillTool = ({ isUrdu }: { isUrdu: boolean }) => {                                                                         
  const [units, setUnits] = useState(250);                                                                                                                                                        
  const [fpa, setFpa] = useState(2.8);                                                
                           
  const [wattage, setWattage] = useState(1500);                                                      
  const [daysPerMonth, setDaysPerMonth] = useState(30);                                                                     
                          
  const calculateEnergyCost = (u: number, type: string) => {                                             
      if (u <= 100) return u * 10.54;                                                                 
      return (100 * 10.54) + (100 * 13.01) + ((u - 200) * 22.44);                                         
      if (u <= 100) return u * 30.10;                                                                 
      return (100 * 30.10) + (200 * 39.52) + ((u - 300) * 48.77);              
      let cost = 0;                                       
      else if (u <= 200) cost = (100 * 22.44) + ((u - 100) * 28.91);                                                                                      
      else if (u <= 400) cost = (100 * 22.44) + (100 * 28.91) + (100 * 33.10) + ((u - 300) * 37.99);                                                                                                                      
      else if (u <= 600) cost = (100 * 22.44) + (100 * 28.91) + (100 * 33.10) + (100 * 37.99) + (100 * 40.20) + ((u - 500) * 41.62);                                                                                                                                                      
      else cost = (100 * 22.44) + (100 * 28.91) + (100 * 33.10) + (100 * 37.99) + (100 * 40.20) + (100 * 41.62) + (100 * 42.76) + ((u - 700) * 47.69);                    
    }      
                                                                
  const fuelAdjustment = units * fpa;                                    
  const fcSurcharge = units * 0.43;                                               Ä          
  const totalTaxable = energyCost + fuelAdjustment + duty + fcSurcharge;                                    
  const totalBill = totalTaxable + gst + tvFee;                                      Ä                         
                                                                                                          
            
    <div className="space-y-12 animate-in fade-in duration-700">  
      {/* Tab Toggle */}                                             
        <div className="bg-white p-1 rounded-full border border-slate-100 shadow-sm inline-flex">                   
            onClick={() => setActiveTab('bill')}                                                                                                        Ä                                                                              
          >                             
          </button>                   
            onClick={() => setActiveTab('watts')}                                                                                                         Ä                                                                              
          >                            
          </button>                
      </div>  
      {activeTab === 'bill' ‚î (                                                                                                                        
                               
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">                                                        Ä   ®ÿ Ñ€  ©€  ®Ÿ  ©€  ™Ÿ µ€ Ñÿ ™' : 'WAPDA Unit Calculator'}</h3>  
            {/* DISCO Selector */}                   
              <label className="text-xs font-bold text-slate-500 uppercase mb-2 block tracking-widest">Distribution Company (DISCO)</label>                                                      
                {discos.map(d => (                           
                    key={d}                                                 
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${disco === d ‚î 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-500 hover:border-slate-400'}`}                     
                    {d}                             
                ))}                      
            </div>  
            {/* Consumer Type */}                   
              <label className="text-xs font-bold text-slate-500 uppercase mb-2 block tracking-widest">Consumer Type</label>                                                        
                <button                                                                            
                  className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border ${consumerType === 'residential-protected' ‚î 'bg-emerald-600 text-white border-emerald-600' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'}`}                   
                  Protected                           
                <button                                                                                
                  className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border ${consumerType === 'residential-non-protected' ‚î 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'}`}                   
                  Residential                           
                <button                                                                 
                  className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border ${consumerType === 'commercial' ‚î 'bg-blue-600 text-white border-blue-600' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'}`}                   
                  Commercial                           
              </div>                                                              
                <p className="text-[10px] text-emerald-600 mt-2 ml-1">Protected = under 200 units for the last 6 consecutive months.</p>                  
              {consumerType === 'commercial' && (                                                                                                                                                    
              )}                    
                                 
            <div>                                                                                                                                     
              <input                               
                value={units}                                                                  
                className="w-full p-4 bg-slate-50 border rounded-2xl font-black text-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"                  
              <p className="text-[10px] text-slate-400 mt-2 ml-1">                                                                       Ä       
                <button onClick={() => setActiveTab('watts')} className="text-amber-600 font-bold underline">Use Watts to Units tab.</button>                    
            </div>  
            {/* FPA */}                                                              
              <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Fuel Price Adjustment ‚î FPA (Rs./unit)</label>                      
                type="number"                             
                onChange={e => setFpa(Number(e.target.value))}                                                                              
                step="0.1"                  
              <p className="text-[10px] text-slate-400 mt-1 ml-1">NEPRA announces FPA monthly. Adjust to match your DISCO's current rate.</p>                    
          </div>  
          {/* Results Panel */}                                                                                                                                                 
            <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32 group-hover:opacity-30 transition-opacity"></div>  
            <div className="text-center mb-8 relative z-10">                                                                                                                          Ä              
              <h4 className="text-6xl lg:text-7xl font-black text-emerald-400 drop-shadow-lg">                                                              
              </h4>                                                                                                                              
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>                                                                                                                                                 
              </div>                    
                                                                                     
              <div className="flex justify-between items-center text-sm">                                                                                     
                <span className="font-bold">Rs. {Math.round(energyCost).toLocaleString()}</span>                      
              <div className="flex justify-between items-center text-sm">                                                                               
                <span className="font-bold">Rs. {Math.round(fuelAdjustment).toLocaleString()}</span>                      
              <div className="flex justify-between items-center text-sm">                                                                             
                <span className="font-bold">Rs. {Math.round(fcSurcharge + duty).toLocaleString()}</span>                      
              <div className="flex justify-between items-center text-sm">                                                                  
                <span className="text-rose-400 font-bold">Rs. {Math.round(gst).toLocaleString()}</span>                      
              {tvFee > 0 && (                                                                                                           
                  <span className="text-slate-400">TV License Fee</span>                                                                  
                </div>                  
            </div>                  
        </div>  
      ) : (  
        /* Watts to Units Calculator */                                                                                                                        
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">                                                                               
            <p className="text-sm text-slate-500">Formula: <strong>Units = (Watts x Hours/Day x Days) / 1000</strong></p>  
            <div>                                                                                                                      
              <input                               
                value={wattage}                                                                    
                className="w-full p-4 bg-amber-50 border border-amber-100 rounded-2xl font-black text-2xl text-amber-900 focus:ring-2 focus:ring-amber-400 outline-none"                                                
              />                    
                                                      
              <div>                                                                                                                
                <input                                 
                  value={hoursPerDay}                                                                          
                  className="w-full p-4 bg-slate-50 border rounded-2xl font-bold"                            
                />                      
              <div>                                                                                                                 
                <input                                 
                  value={daysPerMonth}                                                                           
                  className="w-full p-4 bg-slate-50 border rounded-2xl font-bold"                            
                />                      
            </div>  
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">                                                                                                Ä                      
              <div className="flex flex-wrap gap-2">                    
                  { name: '1.5T Inverter AC', w: 1200 },                                                           
                  { name: 'Small Fridge', w: 150 },                                                  
                  { name: 'Water Motor', w: 750 },                                              
                ].map(a => (                           
                    key={a.name}                                                     
                    className="px-3 py-1 bg-white border border-slate-200 rounded-xl text-xs font-medium hover:border-amber-400 hover:bg-amber-50 transition-all"                     
                    {a.name} ({a.w}W)                             
                ))}                      
            </div>                  
                                
          <div className="bg-amber-500 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden">                                                                                                                                     
                                                              
              <p className="text-amber-100 uppercase text-[10px] font-black tracking-widest mb-2">Monthly Units Consumed</p>                                                                                               
              <p className="text-amber-200 text-sm mt-2">kWh / Units per Month</p>                    
                                                                                         
              <div className="flex justify-between text-sm">                                                                       
                <span className="font-bold">({wattage}W x {hoursPerDay}h x {daysPerMonth}d) / 1000</span>                      
              <div className="flex justify-between text-sm">                                                                               
                <span className="font-bold">Rs. 22.44 ‚ì Rs. 47.69</span>                      
              <div className="flex justify-between text-sm pt-3 border-t border-amber-400/30">                                                                                            
                <span className="font-black text-xl">Rs. {Math.round(calculateEnergyCost(wattsUnits, 'residential-non-protected') * 1.25).toLocaleString()}</span>                      
            </div>  
            <button                                                                                           
              className="relative z-10 mt-6 w-full py-3 bg-white/20 hover:bg-white/30 border border-white/30 rounded-2xl text-sm font-bold transition-all"               
              Calculate Full Bill for {Math.round(wattsUnits)} Units                       
          </div>                
      )}  
      <ElectricityBillBlogContent />            
  );    
