import React from 'react';
import { Link } from 'react-router-dom';

interface Tool {
    id: string;
    name: string;
    icon: string;
}

const TOOLS: Record<string, Tool> = {
    'income-tax': { id: 'income-tax', name: 'Income Tax', icon: '💰' },
    'zakat': { id: 'zakat', name: 'Zakat Calculator', icon: '🌙' },
    'loan-emi': { id: 'loan-emi', name: 'Loan EMI', icon: '🏦' },
    'profit-margin': { id: 'profit-margin', name: 'Profit Margin', icon: '📊' },
    'bmi': { id: 'bmi', name: 'BMI Calculator', icon: '🏃‍♂️' },
    'investment-return': { id: 'investment-return', name: 'Investment Return', icon: '📈' },
    'retirement-plan': { id: 'retirement-plan', name: 'Retirement Plan', icon: '👴' },
    'real-estate-roi': { id: 'real-estate-roi', name: 'Real Estate ROI', icon: '🏡' },
    'provident-fund': { id: 'provident-fund', name: 'Provident Fund', icon: '🛡️' },
    'gratuity': { id: 'gratuity', name: 'Gratuity', icon: '🎁' },
    'freelancer-tax': { id: 'freelancer-tax', name: 'Freelancer Tax', icon: '💻' },
    'unit-converter': { id: 'unit-converter', name: 'Unit Converter', icon: '🔄' },
};

interface RelatedToolsProps {
    toolIds: string[];
}

export const RelatedTools: React.FC<RelatedToolsProps> = ({ toolIds }) => {
    return (
        <div className="mt-16 border-t border-slate-100 pt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Explore More Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {toolIds.map(id => {
                    const tool = TOOLS[id];
                    if (!tool) return null;
                    return (
                        <Link
                            key={id}
                            to={`/${id}`}
                            className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center group"
                        >
                            <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">{tool.icon}</span>
                            <h4 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{tool.name}</h4>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
