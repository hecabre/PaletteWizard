import FormPrompt from "../components/FormPrompt";
import { createPaleteWord } from "../api/color.api";

function WordForm() {
  return (
    <FormPrompt
      promptFunction={createPaleteWord}
      descriptionWord="word"
    ></FormPrompt>
  );
}

export default WordForm;
