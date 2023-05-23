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
      prompt: `Make a color palette UI UX with the word ${data} only 4 colors and give me only the hex code`,
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
      prompt: `Make a color palette UI UX with the color ${color} only 4 colors and give me only the hex code`,
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
  try {
    const response = await runCompletion(color);
    res.json(response);
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
    console.log(response)
    res.json(response)
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};
