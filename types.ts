
export enum Category {
  FINANCIAL = 'Financial Planning',
  PAK_SPECIFIC = 'Pakistan Specific',
  BUSINESS = 'Business Calculators',
  EVERYDAY = 'Everyday Tools',
  EDUCATION = 'Education Tools'
}

export interface Calculator {
  id: string;
  name: string;
  nameUrdu: string;
  description: string;
  category: Category;
  icon: string;
}

export type View = 'home' | 'tool' | 'slabs' | 'zakat-info' | 'contact' | 'privacy' | 'terms' | 'disclaimer' | 'all-tools';

export interface TaxResult {
  totalIncome: number;
  taxableIncome: number;
  totalTax: number;
  monthlyTax: number;
  netIncome: number;
  effectiveRate: number;
}
