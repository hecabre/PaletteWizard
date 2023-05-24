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
        />
        {errors.word && !isSubmitSuccessful && (
          <>{toast.error("Type a word")}</>
        )}
        <button type="submit">Create Palette</button>
      </form>
      {loading ? (
        <Loader />
      ) : (
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
