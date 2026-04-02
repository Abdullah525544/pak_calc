  
import React, { useState } from 'react';                                          
import { CALCULATORS } from '../constants';                                                  
                                 
  onSelect: (calc: Calculator) => void;                    
}  
const ToolsDirectory: React.FC<ToolsDirectoryProps> = ({ onSelect, isUrdu }) => {                                                                                  
  const [searchQuery, setSearchQuery] = useState('');  
  const filtered = CALCULATORS.filter(c => {                                                                                   
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||                                           
      c.description.toLowerCase().includes(searchQuery.toLowerCase());                                         
  });  
  return (                                                             
      <div className="text-center mb-16 space-y-4">                                                                                 Ä                  
          {isUrdu ‚î 'ÿ Öÿ Ö Ÿ ßŸ åÿ ™€  πŸ Ñÿ                            
        </h2>                                                                  
          {isUrdu             Ä   æÿ ©ÿ ™ÿ Ü ⁄ í Ÿ å€  ®Ÿ ßÿ í ⁄ ¶€  ÅŸ ßÿ í ÿ Öÿ Ö ÿ ≥ÿ ® ⁄ ™ÿ ® ⁄ í Ÿ àŸ ≤ ⁄ å Ÿ ©Ÿ Ñ Ÿ Åÿ ≥ÿ   
            : 'Explore our complete suite of calculators designed specifically for the Pakistani market.'}              
      </div>  
      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">                                                               
          {['All', ...Object.values(Category)].map((cat) => (                     
              key={cat}                                                             
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${activeCategory === cat                 Ä                                                                                 
                : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-500'                     
            >                     
            </button>               
        </div>                                                   
          <input                         
            placeholder={isUrdu ‚î 'Ÿ àŸ ≤ ÿ Ñÿ ¥ ⁄ ±€ ∫...' : 'Search tools...'}                                 
            onChange={(e) => setSearchQuery(e.target.value)}                                                                                                                                                             
          />                                                                                                                                  
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />                  
        </div>              
                                                                                             
        {filtered.map((calc) => (                 
            key={calc.id}                                
            className="group bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col h-full block"             
            <div className="w-12 h-12 bg-slate-50 group-hover:bg-emerald-600 group-hover:text-white rounded-xl flex items-center justify-center text-2xl mb-4 transition-colors">                           
            </div>                                                                                                                           Ä                  
              {isUrdu ‚î calc.nameUrdu : calc.name}                   
            <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">                                  
            </p>                                                                         
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-emerald-500 transition-colors">                                 
              </span>                                                                                                                                                                                                                         
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">                                                                                                          
                </svg>                      
            </div>                   
        ))}              
                                   
        <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">                                                                                                
          <button onClick={() => { setActiveCategory('All'); setSearchQuery('') }} className="mt-4 text-emerald-600 font-bold underline">Reset Filters</button>                
      )}            
  );    
                                
