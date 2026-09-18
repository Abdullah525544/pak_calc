import React, { useState, lazy, Suspense } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from './components/Layout';
import CalculatorList from './components/CalculatorList';
import ToolsDirectory from './components/ToolsDirectory';
import SEOHead from './components/SEOHead';
import { Calculator, View } from './types';
import ScrollToTop from './components/ScrollToTop';
import { Breadcrumbs } from './components/Breadcrumbs';
const IncomeTaxTool = lazy(() => import('./components/calculators/IncomeTaxTool').then(m => ({ default: m.IncomeTaxTool })));
const ZakatTool = lazy(() => import('./components/calculators/ZakatTool').then(m => ({ default: m.ZakatTool })));
const EMITool = lazy(() => import('./components/calculators/EMITool').then(m => ({ default: m.EMITool })));
const ProfitMarginTool = lazy(() => import('./components/calculators/ProfitMarginTool').then(m => ({ default: m.ProfitMarginTool })));
const BMICalcTool = lazy(() => import('./components/calculators/BMICalcTool').then(m => ({ default: m.BMICalcTool })));
const InvestmentReturnTool = lazy(() => import('./components/calculators/InvestmentReturnTool').then(m => ({ default: m.InvestmentReturnTool })));
const RetirementTool = lazy(() => import('./components/calculators/RetirementTool').then(m => ({ default: m.RetirementTool })));
const PFTool = lazy(() => import('./components/calculators/PFTool').then(m => ({ default: m.PFTool })));
const GratuityTool = lazy(() => import('./components/calculators/GratuityTool').then(m => ({ default: m.GratuityTool })));
const FreelancerTool = lazy(() => import('./components/calculators/FreelancerTool').then(m => ({ default: m.FreelancerTool })));
const UnitConverterTool = lazy(() => import('./components/calculators/UnitConverterTool').then(m => ({ default: m.UnitConverterTool })));
const LandConverterTool = lazy(() => import('./components/calculators/LandConverterTool').then(m => ({ default: m.LandConverterTool })));
const RealEstateROITool = lazy(() => import('./components/calculators/RealEstateROITool').then(m => ({ default: m.RealEstateROITool })));
const CGPACalculatorTool = lazy(() => import('./components/calculators/CGPACalculatorTool').then(m => ({ default: m.CGPACalculatorTool })));
const GradeCalculatorTool = lazy(() => import('./components/calculators/GradeCalculatorTool').then(m => ({ default: m.GradeCalculatorTool })));
const MarkPercentageTool = lazy(() => import('./components/calculators/MarkPercentageTool').then(m => ({ default: m.MarkPercentageTool })));
const ElectricityBillTool = lazy(() => import('./components/calculators/ElectricityBillTool').then(m => ({ default: m.ElectricityBillTool })));
const PercentageTool = lazy(() => import('./components/calculators/PercentageTool').then(m => ({ default: m.PercentageTool })));
const PasswordGenTool = lazy(() => import('./components/calculators/PasswordGenTool').then(m => ({ default: m.PasswordGenTool })));
const MortgageTool = lazy(() => import('./components/calculators/MortgageTool').then(m => ({ default: m.MortgageTool })));

// Lazy-load the heavy info/article pages so each route only downloads
// the code it actually uses. InfoPages.tsx alone is ~276 kB.
const FBRSlabsPage     = lazy(() => import('./components/InfoPages').then(m => ({ default: m.FBRSlabsPage })));
const ZakatInfoPage    = lazy(() => import('./components/InfoPages').then(m => ({ default: m.ZakatInfoPage })));
const ContactPage      = lazy(() => import('./components/InfoPages').then(m => ({ default: m.ContactPage })));
const PrivacyPage      = lazy(() => import('./components/InfoPages').then(m => ({ default: m.PrivacyPage })));
const TermsPage        = lazy(() => import('./components/InfoPages').then(m => ({ default: m.TermsPage })));
const DisclaimerPage   = lazy(() => import('./components/InfoPages').then(m => ({ default: m.DisclaimerPage })));
const ToolArticle      = lazy(() => import('./components/ToolArticle').then(m => ({ default: m.ToolArticle })));

import { CALCULATORS } from './constants';
import { RelatedTools } from './components/RelatedTools';
import seoMetaRaw from './data/seoMeta.json';

interface FaqItem { question: string; answer: string; }
interface HowToStep { name: string; text: string; }
interface BreadcrumbItem { name: string; path: string; }
interface SeoMeta {
  title: string;
  description: string;
  h1?: string;
  intro?: string;
  includeWebSite?: boolean;
  faqs?: FaqItem[];
  howTo?: { name: string; description: string; steps: HowToStep[] };
  breadcrumbs?: BreadcrumbItem[];
}

// Build a Home → Category → Calculator breadcrumb chain for every calculator
// based on its declared Category. The visible breadcrumb component already
// renders this — we just mirror it as JSON-LD for Google.
const buildBreadcrumbs = (category: string | undefined, toolName: string, toolPath: string): BreadcrumbItem[] => [
  { name: 'Home', path: '/' },
  { name: category || 'Tools', path: '/all-tools' },
  { name: toolName, path: toolPath },
];

// Single source of truth for SEO — also consumed by scripts/prerender.cjs
const SEO_META: Record<string, SeoMeta> = seoMetaRaw as any;

const getRelatedTools = (id: string) => {
  const map: Record<string, string[]> = {
    'income-tax': ['freelancer-tax', 'zakat', 'provident-fund', 'real-estate-roi'],
    'zakat': ['investment-return', 'provident-fund', 'freelancer-tax', 'income-tax'],
    'loan-emi': ['mortgage', 'investment-return', 'provident-fund'],
    'profit-margin': ['percentage', 'income-tax', 'freelancer-tax'],
    'bmi': ['loan-emi', 'retirement-plan'],
    'investment-return': ['retirement-plan', 'real-estate-roi', 'zakat'],
    'retirement-plan': ['real-estate-roi', 'zakat', 'income-tax', 'provident-fund'],
    'real-estate-roi': ['mortgage', 'income-tax', 'investment-return'],
    'provident-fund': ['retirement-plan', 'income-tax', 'gratuity'],
    'gratuity': ['retirement-plan', 'income-tax', 'provident-fund'],
    'freelancer-tax': ['income-tax', 'unit-converter', 'profit-margin'],
    'unit-converter': ['land-converter', 'real-estate-roi'],
    'land-converter': ['unit-converter', 'real-estate-roi'],
    'cgpa-calc': ['grade-calc', 'mark-percentage', 'percentage'],
    'grade-calc': ['cgpa-calc', 'mark-percentage', 'percentage'],
    'mark-percentage': ['grade-calc', 'cgpa-calc', 'percentage'],
    'electricity-bill': ['income-tax', 'loan-emi', 'zakat'],
    'percentage': ['profit-margin', 'cgpa-calc', 'grade-calc'],
    'password-gen': ['unit-converter', 'income-tax'],
    'mortgage': ['loan-emi', 'real-estate-roi', 'investment-return']
  };
  return map[id] || ['income-tax', 'investment-return'];
};

const LAST_UPDATED = 'Updated for FBR Tax Year 2025-26 — last reviewed September 2026';

const App: React.FC = () => {
  const [isUrdu, setIsUrdu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (view: View) => {
    if (view === 'home') navigate('/');
    else if (view === 'all-tools') navigate('/all-tools');
    else navigate(`/${view}`);
  };

const HubPage = lazy(() => import('./components/HubPage'));

  const handleSelectTool = (calc: Calculator) => {
    navigate(`/${calc.id}`);
  };

  // Pick SEO meta for static (non-tool) routes from the JSON
  const homeSeo = SEO_META['/'];
  const allToolsSeo = SEO_META['/all-tools'];
  const slabsSeo = SEO_META['/slabs'];
  const zakatInfoSeo = SEO_META['/zakat-info'];
  const contactSeo = SEO_META['/contact'];
  const privacySeo = SEO_META['/privacy'];
  const termsSeo = SEO_META['/terms'];
  const disclaimerSeo = SEO_META['/disclaimer'];

  return (
    <Layout
      isUrdu={isUrdu}
      setIsUrdu={setIsUrdu}
      onNavigate={handleNavigate}
    >
      <ScrollToTop />
      <Suspense fallback={<div className="max-w-5xl mx-auto px-4 py-16 text-slate-400 text-sm animate-pulse">Loading…</div>}>
      <Routes>
        <Route path="/" element={
          <>
            <SEOHead
              title={homeSeo.title}
              description={homeSeo.description}
              canonicalUrl="/"
              includeWebSite={true}
              faqs={homeSeo.faqs}
            />
            <CalculatorList isUrdu={isUrdu} onSelect={handleSelectTool} onNavigate={handleNavigate} />
          </>
        } />

        <Route path="/all-tools" element={
          <>
            <SEOHead
              title={allToolsSeo.title}
              description={allToolsSeo.description}
              canonicalUrl="/all-tools"
            />
            <ToolsDirectory isUrdu={isUrdu} onSelect={handleSelectTool} />
          </>
        } />
        {/* Hub Pages */}
        <Route path="/finance" element={
          <HubPage
            isUrdu={isUrdu}
            title={isUrdu ? "فنانس کیلکولیٹرز" : "Financial Calculators for Pakistan"}
            description={isUrdu ? "پاکستان کے لیے بہترین فنانس کیلکولیٹرز" : "Explore our suite of personal finance, loan, and investment calculators tailored for the Pakistani market."}
            toolIds={['loan-emi', 'mortgage', 'investment-return', 'real-estate-roi', 'profit-margin', 'percentage', 'retirement-plan', 'provident-fund', 'gratuity']}
          />
        } />
        <Route path="/tax" element={
          <HubPage
            isUrdu={isUrdu}
            title={isUrdu ? "ٹیکس کیلکولیٹرز" : "Tax Calculators for Pakistan"}
            description={isUrdu ? "پاکستان کے لیے بہترین ٹیکس کیلکولیٹرز" : "Accurate FBR income tax, freelancer tax, and Zakat calculators updated for the 2025-2026 fiscal year."}
            toolIds={['income-tax', 'freelancer-tax', 'zakat']}
          />
        } />
        <Route path="/education" element={
          <HubPage
            isUrdu={isUrdu}
            title={isUrdu ? "تعلیمی کیلکولیٹرز" : "Education Calculators"}
            description={isUrdu ? "طلباء کے لیے تعلیمی کیلکولیٹرز" : "Calculate your CGPA, find your grade, or determine your marks percentage with our student-focused tools."}
            toolIds={['cgpa-calc', 'grade-calc', 'mark-percentage']}
          />
        } />
        <Route path="/health" element={
          <HubPage
            isUrdu={isUrdu}
            title={isUrdu ? "صحت کے کیلکولیٹرز" : "Health & Fitness Calculators"}
            description={isUrdu ? "صحت اور فٹنس کے کیلکولیٹرز" : "Track your BMI and monitor your health metrics with our easy-to-use tools."}
            toolIds={['bmi']}
          />
        } />

        {/* Info Pages */}
        <Route path="/slabs" element={
          <>
            <SEOHead
              title={slabsSeo.title}
              description={slabsSeo.description}
              canonicalUrl="/slabs"
              faqs={slabsSeo.faqs}
            />
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
            <SEOHead
              title={zakatInfoSeo.title}
              description={zakatInfoSeo.description}
              canonicalUrl="/zakat-info"
              faqs={zakatInfoSeo.faqs}
            />
            <ZakatInfoPage isUrdu={isUrdu} />
          </>
        } />
        <Route path="/contact" element={<><SEOHead title={contactSeo.title} description={contactSeo.description} canonicalUrl="/contact" /><ContactPage isUrdu={isUrdu} /></>} />
        <Route path="/privacy" element={<><SEOHead title={privacySeo.title} description={privacySeo.description} canonicalUrl="/privacy" /><PrivacyPage /></>} />
        <Route path="/terms" element={<><SEOHead title={termsSeo.title} description={termsSeo.description} canonicalUrl="/terms" /><TermsPage /></>} />
        <Route path="/disclaimer" element={<><SEOHead title={disclaimerSeo.title} description={disclaimerSeo.description} canonicalUrl="/disclaimer" /><DisclaimerPage /></>} />

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
        <Route path="/percentage" element={
          <ToolWrapper
            id="percentage"
            component={<PercentageTool isUrdu={isUrdu} />}
            isUrdu={isUrdu}
            handleNavigate={handleNavigate}
          />
        } />

        <Route path="/password-gen" element={
          <ToolWrapper
            id="password-gen"
            component={<PasswordGenTool />}
            isUrdu={isUrdu}
            handleNavigate={handleNavigate}
          />
        } />
        <Route path="/mortgage" element={
          <ToolWrapper
            id="mortgage"
            component={<MortgageTool />}
            isUrdu={isUrdu}
            handleNavigate={handleNavigate}
          />
        } />


        {/* Fallback */}
        <Route path="*" element={
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">404 — Page Not Found</h1>
            <button onClick={() => navigate('/')} className="text-emerald-600 font-bold hover:underline">Go Home</button>
          </div>
        } />
      </Routes>
      </Suspense>
    </Layout>
  );
};

// Helper component to wrap tools with common layout and SEO
const ToolWrapper = ({ id, component, isUrdu, handleNavigate }: { id: string, component: React.ReactNode, isUrdu: boolean, handleNavigate: any }) => {
  const navigate = useNavigate();
  const tool = CALCULATORS.find(c => c.id === id);
  const seoMeta = SEO_META[`/${id}`];

  if (!tool) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <SEOHead
        title={seoMeta?.title || tool.seoTitle || `${tool.name} - PakCalc`}
        description={seoMeta?.description || tool.seoDescription || tool.description}
        canonicalUrl={`/${id}`}
        faqs={seoMeta?.faqs}
        howTo={seoMeta?.howTo}
        breadcrumbs={seoMeta?.breadcrumbs || buildBreadcrumbs(tool.category, tool.name, `/${id}`)}
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
              <p className="text-slate-500 font-medium">
                {seoMeta?.intro || 'Free Financial Utility Tool'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology / E-E-A-T signal */}
      <div className="mb-8 flex flex-wrap items-center gap-3 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          {LAST_UPDATED}
        </span>
        <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full font-medium">
          Methodology: published below the calculator
        </span>
      </div>

      <div className="relative mb-8">
        {component}
      </div>

      <ToolArticle id={id} isUrdu={isUrdu} />

      <RelatedTools toolIds={getRelatedTools(id)} />

      {/* Plain-language AI disclaimer banner — not "expert advice" */}
      <div className="mt-16 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-600 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-emerald-500/30">AI-Powered Insights</div>
            <h4 className="text-3xl font-black mb-4 leading-tight">Need help interpreting the result?</h4>
            <p className="text-slate-400 leading-relaxed">PakCalc can generate a short, AI-written summary of your calculation so you can see your numbers in plain language. It's an aid, not professional advice — always verify important financial decisions with a qualified expert.</p>
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
