import { useForm } from "react-hook-form";
//import { useParams } from "react-router-dom";
import { useState } from "react";
import { createPaleteWord } from "../api/color.api";
import ColorSquare from "../components/ColorSquare";
//import { toast } from "react-hot-toast";

function WordForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [color, setColor] = useState([]);

  const onSubmit = handleSubmit(async (data) => {
    const response = await createPaleteWord(data);
    setColor(response.data);
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Type a word"
          {...register("word", { required: true })}
        />
        {errors.color && <span>This field is required</span>}
        <button>Create Palette</button>
      </form>
      {color &&
        color.map((e) => (
          <ColorSquare color={e} key={e} />
        ))}
    </>
  );
}

export default WordForm;
