import FormPromt from "../components/FormPromt";
import {createPaleteColor }from "../api/color.api.js";

function ColorForm() {
  return <FormPromt promptFunction={createPaleteColor}></FormPromt>;
}

export default ColorForm;
