
import React from 'react';
import { Category, Calculator } from './types';

export const CALCULATORS: Calculator[] = [
  {
    id: 'income-tax',
    name: 'Income Tax Calculator',
    nameUrdu: 'انکم ٹیکس کیلکولیٹر',
    description: 'Calculate FBR tax for 2025-2026 based on latest slabs.',
    category: Category.PAK_SPECIFIC,
    icon: '🏢'
  },
  {
    id: 'zakat',
    name: 'Zakat Calculator Pakistan (Updated Nisab Rates 2025-26)',
    nameUrdu: 'زکوٰۃ کیلکولیٹر',
    description: 'Calculate your Zakat obligation based on Islamic principles.',
    category: Category.PAK_SPECIFIC,
    icon: '🕌'
  },
  {
    id: 'freelancer-tax',
    name: 'Freelancer Income',
    nameUrdu: 'فری لانسر انکم',
    description: 'Calculate net income after bank charges and FBR export tax.',
    category: Category.BUSINESS,
    icon: '💻'
  },
  {
    id: 'investment-return',
    name: 'ROI & Investment Return Calculator (PKR)',
    nameUrdu: 'سرمایہ کاری کا منافع',
    description: 'Predict growth of your savings with compounding interest.',
    category: Category.FINANCIAL,
    icon: '📈'
  },
  {
    id: 'retirement-plan',
    name: 'Retirement Planner',
    nameUrdu: 'ریٹائرمنٹ کی منصوبہ بندی',
    description: 'Calculate how much you need to save for a comfortable retirement.',
    category: Category.FINANCIAL,
    icon: '🌅'
  },
  {
    id: 'real-estate-roi',
    name: 'Real Estate ROI',
    nameUrdu: 'ریئل اسٹیٹ منافع',
    description: 'Calculate property gains, rental yield, and FBR transfer taxes.',
    category: Category.FINANCIAL,
    icon: '🏠'
  },
  {
    id: 'provident-fund',
    name: 'Provident Fund (PF)',
    nameUrdu: 'پروویڈنٹ فنڈ',
    description: 'Estimate your PF balance with employer matching and interest.',
    category: Category.PAK_SPECIFIC,
    icon: '🏦'
  },
  {
    id: 'gratuity',
    name: 'Gratuity Calculator Pakistan (As Per Official Labor Laws 2025)',
    nameUrdu: 'گریجویٹی کیلکولیٹر',
    description: 'Calculate end-of-service benefits based on Pakistan labor laws.',
    category: Category.PAK_SPECIFIC,
    icon: '📜'
  },
  {
    id: 'loan-emi',
    name: 'Loan EMI Calculator',
    nameUrdu: 'قرض کی قسط کا کیلکولیٹر',
    description: 'Calculate monthly installments for personal or car loans.',
    category: Category.FINANCIAL,
    icon: '💰'
  },
  {
    id: 'profit-margin',
    name: 'Profit Margin',
    nameUrdu: 'منافع کا مارجن',
    description: 'Find net profit and margin percentages for your business.',
    category: Category.BUSINESS,
    icon: '📊'
  },
  {
    id: 'unit-converter',
    name: 'Pakistani Land Measurement & Unit Converter 2025-26',
    nameUrdu: 'یونٹ کنورٹر',
    description: 'Convert Marla to SqFt, Tola to Grams, and more.',
    category: Category.EVERYDAY,
    icon: '📏'
  },
  {
    id: 'bmi',
    name: 'BMI Calculator',
    nameUrdu: 'بی ایم آئی کیلکولیٹر',
    description: 'Check your Body Mass Index for health recommendations.',
    category: Category.EVERYDAY,
    icon: '⚖️'
  },
  {
    id: 'cgpa-calc',
    name: 'CGPA Calculator',
    nameUrdu: 'سی جی پی اے کیلکولیٹر',
    description: 'Calculate your Semester and Cumulative GPA easily.',
    category: Category.EDUCATION,
    icon: '🎓'
  },
  {
    id: 'grade-calc',
    name: 'Grade Calculator',
    nameUrdu: 'گریڈ کیلکولیٹر',
    description: 'Calculate your academic grade based on marks obtained.',
    category: Category.EDUCATION,
    icon: '📝'
  },
  {
    id: 'mark-percentage',
    name: 'Student Marks Percentage Calculator (SSC, HSSC & Uni)',
    nameUrdu: 'مارکس فیصد کیلکولیٹر',
    description: 'Convert your marks into percentage instantly.',
    category: Category.EDUCATION,
    icon: '📊'
  },
  {
    id: 'electricity-bill',
    name: 'Electricity Bill Calculator',
    nameUrdu: 'بجلی کا بل کیلکولیٹر',
    description: 'Calculate your LESCO, MEPCO, IESCO electricity bill with latest NEPRA tariffs.',
    category: Category.PAK_SPECIFIC,
    icon: '🔌'
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
