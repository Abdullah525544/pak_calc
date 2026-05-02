
import React from 'react';
import { Category, Calculator } from './types';

export const CALCULATORS: Calculator[] = [
  {
    id: 'income-tax',
    name: 'Income Tax Calculator Pakistan',
    nameUrdu: 'انکم ٹیکس کیلکولیٹر',
    description: 'Calculate FBR tax for 2025-2026 based on latest salary slabs.',
    category: Category.PAK_SPECIFIC,
    icon: '💰',
    seoTitle: 'Income Tax Calculator Pakistan 2026 — FBR Salary Tax (Salaried & Business)',
    seoDescription: 'Calculate your FBR income tax for 2025-26. Enter monthly salary → get annual tax, monthly deduction & tax bracket instantly.'
  },
  {
    id: 'zakat',
    name: 'Zakat Calculator Pakistan 2025-26',
    nameUrdu: 'زکوٰۃ کیلکولیٹر',
    description: 'Calculate your Zakat obligation based on latest Nisab rates.',
    category: Category.PAK_SPECIFIC,
    icon: '🌙',
    seoTitle: 'Zakat Calculator Pakistan 2026 — SBP Nisab Gold, Silver & Cash',
    seoDescription: 'Calculate Zakat on savings, gold, silver & property using SBP nisab 2026. Free & instant. Updated for current rates.'
  },
  {
    id: 'freelancer-tax',
    name: 'Freelancer Income Calculator',
    nameUrdu: 'فری لانسر انکم',
    description: 'Calculate net income after bank charges and FBR export tax.',
    category: Category.BUSINESS,
    icon: '💻',
    seoTitle: 'Freelancer Tax Calculator Pakistan 2026 — FBR Income Tax on Remittances',
    seoDescription: 'Calculate income tax on freelance earnings in Pakistan. Enter annual income → get FBR tax, exemptions & net take-home. Updated 2026.'
  },
  {
    id: 'investment-return',
    name: 'ROI & Investment Return (PKR)',
    nameUrdu: 'سرمایہ کاری کا منافع',
    description: 'Predict growth of your savings with compounding interest.',
    category: Category.FINANCIAL,
    icon: '📈',
    seoTitle: 'ROI & Investment Return Calculator Pakistan 2026 — Stocks, Property, Savings',
    seoDescription: 'Calculate return on investment in PKR. Enter invested amount & profit → get % return & annual yield instantly.'
  },
  {
    id: 'retirement-plan',
    name: 'Retirement Planner Pakistan',
    nameUrdu: 'ریٹائرمنٹ کی منصوبہ بندی',
    description: 'Calculate how much you need to save for retirement in PKR.',
    category: Category.FINANCIAL,
    icon: '🏖️',
    seoTitle: 'Retirement Planning Calculator Pakistan — Savings & Pension Estimate',
    seoDescription: 'Plan your retirement in PKR. Enter age, savings & expected return → see how much you need to retire comfortably in Pakistan.'
  },
  {
    id: 'real-estate-roi',
    name: 'Real Estate ROI Calculator',
    nameUrdu: 'ریئل اسٹیٹ منافع',
    description: 'Calculate property gains, rental yield, and FBR taxes.',
    category: Category.FINANCIAL,
    icon: '🏠',
    seoTitle: 'Real Estate ROI Calculator Pakistan 2026 | Rental Yield & FBR Taxes',
    seoDescription: 'Analyze property deals in Karachi, Lahore, and Islamabad. Calculate rental yields, capital gains, and FBR transfer taxes for 2026.'
  },
  {
    id: 'provident-fund',
    name: 'Provident Fund (PF) Calculator',
    nameUrdu: 'پروویڈنٹ فنڈ',
    description: 'Estimate your PF balance with employer matching.',
    category: Category.PAK_SPECIFIC,
    icon: '🏦',
    seoTitle: 'Provident Fund Calculator Pakistan 2026 — PF Deduction & Employer Contribution',
    seoDescription: 'Calculate your monthly PF deduction and employer contribution instantly. Enter basic salary → get exact amounts. Updated for Pakistan 2026.'
  },
  {
    id: 'gratuity',
    name: 'Gratuity Calculator Pakistan',
    nameUrdu: 'گریجویٹی کیلکولیٹر',
    description: 'Calculate end-of-service benefits per Labor Laws 2025.',
    category: Category.PAK_SPECIFIC,
    icon: '📜',
    seoTitle: 'Gratuity Calculator Pakistan 2026 — End of Service Pay (Labour Law)',
    seoDescription: 'Calculate exact gratuity amount under Pakistan Labour Law. Enter last salary + years served → instant result. Updated 2026.'
  },
  {
    id: 'loan-emi',
    name: 'Loan EMI Calculator Pakistan',
    nameUrdu: 'قرض کی قسط کا کیلکولیٹر',
    description: 'Calculate monthly installments for car or personal loans.',
    category: Category.FINANCIAL,
    icon: '🏛️',
    seoTitle: 'Loan EMI Calculator Pakistan 2026 — Car, Home & Personal Loan',
    seoDescription: 'Calculate monthly installment for any loan. Enter amount, interest rate & tenure → instant EMI. Supports HBL, MCB, Meezan & all banks.'
  },
  {
    id: 'profit-margin',
    name: 'Profit Margin Calculator',
    nameUrdu: 'منافع کا مارجن',
    description: 'Find net profit and margin percentages for your business.',
    category: Category.BUSINESS,
    icon: '📊',
    seoTitle: 'Profit Margin Calculator Pakistan — Net %, Gross & Markup Free',
    seoDescription: 'Enter cost price & selling price → get net profit %, gross margin & markup instantly. Free for Pakistani businesses & freelancers.'
  },
  {
    id: 'percentage',
    name: 'Percentage Calculator',
    nameUrdu: 'فیصد کیلکولیٹر',
    description: 'Calculate percentage increases, decreases, and basic ratios.',
    category: Category.EVERYDAY,
    icon: '🔢',
    seoTitle: 'Percentage Calculator Pakistan — Increase, Decrease & Difference Free',
    seoDescription: 'Calculate percentage increase, decrease, difference or value instantly. Simple & free percentage tool for students, business & daily use.'
  },
  {
    id: 'password-gen',
    name: 'Secure Password Generator',
    nameUrdu: 'پاس ورڈ جنریٹر',
    description: 'Create strong, random passwords to secure your online accounts.',
    category: Category.EVERYDAY,
    icon: '🔐',
    seoTitle: 'Password Generator | Create Secure Random Passwords',
    seoDescription: 'Generate strong, unbreakable passwords for your security. Customizable length and characters. Zero data storage.'
  },
  {
    id: 'mortgage',
    name: 'Mortgage Calculator',
    nameUrdu: 'مارگیج کیلکولیٹر',
    description: 'Calculate home loan installments, interest rates, and loan terms.',
    category: Category.FINANCIAL,
    icon: '🏡',
    seoTitle: 'Mortgage Calculator Pakistan 2026 — Home Loan Monthly Payment',
    seoDescription: 'Calculate monthly mortgage payment on home loan. Enter property price, down payment & bank rate → instant installment. HBL, MCB, Meezan supported.'
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter (Tola, SqFt, Marla)',
    nameUrdu: 'یونٹ کنورٹر',
    description: 'Convert Marla to SqFt, Tola to Grams, and more.',
    category: Category.EVERYDAY,
    icon: '📏',
    seoTitle: 'Unit Converter Pakistan — Tola, Marla, Kanal, SqFt & Grams',
    seoDescription: 'Convert units instantly. Support for local Pakistani measurements like Tola to Grams, SqFt to Marla. Free, accurate unit conversion app.'
  },
  {
    id: 'land-converter',
    name: 'Land Area Converter Pakistan',
    nameUrdu: 'زمین کا کنورٹر',
    description: 'Convert Murabba, Kanal, Marla, Gaz, and SqFt.',
    category: Category.EVERYDAY,
    icon: '🗺️',
    seoTitle: 'Land Unit Converter Pakistan — Murabba, Kanal, Marla, Gaz, Sarsahi',
    seoDescription: 'Convert murabba to kanal, marla to gaz, kanal to acre instantly. Pakistan land unit calculator for Punjab, Sindh, KPK & all provinces.'
  },
  {
    id: 'bmi',
    name: 'BMI Calculator',
    nameUrdu: 'بی ایم آئی کیلکولیٹر',
    description: 'Check your Body Mass Index for health recommendations.',
    category: Category.EVERYDAY,
    icon: '⚖️',
    seoTitle: 'BMI Calculator Pakistan — Check Body Mass Index Free (kg & cm)',
    seoDescription: 'Calculate your BMI in kg/cm. Know if you are underweight, healthy, overweight or obese. Free BMI checker updated for 2026.'
  },
  {
    id: 'cgpa-calc',
    name: 'CGPA to Percentage Calculator',
    nameUrdu: 'سی جی پی اے کیلکولیٹر',
    description: 'Convert your CGPA to Percentage accurately for all university grading scales.',
    category: Category.EDUCATION,
    icon: '🎓',
    seoTitle: 'CGPA Calculator Pakistan — Convert CGPA to Percentage (HEC Scale)',
    seoDescription: 'Convert CGPA to percentage using HEC Pakistan formula. Enter grades → get CGPA & equivalent percentage for university admission.'
  },
  {
    id: 'grade-calc',
    name: 'Grade Calculator',
    nameUrdu: 'گریڈ کیلکولیٹر',
    description: 'Calculate your academic grade based on marks obtained.',
    category: Category.EDUCATION,
    icon: '📝',
    seoTitle: 'Grade Calculator Pakistan — Marks to GPA & Letter Grade Converter',
    seoDescription: 'Convert marks to GPA or letter grade. Works for all Pakistani universities — HEC, COMSATS, UET, FAST, IBA grading systems.'
  },
  {
    id: 'mark-percentage',
    name: 'Student Marks Percentage',
    nameUrdu: 'مارکس فیصد کیلکولیٹر',
    description: 'Convert your marks into percentage instantly.',
    category: Category.EDUCATION,
    icon: '💯',
    seoTitle: 'Marks Percentage Calculator Pakistan — Matric, SSC, HSSC 2026',
    seoDescription: 'Enter obtained marks & total marks → get percentage instantly. Works for Matric 1100, HSSC 1200, SSC, FBISE and all Pakistan boards.'
  },
  {
    id: 'electricity-bill',
    name: 'Electricity Bill Calculator 2025',
    nameUrdu: 'بجلی کا بل کیلکولیٹر',
    description: 'Calculate LESCO, MEPCO, IESCO bill with latest NEPRA tariffs.',
    category: Category.PAK_SPECIFIC,
    icon: '⚡',
    seoTitle: 'Electricity Bill Calculator Pakistan 2026 — WAPDA LESCO FESCO Units',
    seoDescription: 'Calculate monthly electricity bill by units consumed. Supports LESCO, FESCO, GEPCO, PESCO, MEPCO. NEPRA 2026 tariff rates included.'
  }
];

export const SALARIED_TAX_SLABS = [
  { threshold: 600000, rate: 0, fixed: 0 },
  { threshold: 1200000, rate: 5, fixed: 0 },
  { threshold: 2200000, rate: 15, fixed: 30000 },
  { threshold: 3200000, rate: 25, fixed: 180000 },
  { threshold: 4100000, rate: 30, fixed: 430000 },
  { threshold: Infinity, rate: 35, fixed: 700000 }
];

export const NISAB_GOLD_GRAMS = 87.48;
export const NISAB_SILVER_GRAMS = 612.36;
