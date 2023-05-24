import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config({ path: "server/.env" });
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

async function runCompletion(data) {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Create a palette of 4 colors that match based on the word ${data}. These colors will be suitable for UI/UX design purposes. Please provide the hex codes for the colors.`,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    const response = completion.data.choices[0].text;
    return response;
  } catch (error) {
    return "Something went wrong, try again later or change the prompt";
  }
}

async function runCompletionColor(color) {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Create a palette of 4 colors that match based on the color ${color} hex or the color ${color}, for UI UX design, only give me the hex code`,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    const response = completion.data.choices[0].text;
    return response;
  } catch (error) {
    return "Something went wrong, try again later or change the prompt";
  }
}

export const createPaleteColor = async (req, res) => {
  const { color } = req.body;
  const regex = /#[A-Fa-f0-9]{6}\b/g;
  try {
    const response = await runCompletionColor(color);
    const hexValues = response.match(regex);
    res.send(hexValues);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

export const createPaleteRandom = (req, res) => {
  res.send("Creating random palette");
};

export const createPaleteWord = async (req, res) => {
  const { word } = req.body;
  try {
    const response = await runCompletion(word);
    const jsonString = JSON.stringify(response);
    const regex = /#[A-Fa-f0-9]{6}\b/g;
    const hexValues = jsonString.match(regex);
    res.send(hexValues);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};
