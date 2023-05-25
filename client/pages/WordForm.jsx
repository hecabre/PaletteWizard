import FormPromt from "../components/FormPromt";
import { createPaleteWord } from "../api/color.api";

function WordForm() {
  return <FormPromt promptFunction={createPaleteWord}></FormPromt>;
}

export default WordForm;
