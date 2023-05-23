import { useForm } from "react-hook-form";
//import { useParams } from "react-router-dom";
import { createPaleteWord } from "../api/color.api";
//import { toast } from "react-hot-toast";

function WordForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //const params = useParams();
  const onSubmit = handleSubmit(async (data) => {
    const response = await createPaleteWord(data);
    console.log(response);
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Type a word"
          {...register("word", { required: true })}
        />
        {errors.color && <span>This field is required</span>}
        <button>Create Palette</button>
      </form>
    </div>
  );
}

export default WordForm;
