  
import React, { useState } from 'react';                                          
import { CALCULATORS } from '../constants';                                                        
                                 
  onSelect: (calc: Calculator) => void;                                     
  isUrdu: boolean;   
                                                                                               
  const [searchTerm, setSearchTerm] = useState('');                                               
                                                       
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||                                        
    c.description.toLowerCase().includes(searchTerm.toLowerCase())      
            
    <div className="pb-20 space-y-32">                            
      <div className="relative pt-12 md:pt-24 pb-16 md:pb-32 overflow-hidden">                                                                                            
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 animate-pulse">                                                                           
            Updated for FBR 2025-26                  
          <h1 className={`text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-tight ${isUrdu ‚î 'urdu' : ''}`}>                     Ä   æÿ ©ÿ ™ÿ Ü ⁄ í Ÿ ßŸ å Ÿ åÿ ÑŸ ∫ ⁄ ß ' : 'Smart Finance for '}                                                        Ä   ¨ÿ åÿ  ≠Ÿ                               
          </h1>                                                                                                     
            {isUrdu               Ä   ßŸ ©Ÿ  π€ ©ÿ å ÿ ©Ÿ ∞€  ßŸ ± ⁄ ßÿ àÿ ßÿ å ÿ ≥ÿ ® ⁄ ™ÿ ® ⁄ í Ÿ å€  ¨ÿ åÿ  ßŸ ± ÿ ≥ÿ Ü ÿ ±€ Ü Ÿ àŸ ≤'                                                                                                                                                           
          </p>  
          <div className="max-w-xl mx-auto relative group">                                                                                                    
              <svg className="h-6 w-6 text-slate-400 group-focus-within:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">                                                                                                                                       
              </svg>                    
            <input                           
              placeholder={isUrdu ‚î 'Ÿ àŸ  ™Ÿ ßÿ  ©ÿ å⁄   π€ ©ÿ å ÿ ©Ÿ ∞€ å Ÿ ±ÿ                                                    
              value={searchTerm}                                                               
              className="block w-full pl-14 pr-6 py-5 bg-white border border-slate-200 rounded-2xl shadow-2xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 outline-none transition-all text-lg placeholder-slate-400 font-medium"                
          </div>                
                                              
        <div className="absolute top-20 left-10 w-24 h-24 bg-emerald-200 rounded-full blur-3xl opacity-30 animate-float"></div>                                                                                                                                                                     
      </div>  
      {/* Grid Content */}                                                                           
        {categories.map(cat => {                                                                                 
          if (catCalcs.length === 0) return null;  
          return (                                                                                                      
              <div className="flex items-center gap-4">                                                                                   
                <div className="h-px flex-grow bg-slate-200"></div>                                                                                                                             
              </div>  
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">                                         
                  <Link                                   
                    to={`/${calc.id}`}                                                                                                                                                                                                                                                                                             
                  >                                                                                                                                                                                       
                                                                          
                      <div className="icon-box w-16 h-16 bg-slate-50 group-hover:bg-emerald-600 rounded-2xl flex items-center justify-center text-4xl mb-6 transition-all duration-500 shadow-inner group-hover:shadow-emerald-200">                                     
                      </div>                                                                                                                                      Ä                  
                        {isUrdu ‚î calc.nameUrdu : calc.name}                             
                      <p className="text-slate-500 text-sm leading-relaxed mb-8">                                            
                      </p>                                                                                                                                                     
                        <span>{isUrdu ‚î 'ÿ ®⁄ å ÿ ≥ÿ πŸ ßŸ  ©ÿ å⁄                          
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">                                                                                                                              
                        </svg>                              
                    </div>                           
                ))}                      
            </section>              
        })}  
        {filteredCalculators.length === 0 && (                                                                                                          
            <div className="text-6xl mb-4 text-slate-300">No results</div>                                                                                                     
            <p className="text-slate-500 mt-2">Try searching for generic terms like "Tax" or "Business".</p>                     
              onClick={() => setSearchTerm('')}                                                                           
            >                            
            </button>                  
        )}              
                                                         
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">                                                                               
          <div className="space-y-10">                                                                                                                                                                                           
              Precision Redefined                    
            <h3 className={`text-5xl md:text-6xl font-black text-slate-900 leading-tight ${isUrdu ‚î 'urdu' : ''}`}>                       Ä   ßÿ ™Ÿ ßÿ  ¨Ÿ  ®ÿ ≥Ÿ ∫ ÿ í Ÿ ßÿ Ö € í' : 'Precision Built for Pakistan'}                   
            <p className="text-slate-500 text-lg leading-relaxed max-w-xl">                       
                ‚î 'Ÿ ß⁄  ©€ Ñ⁄  ßŸ ©Ÿ  π€ ©ÿ å ÿ ©Ÿ ∞€  ßŸ ± ⁄ ßÿ àÿ ßÿ å ÿ ≥ÿ ® ⁄ ™ÿ ® ⁄ í Ÿ å€  ¨ÿ åÿ  ™ÿ åŸ  ßŸ ± ÿ ±ÿ ™ ÿ ±€ Ü Ÿ Ñ€ π Ÿ ßÿ Ö € í€   
                : 'More than just a calculator, PakCalc is a financial companion. We integrate the latest SBP policies and FBR directives directly into our logic to give you results you can take to the bank.'}                  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">                  
                { icon: 'Shield', t: 'Bank-Grade Accuracy', d: 'Validated calculations.' },                                                                                             
                { icon: 'Values', t: 'Shariah Compliant', d: 'Fatwa-verified logic.' },                                                                                    
              ].map((feat, i) => (                                                            
                  <div className="w-12 h-12 bg-white shadow-lg rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">                                 
                  </div>                         
                    <h5 className="font-bold text-slate-900 text-sm">{feat.t}</h5>                                                                             
                  </div>                        
              ))}                    
          </div>  
          <div className="relative">                                                                                                 
            <div className="relative grid grid-cols-2 gap-6">                                                 
                <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-50 flex flex-col items-center text-center">                                                                                          
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Active Users</span>                        
                <div className="bg-slate-900 p-8 rounded-[3rem] shadow-2xl text-white flex flex-col items-center text-center">                                                                                          
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Accuracy</span>                        
              </div>                                           
                <div className="bg-emerald-600 p-8 rounded-[3rem] shadow-2xl text-white flex flex-col items-center text-center">                                                                          
                  <span className="text-[10px] uppercase font-bold text-emerald-100 tracking-widest">Forever</span>                        
                <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-50 flex flex-col items-center text-center">                                                                                       
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Integrated</span>                        
              </div>                    
          </div>                
      </section>  
      {/* RE-DESIGNED SECTION 2: How It Works & Final Get Started */}                                                                                                                   
        <div className="max-w-7xl mx-auto">                                                         
            <h3 className={`text-4xl md:text-5xl font-black text-slate-900 ${isUrdu ‚î 'urdu' : ''}`}>                       Ä   å€  ©€ ≥€  ©ÿ Ö ⁄ ±ÿ ß € íÿ                           
            </h3>                                                                                                        
          </div>  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">                
              { step: '01', title: 'Choose Your Goal', desc: 'Select from our wide range of specific calculators tailored for Pakistan.', color: 'emerald' },                                                                                                                                                             
              { step: '03', title: 'Insights & AI Advice', desc: 'Get instant reports with smart AI suggestions for your financial growth.', color: 'amber' }                                  
              <div key={i} className="relative group">                                                                                                                                                        
                  <span className={`text-6xl font-black text-slate-50 absolute -top-6 -left-2 z-0 group-hover:text-${item.color}-50 transition-colors`}>                                 
                  </span>                                                             
                    <div className={`w-14 h-14 bg-${item.color}-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}>                                Ä                   Ä                     
                    </div>                                                                                         
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>                          
                </div>                      
            ))}                  
                                                         
          <div className="relative group overflow-hidden bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center shadow-[0_50px_100px_-20px_rgba(6,95,70,0.3)]">                                                   
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.2),transparent_70%)]"></div>                                                                                                                      
                                                                          
              <div className="flex justify-center -space-x-4 mb-6">                                             
                  <div key={n} className="w-14 h-14 rounded-full border-4 border-slate-900 bg-slate-800 overflow-hidden ring-2 ring-emerald-500/20">                                                         Ä                               
                  </div>                     
                <div className="w-14 h-14 rounded-full border-4 border-slate-900 bg-emerald-600 flex items-center justify-center text-xs font-bold text-white ring-2 ring-emerald-500/20">                        
                </div>                      
                                                                                                 Ä                  
                {isUrdu ‚î 'ÿ ¨ € å ÿ æŸ í Ÿ ßŸ å ÿ Åÿ  ©ÿ  ¢ÿ ßÿ  ©ÿ å⁄                                          
              </h3>  
              <p className="text-slate-400 text-lg md:text-xl font-medium">                         
                  ‚î '€ ≤ÿ ±Ÿ ∫ Ÿ ß⁄ ≥ÿ ßŸ åŸ ∫ ⁄ å ÿ ±ÿ  ¢Ÿ  ®⁄ å ÿ æŸ å ÿ Üÿ  ßŸ ± Ÿ å⁄ ≥ ⁄ à ÿ Åÿ ± ÿ Üÿ ¶€ ∫€   
                  : 'Join over 50,000 monthly active users who trust PakCalc to navigate their financial landscape with confidence.'}                    
                                                                                     
                <button                                                                                     
                  className="bg-emerald-500 text-slate-950 px-12 py-5 rounded-3xl font-black text-xl hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/20"                   
                  {isUrdu ‚î 'ÿ ®⁄ å ÿ ±Ÿ π ⁄ ±€ ∫' : 'Get Started Now'}                           
                <button                                                           
                  className="bg-white/5 text-white border border-white/10 px-12 py-5 rounded-3xl font-bold text-xl hover:bg-white/10 transition-all active:scale-95 backdrop-blur-sm"                   
                  {isUrdu ‚î 'ÿ Öÿ Ö Ÿ àŸ ≤ ÿ å⁄ æ€ ∫' : 'View All Tools'}                           
              </div>  
              <div className="pt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 text-slate-500 text-sm font-bold uppercase tracking-widest">                                                                                                                                          
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span> No Signup</span>                                                                                                                                              
              </div>                    
          </div>                
      </section>            
  );    
                                
