 
import { GoogleGenAI } from "@google/genai"; 
export async function getFinancialAdvice(calculatorType: string, data: any) {        
    // Correct initialization using named parameter and process.env.API_KEY directly.                                                                 
    const prompt = `                                                                                
      User is using the ${calculatorType} tool.                                                               
                                                                                 
      Focus on tax savings, investment tips, or financial planning relevant to Pakistan.                                        
    `; 
    const response = await ai.models.generateContent({                                       
      contents: prompt,        
                                                                     
    return response.text;                    
    console.error("AI Advice error:", error);                                                        ßÿ  àŸ ™ ÿ í ÿ ¶€  Öÿ àÿ Å ÿ ßÿ Ñ ⁄ ±Ÿ ß Ÿ Ö⁄ Ü Ÿ Å€ ∫€   
  }  
