import { useForm } from "react-hook-form";
import { useState } from "react";
import ColorSquare from "./ColorSquare";
import { toast } from "react-hot-toast";
import Loader from "./Loader";

function WordForm({ promptFunction }) {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm();
  const [color, setColor] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const response = await promptFunction(data);
      setColor(response.data);
    } catch {
      toast.error("Something go wrong, try later");
    } finally {
      setLoading(false);
    }
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Type a word"
          {...register("word", { required: true })}
<<<<<<< Updated upstream
=======
          disabled={loading}
>>>>>>> Stashed changes
        />
        {errors.word && !isSubmitSuccessful && (
          <>{toast.error("Type a word")}</>
        )}
<<<<<<< Updated upstream
        <button type="submit">Create Palette</button>
=======
        <button
          type="submit"
          onSubmit={toast.success("Successfully created palette")}
        >
          Create Palette
        </button>
>>>>>>> Stashed changes
      </form>
      {loading ? (
        <Loader />
      ) : (
<<<<<<< Updated upstream
        <div className="grid lg:grid-cols-4 h-20 md:grid-cols-2">
=======
        <div className="flex mx-auto gap-10 flex-wrap justify-center">
>>>>>>> Stashed changes
          {color.map((e) => (
            <ColorSquare color={e} key={e} />
          ))}
        </div>
      )}
    </>
  );
}

export default WordForm;
