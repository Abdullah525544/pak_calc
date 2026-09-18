import { GoogleGenAI } from "@google/genai";

// Build-time replacement: vite.config.ts injects GEMINI_API_KEY into both
// `process.env.API_KEY` and `process.env.GEMINI_API_KEY` so either works.
const apiKey =
    (typeof process !== "undefined" && (process as any).GEMINI_API_KEY) ||
    (typeof process !== "undefined" && (process as any).API_KEY) ||
    "";

export async function getFinancialAdvice(calculatorType: string, data: any) {
    try {
        if (!apiKey) {
            return "AI advice is unavailable right now. / اس وقت اے آئی مشورہ حاصل نہیں ہے۔";
        }
        const ai = new GoogleGenAI({ apiKey });
        const prompt = `
            You are PakCalc AI, a financial assistant specialised in Pakistan's economy.
            The user is currently using the ${calculatorType} tool.
            Here is their calculation data: ${JSON.stringify(data)}.

            Provide a concise 3-4 sentence financial insight in English.
            Focus on tax savings, investment tips, or financial planning relevant to Pakistan.
            Use a helpful, professional tone. Do not invent facts or guarantees.
        `;
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("AI Advice error:", error);
        return "Unable to fetch AI advice at the moment. / اس وقت اے آئی مشورہ حاصل کرنا ممکن نہیں۔";
    }
}
