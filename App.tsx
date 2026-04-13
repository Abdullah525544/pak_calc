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
  FreelancerTool, UnitConverterTool, LandConverterTool, RealEstateROITool,
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
    title: 'Income Tax Calculator Pakistan 2026 - Free FBR Salary Tax Slabs 2025-26',
    description: 'Calculate your FBR income tax for 2025-2026 in seconds. Updated salary tax slabs, legal exemptions and tax-saving tips. Used by 10,000+ Pakistani filers.',
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
    title: 'Zakat Calculator Pakistan 2026 | Accurate Nisab Rules',
    description: 'Fulfil your religious duty accurately. Calculate your Zakat for Ramadan 2025-26 using the latest Pakistani gold and silver Nisab rates. Calculate yours free!',
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
    title: 'Freelancer Tax Calculator Pakistan 2026 - IT Export Income and FBR Rules',
    description: 'See your exact monthly take-home income after bank charges, FBR export tax and conversion fees. Per month income estimator for Fiverr, Upwork and remote workers in Pakistan.',
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
    title: 'ROI & Investment Return Calculator Pakistan 2026',
    description: 'See your exact future wealth and compounding growth. Predict your investment returns for mutual funds, stocks, and property in Pakistan with compounding interest and inflation adjustment.',
    faqs: [
      { question: 'How to calculate investment profit in Pakistan?', answer: 'Investment profit is calculated by subtracting the initial cost from the final value. For compounded returns, use our calculator to see how your wealth grows over time with factors like annual rates and duration.' },
      { question: 'What is a good ROI for property in Pakistan?', answer: 'A good rental yield in major Pakistani cities like Karachi or Lahore is typically 4-6% annually, while capital appreciation can range from 10% to 20% in developing sectors.' }
    ],
    howTo: {
      name: "How to Predict Your Investment Growth",
      description: "Step-by-step guide to calculating your expected returns using our ROI tool.",
      steps: [
        { name: "Enter Initial Amount", text: "Input the starting capital you plan to invest." },
        { name: "Set Expected Rate", text: "Choose the annual percentage return you expect (e.g., 15% for mutual funds)." },
        { name: "Choose Duration", text: "Select the number of years you plan to hold the investment." },
        { name: "Review Compounded Growth", text: "Observe the final maturity value and the total profit earned." }
      ]
    }
  },
  'retirement-plan': {
    title: 'Retirement Savings Calculator Pakistan 2026 | Pension & VPS Planner',
    description: 'Secure your future. Calculate the exact corpus needed for retirement in Pakistan, accounting for inflation and monthly expenses. Plan your VPS today.',
    faqs: [
      { question: 'How much pension will I get in Pakistan?', answer: 'Pension amounts depend on your service years and last drawn salary. For private sector workers, Voluntary Pension Schemes (VPS) are recommended to build a substantial retirement fund.' },
      { question: 'Is VPS better than Gratuity?', answer: 'VPS is an investment-linked saving plan that offers tax credits and growth, while Gratuity is a lump-sum end-of-service benefit provided by employers. Both are essential for a robust retirement plan.' }
    ],
    howTo: {
      name: "How to Plan Your Retirement Corpus",
      description: "Follow these steps to determine how much you need to save for a comfortable life after 60.",
      steps: [
        { name: "Define Monthly Expenses", text: "Estimate what your current monthly cost of living is." },
        { name: "Estimate Inflation", text: "Account for Pakistan's average inflation (usually 8-12%) to see future costs." },
        { name: "Set Retirement Age", text: "Decide when you want to stop working (standard is 60 in Pakistan)." },
        { name: "View Required Savings", text: "The tool calculates the total 'nest egg' you need to sustain your lifestyle." }
      ]
    }
  },
  'real-estate-roi': {
    title: 'Real Estate ROI Calculator Pakistan 2026 | Rental Yield & FBR Taxes',
    description: 'Analyze property deals in Karachi, Lahore, and Islamabad. Calculate rental yields, capital gains, and FBR transfer taxes for 2026. Get accurate ROI now.',
    faqs: [
      { question: 'What are FBR property transfer taxes in 2026?', answer: 'For 2025-26, FBR transfer taxes for filers are approximately 3% and significantly higher for non-filers (up to 12% or more). Always check latest FBR active tax payer list (ATL) status.' },
      { question: 'How is rental yield calculated in Karachi?', answer: 'Rental Yield = (Monthly Rent × 12) / Total Property Value. In Karachi, average residential yields are 3-5%, while commercial shops can go higher.' }
    ],
    howTo: {
      name: "How to Analyze a Property Deal",
      description: "A comprehensive guide to evaluating real estate investments in Pakistan.",
      steps: [
        { name: "Input Buy Price", text: "Enter the total purchasing cost of the property including agent fees." },
        { name: "Factor in Taxes", text: "Select your filer status to apply correct FBR Stamp Duty and CVT." },
        { name: "Estimate Monthly Rent", text: "Enter the expected rent the property would fetch in the current market." },
        { name: "Calculate Annual Yield", text: "Review the net ROI after accounting for maintenance and tax outlays." }
      ]
    }
  },
  'provident-fund': {
    title: 'Provident Fund Calculator Pakistan 2026 | PF Balance & Interest',
    description: 'Estimate your Provident Fund (PF) balance with employer matching. Calculate monthly deductions and interest rates in Pakistan (FBR approved). Free PF tool.',
    faqs: [
      { question: 'Is PF deducted on basic or gross salary?', answer: 'In Pakistan, Provident Fund is typically deducted as 8.33% (1/12th) of your basic salary. Your employer matches this contribution, making the total monthly addition 16.67% of basic salary.' },
      { question: 'Can I withdraw PF before retirement in Pakistan?', answer: 'Yes, you can usually withdraw a portion of your PF balance for specific needs like house construction or medical emergencies, subject to your organization\'s rules and FBR regulations.' }
    ],
    howTo: {
      name: "How to Estimate Your PF Balance",
      description: "Step-by-step guide to projecting your provident fund growth until retirement.",
      steps: [
        { name: "Enter Monthly Contribution", text: "Input the amount deducted from your basic salary each month." },
        { name: "Factor in Interest Rate", text: "Enter the annual interest rate (e.g., 10-14% for major funds)." },
        { name: "Set Years to Retirement", text: "Select how many years you have left until you retire." },
        { name: "See Payout Projection", text: "The calculator shows your estimated total balance including employer matching." }
      ]
    }
  },
  'gratuity': {
    title: 'Gratuity Calculator Pakistan 2026 | Official Labor Law Formula',
    description: 'Calculate your end-of-service gratuity based on 2025-26 Pakistan labor laws. Free tool for private and govt employees. Check your resignation payout now.',
    faqs: [
      { question: 'Am I eligible for gratuity after 2 years?', answer: 'Yes, according to Pakistan labor laws, employees are typically eligible for gratuity after completing one year of continuous service.' },
      { question: 'How to calculate gratuity for govt employees in Pakistan?', answer: 'Government gratuity formulas may vary slightly but generally follow: (Last drawn basic salary × service years). Use our tool for a quick estimate based on standard rules.' }
    ],
    howTo: {
      name: "How to Calculate Your End-of-Service Gratuity",
      description: "Easy steps to find your legal gratuity entitlement in Pakistan.",
      steps: [
        { name: "Check Eligibility (1yr+)", text: "Ensure you have completed at least one year of continuous service." },
        { name: "Input Last Basic Salary", text: "Enter your most recent monthly basic salary (before allowances)." },
        { name: "Enter Total Service Years", text: "Input the total number of years you served at the company." },
        { name: "Calculate Final Benefit", text: "Click calculate to see your estimated redundancy or retirement payout." }
      ]
    }
  },
  'loan-emi': {
    title: 'Loan EMI Calculator Pakistan 2026 | KIBOR car & home loan',
    description: 'Calculate monthly EMI installments for car, home, or personal loans in Pakistan. Support for latest KIBOR rates (HBL, Meezan, Alfalah). Plan your loan free.',
    faqs: [
      { question: 'What is the latest KIBOR rate in Pakistan?', answer: 'KIBOR (Karachi Interbank Offered Rate) fluctuates daily. Banks usually charge KIBOR + a spread of 2-5%. Check our tool for the latest estimated monthly payments.' },
      { question: 'How much is the car loan down payment?', answer: 'In Pakistan, down payments usually range from 15% to 30% of the car\'s total value, depending on SBP regulations and the bank\'s policy.' }
    ],
    howTo: {
      name: "How to Calculate Your Monthly Loan Installment (EMI)",
      description: "Analyze your loan repayment schedule in simple steps.",
      steps: [
        { name: "Enter Loan Amount", text: "Input the total principal amount you intend to borrow." },
        { name: "Select Interest Rate", text: "Enter the annual percentage rate (including bank spread)." },
        { name: "Choose Tenure (Months)", text: "Select the repayment period in months (e.g., 60 months for 5 years)." },
        { name: "Check Repayment Schedule", text: "Review the full breakdown of interest vs principal in your monthly payments." }
      ]
    }
  },
  'profit-margin': {
    title: 'Profit Margin Calculator 2026 | Business Markup & Profit Finder',
    description: 'Maximize your business profits today. Instantly calculate net profit margins, markups, and gross profit to scale your business in Pakistan. Get accurate, action-oriented financial data in seconds!',
    faqs: [
      { question: 'How to calculate profit margin for a business in Pakistan?', answer: 'Profit Margin = (Revenue - Cost) / Revenue × 100. For example, if you buy a product for PKR 800 and sell for PKR 1,000, your profit margin is 20%. Markup would be 25% (200/800 × 100). Our calculator instantly shows both margin and markup.' },
      { question: 'What is a good profit margin for retail in Pakistan?', answer: 'In Pakistan, retail margins typically range from 10% to 30%, depending on the industry. Wholesalers usually operate on thinner margins of 2-5%, while services can be much higher.' }
    ],
    howTo: {
      name: "How to Calculate Profit Margin for your Business",
      description: "Simple steps to evaluate your sales profitability and markup percentages.",
      steps: [
        { name: "Enter Cost Price", text: "Input the total cost spent to produce or purchase the item." },
        { name: "Set Selling Price", text: "Enter the final price you charge the customer." },
        { name: "Analyze Net Profit", text: "The tool instantly reveals your gross and net profit in PKR." },
        { name: "Check Margin vs Markup", text: "View both calculations to understand your business overhead and growth." }
      ]
    }
  },
  'unit-converter': {
    title: 'Murabba to Kanal Converter | Land Units Pakistan',
    description: 'Quickly convert Pakistani land units like Murabba to Kanal, Marla, and Acres. Use our free, accurate 2025-26 calculator for your property deals. Try it now!',
    faqs: [
      { question: 'How many Kanal in 1 Murabba in Pakistan?', answer: '1 Murabba = 25 Acres = 200 Kanal in Pakistan. A Murabba is commonly used for agricultural land measurement in Punjab. 200 Murabba would be 40,000 Kanal or 5,000 Acres.' },
      { question: 'How many Marla in 1 Kanal?', answer: '1 Kanal = 20 Marla in Pakistan. 1 Marla = 272.25 sq ft. So 1 Kanal = 5,445 sq ft. These are the standard land measurement units used across Punjab and KPK.' },
      { question: 'How many Marla in 40 Gaz?', answer: '40 Gaz (Square Yards) is approximately equal to 1.32 Marla in Pakistan. 1 Marla = 30.25 Gaz/Square Yards. This conversion is commonly needed when buying plots in Pakistan.' }
    ],
    howTo: {
      name: "How to Convert Land Units in Pakistan",
      description: "Accurately convert between Marla, Kanal, Acre, and Murabba for land deals.",
      steps: [
        { name: "Select Input Unit", text: "Choose the unit you currently have (e.g., Murabba or Marla)." },
        { name: "Enter Quantity", text: "Input the numerical value you want to convert." },
        { name: "Select Target Unit", text: "Choose the unit you want to see the results in (e.g., Kanal)." },
        { name: "View Conversions", text: "The tool instantly displays the result along with other common Pakistani land metrics." }
      ]
    }
  },
  'land-converter': {
    title: 'Land Area Converter Pakistan 2026 | Murabba, Kanal, Marla, Gaz',
    description: 'Instantly convert Murabba to Kanal, Marla to Square Feet, and Gaz to Sarsahi. Accurate Pakistani land measurements for real estate and property deals.',
    faqs: [
      { question: 'How much is 1 Murabba in Kanal?', answer: 'In Pakistan, 1 Murabba is equal to 200 Kanal or 25 Acres. It is primarily used for large agricultural land.' },
      { question: 'How many square feet in 1 Marla?', answer: 'In most parts of Pakistan, 1 Marla is equal to 272.25 square feet (especially in villages and older societies). However, in modern housing societies in Lahore, Islamabad, and Karachi, 1 Marla is often standardized as 225 square feet.' }
    ],
    howTo: {
      name: "How to Convert Local Pakistan Land Units",
      description: "Step-by-step guide to calculating accurate land sizes for housing and agriculture.",
      steps: [
        { name: "Select Unit", text: "Choose from Murabba, Kanal, Marla, Gaz, Sq Ft, or Sarsahi." },
        { name: "Enter Value", text: "Type in the exact size of the land." },
        { name: "Read Output", text: "Instantly see the converted sizes in all relevant local units." }
      ]
    }
  },
  'bmi': {
    title: 'BMI Calculator Pakistan 2026 | Health & Weight Check Tool',
    description: 'Find out if you are underweight, normal, or overweight instantly 100% free. Check your BMI with Pakistan-specific health tips and weight management advice.',
    faqs: [
      { question: 'How to calculate BMI in Pakistan?', answer: 'BMI = Weight (kg) / Height (m²). For example, if you weigh 70kg and are 1.75m tall, your BMI = 70 / (1.75 × 1.75) = 22.86 (Normal weight). BMI categories: Under 18.5 = Underweight, 18.5-24.9 = Normal, 25-29.9 = Overweight, 30+ = Obese.' },
      { question: 'What is a healthy weight for 5\'8 in Pakistan?', answer: 'For a height of 5\'8" (1.73m), a healthy BMI-based weight range is approximately 56kg to 74kg.' }
    ],
    howTo: {
      name: "How to Check Your Body Mass Index (BMI)",
      description: "Understand your weight category for better health in Pakistan.",
      steps: [
        { name: "Select Your Gender", text: "Choose male or female as physiology affects health recommendations." },
        { name: "Enter Your Weight", text: "Input your current weight in kilograms for accuracy." },
        { name: "Input Your Height", text: "Enter your height in centimeters or feet/inches." },
        { name: "Observe Health Category", text: "Instantly see if you fall into the healthy, overweight, or underweight bracket." }
      ]
    }
  },
  'cgpa-calc': {
    title: 'CGPA Calculator Pakistan 2026 | HEC GPA Standards Tool',
    description: 'Calculate CGPA and SGPA based on HEC Pakistan standards. Free GPA calculator for university students. Convert percentage to GPA easily in seconds.',
    faqs: [
      { question: 'How to calculate GPA in Pakistan?', answer: 'In Pakistan, GPA is calculated by: 1) Multiplying each course\'s grade points by its credit hours, 2) Adding all quality points, 3) Dividing by total credit hours. HEC uses 4.0 scale where A = 4.0, B+ = 3.3, B = 3.0, etc.' },
      { question: 'How to convert GPA to percentage for HEC?', answer: 'HEC has a standard conversion formula. Generally, a 3.0 GPA is roughly equal to 70-75%, while a 4.0 is 85-90%+. Our tool helps you see the comparison instantly.' }
    ],
    howTo: {
      name: "How to Calculate Your Semester GPA",
      description: "Quick steps for Pakistani university students to find their SGPA/CGPA.",
      steps: [
        { name: "Enter Course Credit Hours", text: "Input the credit weighting for each subject." },
        { name: "Select Grade Points", text: "Input the grade points achieved (e.g., 4.0 for A, 3.3 for B+)." },
        { name: "Repeat for All Subjects", text: "Add all courses taken in the semester." },
        { name: "Calculate SGPA/CGPA", text: "View your final average and total quality points." }
      ]
    }
  },
  'grade-calc': {
    title: 'Grade Calculator Pakistan 2026 | Matric, Inter & Uni Result Finder',
    description: 'Find your academic grade from marks obtained. Matric, Inter, O/A Level grading systems supported for all Pakistan boards. Fast, accurate Grade Finder.',
    faqs: [
      { question: 'How is Matric grade calculated in BISE Lahore?', answer: 'In Pakistan\'s Matric system: A1 (Outstanding) = 80%+, A (Excellent) = 70-79%, B (Very Good) = 60-69%. Our tool automates this for all boards including Punjab, Sindh, KPK, and Balochistan.' },
      { question: 'What marks are needed for A+ in Inter?', answer: 'For FSc/HSSC, an A+ usually requires 80% or 85% depending on the specific board\'s policy. Use our calculator to see your exact classification.' }
    ],
    howTo: {
      name: "How to Find Your Academic Grade",
      description: "Simple steps to check your result grade in Pakistan.",
      steps: [
        { name: "Select Education System", text: "Choose between Matric, Inter, or University standards." },
        { name: "Enter Obtained Marks", text: "Input the marks you secured in your exams." },
        { name: "Enter Total Marks", text: "Input the maximum possible marks (e.g., 1100 or 1200)." },
        { name: "View Calculated Grade", text: "The tool instantly shows your percentage and letter grade." }
      ]
    }
  },
  'mark-percentage': {
    title: 'Marks Percentage Calculator — Matric, HSSC, SSC 2026',
    description: 'Enter marks obtained and total marks for instant %. Calculate your Matric (SSC) and Inter (HSSC) marks percentage instantly out of 1100 or 1200.',
    faqs: [
      { question: 'How to calculate marks percentage out of 1100?', answer: 'To calculate percentage out of 1100: Divide your obtained marks by 1100 and multiply by 100. Formula: (Obtained Marks / 1100) × 100. For example, if you got 935 marks, your percentage is (935/1100) × 100 = 85%.' },
      { question: 'What is the percentage of 850 out of 1100 marks?', answer: '850 out of 1100 marks percentage = (850 / 1100) × 100 = 77.27%. This is usually considered an A grade in Pakistan board exams.' },
      { question: 'How to calculate SSC percentage for BISE Lahore/Board?', answer: 'Simply enter your obtained marks and total marks (usually 1100) into our tool. It works for all boards including BISE Lahore, Rawalpindi, and Karachi.' }
    ],
    howTo: {
      name: "How to Calculate Marks Percentage for Pakistan Board Exams (Matric/Inter)",
      description: "Quick guide for SSC/HSSC students to convert marks into percentage.",
      steps: [
        { name: "Enter Secured Marks", text: "Enter the total marks you obtained in your result (e.g., 940)." },
        { name: "Enter Maximum Marks", text: "Enter the total marks possible (usually 1100 for Matric/Inter or 1200)." },
        { name: "Get Instant Result", text: "Click calculate to see your percentage up to two decimal points instantly." },
        { name: "See Your Grade", text: "The calculator will also show your grade classification based on Pakistan board criteria." }
      ]
    }
  },
  'electricity-bill': {
    title: 'Bijli Bill Calculator Pakistan 2026 — Any Watt, Any Hours',
    description: 'Calculate instantly: 300 watt 8 hours bill Pakistan, 1.5 unit electricity cost, or total WAPDA monthly bills online. See precise appliance costs now.',
    faqs: [
      { question: 'How to calculate electricity bill in Pakistan?', answer: 'To calculate your bill of electricity in Pakistan, use the WAPDA unit calculator. Simply enter your consumed units. The tool evaluates the electricity bill calculation formula in Pakistan by applying the appropriate NEPRA slab, adding the Fuel Price Adjustment (FPA), 18% GST, and other surcharges.' },
      { question: 'What is the WAPDA unit price in Pakistan for commercial and residential?', answer: 'WAPDA per unit price varies. For residential protected consumers, it starts very low (Rs. 10.54/unit). Non-protected residential starts at Rs. 22.44/unit. WAPDA commercial unit price is typically much higher and mostly a flat rate ranging from Rs. 39 to Rs. 50+ per unit depending on the exact load and tariff category (like A-2).' },
      { question: 'How do I use a Watts to Units calculator?', answer: 'The watt to unit formula is simple: Units (kWh) = (Watts × Hours Used × Days) / 1000. For example, a 1000-watt AC running for 8 hours a day for 30 days will consume 240 units.' },
      { question: 'How can I check my electricity bill online (IESCO, FESCO, MEPCO)?', answer: 'You can check your light or power bill online via the official portal of your respective DISCO. For an IESCO online bill check, visit the IESCO portal with your 14-digit reference number. The same process applies for a FESCO online bill calculator or MEPCO bill tracking. Our tool helps you accurately predict that bill before it arrives.' }
    ],
    howTo: {
      name: "How to Calculate Bill of Electricity in Pakistan",
      description: "A step-by-step guide to calculating your electricity bill using our online WAPDA unit calculator.",
      steps: [
        { name: "Convert Watts to Units (Optional)", text: "If you don't know your units, use our watts to units calculator feature by entering your appliances' wattage and usage hours." },
        { name: "Select Your Connection Type", text: "Choose between a Residential or Commercial WAPDA connection, as the commercial unit price is different." },
        { name: "Enter Consumed Units", text: "Input your total consumed units into the online bill calculator." },
        { name: "Review the Bill Breakdown", text: "The calculator instantly applies the exact WAPDA per unit rate, FPA, and GST to give you your final estimated bill amount." }
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
              includeWebSite={true}
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
            <SEOHead title="FBR Salary Tax Slabs 2025-26 | Latest Pakistan Rates" description="Avoid FBR penalties. View the official 2025-26 FBR salary tax slabs for Pakistan. See exactly how much income tax will be deducted from your salary. Check now!" canonicalUrl="/slabs" />
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
            <SEOHead title="Zakat Nisab Rules 2025-26: Complete Guide for Pakistan" description="Completely confused about Nisab? Read our easy 2025-26 guide to Zakat rules in Pakistan. Learn exactly who pays, what is eligible, and current gold rates." canonicalUrl="/zakat-info" />
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
            component={<ZakatTool isUrdu={isUrdu} />}
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
            component={<FreelancerTool isUrdu={isUrdu} />}
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
        <Route path="/land-converter" element={
          <ToolWrapper
            id="land-converter"
            component={<LandConverterTool />}
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
        faqs={seoMeta?.faqs}
        howTo={seoMeta?.howTo}
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
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 text-xl">🤖</div>
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
