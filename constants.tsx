                            
import { Category, Calculator } from './types';  
export const CALCULATORS: Calculator[] = [     
    id: 'income-tax',                                    
    nameUrdu: 'ÿ Ü⁄ Ö Ÿ å⁄ ≥ ⁄ åŸ ©Ÿ Ñ€ πÿ    
    description: 'Calculate FBR tax for 2025-2026 based on latest slabs.',                                      
    icon: 'ì   
  },     
    id: 'zakat',                                                                      
    nameUrdu: 'ÿ ©Ÿ ∞€  ©€ Ñ⁄ àŸ åŸ ±',                                                                                  
    category: Category.PAK_SPECIFIC,            üå'      
  {                           
    name: 'Freelancer Income',                Åÿ å Ÿ ßŸ ≥ÿ  ßŸ ©Ÿ    
    description: 'Calculate net income after bank charges and FBR export tax.',                                  
    icon: 'í   
  },     
    id: 'investment-return',                                                       
    nameUrdu: 'ÿ ±Ÿ ß€ Å ⁄ ßÿ å ⁄ ß Ÿ Üÿ Åÿ    
    description: 'Predict growth of your savings with compounding interest.',                                   
    icon: 'í   
  },     
    id: 'retirement-plan',                                 
    nameUrdu: 'ÿ åŸ ßÿ ±Ÿ ÜŸ  ©€  ÖŸ µŸ ®€  ®Ÿ Ø€    
    description: 'Calculate how much you need to save for a comfortable retirement.',                                   
    icon: 'è ∏   
  },     
    id: 'real-estate-roi',                              
    nameUrdu: 'ÿ åÿ Ñ ÿ ≥Ÿ åŸ  ÖŸ ßŸ π',                                                                                     
    category: Category.FINANCIAL,            ü†'      
  {                           
    name: 'Provident Fund (PF)',                æÿ àŸ å⁄ ÜŸ  ÅŸ à',                                                                                   
    category: Category.PAK_SPECIFIC,            ü¶'      
  {                     
    name: 'Gratuity Calculator Pakistan (As Per Official Labor Laws 2025)',                Øÿ åÿ à€ π€  ©€ Ñ⁄ àŸ åŸ ±',                                                                                     
    category: Category.PAK_SPECIFIC,            üÅ'      
  {                     
    name: 'Loan EMI Calculator',                Çÿ ∂ ⁄ å Ÿ ≥ÿ  ©ÿ  ©€ Ñ⁄ àŸ åŸ ±',                                                                               
    category: Category.FINANCIAL,            üó'      
  {                          
    name: 'Profit Margin',                ÖŸ ßŸ π ⁄ ß Ÿ ßÿ ¨Ÿ    
    description: 'Find net profit and margin percentages for your business.',                                  
    icon: 'ì   
  },     
    id: 'unit-converter',                                                                  
    nameUrdu: '€ àŸ π ⁄ ÜŸ ±Ÿ ±',                                                                     
    category: Category.EVERYDAY,            üè'      
  {                
    name: 'BMI Calculator',                ®€  ß€ Ö ÿ ¶€  ©€ Ñ⁄ àŸ åŸ ±',                                                                            
    category: Category.EVERYDAY,            ö ∏   
  },     
    id: 'cgpa-calc',                              
    nameUrdu: 'ÿ å ÿ å Ÿ å ÿ í ⁄ åŸ ©Ÿ Ñ€ πÿ    
    description: 'Calculate your Semester and Cumulative GPA easily.',                                   
    icon: 'é   
  },     
    id: 'grade-calc',                               
    nameUrdu: '⁄ ±€ à ⁄ åŸ ©Ÿ Ñ€ πÿ    
    description: 'Calculate your academic grade based on marks obtained.',                                   
    icon: 'ì   
  },     
    id: 'mark-percentage',                                                                    
    nameUrdu: 'Ÿ ßÿ ©ÿ  Å€ µÿ  ©€ Ñ⁄ àŸ åŸ ±',                                                                   
    category: Category.EDUCATION,            üØ'      
  {                             
    name: 'Electricity Bill Calculator',                ®ÿ Ñ€  ©ÿ  ®Ÿ  ©€ Ñ⁄ àŸ åŸ ±',                                                                                                    
    category: Category.PAK_SPECIFIC,            ö   
  }    
                                     
  { threshold: 600000, rate: 0, fixed: 0 },                                              
  { threshold: 2200000, rate: 15, fixed: 30000 },                                                    
  { threshold: 4100000, rate: 30, fixed: 430000 },                                                    
];  
export const NISAB_GOLD_GRAMS = 87.48;                                           
