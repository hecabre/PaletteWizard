import FormPrompt from "../components/FormPrompt.jsx";
import { createPaleteColor } from "../api/color.api.js";

function ColorForm() {
  return <FormPrompt promptFunction={createPaleteColor} descriptionWord="color"></FormPrompt>;
}

export default ColorForm;
