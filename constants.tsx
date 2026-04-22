
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
    seoTitle: 'Income Tax Calculator Pakistan 2025-26 | FBR Salary Tax',
    seoDescription: 'Calculate your FBR income tax for the year 2025-26 instantly. Updated with latest FBR salary tax slabs for Pakistan. Free and accurate.'
  },
  {
    id: 'zakat',
    name: 'Zakat Calculator Pakistan 2025-26',
    nameUrdu: 'زکوٰۃ کیلکولیٹر',
    description: 'Calculate your Zakat obligation based on latest Nisab rates.',
    category: Category.PAK_SPECIFIC,
    icon: '🌙',
    seoTitle: 'Zakat Calculator Pakistan 2025-26 | Latest Nisab Rates',
    seoDescription: 'Calculate your Zakat accurately using the latest Nisab rates for Gold and Silver in Pakistan. Shariah-compliant calculations.'
  },
  {
    id: 'freelancer-tax',
    name: 'Freelancer Income Calculator',
    nameUrdu: 'فری لانسر انکم',
    description: 'Calculate net income after bank charges and FBR export tax.',
    category: Category.BUSINESS,
    icon: '💻',
    seoTitle: 'Freelancer Tax Calculator Pakistan | Export Income Tax',
    seoDescription: 'Calculate your net take-home pay as a freelancer in Pakistan. Deduct bank charges and FBR export taxes easily.'
  },
  {
    id: 'investment-return',
    name: 'ROI & Investment Return (PKR)',
    nameUrdu: 'سرمایہ کاری کا منافع',
    description: 'Predict growth of your savings with compounding interest.',
    category: Category.FINANCIAL,
    icon: '📈',
    seoTitle: 'Investment Return Calculator PKR | ROI & Compounding',
    seoDescription: 'Calculate the future value of your investments in Pakistan. Predict savings growth with our PKR ROI calculator.'
  },
  {
    id: 'retirement-plan',
    name: 'Retirement Planner Pakistan',
    nameUrdu: 'ریٹائرمنٹ کی منصوبہ بندی',
    description: 'Calculate how much you need to save for retirement in PKR.',
    category: Category.FINANCIAL,
    icon: '🏖️',
    seoTitle: 'Retirement Calculator Pakistan | Plan Your Future',
    seoDescription: 'Plan your retirement in Pakistan today. Calculate the corpus needed to sustain your lifestyle after 60, accounting for PKR inflation.'
  },
  {
    id: 'real-estate-roi',
    name: 'Real Estate ROI Calculator',
    nameUrdu: 'ریئل اسٹیٹ منافع',
    description: 'Calculate property gains, rental yield, and FBR taxes.',
    category: Category.FINANCIAL,
    icon: '🏠',
    seoTitle: 'Real Estate ROI Calculator Pakistan | Rental Yield & Taxes',
    seoDescription: 'Analyze your real estate investments in Pakistan. Calculate rental yield, capital gains, and FBR transfer taxes.'
  },
  {
    id: 'provident-fund',
    name: 'Provident Fund (PF) Calculator',
    nameUrdu: 'پروویڈنٹ فنڈ',
    description: 'Estimate your PF balance with employer matching.',
    category: Category.PAK_SPECIFIC,
    icon: '🏦',
    seoTitle: 'Provident fund (PF) Calculator Pakistan | HBL & Private Companies',
    seoDescription: 'Estimate your total Provident Fund accumulation with employer contributions and interest rates in Pakistan.'
  },
  {
    id: 'gratuity',
    name: 'Gratuity Calculator Pakistan',
    nameUrdu: 'گریجویٹی کیلکولیٹر',
    description: 'Calculate end-of-service benefits per Labor Laws 2025.',
    category: Category.PAK_SPECIFIC,
    icon: '📜',
    seoTitle: 'Gratuity Calculator Pakistan 2025 | Official Labor Laws',
    seoDescription: 'Calculate your gratuity entitlement according to Pakistan Labor Laws. Accurate tools for private and public sector employees.'
  },
  {
    id: 'loan-emi',
    name: 'Loan EMI Calculator Pakistan',
    nameUrdu: 'قرض کی قسط کا کیلکولیٹر',
    description: 'Calculate monthly installments for car or personal loans.',
    category: Category.FINANCIAL,
    icon: '🏛️',
    seoTitle: 'Loan EMI Calculator Pakistan | Car & Home Loan Installments',
    seoDescription: 'Check your monthly loan installments (EMI) for car financing or bank loans in Pakistan using our accurate calculator.'
  },
  {
    id: 'profit-margin',
    name: 'Profit Margin Calculator',
    nameUrdu: 'منافع کا مارجن',
    description: 'Find net profit and margin percentages for your business.',
    category: Category.BUSINESS,
    icon: '📊',
    seoTitle: 'Profit Margin Calculator for Business | Calculate Net Profit',
    seoDescription: 'Easily calculate your profit margin and markups. Essential tool for small businesses and e-commerce in Pakistan.'
  },
  {
    id: 'percentage',
    name: 'Percentage Calculator',
    nameUrdu: 'فیصد کیلکولیٹر',
    description: 'Calculate percentage increases, decreases, and basic ratios.',
    category: Category.EVERYDAY,
    icon: '🔢',
    seoTitle: 'Percentage Calculator | Easy Online Percent Tool',
    seoDescription: 'Quickly calculate percentages, increases, and decreases. Simple tool for students and professionals. Global standard precision.'
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
    seoTitle: 'Mortgage Calculator Pakistan | Home Finance Planning',
    seoDescription: 'Estimate your home loan payments in Pakistan. Plan your mortgage with interest rates from local banks like Meezan and HBL.'
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter (Tola, SqFt, Marla)',
    nameUrdu: 'یونٹ کنورٹر',
    description: 'Convert Marla to SqFt, Tola to Grams, and more.',
    category: Category.EVERYDAY,
    icon: '📏',
    seoTitle: 'Unit Converter Pakistan | Tola to Grams & SqFt to Marla',
    seoDescription: 'Convert land measurements and weights unique to Pakistan. Easy converter for Tola, Marla, Kanal, and more.'
  },
  {
    id: 'land-converter',
    name: 'Land Area Converter Pakistan',
    nameUrdu: 'زمین کا کنورٹر',
    description: 'Convert Murabba, Kanal, Marla, Gaz, and SqFt.',
    category: Category.EVERYDAY,
    icon: '🗺️',
    seoTitle: 'Land area Converter Pakistan | Marla to SqFt & Kanal',
    seoDescription: 'The ultimate land area converter for Pakistan. Support for Marla (225/272 sqft), Kanal, and Murabba.'
  },
  {
    id: 'bmi',
    name: 'BMI Calculator',
    nameUrdu: 'بی ایم آئی کیلکولیٹر',
    description: 'Check your Body Mass Index for health recommendations.',
    category: Category.EVERYDAY,
    icon: '⚖️',
    seoTitle: 'BMI Calculator Pakistan | Body Mass Index & Health',
    seoDescription: 'Check your BMI instantly. Understand your height-to-weight ratio with Pakistan-specific health guidelines and WHO standards.'
  },
  {
    id: 'cgpa-calc',
    name: 'CGPA to Percentage Calculator',
    nameUrdu: 'سی جی پی اے کیلکولیٹر',
    description: 'Convert your CGPA to Percentage accurately for all university grading scales.',
    category: Category.EDUCATION,
    icon: '🎓',
    seoTitle: 'CGPA to Percentage Calculator | Convert CGPA Accurately',
    seoDescription: 'Convert your CGPA to percentage easily using our highly accurate calculator. Ideal for all grading scales including 10-point and 4-point.'
  },
  {
    id: 'grade-calc',
    name: 'Grade Calculator',
    nameUrdu: 'گریڈ کیلکولیٹر',
    description: 'Calculate your academic grade based on marks obtained.',
    category: Category.EDUCATION,
    icon: '📝',
    seoTitle: 'Grade Calculator | Calculate Your Marks & Grades',
    seoDescription: 'Find your final grade based on your marks. Useful for O/A Levels, Matric, and Intermediate students in Pakistan.'
  },
  {
    id: 'mark-percentage',
    name: 'Student Marks Percentage',
    nameUrdu: 'مارکس فیصد کیلکولیٹر',
    description: 'Convert your marks into percentage instantly.',
    category: Category.EDUCATION,
    icon: '💯',
    seoTitle: 'Marks Percentage Calculator | Boards & University Results',
    seoDescription: 'Quickly convert your board or university marks into percentages. Perfect for Matric, Inter, and Bachelor students.'
  },
  {
    id: 'electricity-bill',
    name: 'Electricity Bill Calculator 2025',
    nameUrdu: 'بجلی کا بل کیلکولیٹر',
    description: 'Calculate LESCO, MEPCO, IESCO bill with latest NEPRA tariffs.',
    category: Category.PAK_SPECIFIC,
    icon: '⚡',
    seoTitle: 'Electricity Bill Calculator Pakistan | LESCO, K-Electric, MEPCO',
    seoDescription: 'Calculate your monthly electricity bill based on latest NEPRA unit rates for 2025. Support for all DISCOs like LESCO, IESCO, and PESCO.'
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
