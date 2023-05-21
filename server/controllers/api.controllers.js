import { Configuration, OpenAIApi } from "openai";

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
    console.log(response);
    return response;
  } catch {
    return "Something go wrong, try later or change the promt";
  }
}

export const createPaleteColor = (req, res) => {
  const { color } = req.body;
  res.send(runCompletion(color));
};

export const createPaleteRandom = (req, res) => {
  res.send("Creando Paleta aleatoria");
};

export const createPaleteWord = (req, res) => {
  const { word } = req.body;
  res.send(runCompletion(word));
};
