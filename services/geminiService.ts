
import { GoogleGenAI } from "@google/genai";

export async function getFinancialAdvice(calculatorType: string, data: any) {
  try {
    // Correct initialization using named parameter and process.env.API_KEY directly.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `
      You are PakCalc AI, a financial expert specialized in Pakistan's economy.
      User is using the ${calculatorType} tool.
      Here is their calculation data: ${JSON.stringify(data)}.
      
      Provide a concise 3-4 sentence financial advice in English and Urdu.
      Focus on tax savings, investment tips, or financial planning relevant to Pakistan.
      Use a helpful, professional tone.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    // Accessing .text property directly as per the latest SDK spec.
    return response.text;
  } catch (error) {
    console.error("AI Advice error:", error);
    return "Unable to fetch AI advice at the moment. / اس وقت اے آئی مشورہ حاصل کرنا ممکن نہیں۔";
  }
}
