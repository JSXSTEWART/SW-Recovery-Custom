import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });

const blogPrompts = [
  { id: "1", prompt: "A professional business setting showing a clean, modern office with a focus on financial growth and stability. High-quality, realistic style, corporate aesthetic." },
  { id: "2", prompt: "An industrial oil and gas landscape with drilling rigs at sunset. Professional, high-quality photography style." },
  { id: "3", prompt: "Modern apartment buildings and commercial real estate. Clean, professional architectural photography." },
  { id: "4", prompt: "A stressed business owner looking at unpaid invoices and a calculator. Professional, relatable business scene." },
  { id: "5", prompt: "A professional person typing a polite email on a laptop in a bright office. Focus on professional communication." },
  { id: "6", prompt: "B2B business meeting with two professionals shaking hands or discussing a contract. Clean, corporate style." },
  { id: "7", prompt: "A person managing a budget or spreadsheet on a computer with a focus on cash flow charts. Professional, analytical style." },
  { id: "8", prompt: "A modern law firm office with a focus on legal documents and a professional atmosphere. High-quality, realistic style." },
  { id: "9", prompt: "A timeline or process chart showing debt recovery steps in a professional business context. Clean, infographic style." },
  { id: "10", prompt: "A professional debt collector in a modern call center or office environment. Focus on professional, ethical communication." }
];

async function generateImages() {
  const outputDir = path.join(process.cwd(), "src/assets/images/blog");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const item of blogPrompts) {
    console.log(`Generating image for blog ${item.id}...`);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-image",
        contents: {
          parts: [{ text: item.prompt }]
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9"
          }
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64Data = part.inlineData.data;
          const filePath = path.join(outputDir, `blog-${item.id}.png`);
          fs.writeFileSync(filePath, Buffer.from(base64Data, "base64"));
          console.log(`Saved blog-${item.id}.png`);
        }
      }
    } catch (error) {
      console.error(`Error generating image for blog ${item.id}:`, error);
    }
  }
}

generateImages();
