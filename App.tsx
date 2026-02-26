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
  CGPACalculatorTool, GradeCalculatorTool, MarkPercentageTool
} from './components/Tools';
import { FBRSlabsPage, ZakatInfoPage, ContactPage, PrivacyPage, TermsPage, DisclaimerPage } from './components/InfoPages';
import { CALCULATORS } from './constants';

// SEO metadata for each tool
const TOOL_SEO_META: Record<string, { title: string; description: string }> = {
  'income-tax': {
    title: 'Income Tax Calculator 2026 Pakistan: Don\'t Pay Extra! (New FBR Slabs)',
    description: 'Calculate your FBR tax for 2026 in seconds. Accurate, updated with new slabs, and easy to use. Save time and money with PakCalc.'
  },
  'zakat': {
    title: 'Zakat Calculator Pakistan 2026 – Check Zakat Nisab & Amount',
    description: 'Calculate your Zakat easily with our free online calculator. Check the latest Zakat Nisab for 2026, add your assets, and get accurate results in PKR.'
  },
  'freelancer-tax': {
    title: 'Freelancer Income Calculator – Estimate Your Earnings',
    description: 'Calculate your freelance income, taxes, and net profit instantly. Perfect for freelancers, remote workers, and online earners.'
  },
  'investment-return': {
    title: 'Investment Return Calculator – Estimate Your Profit',
    description: 'Calculate your investment returns easily. Enter your amount, rate, and time to see projected profits instantly.'
  },
  'retirement-plan': {
    title: 'Retirement Savings Guide Pakistan 2026 – Free Calculator',
    description: 'Plan your retirement with our free online calculator. Estimate your savings goal, monthly income, and secure your future in Pakistan.'
  },
  'real-estate-roi': {
    title: 'Real Estate ROI Calculator – Property Return Tool',
    description: 'Calculate real estate return on investment instantly. Analyze rental income, costs, and profit with this free ROI calculator.'
  },
  'provident-fund': {
    title: 'Provident Fund Calculator Pakistan – How to Calculate PF',
    description: 'How to calculate Provident Fund in Pakistan? Estimate your PF deduction from salary, interest, and future balance instantly with our free tool.'
  },
  'gratuity': {
    title: 'Gratuity Calculator Pakistan for Private Employees (2026)',
    description: 'Use our free gratuity calculator for private employees in Pakistan. Quickly calculate end-of-service gratuity amount based on the latest law format.'
  },
  'loan-emi': {
    title: 'Loan EMI Calculator Pakistan – Bank & Car Loan Estimator',
    description: 'Calculate your loan EMI instantly for banks or car loans. Enter principal amount, interest rate, and tenure for a precise monthly payment plan.'
  },
  'profit-margin': {
    title: 'Profit Margin Calculator – Check Your Business Profit Instantly',
    description: 'Don\'t guess your profits. Find your exact business profit margin in seconds. Calculate cost, selling price, and markup easily.'
  },
  'unit-converter': {
    title: 'Free Unit Converter – Convert Length, Weight & More',
    description: 'Convert units instantly with our free online converter. Supports length, weight, temperature, and more.'
  },
  'bmi': {
    title: 'BMI Calculator – Check Your Body Mass Index',
    description: 'Calculate your BMI instantly. Enter your height and weight to check your body mass index and health category.'
  },
  'cgpa-calc': {
    title: 'CGPA Calculator Pakistan 2026 – SGPA to CGPA & % Converter',
    description: 'Calculate your Semester GPA (SGPA) and Cumulative GPA (CGPA) easily. Supports CBSE 9.5 multiplier and HEC standards. 100% free and accurate.'
  },
  'grade-calc': {
    title: 'Grade Calculator – Calculate Final Grades & Weighted Averages',
    description: 'Find your academic grade based on marks obtained or percentage. Precision-weighted grade calculator for Matric, Inter, and University students.'
  },
  'mark-percentage': {
    title: 'Mark Percentage Calculator 2026 – Score to % Finder (Accurate)',
    description: 'Convert your marks into percentage instantly. Ideal for students in Pakistan calculating matric, inter, or university merit scores for 2026.'
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
            <SEOHead title="FBR Tax Slabs 2025-26" description="Latest Income Tax Slabs for Salaried and Business Individuals in Pakistan." canonicalUrl="/slabs" />
            <FBRSlabsPage isUrdu={isUrdu} />
          </>
        } />
        <Route path="/zakat-info" element={
          <>
            <SEOHead title="Zakat Guide" description="Complete guide to Zakat calculation in Pakistan." canonicalUrl="/zakat-info" />
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
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "PKR"
                    },
                    "description": tool.description
                  })}
                </script>
              </Helmet>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mb-16">
        {component}
      </div>

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
