
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
    seoDescription: 'Calculate monthly electricity bill by units consumed. Supports LESCO, FESCO, GEPCO, PESCO, MEPCO. NEPRA FY 2024-25 base tariff rates included.'
  }
];

// ---------------------------------------------------------------------------
// FBR Income Tax slabs for Tax Year 2025-26 (Finance Act 2025).
// Sources consulted:
//   * Federal Board of Revenue (FBR) — www.fbr.gov.pk
//   * PWC Pakistan Tax Summaries 2025-26
//   * Finance Act 2025 published schedule
// Last verified: September 2026. Re-verify against FBR each July when the
// next Finance Act is notified.
// ---------------------------------------------------------------------------

export const SALARIED_TAX_SLABS = [
  // Each row represents: slab upper limit (PKR) | marginal rate (%) | cumulative tax already paid at the lower bound
  { threshold: 600000,   rate: 0,  fixed: 0       },
  { threshold: 1200000,  rate: 1,  fixed: 0       },   // 1% on 600k–1.2M
  { threshold: 2200000,  rate: 11, fixed: 6000    },   // 6,000 + 11% on 1.2M–2.2M
  { threshold: 3200000,  rate: 23, fixed: 116000  },   // 116,000 + 23% on 2.2M–3.2M
  { threshold: 4100000,  rate: 30, fixed: 346000  },   // 346,000 + 30% on 3.2M–4.1M
  { threshold: Infinity, rate: 35, fixed: 616000  }    // 616,000 + 35% above 4.1M
];

// 10% surcharge on slab tax for non-salaried/AOPs, 9% for salaried individuals when taxable income > PKR 10,000,000.
// Applies to Tax Year 2026.
export const SURCHARGE_THRESHOLD = 10000000;
export const SURCHARGE_RATE_SALARIED = 0.09;
export const SURCHARGE_RATE_NON_SALARIED = 0.10;

// Non-Salaried / AOP / Individual business income — FBR 2025-26.
// Source: PWC Pakistan Tax Summaries 2025-26 + FBR.
// Note: The schedule for non-salaried individuals and AOPs under Finance Act
// 2025 differs from the salaried schedule above. The 0–600k exemption is
// retained, but the marginal rates above 600k are steeper for non-salaried.
export const NON_SALARIED_TAX_SLABS = [
  { threshold: 600000,   rate: 0,  fixed: 0       },
  { threshold: 1200000,  rate: 15, fixed: 0       },   // 15% on 600k–1.2M
  { threshold: 2400000,  rate: 20, fixed: 90000   },   // 90,000 + 20% on 1.2M–2.4M
  { threshold: 3000000,  rate: 25, fixed: 330000  },   // 330,000 + 25% on 2.4M–3.0M
  { threshold: 4000000,  rate: 30, fixed: 480000  },   // 480,000 + 30% on 3.0M–4.0M
  { threshold: 6000000,  rate: 35, fixed: 780000  },   // 780,000 + 35% on 4.0M–6.0M
  { threshold: Infinity, rate: 35, fixed: 1480000 }    // 1,480,000 + 35% above 6.0M
];

export const NISAB_GOLD_GRAMS = 87.48;      // 7.5 tola (Hanafi / Shafi'i gold standard)
export const NISAB_SILVER_GRAMS = 612.36;    // 52.5 tola (Hanafi silver standard — lower, more inclusive)

// Government-notified Nisab for Zakat Year 1446-47 AH (Pakistan).
// Source: Ministry of Poverty Alleviation & Social Safety, Notification
// CE-1001(36)/NISAB/1446-47/2026-48 dated 16 February 2026, communicated
// to SBP BPRD Circular No. 03 of 2026 (17 February 2026).
// This is the threshold banks use on 1st Ramadan for auto-deduction under
// the Zakat and Ushr Ordinance, 1980.
export const GOVERNMENT_NISAB_2026 = 503529;

// Deduction date for Zakat Year 1446-47 AH (1st Ramadan 1447 AH).
export const DEDUCTION_DATE_2026 = '19–20 February 2026 (1st Ramadan 1447 AH, subject to moon sighting)';

// ---------------------------------------------------------------------------
// NEPRA Electricity Tariff Slabs (FY 2024-25 Base Tariff)
// Last verified: September 2026.
// ---------------------------------------------------------------------------

export const NEPRA_FY_2025_BASE_SLABS = {
  protected: [
    { limit: 100, rate: 10.54 },
    { limit: 200, rate: 13.01 }
  ],
  nonProtected: [
    { limit: 100, rate: 22.44 },
    { limit: 200, rate: 28.91 },
    { limit: 300, rate: 33.10 },
    { limit: 400, rate: 37.99 },
    { limit: 500, rate: 40.20 },
    { limit: 600, rate: 41.62 },
    { limit: 700, rate: 42.76 },
    { limit: Infinity, rate: 47.69 }
  ],
  commercial: [
    { limit: 100, rate: 30.10 },
    { limit: 300, rate: 39.52 },
    { limit: Infinity, rate: 48.77 }
  ]
};

export const GST_RATE_2026 = 0.18; // 18% General Sales Tax
export const ELECTRICITY_DUTY_RATE = 0.015; // 1.5% Electricity Duty
export const FC_SURCHARGE_RATE = 0.43; // Financing Cost Surcharge per unit
export const TV_FEE = 35; // Rs. 35 TV fee for residential
