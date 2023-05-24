import { useForm } from "react-hook-form";
import { useState } from "react";
import ColorSquare from "./ColorSquare";
import { toast } from "react-hot-toast";

function WordForm({promptFunction}) {
  const {
    register,
    formState: { errors, isSubmitSuccessful},
    handleSubmit,
  } = useForm();
  const [color, setColor] = useState([]);

  const onSubmit = handleSubmit(async (data) => {
    const response = await promptFunction(data);
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
        {errors.word && !isSubmitSuccessful && (
          <>
            {toast.error("Type a word")}
          </>
        )}
        <button type="submit">Create Palette</button>
      </form>

      {color && (
        <div className="grid lg:grid-cols-4 h-20 md:grid-cols-2">
          {color.map((e) => (
            <ColorSquare color={e} key={e} />
          ))}
        </div>
      )}
    </>
  );
}

export default WordForm;
