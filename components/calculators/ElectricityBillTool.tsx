import React, { useState, useEffect } from 'react';
import {
  NEPRA_FY_2025_BASE_SLABS, GST_RATE_2026,
  ELECTRICITY_DUTY_RATE, FC_SURCHARGE_RATE, TV_FEE
} from '../../constants';
import * as InfoPages from '../InfoPages';

export default function ElectricityBillTool({ isUrdu }: { isUrdu: boolean }) {
  const [activeTab, setActiveTab] = useState<'bill' | 'watts'>('bill');
  const [units, setUnits] = useState(250);
  
  const [statusMode, setStatusMode] = useState<'know' | 'determine'>('know');
  const [consumerType, setConsumerType] = useState<'residential-non-protected' | 'residential-protected' | 'commercial'>('residential-non-protected');
  const [history, setHistory] = useState<number[]>([150, 160, 180, 190, 200, 150]);
  
  const [fpa, setFpa] = useState<number | ''>('');
  const [qta, setQta] = useState<number | ''>('');
  const [disco, setDisco] = useState('LESCO');

  // Watts to Units state
  const [wattage, setWattage] = useState(1500);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [daysPerMonth, setDaysPerMonth] = useState(30);
  const wattsUnits = (wattage * hoursPerDay * daysPerMonth) / 1000;

  // Determine protected status dynamically if "Help me determine" is selected
  useEffect(() => {
    if (statusMode === 'determine') {
      const isProtected = history.every(u => u <= 200);
      setConsumerType(isProtected ? 'residential-protected' : 'residential-non-protected');
    }
  }, [history, statusMode]);

  const handleHistoryChange = (index: number, value: number) => {
    const newHistory = [...history];
    newHistory[index] = value;
    setHistory(newHistory);
  };

  // NEPRA Slabs FY 2024-25 logic
  const calculateEnergyCost = (u: number, type: string) => {
    let slabs = NEPRA_FY_2025_BASE_SLABS.nonProtected;
    if (type === 'residential-protected') slabs = NEPRA_FY_2025_BASE_SLABS.protected;
    else if (type === 'commercial') slabs = NEPRA_FY_2025_BASE_SLABS.commercial;

    let cost = 0;
    let previousLimit = 0;

    for (const slab of slabs) {
      if (u > previousLimit) {
        const unitsInSlab = Math.min(u - previousLimit, slab.limit - previousLimit);
        cost += unitsInSlab * slab.rate;
        previousLimit = slab.limit;
      } else {
        break;
      }
    }
    return cost;
  };

  const energyCost = calculateEnergyCost(units, consumerType);
  const fuelAdjustment = units * (Number(fpa) || 0);
  const qtaAdjustment = units * (Number(qta) || 0);
  const duty = energyCost * ELECTRICITY_DUTY_RATE;
  const fcSurcharge = units * FC_SURCHARGE_RATE;
  const tvFee = consumerType === 'commercial' ? 0 : TV_FEE;
  
  const fixedCharges = consumerType === 'commercial' ? 500 : (units > 200 ? 500 : 200); 

  const totalTaxable = energyCost + fuelAdjustment + qtaAdjustment + duty + fcSurcharge + fixedCharges;
  const gst = totalTaxable * GST_RATE_2026;
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
            <h3 className="text-2xl font-bold">{isUrdu ? 'تخمینہ شدہ بجلی کا بل (FY 2024-25)' : 'Estimated Electricity Bill (FY 2024-25 Base Tariff)'}</h3>

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
              <p className="text-[10px] text-slate-400 mt-2 ml-1">
                Base tariff is uniform across EX-WAPDA DISCOs for FY 2024-25. K-Electric may have minor variations in adjustments/surcharges.
              </p>
            </div>

            {/* Consumer Type */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <label className="text-xs font-bold text-slate-500 uppercase mb-3 block tracking-widest">Consumer Status</label>
              
              <div className="flex bg-white rounded-xl border border-slate-200 p-1 mb-4">
                <button
                  onClick={() => setStatusMode('know')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${statusMode === 'know' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                  I know my status
                </button>
                <button
                  onClick={() => setStatusMode('determine')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${statusMode === 'determine' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                  Help me determine
                </button>
              </div>

              {statusMode === 'know' ? (
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setConsumerType('residential-protected')}
                    className={`py-2 px-2 rounded-xl text-[10px] font-bold transition-all border ${consumerType === 'residential-protected' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'}`}
                  >
                    Protected
                  </button>
                  <button
                    onClick={() => setConsumerType('residential-non-protected')}
                    className={`py-2 px-2 rounded-xl text-[10px] font-bold transition-all border ${consumerType === 'residential-non-protected' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'}`}
                  >
                    Non-Protected
                  </button>
                  <button
                    onClick={() => setConsumerType('commercial')}
                    className={`py-2 px-2 rounded-xl text-[10px] font-bold transition-all border ${consumerType === 'commercial' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'}`}
                  >
                    Commercial
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs text-slate-600">Enter your electricity consumption (in units) for the <strong>previous 6 months</strong>:</p>
                  <div className="grid grid-cols-3 gap-2">
                    {[0,1,2,3,4,5].map(i => (
                      <input
                        key={i}
                        type="number"
                        placeholder={`M-${i+1}`}
                        value={history[i]}
                        onChange={e => handleHistoryChange(i, Number(e.target.value))}
                        className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm text-center focus:ring-2 focus:ring-emerald-500 outline-none"
                      />
                    ))}
                  </div>
                  <div className={`p-3 rounded-lg text-xs font-bold flex items-center ${consumerType === 'residential-protected' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}`}>
                    <span className="mr-2">{consumerType === 'residential-protected' ? '✅' : '⚠️'}</span>
                    Status Determined: {consumerType === 'residential-protected' ? 'Protected' : 'Non-Protected'}
                  </div>
                  <p className="text-[10px] text-slate-400">Rule: To be "Protected", consumption must be 200 kWh or less consistently for the past 6 months (NEPRA guidelines).</p>
                </div>
              )}
            </div>

            {/* Units Input */}
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase mb-2 block tracking-widest">Current Month Units (kWh)</label>
              <input
                type="number"
                value={units}
                onChange={e => setUnits(Number(e.target.value))}
                className="w-full p-4 bg-slate-50 border rounded-2xl font-black text-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              />
            </div>

            {/* FPA & QTA */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">FPA (Rs./unit) <span className="text-[10px] font-normal lowercase">(Optional)</span></label>
                <input
                  type="number"
                  placeholder="e.g. 2.50"
                  value={fpa}
                  onChange={e => setFpa(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full p-3 bg-slate-50 border rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  step="0.01"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">QTA (Rs./unit) <span className="text-[10px] font-normal lowercase">(Optional)</span></label>
                <input
                  type="number"
                  placeholder="e.g. 1.75"
                  value={qta}
                  onChange={e => setQta(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full p-3 bg-slate-50 border rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  step="0.01"
                />
              </div>
            </div>
            <p className="text-[10px] text-slate-400 mt-1 ml-1">FPA (Fuel Price Adjustment) and QTA (Quarterly Tariff Adjustment) fluctuate. Check your current bill or NEPRA notifications for the exact rate for this month.</p>
          </div>

          {/* Results Panel */}
          <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32 group-hover:opacity-30 transition-opacity"></div>

            <div className="text-center mb-8 relative z-10">
              <p className="text-slate-400 uppercase text-[10px] font-black tracking-widest mb-1">Estimated Total Payable</p>
              <h4 className="text-6xl lg:text-7xl font-black text-emerald-400 drop-shadow-lg">
                Rs. {Math.round(totalBill).toLocaleString()}
              </h4>
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-bold text-slate-400">Effective rate: Rs. {perUnitEffective.toFixed(2)} / unit (all-in)</span>
              </div>
            </div>

            {/* Bill Breakdown */}
            <div className="space-y-3 pt-6 border-t border-white/10 relative z-10">
              <p className="text-slate-500 uppercase text-[10px] font-black tracking-widest mb-4">Detailed Breakdown</p>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300">Base Energy Charge ({units} units)</span>
                <span className="font-bold">Rs. {Math.round(energyCost).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300">Fixed Charges</span>
                <span className="font-bold">Rs. {Math.round(fixedCharges).toLocaleString()}</span>
              </div>
              
              {Number(fpa) > 0 && (
                <div className="flex justify-between items-center text-sm">
                  <span className="text-amber-300">User FPA ({fpa} Rs/unit)</span>
                  <span className="font-bold text-amber-300">Rs. {Math.round(fuelAdjustment).toLocaleString()}</span>
                </div>
              )}
              {Number(qta) > 0 && (
                <div className="flex justify-between items-center text-sm">
                  <span className="text-amber-300">User QTA ({qta} Rs/unit)</span>
                  <span className="font-bold text-amber-300">Rs. {Math.round(qtaAdjustment).toLocaleString()}</span>
                </div>
              )}

              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300">Electricity Duty (1.5%)</span>
                <span className="font-bold">Rs. {Math.round(duty).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300">FC Surcharge (Rs. 0.43/unit)</span>
                <span className="font-bold">Rs. {Math.round(fcSurcharge).toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between items-center text-sm pt-2 border-t border-white/5">
                <span className="text-rose-400">GST (18%)</span>
                <span className="text-rose-400 font-bold">Rs. {Math.round(gst).toLocaleString()}</span>
              </div>
              
              {tvFee > 0 && (
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300">PTV Fee</span>
                  <span className="font-bold">Rs. {tvFee}</span>
                </div>
              )}
            </div>

            {/* Methodology Source */}
            <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl relative z-10">
              <h5 className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1">Methodology & Sources</h5>
              <ul className="text-[10px] text-slate-400 space-y-1 list-disc list-inside">
                <li>Base Tariff: FY 2024-25 Uniform Base Tariff (Effective July 1, 2024).</li>
                <li>Taxes: Subject to Finance Act 2024 provisions.</li>
                <li>FPA/QTA: User estimated. Not legally binding.</li>
              </ul>
            </div>
          </div>
        </div>

      ) : (

        /* Watts to Units Calculator */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
            <h3 className="text-2xl font-bold">Watts to Units Calculator</h3>
            <p className="text-sm text-slate-500">Formula: <strong>Units = (Watts × Hours/Day × Days) / 1000</strong></p>

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
                  className="w-full p-3 bg-slate-50 border rounded-xl text-lg font-bold focus:ring-2 focus:ring-amber-400 outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Days Per Month</label>
                <input
                  type="number"
                  value={daysPerMonth}
                  onChange={e => setDaysPerMonth(Number(e.target.value))}
                  className="w-full p-3 bg-slate-50 border rounded-xl text-lg font-bold focus:ring-2 focus:ring-amber-400 outline-none"
                />
              </div>
            </div>
            
            <button
              onClick={() => {
                setUnits(Math.ceil(wattsUnits));
                setActiveTab('bill');
              }}
              className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-amber-500/25"
            >
              Use {Math.ceil(wattsUnits)} units in Bill Calculator
            </button>
          </div>

          <div className="bg-amber-500 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center text-center relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            <p className="text-amber-100 uppercase text-xs font-black mb-2 tracking-widest">Monthly Consumption</p>
            <h4 className="text-7xl font-black mb-4">{Math.ceil(wattsUnits)} <span className="text-2xl">units</span></h4>
            <div className="w-full bg-black/10 h-3 rounded-full overflow-hidden mb-6">
              <div className="bg-white h-full transition-all duration-1000" style={{ width: `${Math.min(100, (wattsUnits/1000)*100)}%` }}></div>
            </div>
            <p className="text-amber-100 text-sm font-medium">
              A {wattage}W appliance running {hoursPerDay} hours/day consumes {Math.ceil(wattsUnits)} units a month.
            </p>
          </div>
        </div>
      )}
      
      <InfoPages.ElectricityBillBlogContent />
    </div>
  );
}
