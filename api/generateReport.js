import { missionPrompt } from '../utils/prompt.js';
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { inputText, notes } = req.body;
  const fullPrompt = `${missionPrompt}\n\nInput Text:\n${inputText}\n\nHinweise:\n${notes}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: fullPrompt }],
    });

    const report = completion.choices[0].message.content;
    res.status(200).json({ report });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
