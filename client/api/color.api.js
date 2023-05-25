import axios from "axios";

const colorApi = axios.create({
  baseURL: "http://localhost:3000/color-palette/",
});

export const createPaleteWord = (word) =>
  colorApi.post("/generate-word/", word);
export const createPaleteColor = (color) =>
  colorApi.post("/generate-word/", color);
export const createPaleteRandom = () => colorApi.post("/random");
