import React from 'react';                                          
                  
    id: string;                   
    icon: string;   
                                       
    'income-tax': { id: 'income-tax', name: 'Income Tax', icon: 'ğ’      
    'zakat': { id: 'zakat', name: 'Zakat Calculator', icon: 'ğŒ      
    'loan-emi': { id: 'loan-emi', name: 'Loan EMI', icon: 'ğ      
    'profit-margin': { id: 'profit-margin', name: 'Profit Margin', icon: 'ğ“      
    'bmi': { id: 'bmi', name: 'BMI Calculator', icon: 'ğ € ™ ¸      
    'investment-return': { id: 'investment-return', name: 'Investment Return', icon: 'ğ“      
    'retirement-plan': { id: 'retirement-plan', name: 'Retirement Plan', icon: 'ğ‘      
    'real-estate-roi': { id: 'real-estate-roi', name: 'Real Estate ROI', icon: 'ğ      
    'provident-fund': { id: 'provident-fund', name: 'Provident Fund', icon: 'ğ› ¸      
    'gratuity': { id: 'gratuity', name: 'Gratuity', icon: 'ğ      
    'freelancer-tax': { id: 'freelancer-tax', name: 'Freelancer Tax', icon: 'ğ’      
    'unit-converter': { id: 'unit-converter', name: 'Unit Converter', icon: 'ğ”      
};  
interface RelatedToolsProps {                        
}  
export const RelatedTools: React.FC<RelatedToolsProps> = ({ toolIds }) => {              
        <div className="mt-16 border-t border-slate-100 pt-12">                                                                                                        
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">                                      
                    const tool = TOOLS[id];                                             
                    return (                               
                            key={id}                                           
                            className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center group"                           
                            <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">{tool.icon}</span>                                                                                                                                      
                        </Link>                        
                })}                    
        </div>        
}; 