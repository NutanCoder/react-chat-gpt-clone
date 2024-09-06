import { GoogleGenerativeAI } from "@google/generative-ai";

const key = localStorage.getItem("GEMINI_API_KEY") ?? "YOU_API_KEY";

const genAI = new GoogleGenerativeAI(key);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;
