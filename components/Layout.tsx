  
import React, { useState } from 'react';                                                       
import { View } from '../types';  
interface LayoutProps {                              
  isUrdu: boolean;                                      
  onNavigate: (view: View) => void;   
                                                                                          
  const [isMenuOpen, setIsMenuOpen] = useState(false);                                   
                                                        
                                                    
    navigate(path);                           
  };  
  return (                                                          €                    
      <header className="glass sticky top-0 z-50 border-b border-slate-200">                                                                                                                 
          {/* Logo Section */}                 
            to="/"                                                                                                
            onClick={() => setIsMenuOpen(false)}             
            <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-700 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">                                                                                    
            </div>                   
              <h1 className="text-lg md:text-xl font-extrabold text-slate-900 tracking-tight">PakCalc</h1>                                                                                                                                                                  
            </div>                   
                                      
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-600">                                                                                           
            <Link to="/all-tools" className="hover:text-emerald-600 transition-colors">All Tools</Link>                                                                                                     
            <Link to="/zakat-info" className="hover:text-emerald-600 transition-colors">Zakat Info</Link>                  
                                 
          <div className="flex items-center space-x-2 md:space-x-4">                     
              onClick={() => setIsUrdu(!isUrdu)}                                                                                                                                                                                       
            >                       €               §Ø ¯Ù    
            </button>  
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-bold shadow-md hover:shadow-emerald-200 transition-all flex items-center gap-2">                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
              <span className="hidden sm:inline">Go Pro</span>                       
                                        
            <button                                    
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"                                        
            >                                                                                               
                {isMenuOpen â” (                                                                                                                  
                ) : (                                                                                                                     
                )}                      
            </button>                  
        </div>  
        {/* Mobile Navigation Dropdown */}                                                                                                         €                                                                
          <div className="px-4 pt-2 pb-6 space-y-2">                
              { path: '/', label: 'Home', labelUrdu: 'Û ˆÙ      
              { path: '/all-tools', label: 'All Tools', labelUrdu: 'Ø …Ø … Ù ˆÙ ²' },                                                                 ¹Û ©Ø  ³Ù ŒØ ³' },                                                                       ²Ú ˆÙ ƒ Ù ¹Ù ˆÙ §Ø      
            ].map((item) => (                       
                key={item.path}                                                                 
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors hover:bg-emerald-50 hover:text-emerald-700 ${isUrdu â” 'urdu' : ''}`}                 
                {isUrdu â” item.labelUrdu : item.label}                         
            ))}                  
        </div>                 
                                    
        {children}               
                                                                     
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">                                                                          
            <div className="col-span-1 md:col-span-2 space-y-6">                                                             
                <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center">                                                                            
                </div>                                                                    
              </div>                                                                       
                Pakistan's most trusted financial utility platform. Making complex calculations simple for taxpayers, businesses, and everyday users.                    
            </div>                   
              <h4 className="font-bold text-slate-900 mb-4">Calculators</h4>                                                                 
                <li><Link to="/all-tools" className="hover:text-emerald-600">Browse All Tools</Link></li>                                                                                                     
                <li><Link to="/zakat-info" className="hover:text-emerald-600">Zakat & Nisab</Link></li>                                                                                                      
              </ul>                    
            <div>                                                                                  
              <ul className="space-y-2 text-slate-500 text-sm">                                                                                                       
                <li><Link to="/terms" className="hover:text-emerald-600">Terms of Service</Link></li>                                                                                                   
              </ul>                    
          </div>                                                                                                                         
            <p className="text-slate-400 text-sm">Â                                                          
          </div>                
      </footer>            
  );    
                        
