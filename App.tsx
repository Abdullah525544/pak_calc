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
  FreelancerTool, UnitConverterTool, RealEstateROITool
} from './components/Tools';
import { FBRSlabsPage, ZakatInfoPage, ContactPage, PrivacyPage, TermsPage, DisclaimerPage } from './components/InfoPages';
import { CALCULATORS } from './constants';

// SEO metadata for each tool
const TOOL_SEO_META: Record<string, { title: string; description: string }> = {
  'income-tax': {
    title: 'Income Tax Calculator Pakistan 2026 | FBR Tax Slabs Tool',
    description: 'Estimate your income tax in Pakistan for 2026 using updated FBR tax slabs. Fast, free, and accurate tax calculation.'
  },
  'zakat': {
    title: 'Zakat Calculator Pakistan 2026 | Accurate Zakat Calculation',
    description: 'Calculate your Zakat in Pakistan for 2026 using our free and accurate Zakat calculator based on current Nisab rates.'
  },
  'freelancer-tax': {
    title: 'Freelancer Tax Calculator Pakistan 2026 | Net Income Tool',
    description: 'Calculate freelancer tax and net income in Pakistan after bank charges and FBR export tax. Simple and accurate online tool.'
  },
  'investment-return': {
    title: 'Investment Calculator Pakistan | Returns & Profit Estimator',
    description: 'Calculate your investment returns in Pakistan with our free investment calculator. Estimate profits, growth, and future value easily.'
  },
  'retirement-plan': {
    title: 'Retirement Calculator Pakistan 2026 | Savings & Pension Planner',
    description: 'Plan your retirement savings in Pakistan for 2026 with our free retirement calculator. Estimate future funds and pension needs easily.'
  },
  'real-estate-roi': {
    title: 'Property ROI Calculator Pakistan | Real Estate Returns',
    description: 'Calculate property ROI, rental yield, and FBR taxes with our Real Estate Calculator Pakistan. Ideal for investors and buyers.'
  },
  'provident-fund': {
    title: 'Provident Fund Calculator Pakistan 2026 | PF Deduction & Percentage',
    description: 'Calculate your Provident Fund deduction and PF percentage in Pakistan for 2026. Free online PF calculator with accurate salary-based results.'
  },
  'gratuity': {
    title: 'Gratuity Calculator Pakistan 2026 | End of Service Benefit Tool',
    description: 'Use our free gratuity calculator for Pakistan 2026 to estimate your end-of-service benefits based on salary and years of service.'
  },
  'loan-emi': {
    title: 'Loan EMI Calculator Pakistan | Monthly Installment Tool',
    description: 'Calculate your monthly loan EMI in Pakistan with our free online calculator. Get instant installment amounts and repayment details.'
  },
  'profit-margin': {
    title: 'Profit Margin Calculator | Business Profit Tool',
    description: 'Find your business profit and margin percentage instantly with our free Profit Margin Calculator. Simple and accurate.'
  },
  'unit-converter': {
    title: 'Unit Converter Pakistan | Marla, Tola & More',
    description: 'Convert marla to square feet, tola to grams, and more with our free Unit Converter Pakistan. Fast and accurate conversions.'
  },
  'bmi': {
    title: 'BMI Calculator | Body Mass Index Checker',
    description: 'Check your Body Mass Index with our free BMI Calculator. Know your health category and ideal weight instantly.'
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
