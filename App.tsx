import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import SEOHead from './components/SEOHead';
import {
  InvestmentReturnTool, RetirementTool, PFTool, GratuityTool,
  RealEstateROITool, UnitConverterTool, BMICalculatorTool,
  SalarySlabs, FreelancerTool, ProfitMarginTool,
  CGPACalculatorTool, GradeCalculatorTool, MarkPercentageTool,
  ZakatCalculatorTool
} from './components/Tools';
import { CALCULATORS } from './constants';
import { RelatedTools } from './components/RelatedTools';
import ToolArticle from './components/ToolArticle';
import ToolsDirectory from './components/ToolsDirectory';

const getRelatedTools = (id: string) => {
  const mapping: Record<string, string[]> = {
    'income-tax': ['investment-return', 'real-estate-roi'],
    'loan-emi': ['zakat', 'investment-return'],
    'bmi': ['loan-emi', 'retirement-plan'],
    'retirement-plan': ['real-estate-roi', 'zakat', 'income-tax'],
    'provident-fund': ['retirement-plan', 'income-tax'],
    'freelancer-tax': ['income-tax', 'unit-converter'],
    'cgpa-calc': ['grade-calc', 'mark-percentage'],
    'mark-percentage': ['cgpa-calc', 'unit-converter'],
  };
  return mapping[id] || [];
};

// SEO metadata for each tool - CTR-optimized titles & descriptions based on GSC queries
const TOOL_SEO_META: Record<string, any> = {
  'income-tax': {
    title: 'FBR Salary Tax Calculator 2025-26 | Official Filer Guide Pakistan',
    description: 'Calculate Salary Tax based on latest FBR Tax Slabs 2025-26. Step-by-step guide on how to become a Filer in Pakistan. [100% Accurate & Free]',
    faqs: [
      { question: 'What are the FBR salary tax slabs for 2025-26 in Pakistan', answer: 'The FBR has announced updated income tax slabs for tax year 2026 (July 2025 - June 2026). Salaried individuals earning up to PKR 600,000 annually are exempt. Rates range from 5% to 35% depending on income brackets. Use our free calculator for your exact tax liability.' },
    ],
  },
  'zakat': {
    title: 'SBP Zakat Calculator 2026 | Calculate Nisab & Assets Online',
    description: 'Easy-to-use Zakat Calculator for Pakistan. Updated with SBP Official Nisab 2026. Calculate Zakat on Gold, Silver, Cash, and Stocks instantly.',
    faqs: [
      { question: 'What is the Zakat Nisab for 2026 in Pakistan', answer: 'The Zakat Nisab is calculated based on the value of 52.5 tolas of silver or 7.5 tolas of gold. Our calculator uses real-time market rates to help you determine your exact Zakat obligation.' },
    ],
  },
  'loan-emi': {
    title: 'Bank Loan EMI Calculator Pakistan | Meezan, HBL & Alfalah Rates',
    description: 'Calculate monthly loan installments (EMI) for Meezan Bank, HBL, Bank Alfalah, and more. Plan your Personal, Home, or Auto loan repayments with 100% accuracy.',
  },
  'unit-converter': {
    title: 'Land Unit Converter Pakistan | 1 Murabba to Kanal (200 Kanal)',
    description: 'Convert between Kanal, Marla, Murabba, and Acre. Specifically designed for Pakistani land measurements. 1 Murabba = 25 Acre = 200 Kanal.',
  },
  'slabs': {
    title: 'FBR Salary Tax Slabs 2025-2026 (Official Tax Tables)',
    description: 'Official FBR Income Tax Slabs for Tax Year 2026. Compare current tax rates for Salaried vs Non-Salaried individuals in Pakistan.',
  }
};

const ToolWrapper: React.FC<{ 
  id: string; 
  component: React.ReactElement; 
  isUrdu: boolean;
  handleNavigate: (path: string) => void;
}> = ({ id, component, isUrdu, handleNavigate }) => {
  const tool = CALCULATORS.find(c => c.id === id);
  const seoMeta = TOOL_SEO_META[id];
  
  if (!tool) return null;

  return (
    <div className="py-8">
      <SEOHead 
        title={seoMeta?.title || tool.name}
        description={seoMeta?.description || tool.description}
      />
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div className="space-y-4">
          <Breadcrumbs />
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-3xl">
              {tool.icon}
            </div>
            <div>
              <p className="text-emerald-600 font-bold text-sm tracking-wider uppercase mb-1">{tool.category}</p>
              <h1 className={`text-4xl font-black text-slate-900 tracking-tight ${isUrdu ? 'urdu' : ''}`}>
                {isUrdu ? tool.urduName : tool.name}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mb-8">
        {component}
      </div>

      <ToolArticle id={id} isUrdu={isUrdu} />
      <RelatedTools toolIds={getRelatedTools(id)} />

      {/* AI Advice Banner */}
      <div className="mt-16 bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-600 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-3xl font-black mb-4 leading-tight">Need expert financial advice?</h4>
            <p className="text-slate-400 text-lg max-w-md">Our AI Financial Assistant can help you plan your taxes, investments, and savings specifically for Pakistan.</p>
          </div>
          <div className="shrink-0">
            <div className="bg-white/10 p-6 rounded-3xl border border-white/10 backdrop-blur-md w-full max-w-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 text-xl">AI</div>
                <div>
                  <p className="font-bold">PakCalc Assistant</p>
                  <p className="text-xs text-slate-400">Powered by Gemini AI</p>
                </div>
              </div>
              <button 
                onClick={() => handleNavigate('/all-tools')}
                className="w-full bg-emerald-500 hover:bg-emerald-400 transition-colors py-3 rounded-2xl font-bold text-emerald-950"
              >
                Start Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isUrdu, setIsUrdu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Layout isUrdu={isUrdu} onLanguageToggle={() => {
      setIsUrdu(!isUrdu);
      document.documentElement.lang = !isUrdu ? 'ur' : 'en';
    }}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ToolsDirectory isUrdu={isUrdu} />} />
        <Route path="/all-tools" element={<ToolsDirectory isUrdu={isUrdu} />} />
        <Route path="/slabs" element={<ToolWrapper id="slabs" isUrdu={isUrdu} handleNavigate={handleNavigate} component={<SalarySlabs isUrdu={isUrdu} />} />} />
        <Route path="/income-tax" element={<ToolWrapper id="income-tax" isUrdu={isUrdu} handleNavigate={handleNavigate} component={<SalarySlabs isUrdu={isUrdu} />} />} />
        <Route path="/loan-emi" element={<ToolWrapper id="loan-emi" isUrdu={isUrdu} handleNavigate={handleNavigate} component={<BMICalculatorTool isUrdu={isUrdu} />} />} />
        <Route path="/zakat" element={<ToolWrapper id="zakat" isUrdu={isUrdu} handleNavigate={handleNavigate} component={<ZakatCalculatorTool isUrdu={isUrdu} />} />} />
        <Route path="/investment-return" element={<ToolWrapper id="investment-return" isUrdu={isUrdu} handleNavigate={handleNavigate} component={<InvestmentReturnTool />} />} />
        <Route path="/real-estate-roi" element={<ToolWrapper id="real-estate-roi" isUrdu={isUrdu} handleNavigate={handleNavigate} component={<RealEstateROITool />} />} />
        <Route path="/provident-fund" element={<ToolWrapper id="provident-fund" isUrdu={isUrdu} handleNavigate={handleNavigate} component={<PFTool />} />} />
        <Route path="/gratuity" element={<ToolWrapper id="gratuity" isUrdu={isUrdu} handleNavigate={handleNavigate} component={<GratuityTool />} />} />
        <Route path="/freelancer-tax" element={<ToolWrapper id="freelancer-tax" isUrdu={isUrdu} handleNavigate={handleNavigate} component={<FreelancerTool isUrdu={isUrdu} />} />} />
        <Route path="/unit-converter" element={<ToolWrapper id="unit-converter" isUrdu={isUrdu} handleNavigate={handleNavigate} component={<UnitConverterTool />} />} />
        <Route path="/retirement-plan" element={<ToolWrapper id="retirement-plan" isUrdu={isUrdu} handleNavigate={handleNavigate} component={<RetirementTool />} />} />
        <Route path="/profit-margin" element={<ToolWrapper id="profit-margin" isUrdu={isUrdu} handleNavigate={handleNavigate} component={<ProfitMarginTool />} />} />
        <Route path="/cgpa-calc" element={<ToolWrapper id="cgpa-calc" isUrdu={isUrdu} handleNavigate={handleNavigate} component={<CGPACalculatorTool />} />} />
        <Route path="/grade-calc" element={<ToolWrapper id="grade-calc" isUrdu={isUrdu} handleNavigate={handleNavigate} component={<GradeCalculatorTool />} />} />
        <Route path="/mark-percentage" element={<ToolWrapper id="mark-percentage" isUrdu={isUrdu} handleNavigate={handleNavigate} component={<MarkPercentageTool />} />} />
        
        {/* Fallback */}
        <Route path="*" element={
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
            <button onClick={() => navigate('/')} className="px-6 py-2 bg-emerald-500 text-white rounded-xl font-bold">Go Home</button>
          </div>
        } />
      </Routes>
    </Layout>
  );
}

export default App;
