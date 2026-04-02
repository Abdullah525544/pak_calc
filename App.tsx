import React, { useState } from 'react';                                                                             
import { Helmet } from 'react-helmet-async';                                           
import CalculatorList from './components/CalculatorList';                                                           
import SEOHead from './components/SEOHead';                                             
import ScrollToTop from './components/ScrollToTop';                                                         
import {                                                                     
  InvestmentReturnTool, RetirementTool, PFTool, GratuityTool,                                                         
  CGPACalculatorTool, GradeCalculatorTool, MarkPercentageTool,                       
} from './components/Tools';                                                                                                                            
import { CALCULATORS } from './constants';                                                         
import { RelatedTools } from './components/RelatedTools';  
const getRelatedTools = (id: string) => {                                           
    'income-tax': ['investment-return', 'real-estate-roi'],                                                                         
    'loan-emi': ['zakat', 'investment-return'],                                                           
    'bmi': ['loan-emi', 'retirement-plan'],                                                          
    'retirement-plan': ['real-estate-roi', 'zakat', 'income-tax'],                                                             
    'provident-fund': ['retirement-plan', 'income-tax'],                                                    
    'freelancer-tax': ['income-tax', 'unit-converter'],                                                        
    'cgpa-calc': ['grade-calc', 'mark-percentage'],                                                    
    'mark-percentage': ['cgpa-calc', 'unit-converter'],                                                             
  };                                                          
};  
// SEO metadata for each tool â“ CTR-optimized titles & descriptions based on GSC queries                                                                               €                                                €                                                                                         
  'income-tax': {                                                                        
    description: 'Calculate Salary Tax based on latest FBR Tax Slabs 2025-26. Step-by-step guide on how to become a Filer in Pakistan. [100% Accurate & Free]',             
      { question: 'What are the FBR salary tax slabs for 2025-26 in Pakistanâ”', answer: 'The FBR has announced updated income tax slabs for tax year 2026 (July 2025 â“ June 2026). Salaried individuals earning up to PKR 600,000 annually are exempt. Rates range from 5% to 35% depending on income brackets. Use our free calculator for your exact tax liability.' },                                                                                €                                                                                                                                                                                                                                                              
    ],              
      name: "How to Calculate Income Tax on Salary in Pakistan",                                                                                                                    
      steps: [                                                                                                                                                       
        { name: "Review Projection", text: "The calculator automatically scales your monthly income to an annual figure to match FBR tax brackets." },                                                                                                                                  
        { name: "Check Net Salary", text: "View the exact amount deposited into your bank account each month." }         
    }      
  'zakat': {                                                                         
    description: 'Calculate Zakat on Gold, Cash, & Salary. [Standard 2.5%] based on Official Nisab rates by State Bank of Pakistan (SBP) & Ministry of Religious Affairs. 100% free!',             
      { question: 'How to calculate Zakat in Pakistan 2026â”', answer: 'Zakat is 2.5% of your total wealth above the Nisab threshold. Add up all your savings, gold, silver, and investments. If the total exceeds the Nisab value (approximately PKR 135,000 based on silver, or PKR 1,200,000+ based on gold for 2026), you owe Zakat on the entire amount.' },                                                                €                                                                                                                                                                                                                                                                                                       
      { question: 'How much Zakat is deducted from bank accounts in Pakistanâ”', answer: 'Banks in Pakistan deduct Zakat at 2.5% on savings accounts exceeding the Nisab amount on 1st Ramadan each year. You can file a Zakat exemption (CZ-50 form) with your bank if you want to pay Zakat yourself.' }        
    howTo: {                                                                             
      description: "Steps to evaluate your net worth and determine your Zakat obligation using current Nisab values.",                
        { name: "Tally Your Assets", text: "Enter your cash deposits, market value of gold/silver, and business investments." },                                                                                                                         
        { name: "Compare with Nisab", text: "The calculator compares your net worth against the current gold or silver Nisab threshold." },                                                                                                                           
      ]       
  },                       
    title: 'Freelancer Tax Calculator Pakistan 2026 - IT Export Income and FBR Rules',                                                                                                                                                                                        
    faqs: [                                                           €                                                                                                                                                                                                                                                                                                 
      { question: 'How much do freelancers earn per month in Pakistanâ”', answer: 'Freelancer income varies widely. Pakistani IT freelancers typically earn between PKR 50,000 to PKR 500,000+ per month depending on skills and experience. After bank charges (1-3%), platform fees (5-20%), and taxes, your net take-home can differ significantly from gross earnings.' }        
    howTo: {                                                                    
      description: "Estimate your net take-home freelance income after applying platform fees, bank conversion rates, and FBR tax deductions.",                
        { name: "Input Earnings", text: "Enter the total dollar amount the client paid before deductions." },                                                                                                       
        { name: "Factor Spreads", text: "Factor the difference between the dollar rate and bank's buying rate." },                                                                                                                 
      ]       
  },                          
    title: 'ROI & Investment Return Calculator Pakistan (2025)',                                                                                                                                                                                          
    faqs: [                                                                  €                                                                                                                                                                                                                                                                                    
    ]      
  'retirement-plan': {                                                                                     
    description: 'Plan your retirement in Pakistan. Calculate required savings corpus, VPS calculator and inflation-adjusted projections. Start planning your secure future today.',             
      { question: 'How much money do I need to retire in Pakistanâ”', answer: 'The amount depends on your lifestyle. For a comfortable retirement in Pakistan, you typically need 20-25x your annual expenses saved. With 8-10% inflation, someone spending PKR 100,000/month today would need approximately PKR 50-80 million by retirement age 60.' }       
  },                        
    title: 'Real Estate ROI Calculator Pakistan 2026 - Property Investment & Rental Yield',                                                                                                                                                                                          
    faqs: [                                                                €                                                                                                            — 100. In Pakistan, typical rental yields range from 3-6% in major cities, while capital appreciation can be 10-20% annually in developing areas.' }       
  },                       
    title: 'Provident Fund Calculator Pakistan 2026 - Free PF Balance & Deduction Calculator',                                                                                                                                                                                           
    faqs: [                                                               €                                                                                                                                                                                                                                                                                                                             
      { question: 'What is the PF deduction percentage in Pakistanâ”', answer: 'The standard PF deduction is 1/12th (8.33%) of basic salary in Pakistan, though some organizations deduct 6% or a fixed amount. The employer matches your contribution. The total contribution (employee + employer) is typically 16.67% of basic salary.' },                                                         €                                                                                                                                                                                                                                                                 
    ]      
  'gratuity': {                                                                    
    description: 'Resigning or retiringâ” Calculate your exact end-of-service payout using the official Gratuity Calculator Pakistan 2025. Know your legal rights before leaving.',             
      { question: 'How is gratuity calculated in Pakistanâ”', answer: 'Gratuity in Pakistan is calculated as: Last drawn salary Ã                                                                                                                                                                                                                          
      { question: 'Is gratuity calculated on basic salary or gross salary in Pakistanâ”', answer: 'In Pakistan, gratuity is typically calculated on the last drawn basic salary (not gross salary). However, some organizations calculate it on gross salary as per their company policy. The legal minimum is based on basic salary plus dearness allowance.' },                                                                               €                                                                       — 5. For example, if your last basic salary is PKR 100,000, your gratuity would be PKR 500,000 (100,000 Ã                                                                             
    ]      
  'loan-emi': {                                                                                    
    description: 'Calculate monthly EMI for car/home loans. KIBOR-based rates for Meezan Bank, HBL, Bank Alfalah. [Updated 2026] Monthly installment tracker.',             
      { question: 'How to calculate loan EMI in Pakistanâ”', answer: 'EMI (Equated Monthly Installment) is calculated using the formula: EMI = P Ã    — (1+r)^n / ((1+r)^n - 1), where P = loan amount, r = monthly interest rate, n = number of months. In Pakistan, car loan rates are typically KIBOR + 3-5% spread.' },                                                             €                                                                                                                                                                                                                                                      
    ]      
  'profit-margin': {                                                                                        
    description: 'Calculate net profit margin and markup percentage for your business. Gross vs net profit comparisons ideal for wholesalers, retailers and startups in Pakistan. Instant results.',             
      { question: 'How to calculate profit margin for a business in Pakistanâ”', answer: 'Profit Margin = (Revenue - Cost) / Revenue Ã                                                                                                                                     — 100). Our calculator instantly shows both margin and markup.' }       
  },                       
    title: '1 Murabba to Kanal (200 Kanal) | Land Unit Converter Pakistan',                                                                                                                                                                                   
    faqs: [                                                           €                                                                                                                                                                                         
      { question: 'How many Marla in 1 Kanalâ”', answer: '1 Kanal = 20 Marla in Pakistan. 1 Marla = 272.25 sq ft. So 1 Kanal = 5,445 sq ft. These are the standard land measurement units used across Punjab and KPK.' },                                            €                                                                                                                                                                                            
    ]      
  'bmi': {                                                                                       
    description: 'Calculate your BMI instantly. Check if you are underweight, normal, or overweight with Pakistan-specific health tips and weight management advice. 100% free.',             
      { question: 'How to calculate BMI in Pakistanâ”', answer: 'BMI = Weight (kg) / Height (mÂ                                                                             — 1.75) = 22.86 (Normal weight). BMI categories: Under 18.5 = Underweight, 18.5-24.9 = Normal, 25-29.9 = Overweight, 30+ = Obese.' }       
  },                  
    title: 'CGPA Calculator Pakistan 2026 - Free GPA Calculator (HEC Standards)',                                                                                                                                                                                         
    faqs: [                                                    €                                                                                                                                                                                                                                               
      { question: 'How to calculate CGPA from SGPA in Pakistanâ”', answer: 'CGPA = Sum of (SGPA Ã                                                                                                                                                                      —18 + 3.7Ã                          
    ]      
  'grade-calc': {                                                                                         
    description: 'Find your academic grade from marks obtained. Matric, Inter, O/A Level grading systems and Pakistan board results grade calculator. Instant and free.',             
      { question: 'How to check grade from marks in Pakistanâ”', answer: 'In Pakistan\'s Matric/SSC system: A1 = 80%+, A = 70-79%, B = 60-69%, C = 50-59%, D = 40-49%, F = below 40%. For FSc/HSSC: A+ = 85%+, A = 80-84%, B = 70-79%, C = 60-69%. Our calculator supports all major grading systems.' }       
  },                        
    title: 'Marks Percentage Calculator | Find SSC/HSSC Grades Fast',                                                                                                                                                                                       
    faqs: [                                                                 €                                                                                                                                           — 100. For example, if you got 935 marks, your percentage is (935/1100) Ã                 
      { question: 'What is the percentage of 850 out of 1100 marksâ”', answer: '850 out of 1100 marks percentage = (850 / 1100) Ã                                                                                   
      { question: 'How to calculate 9th and 10th class result percentageâ”', answer: 'Add your 9th and 10th class marks to get the total obtained marks (usually out of 1100 or 1200). Use our calculator to enter these values and get your final Matric result percentage instantly.' },                                                               €                                                                   — 100 = 50%.' },                                                                        €                                                                                                                                                                                      
    ],              
      name: "How to Calculate Marks Percentage for Pakistan Board Exams (Matric/Inter)",                                                                                                                                    
      steps: [                                                                                                                  
        { name: "Enter Maximum Marks", text: "Enter the total marks possible (usually 1100 for Matric/Inter or 1200)." },                                                                                                                             
        { name: "See Your Grade", text: "The calculator will also show your grade classification based on Pakistan's board criteria." }         
    }      
  'electricity-bill': {                                                                                        
    description: 'Calculate electricity bill in Pakistan instantly. Use our WAPDA unit calculator, check IESCO/FESCO bill online, convert watts to units, and find the latest per unit rate.',             
      { question: 'How to calculate electricity bill in Pakistanâ”', answer: 'To calculate your bill of electricity in Pakistan, use the WAPDA unit calculator. Simply enter your consumed units. The tool evaluates the electricity bill calculation formula in Pakistan by applying the appropriate NEPRA slab, adding the Fuel Price Adjustment (FPA), 18% GST, and other surcharges.' },                                                                                           €                                                                                                                                                                                                                                                                                                                                                            
      { question: 'How do I use a Watts to Units calculatorâ”', answer: 'The watt to unit formula is simple: Units (kWh) = (Watts Ã             — Days) / 1000. For example, a 1000-watt AC running for 8 hours a day for 30 days will consume 240 units.' },                                                                                    €                                                                                                                                                                                                                                                                                                                                                                   
    ],              
      name: "How to Calculate Bill of Electricity in Pakistan",                                                                                                                         
      steps: [                                                                                                                                                                                               
        { name: "Select Your Connection Type", text: "Choose between a Residential or Commercial WAPDA connection, as the commercial unit price is different." },                                                                                                                     
        { name: "Review the Bill Breakdown", text: "The calculator instantly applies the exact WAPDA per unit rate, FPA, and GST to give you your final estimated bill amount." }         
    }     
};  
                               
  const [isUrdu, setIsUrdu] = useState(false);                                   
  const location = useLocation();  
  const handleNavigate = (view: View) => {                                                                                 
    if (view === 'home') navigate('/');                                                            
                                
  };  
  const handleSelectTool = (calc: Calculator) => {                              
  };  
  return (             
      isUrdu={isUrdu}                             
      onNavigate={handleNavigate}       
      <ScrollToTop />                
        <Route path="/" element={              
            <SEOHead                                                                     
              description="Free financial calculators for Income Tax (FBR 2025), Zakat, Loan EMI, and Business profit margins. Tailored for Pakistan."                                
            />                                                                                                        
          </>              
                                            
          <>                      
              title="All Financial Tools - PakCalc"                                                                                                          
              canonicalUrl="/all-tools"                
            <ToolsDirectory isUrdu={isUrdu} onSelect={handleSelectTool} />               
        } />  
        {/* Info Pages */}                                        
          <>                                                                                                                                                                                                                                                                                                                 
            <Helmet>                                                   
                {JSON.stringify({                                                     
                  "@type": "FAQPage",                                   
                    {                                            
                      "name": "What are the FBR income tax slabs for 2025-26 in Pakistanâ”",                                           
                        "@type": "Answer",                                                                                                              €                                                                                                                                                         
                      }                       
                  ]                     
              </script>                       
            <FBRSlabsPage isUrdu={isUrdu} />               
        } />  
        <Route path="/electricity-bill" element={                        
            id="electricity-bill"                             
            component={<ElectricityBillTool isUrdu={isUrdu} />}                                             
          />              
                                             
          <>                                                                                                                                 €                                                                                                                                                           
            <Helmet>                                                   
                {JSON.stringify({                                                     
                  "@type": "FAQPage",                                   
                    {                                            
                      "name": "What is the SBP Zakat Nisab for 2026 in Pakistanâ”",                                           
                        "@type": "Answer",                                                                                                                                                                                                                                                                     
                      }                       
                  ]                     
              </script>                       
            <ZakatInfoPage isUrdu={isUrdu} />               
        } />                                                                                                                                                                                      
        <Route path="/privacy" element={<><SEOHead title="Privacy Policy" description="Privacy Policy for PakCalc." canonicalUrl="/privacy" /><PrivacyPage /></>} />                                                                                                                                                                    
        <Route path="/disclaimer" element={<><SEOHead title="Disclaimer" description="Financial disclaimer for PakCalc." canonicalUrl="/disclaimer" /><DisclaimerPage /></>} />  
        {/* Individual Tools */}                                             
          <ToolWrapper                             
            component={<IncomeTaxTool isUrdu={isUrdu} />}                             
            handleNavigate={handleNavigate}              
        } />                                        
          <ToolWrapper                        
            component={<ZakatTool isUrdu={isUrdu} />}                             
            handleNavigate={handleNavigate}              
        } />                                           
          <ToolWrapper                           
            component={<EMITool />}                             
            handleNavigate={handleNavigate}              
        } />                                                
          <ToolWrapper                                
            component={<ProfitMarginTool />}                             
            handleNavigate={handleNavigate}              
        } />                                      
          <ToolWrapper                      
            component={<BMICalcTool />}                             
            handleNavigate={handleNavigate}              
        } />                                                    
          <ToolWrapper                                    
            component={<InvestmentReturnTool />}                             
            handleNavigate={handleNavigate}              
        } />                                                  
          <ToolWrapper                                  
            component={<RetirementTool />}                             
            handleNavigate={handleNavigate}              
        } />                                                  
          <ToolWrapper                                  
            component={<RealEstateROITool />}                             
            handleNavigate={handleNavigate}              
        } />                                                 
          <ToolWrapper                                 
            component={<PFTool />}                             
            handleNavigate={handleNavigate}              
        } />                                           
          <ToolWrapper                           
            component={<GratuityTool />}                             
            handleNavigate={handleNavigate}              
        } />                                                 
          <ToolWrapper                                 
            component={<FreelancerTool isUrdu={isUrdu} />}                             
            handleNavigate={handleNavigate}              
        } />                                                 
          <ToolWrapper                                 
            component={<UnitConverterTool />}                             
            handleNavigate={handleNavigate}              
        } />                                            
          <ToolWrapper                            
            component={<CGPACalculatorTool />}                             
            handleNavigate={handleNavigate}              
        } />                                             
          <ToolWrapper                             
            component={<GradeCalculatorTool />}                             
            handleNavigate={handleNavigate}              
        } />                                                  
          <ToolWrapper                                  
            component={<MarkPercentageTool />}                             
            handleNavigate={handleNavigate}              
        } />  
        {/* Fallback */}                                   
          <div className="flex flex-col items-center justify-center min-h-[50vh]">                                                                                              
            <button onClick={() => navigate('/')} className="text-emerald-600 font-bold hover:underline">Go Home</button>                  
        } />                 
    </Layout>      
};  
// Helper component to wrap tools with common layout and SEO                                                                                                                                                        
  const navigate = useNavigate();                                                    
  const seoMeta = TOOL_SEO_META[id];  
  if (!tool) return null;  
  return (                                                                                                                    
      <SEOHead                       €                                     
        description={seoMetaâ”.description || tool.description}                                 
      />  
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">                                            
          <Breadcrumbs />                                                     
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-3xl">                           
            </div>                   
              <h1 className={`text-4xl font-black text-slate-900 tracking-tight ${isUrdu â” 'urdu' : ''}`}>                         €                             
              </h1>                                                                                         
                        
                <script type="application/ld+json">                                     
                    "@context": "https://schema.org",                                                     
                    "name": tool.name,                                                                  
                    "operatingSystem": "Any",                                                          
                    "offers": {                                         
                      "price": "0",                                              
                    },                                           €                                   
                    "aggregateRating": {                                                   
                      "ratingValue": "4.8",                                             
                      "bestRating": "5"                       
                  })}                           
                {seoMetaâ”.faqs && seoMeta.faqs.length > 0 && (                                                       
                    {JSON.stringify({                                                         
                      "@type": "FAQPage",                                                                
                        "@type": "Question",                                               
                        "acceptedAnswer": {                                              
                          "text": faq.answer                           
                      }))                         
                  </script>                    
                {seoMetaâ”.howTo && (                                                       
                    {JSON.stringify({                                                         
                      "@type": "HowTo",                                                   
                      "description": seoMeta.howTo.description,                                                                           
                        "@type": "HowToStep",                                                
                        "name": step.name,                                           
                      }))                         
                  </script>                    
              </Helmet>                    
          </div>                
      </div>  
      <div className="relative mb-8">                     
      </div>  
      <ToolArticle id={id} isUrdu={isUrdu} />  
      <RelatedTools toolIds={getRelatedTools(id)} />  
      {/* AI Banner */}                                                                                                                 
        <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-600 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>                                                                                            
          <div>                                                                                                                                                                                                                 
            <h4 className="text-3xl font-black mb-4 leading-tight">Need expert financial adviceâ”</h4>                                                                                                                                                                                          
          </div>                                              
            <div className="bg-white/10 p-6 rounded-3xl border border-white/10 backdrop-blur-md w-full max-w-sm">                                                 
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 text-xl">AI</div>                                                                                                                                                             
              </div>                    
          </div>                
      </div>            
  );    
                     
