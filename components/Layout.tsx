
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { View } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  isUrdu: boolean;
  setIsUrdu: (val: boolean) => void;
  onNavigate: (view: View) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, isUrdu, setIsUrdu, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMobileNavigate = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isUrdu ? 'rtl' : 'ltr'}`}>
      <header className="glass sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-2 md:space-x-3 cursor-pointer group shrink-0"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-700 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
              <span className="text-white font-black text-sm md:text-lg">PK</span>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-extrabold text-slate-900 tracking-tight">PakCalc</h1>
              <p className="hidden xs:block text-[9px] md:text-[10px] uppercase tracking-widest text-emerald-600 font-bold -mt-0.5 md:-mt-1">Financial Suite</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <Link to="/all-tools" className="hover:text-emerald-600 transition-colors">All Tools</Link>
            <Link to="/slabs" className="hover:text-emerald-600 transition-colors">FBR Slabs</Link>
            <Link to="/zakat-info" className="hover:text-emerald-600 transition-colors">Zakat Info</Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              onClick={() => setIsUrdu(!isUrdu)}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold transition-all border border-slate-200"
            >
              {isUrdu ? 'English' : 'اردو'}
            </button>

            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-bold shadow-md hover:shadow-emerald-200 transition-all flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.603-1.921 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <span className="hidden sm:inline">Go Pro</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 border-b border-slate-200 bg-white' : 'max-h-0'}`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {[
              { path: '/', label: 'Home', labelUrdu: 'ہوم' },
              { path: '/all-tools', label: 'All Tools', labelUrdu: 'تمام ٹولز' },
              { path: '/slabs', label: 'FBR Slabs', labelUrdu: 'ٹیکس سلیبس' },
              { path: '/zakat-info', label: 'Zakat Info', labelUrdu: 'زکوٰۃ معلومات' },
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => handleMobileNavigate(item.path)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors hover:bg-emerald-50 hover:text-emerald-700 ${isUrdu ? 'urdu' : ''}`}
              >
                {isUrdu ? item.labelUrdu : item.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PK</span>
                </div>
                <span className="text-xl font-bold">PakCalc</span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed">
                Pakistan's most trusted financial utility platform. Making complex calculations simple for taxpayers, businesses, and everyday users.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Calculators</h4>
              <ul className="space-y-2 text-slate-500 text-sm">
                <li><Link to="/all-tools" className="hover:text-emerald-600">Browse All Tools</Link></li>
                <li><Link to="/slabs" className="hover:text-emerald-600">FBR Slabs 2025</Link></li>
                <li><Link to="/zakat-info" className="hover:text-emerald-600">Zakat & Nisab</Link></li>
                <li><Link to="/disclaimer" className="hover:text-emerald-600">Disclaimer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Support & Legal</h4>
              <ul className="space-y-2 text-slate-500 text-sm">
                <li><Link to="/privacy" className="hover:text-emerald-600">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-emerald-600">Terms of Service</Link></li>
                <li><Link to="/contact" className="hover:text-emerald-600">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© 2026 PakCalc Inc. Built for the people of Pakistan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
