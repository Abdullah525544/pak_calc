import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from './components/Layout';
import CalculatorList from './components/CalculatorList';
import ToolsDirectory from './components/ToolsDirectory';
import SEOHead from './components/SEOHead';
import { Calculator, View } from './types';
import ScrollToTop from './components/ScrollToTop';
import { Breadcrumbs } from './components/Breadcrumbs';
import {
  IncomeTaxTool, ZakatTool, EMITool, ProfitMarginTool, BMICalcTool,
  InvestmentReturnTool, RetirementTool, PFTool, GratuityTool,
  FreelancerTool, UnitConverterTool, RealEstateROITool,
  CGPACalculatorTool, GradeCalculatorTool, MarkPercentageTool,
  ElectricityBillTool
} from './components/Tools';
import { FBRSlabsPage, ZakatInfoPage, ContactPage, PrivacyPage, TermsPage, DisclaimerPage } from './components/InfoPages';
import { CALCULATORS } from './constants';
import { ToolArticle } from './components/ToolArticle';
import { RelatedTools } from './components/RelatedTools';

const getRelatedTools = (id: string) => {
  const map: Record<string, string[]> = {
    'income-tax': ['investment-return', 'real-estate-roi'],
    'zakat': ['investment-return', 'provident-fund', 'freelancer-tax'],
    'loan-emi': ['zakat', 'investment-return'],
    'profit-margin': ['income-tax', 'investment-return'],
    'bmi': ['loan-emi', 'retirement-plan'],
    'investment-return': ['provident-fund', 'gratuity'],
    'retirement-plan': ['real-estate-roi', 'zakat', 'income-tax'],
    'real-estate-roi': ['income-tax', 'investment-return'],
    'provident-fund': ['retirement-plan', 'income-tax'],
    'gratuity': ['retirement-plan', 'income-tax'],
    'freelancer-tax': ['income-tax', 'unit-converter'],
    'unit-converter': ['profit-margin', 'income-tax'],
    'cgpa-calc': ['grade-calc', 'mark-percentage'],
    'grade-calc': ['cgpa-calc', 'unit-converter'],
    'mark-percentage': ['cgpa-calc', 'unit-converter'],
    'electricity-bill': ['income-tax', 'loan-emi', 'zakat']
  };
  return map[id] || ['income-tax', 'investment-return'];
};

// SEO metadata for each tool – CTR-optimized titles & descriptions based on GSC queries
const TOOL_SEO_META: Record<string, { title: string; description: string; faqs?: { question: string; answer: string }[]; howTo?: { name: string; description: string; steps: { name: string; text: string }[] } }> = {
  'income-tax': {
    title: 'Income Tax Calculator Pakistan 2026 – Free FBR Salary Tax Slabs 2025-26',
    description: 'Calculate your FBR income tax for 2025-2026 in seconds ✓ Updated salary tax slabs ✓ Legal exemptions ✓ Tax-saving tips. Used by 10,000+ Pakistani filers.',
    faqs: [
      { question: 'What are the FBR salary tax slabs for 2025-26 in Pakistan?', answer: 'The FBR has announced updated income tax slabs for tax year 2026 (July 2025 – June 2026). Salaried individuals earning up to PKR 600,000 annually are exempt. Rates range from 5% to 35% depending on income brackets. Use our free calculator for your exact tax liability.' },
      { question: 'How to calculate income tax in Pakistan for salaried persons?', answer: 'To calculate your income tax: 1) Determine your total annual taxable income, 2) Subtract allowable deductions (medical, education), 3) Apply the applicable FBR slab rate for 2025-26. Our calculator does all this automatically in seconds.' }
    ],
    howTo: {
      name: "How to Calculate Income Tax on Salary in Pakistan",
      description: "A step-by-step guide to calculating your FBR income tax using our free 2025-2026 calculator.",
      steps: [
        { name: "Enter Gross Salary", text: "Input the total amount you earn before any deductions include basic salary, allowances, and bonuses." },
        { name: "Review Projection", text: "The calculator automatically scales your monthly income to an annual figure to match FBR tax brackets." },
        { name: "Analyze Breakdown", text: "Observe the exact tax slab you fall into and see the precise percentage applied." },
        { name: "Check Net Salary", text: "View the exact amount deposited into your bank account each month." }
      ]
    }
  },
  'zakat': {
    title: 'Zakat Calculator Pakistan 2026 – SBP Nisab (Gold & Silver PKR)',
    description: 'Calculate Zakat on cash, gold & silver in Pakistani Rupees ✓ Latest SBP Nisab 2026 ✓ 7.5 Tola Gold vs 52.5 Tola Silver rates ✓ Bank deduction guide. 100% free.',
    faqs: [
      { question: 'How to calculate Zakat in Pakistan 2026?', answer: 'Zakat is 2.5% of your total wealth above the Nisab threshold. Add up all your savings, gold, silver, and investments. If the total exceeds the Nisab value (approximately PKR 135,000 based on silver, or PKR 1,200,000+ based on gold for 2026), you owe Zakat on the entire amount.' },
      { question: 'What is the Zakat Nisab in Pakistan for 2026?', answer: 'The Zakat Nisab in Pakistan for 2026 is based on the value of 7.5 tola gold or 52.5 tola silver. The SBP announces the Nisab value each Ramadan. Based on current rates, the silver-based Nisab is approximately PKR 135,000 and the gold-based Nisab is approximately PKR 1,200,000.' },
      { question: 'How much Zakat is deducted from bank accounts in Pakistan?', answer: 'Banks in Pakistan deduct Zakat at 2.5% on savings accounts exceeding the Nisab amount on 1st Ramadan each year. You can file a Zakat exemption (CZ-50 form) with your bank if you want to pay Zakat yourself.' }
    ],
    howTo: {
      name: "How to Calculate Zakat Accurately in Pakistan (2.5% Formula)",
      description: "Steps to evaluate your net worth and determine your Zakat obligation using current Nisab values.",
      steps: [
        { name: "Tally Your Assets", text: "Enter your cash deposits, market value of gold/silver, and business investments." },
        { name: "Deduct Liabilities", text: "Deduct immediate short-term debts like pending utility bills or loans." },
        { name: "Compare with Nisab", text: "The calculator compares your net worth against the current gold or silver Nisab threshold." },
        { name: "Get Exact Amount", text: "If net worth exceeds Nisab, the system automatically computes exactly 2.5%." }
      ]
    }
  },
  'freelancer-tax': {
    title: 'Freelancer Tax Calculator Pakistan 2026 – IT Export Income & FBR Rules',
    description: 'Calculate freelancing income after bank charges, FBR export tax & conversion fees ✓ Per month income estimator ✓ For Fiverr, Upwork & remote workers in Pakistan.',
    faqs: [
      { question: 'Is there tax on freelancers in Pakistan?', answer: 'Yes, freelancer income is taxable in Pakistan under FBR rules. However, IT export income enjoys reduced tax rates (0.25% for filers). Freelancers earning through platforms like Fiverr, Upwork, or direct clients must file returns and can benefit from IT export exemptions.' },
      { question: 'How much do freelancers earn per month in Pakistan?', answer: 'Freelancer income varies widely. Pakistani IT freelancers typically earn between PKR 50,000 to PKR 500,000+ per month depending on skills and experience. After bank charges (1-3%), platform fees (5-20%), and taxes, your net take-home can differ significantly from gross earnings.' }
    ],
    howTo: {
      name: "How to Calculate Freelance Income and IT Export Tax",
      description: "Estimate your net take-home freelance income after applying platform fees, bank conversion rates, and FBR tax deductions.",
      steps: [
        { name: "Input Earnings", text: "Enter the total dollar amount the client paid before deductions." },
        { name: "Set Fees", text: "Choose your platform's standard commission rate (usually 20%)." },
        { name: "Factor Spreads", text: "Factor the difference between the dollar rate and bank's buying rate." },
        { name: "Apply FBR Tax", text: "Select filer status. The calculator deducts the exact IT export tax." }
      ]
    }
  },
  'investment-return': {
    title: 'Investment Return Calculator Pakistan 2026 – Free Savings & Profit Calculator',
    description: 'Calculate compound interest & investment returns in PKR ✓ Compare National Savings, mutual funds & bank profits ✓ Pakistan Investment Bonds calculator included.',
    faqs: [
      { question: 'How to calculate investment return in Pakistan?', answer: 'To calculate your investment return: Enter your initial investment amount, expected annual return rate (NSC offers 11-15%, mutual funds 10-20%), investment duration, and our calculator will show you total profit with compound interest, adjusted for inflation.' }
    ]
  },
  'retirement-plan': {
    title: 'Retirement Savings Calculator Pakistan 2026 – Plan Your Pension & VPS',
    description: 'Plan your retirement in Pakistan ✓ Calculate required savings corpus ✓ VPS calculator ✓ Inflation-adjusted projections. Start planning your secure future today.',
    faqs: [
      { question: 'How much money do I need to retire in Pakistan?', answer: 'The amount depends on your lifestyle. For a comfortable retirement in Pakistan, you typically need 20-25x your annual expenses saved. With 8-10% inflation, someone spending PKR 100,000/month today would need approximately PKR 50-80 million by retirement age 60.' }
    ]
  },
  'real-estate-roi': {
    title: 'Real Estate ROI Calculator Pakistan 2026 – Property Investment & Rental Yield',
    description: 'Analyze rental yield, capital gains & FBR transfer taxes for property deals ✓ ROI calculator for Karachi, Lahore & Islamabad ✓ Marla, Kanal price analysis.',
    faqs: [
      { question: 'How to calculate real estate ROI in Pakistan?', answer: 'Real Estate ROI = (Annual Rental Income + Property Appreciation - Expenses) / Total Investment × 100. In Pakistan, typical rental yields range from 3-6% in major cities, while capital appreciation can be 10-20% annually in developing areas.' }
    ]
  },
  'provident-fund': {
    title: 'Provident Fund Calculator Pakistan 2026 – Free PF Balance & Deduction Calculator',
    description: 'Calculate your Provident Fund (PF) balance with employer matching & interest ✓ PF deduction percentage ✓ PF contribution rules in Pakistan. Used by 5,000+ employees.',
    faqs: [
      { question: 'How to calculate Provident Fund in Pakistan?', answer: 'Provident Fund in Pakistan is calculated as a percentage of your basic salary (typically 6-8.33%). Both employee and employer contribute equally. The PF balance grows with monthly contributions plus interest (currently 13-15% per annum). Our calculator shows your projected PF balance at retirement.' },
      { question: 'What is the PF deduction percentage in Pakistan?', answer: 'The standard PF deduction is 1/12th (8.33%) of basic salary in Pakistan, though some organizations deduct 6% or a fixed amount. The employer matches your contribution. The total contribution (employee + employer) is typically 16.67% of basic salary.' },
      { question: 'Is Provident Fund taxable in Pakistan?', answer: 'Employer contributions to recognized Provident Funds are tax-exempt up to 10% of salary. The accumulated balance is also tax-free at the time of withdrawal after retirement or completion of service, provided the fund is approved by the FBR.' }
    ]
  },
  'gratuity': {
    title: 'Gratuity Calculator Pakistan 2026 – Free Tool for Private & Govt Employees',
    description: 'Calculate your end-of-service gratuity amount instantly ✓ Based on latest Pakistan labor laws ✓ For private sector employees ✓ Basic vs gross salary calculation.',
    faqs: [
      { question: 'How is gratuity calculated in Pakistan?', answer: 'Gratuity in Pakistan is calculated as: Last drawn salary × number of years of service. Under the Pakistan labor laws, employees who have completed at least one year of continuous service are entitled to gratuity equal to 30 days wages for each completed year of service.' },
      { question: 'Is gratuity calculated on basic salary or gross salary in Pakistan?', answer: 'In Pakistan, gratuity is typically calculated on the last drawn basic salary (not gross salary). However, some organizations calculate it on gross salary as per their company policy. The legal minimum is based on basic salary plus dearness allowance.' },
      { question: 'What is the gratuity amount for 5 years service in Pakistan?', answer: 'For 5 years of service, your gratuity = Last basic salary × 5. For example, if your last basic salary is PKR 100,000, your gratuity would be PKR 500,000 (100,000 × 5 years). Some companies offer higher rates based on their HR policies.' }
    ]
  },
  'loan-emi': {
    title: 'Loan EMI Calculator Pakistan 2026 – Free Monthly Installment Calculator (KIBOR)',
    description: 'Calculate monthly EMI for car loans, home loans & bank loans ✓ KIBOR-based rates ✓ Meezan, HBL, Alfalah supported ✓ Full payment schedule with interest breakdown.',
    faqs: [
      { question: 'How to calculate loan EMI in Pakistan?', answer: 'EMI (Equated Monthly Installment) is calculated using the formula: EMI = P × r × (1+r)^n / ((1+r)^n - 1), where P = loan amount, r = monthly interest rate, n = number of months. In Pakistan, car loan rates are typically KIBOR + 3-5% spread.' },
      { question: 'How much EMI for 30 lakh loan in Pakistan?', answer: 'For a PKR 30 lakh loan at 18% annual interest for 5 years, the monthly EMI would be approximately PKR 76,000. The exact amount depends on the bank\'s interest rate and loan tenure. Use our calculator for precise EMI calculations.' }
    ]
  },
  'profit-margin': {
    title: 'Profit Margin Calculator 2026 – Free Business Markup & Net Profit Finder',
    description: 'Calculate net profit margin & markup percentage for your business ✓ Gross vs net profit ✓ Ideal for wholesalers, retailers & startups in Pakistan. Instant results.',
    faqs: [
      { question: 'How to calculate profit margin for a business in Pakistan?', answer: 'Profit Margin = (Revenue - Cost) / Revenue × 100. For example, if you buy a product for PKR 800 and sell for PKR 1,000, your profit margin is 20%. Markup would be 25% (200/800 × 100). Our calculator instantly shows both margin and markup.' }
    ]
  },
  'unit-converter': {
    title: 'Unit Converter Pakistan – Marla to Kanal, Murabba to Kanal, Gaz to SqFt',
    description: 'Convert local Pakistani units instantly ✓ 1 Murabba = 200 Kanal ✓ Marla to Square Feet ✓ Gaz to Kanal ✓ Tola to Grams. Optimized for property & trade in Pakistan.',
    faqs: [
      { question: 'How many Kanal in 1 Murabba in Pakistan?', answer: '1 Murabba = 25 Acres = 200 Kanal in Pakistan. A Murabba is commonly used for agricultural land measurement in Punjab. 200 Murabba would be 40,000 Kanal or 5,000 Acres.' },
      { question: 'How many Marla in 1 Kanal?', answer: '1 Kanal = 20 Marla in Pakistan. 1 Marla = 272.25 sq ft. So 1 Kanal = 5,445 sq ft. These are the standard land measurement units used across Punjab and KPK.' },
      { question: 'How many Marla in 40 Gaz?', answer: '40 Gaz (Square Yards) is approximately equal to 1.32 Marla in Pakistan. 1 Marla = 30.25 Gaz/Square Yards. This conversion is commonly needed when buying plots in Pakistan.' }
    ]
  },
  'bmi': {
    title: 'BMI Calculator Pakistan 2026 – Free Body Mass Index & Health Check Tool',
    description: 'Calculate your BMI instantly ✓ Check if you\'re underweight, normal, or overweight ✓ Pakistan-specific health tips ✓ Weight management advice. 100% free.',
    faqs: [
      { question: 'How to calculate BMI in Pakistan?', answer: 'BMI = Weight (kg) / Height (m²). For example, if you weigh 70kg and are 1.75m tall, your BMI = 70 / (1.75 × 1.75) = 22.86 (Normal weight). BMI categories: Under 18.5 = Underweight, 18.5-24.9 = Normal, 25-29.9 = Overweight, 30+ = Obese.' }
    ]
  },
  'cgpa-calc': {
    title: 'CGPA Calculator Pakistan 2026 – Free GPA Calculator (HEC Standards)',
    description: 'Calculate CGPA & SGPA as per HEC Pakistan standards ✓ Percentage to GPA conversion ✓ All university grading systems supported. How to calculate GPA in Pakistan.',
    faqs: [
      { question: 'How to calculate GPA in Pakistan?', answer: 'In Pakistan, GPA is calculated by: 1) Multiplying each course\'s grade points by its credit hours, 2) Adding all quality points, 3) Dividing by total credit hours. HEC uses 4.0 scale where A = 4.0, B+ = 3.3, B = 3.0, etc.' },
      { question: 'How to calculate CGPA from SGPA in Pakistan?', answer: 'CGPA = Sum of (SGPA × semester credit hours) / Total credit hours of all semesters. For example, if Semester 1 SGPA = 3.5 (18 credits) and Semester 2 SGPA = 3.7 (15 credits), CGPA = (3.5×18 + 3.7×15) / (18+15) = 3.59.' }
    ]
  },
  'grade-calc': {
    title: 'Grade Calculator Pakistan – Matric, Inter & University Marks Grade Finder',
    description: 'Find your academic grade from marks obtained ✓ Matric, Inter, O/A Level grading systems ✓ Pakistan board results grade calculator. Instant & free.',
    faqs: [
      { question: 'How to check grade from marks in Pakistan?', answer: 'In Pakistan\'s Matric/SSC system: A1 = 80%+, A = 70-79%, B = 60-69%, C = 50-59%, D = 40-49%, F = below 40%. For FSc/HSSC: A+ = 85%+, A = 80-84%, B = 70-79%, C = 60-69%. Our calculator supports all major grading systems.' }
    ]
  },
  'mark-percentage': {
    title: 'Marks Percentage Calculator Pakistan – Matric (1100) & Board Result %',
    description: 'Calculate your exam percentage instantly ✓ 1100 total marks percentage (850/1100) ✓ Matric & Inter board results ✓ Quick & 100% accurate. Used by students across Pakistan.',
    faqs: [
      { question: 'How to calculate matric result percentage?', answer: 'Matric percentage = (Obtained Marks / Total Marks) × 100. For example, if you got 892 marks out of 1100, your percentage = (892/1100) × 100 = 81.09%. This formula works for all board exams in Pakistan.' },
      { question: '696 out of 1100 marks percentage kya hota hai?', answer: '696 out of 1100 marks ka percentage = (696/1100) × 100 = 63.27%. This falls in the B grade category in Pakistan\'s Matric/SSC grading system.' },
      { question: 'How to calculate percentage from SSLC marks?', answer: 'SSLC/Matric percentage = (Total marks obtained / Maximum marks) × 100. Enter your obtained marks and total marks in our calculator to get instant results with grade classification.' }
    ],
    howTo: {
      name: "How to Calculate Marks Percentage for Pakistan Board Exams",
      description: "Fastest way to convert your obtained marks into a percentage for Matric, Inter, or University results.",
      steps: [
        { name: "Enter Obtained Marks", text: "Type in the total marks you secured in your exams (e.g., 850)." },
        { name: "Enter Total Marks", text: "Type in the maximum marks possible (e.g., 1100 for Matric, 1100 for Inter)." },
        { name: "Check Percentage", text: "The calculator instantly displays your percentage up to two decimal places." },
        { name: "Verify Grade", text: "Review the automatically generated grade based on your calculated percentage." }
      ]
    }
  },
  'electricity-bill': {
    title: 'Electricity Bill Calculator Pakistan 2026 – Check Bijli Ka Bill Online (LESCO, MEPCO, IESCO)',
    description: 'Free electricity bill calculator ✓ Enter units & get instant bill estimate ✓ NEPRA 2025-26 slabs ✓ Protected & Non-Protected rates ✓ GST, FPA, surcharges included. Works for LESCO, MEPCO, IESCO & all DISCOs.',
    faqs: [
      { question: 'How to calculate electricity bill from units in Pakistan?', answer: 'Your bill is calculated using a slab system. Each range of units (e.g., 1-100) has a different rate per kWh. After calculating the energy cost, the government adds 18% GST, Electricity Duty (1.5%), FPA, FC Surcharge, and a Rs. 35 TV fee. Our calculator automates this entire process — just enter your units.' },
      { question: 'What are protected and non-protected consumers?', answer: 'Protected consumers use less than 200 units for 6 consecutive months and pay lower rates (Rs. 10.54/unit for first 100 units). Non-protected consumers pay higher rates starting from Rs. 22.44/unit. Crossing 200 units even once removes your protected status.' },
      { question: 'How much is a 300 unit electricity bill in Pakistan?', answer: 'A 300-unit bill for a non-protected consumer costs approximately Rs. 8,445 in energy charges. After adding 18% GST, FPA, and surcharges, the total bill comes to roughly Rs. 11,000 – Rs. 12,000 depending on the monthly FPA rate.' },
      { question: 'What is the per unit rate of electricity in Pakistan 2025?', answer: 'For non-protected domestic consumers, the base rate starts at Rs. 22.44/unit (1-100 units) and increases progressively to Rs. 47.69/unit (700+ units). Protected consumers pay much less — Rs. 10.54/unit for the first 100 units and Rs. 13.01/unit for 101-200 units.' },
      { question: 'Why is my bijli ka bill so high?', answer: 'Common reasons include: crossing the 200-unit protected threshold, high Fuel Price Adjustment (FPA) during summer months, using non-inverter ACs, meter reading errors, or not being aware of the slab system. Use our calculator to cross-verify your bill against actual units consumed.' },
      { question: 'Can I check my actual WAPDA bill online?', answer: 'Yes. Each DISCO (LESCO, MEPCO, IESCO, FESCO, PESCO) has an official online portal where you enter your Reference Number or Consumer ID to view and download your actual bill. Our calculator helps you estimate the bill before it arrives.' }
    ],
    howTo: {
      name: "How to Calculate Your Electricity Bill Online in Pakistan",
      description: "Step-by-step guide to estimate your monthly bijli ka bill using units consumed and the latest NEPRA 2025-26 tariff slabs.",
      steps: [
        { name: "Check Units Consumed", text: "Look at your electricity meter or previous bill to find 'Units Consumed' (kWh). This is the primary input for calculating your bill." },
        { name: "Select Protected or Non-Protected", text: "Choose 'Protected' if your monthly usage has stayed below 200 units for the last 6 months. Otherwise, select 'Non-Protected' for standard rates." },
        { name: "Enter Units in Calculator", text: "Type your total units consumed into our free calculator. The tool instantly applies the correct NEPRA slab rates and calculates the energy cost." },
        { name: "Review Full Bill Breakdown", text: "See the complete breakdown including base electricity cost, 18% GST, Fuel Price Adjustment (FPA), FC Surcharge, Electricity Duty, and TV Fee." }
      ]
    }
  }
};


const App: React.FC = () => {
  const [isUrdu, setIsUrdu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (view: View) => {
    // Legacy support for internal component nav if needed, or simple redirects
    if (view === 'home') navigate('/');
    else if (view === 'all-tools') navigate('/all-tools');

    else navigate(`/${view}`);
  };

  const handleSelectTool = (calc: Calculator) => {
    navigate(`/${calc.id}`);
  };

  return (
    <Layout
      isUrdu={isUrdu}
      setIsUrdu={setIsUrdu}
      onNavigate={handleNavigate}
    >
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <SEOHead
              title="PakCalc - Pakistan's #1 Financial Tools Suite"
              description="Free financial calculators for Income Tax (FBR 2025), Zakat, Loan EMI, and Business profit margins. Tailored for Pakistan."
              canonicalUrl="/"
            />
            <CalculatorList isUrdu={isUrdu} onSelect={handleSelectTool} onNavigate={handleNavigate} />
          </>
        } />

        <Route path="/all-tools" element={
          <>
            <SEOHead
              title="All Financial Tools - PakCalc"
              description="Browse our complete collection of financial calculators for Pakistani users."
              canonicalUrl="/all-tools"
            />
            <ToolsDirectory isUrdu={isUrdu} onSelect={handleSelectTool} />
          </>
        } />

        {/* Info Pages */}
        <Route path="/slabs" element={
          <>
            <SEOHead title="FBR Income Tax Slabs 2025-26 – New Salary Tax Chart Pakistan" description="Latest FBR income tax slabs for salaried & business individuals (Tax Year 2026). Check new monthly tax rates, exemptions & filing guide. 100% updated." canonicalUrl="/slabs" />
            <Helmet>
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What are the FBR income tax slabs for 2025-26 in Pakistan?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The FBR has announced updated income tax slabs for tax year 2026 (July 2025 – June 2026). Annual income up to PKR 600,000 is exempt. Rates progressively increase from 5% to 35% based on income brackets for salaried individuals."
                      }
                    }
                  ]
                })}
              </script>
            </Helmet>
            <FBRSlabsPage isUrdu={isUrdu} />
          </>
        } />

        <Route path="/electricity-bill" element={
          <ToolWrapper
            id="electricity-bill"
            isUrdu={isUrdu}
            component={<ElectricityBillTool isUrdu={isUrdu} />}
            handleNavigate={handleNavigate}
          />
        } />

        <Route path="/zakat-info" element={
          <>
            <SEOHead title="Zakat Guide Pakistan 2026 – Nisab, Rules & How to Calculate Zakat in PKR" description="Complete Zakat guide for Pakistan ✓ Current Nisab values ✓ SBP zakat deduction rules ✓ Gold & silver Nisab rates 2026. Learn how to calculate & distribute Zakat." canonicalUrl="/zakat-info" />
            <Helmet>
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is the SBP Zakat Nisab for 2026 in Pakistan?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The SBP announces the Zakat Nisab based on the value of 612.32 grams of silver. For 2026, the Nisab is approximately PKR 135,000. Bank accounts exceeding this amount on 1st Ramadan will have 2.5% Zakat deducted automatically."
                      }
                    }
                  ]
                })}
              </script>
            </Helmet>
            <ZakatInfoPage isUrdu={isUrdu} />
          </>
        } />
        <Route path="/contact" element={<><SEOHead title="Contact Us" description="Get in touch with PakCalc team." canonicalUrl="/contact" /><ContactPage isUrdu={isUrdu} /></>} />
        <Route path="/privacy" element={<><SEOHead title="Privacy Policy" description="Privacy Policy for PakCalc." canonicalUrl="/privacy" /><PrivacyPage /></>} />
        <Route path="/terms" element={<><SEOHead title="Terms of Service" description="Terms of Service for PakCalc." canonicalUrl="/terms" /><TermsPage /></>} />
        <Route path="/disclaimer" element={<><SEOHead title="Disclaimer" description="Financial disclaimer for PakCalc." canonicalUrl="/disclaimer" /><DisclaimerPage /></>} />

        {/* Individual Tools */}
        <Route path="/income-tax" element={
          <ToolWrapper
            id="income-tax"
            component={<IncomeTaxTool isUrdu={isUrdu} />}
            isUrdu={isUrdu}
            handleNavigate={handleNavigate}
          />
        } />
        <Route path="/zakat" element={
          <ToolWrapper
            id="zakat"
            component={<ZakatTool />}
            isUrdu={isUrdu}
            handleNavigate={handleNavigate}
          />
        } />
        <Route path="/loan-emi" element={
          <ToolWrapper
            id="loan-emi"
            component={<EMITool />}
            isUrdu={isUrdu}
            handleNavigate={handleNavigate}
          />
        } />
        <Route path="/profit-margin" element={
          <ToolWrapper
            id="profit-margin"
            component={<ProfitMarginTool />}
            isUrdu={isUrdu}
            handleNavigate={handleNavigate}
          />
        } />
        <Route path="/bmi" element={
          <ToolWrapper
            id="bmi"
            component={<BMICalcTool />}
            isUrdu={isUrdu}
            handleNavigate={handleNavigate}
          />
        } />
        <Route path="/investment-return" element={
          <ToolWrapper
            id="investment-return"
            component={<InvestmentReturnTool />}
            isUrdu={isUrdu}
            handleNavigate={handleNavigate}
          />
        } />
        <Route path="/retirement-plan" element={
          <ToolWrapper
            id="retirement-plan"
            component={<RetirementTool />}
            isUrdu={isUrdu}
            handleNavigate={handleNavigate}
          />
        } />
        <Route path="/real-estate-roi" element={
          <ToolWrapper
            id="real-estate-roi"
            component={<RealEstateROITool />}
            isUrdu={isUrdu}
            handleNavigate={handleNavigate}
          />
        } />
        <Route path="/provident-fund" element={
          <ToolWrapper
            id="provident-fund"
            component={<PFTool />}
            isUrdu={isUrdu}
            handleNavigate={handleNavigate}
          />
        } />
        <Route path="/gratuity" element={
          <ToolWrapper
            id="gratuity"
            component={<GratuityTool />}
            isUrdu={isUrdu}
            handleNavigate={handleNavigate}
          />
        } />
        <Route path="/freelancer-tax" element={
          <ToolWrapper
            id="freelancer-tax"
            component={<FreelancerTool />}
            isUrdu={isUrdu}
            handleNavigate={handleNavigate}
          />
        } />
        <Route path="/unit-converter" element={
          <ToolWrapper
            id="unit-converter"
            component={<UnitConverterTool />}
            isUrdu={isUrdu}
            handleNavigate={handleNavigate}
          />
        } />
        <Route path="/cgpa-calc" element={
          <ToolWrapper
            id="cgpa-calc"
            component={<CGPACalculatorTool />}
            isUrdu={isUrdu}
            handleNavigate={handleNavigate}
          />
        } />
        <Route path="/grade-calc" element={
          <ToolWrapper
            id="grade-calc"
            component={<GradeCalculatorTool />}
            isUrdu={isUrdu}
            handleNavigate={handleNavigate}
          />
        } />
        <Route path="/mark-percentage" element={
          <ToolWrapper
            id="mark-percentage"
            component={<MarkPercentageTool />}
            isUrdu={isUrdu}
            handleNavigate={handleNavigate}
          />
        } />

        {/* Fallback */}
        <Route path="*" element={
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">404 - Page Not Found</h1>
            <button onClick={() => navigate('/')} className="text-emerald-600 font-bold hover:underline">Go Home</button>
          </div>
        } />
      </Routes>
    </Layout>
  );
};

// Helper component to wrap tools with common layout and SEO
const ToolWrapper = ({ id, component, isUrdu, handleNavigate }: { id: string, component: React.ReactNode, isUrdu: boolean, handleNavigate: any }) => {
  const navigate = useNavigate();
  const tool = CALCULATORS.find(c => c.id === id);
  const seoMeta = TOOL_SEO_META[id];

  if (!tool) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <SEOHead
        title={seoMeta?.title || `${tool.name} - PakCalc`}
        description={seoMeta?.description || tool.description}
        canonicalUrl={`/${id}`}
      />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div className="space-y-4 w-full">
          <Breadcrumbs />
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-3xl">
              {tool.icon}
            </div>
            <div>
              <h1 className={`text-4xl font-black text-slate-900 tracking-tight ${isUrdu ? 'urdu' : ''}`}>
                {isUrdu ? tool.nameUrdu : tool.name}
              </h1>
              <p className="text-slate-500 font-medium">Free Financial Utility Tool</p>

              <Helmet>
                <script type="application/ld+json">
                  {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": tool.name,
                    "applicationCategory": "FinanceApplication",
                    "operatingSystem": "Any",
                    "url": `https://pakcalc.site/${id}`,
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "PKR"
                    },
                    "description": seoMeta?.description || tool.description,
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "ratingCount": "150",
                      "bestRating": "5"
                    }
                  })}
                </script>
                {seoMeta?.faqs && seoMeta.faqs.length > 0 && (
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "FAQPage",
                      "mainEntity": seoMeta.faqs.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": faq.answer
                        }
                      }))
                    })}
                  </script>
                )}
                {seoMeta?.howTo && (
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "HowTo",
                      "name": seoMeta.howTo.name,
                      "description": seoMeta.howTo.description,
                      "step": seoMeta.howTo.steps.map((step, index) => ({
                        "@type": "HowToStep",
                        "position": index + 1,
                        "name": step.name,
                        "text": step.text
                      }))
                    })}
                  </script>
                )}
              </Helmet>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mb-8">
        {component}
      </div>

      <ToolArticle id={id} isUrdu={isUrdu} />

      <RelatedTools toolIds={getRelatedTools(id)} />

      {/* AI Banner */}
      <div className="mt-16 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-600 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-emerald-500/30">AI-Powered Analysis</div>
            <h4 className="text-3xl font-black mb-4 leading-tight">Need expert financial advice?</h4>
            <p className="text-slate-400 leading-relaxed">Our AI assistant analyzes your results in real-time to provide localized strategies for efficiency and growth in Pakistan.</p>
          </div>
          <div className="flex justify-end">
            <div className="bg-white/10 p-6 rounded-3xl border border-white/10 backdrop-blur-md w-full max-w-sm">
              <div className="flex gap-4 mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 text-xl">✨</div>
                <p className="text-sm font-medium italic text-slate-200">"Every calculation matters. Use our localized tools to optimize your savings."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
