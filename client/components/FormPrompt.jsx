import { useForm } from "react-hook-form";
import { useState } from "react";
import ColorSquare from "./ColorSquare";
import { toast } from "react-hot-toast";
import Loader from "./Loader";
import Container from "../containers/Container";
import Description from "./Description";
import PaleteContainer from "../containers/PaleteContainer";
import DonationButton from "./DonationButton";

function FormPrompt({ promptFunction, descriptionWord }) {
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
      toast.error("Something went wrong, try later");
    } finally {
      setLoading(false);
    }
  });

  return (
    <>
      <Container>
        <div className="flex flex-col gap-8 w-full items-center">
          <h1 className="text-greenTurtle text-6xl font-normal w-4/5 text-center">
            Palette Wizzard!
          </h1>
          <Description text={descriptionWord} />
        </div>
        <form
          onSubmit={onSubmit}
          className="flex items-center w-9/12 tracking-wide justify-center mt-5"
        >
          <input
            type="text"
            placeholder="Type a word"
            disabled={loading}
            {...register("word", { required: true })}
            className="w-7/12 border-2 border-grey rounded-md py-2 focus:outline-none text-grey"
          />
          <p className="hidden">
            {errors.word && !isSubmitSuccessful && (
              <>{toast.error("Type a word")}</>
            )}
          </p>
          <button
            type="submit"
            className=" bg-greenTurtle text-white py-3 px-5 rounded-md font-light right-20 flex gap-3 items-center"
          >
            Create <img src="../assets/icons/search_icon.png"></img>
          </button>
        </form>

        <div className="mt-8">
          {loading ? (
            <Loader />
          ) : (
            <div className="flex justify-center items-center gap-x-20 flex-wrap">
              {color.map((e) => (
                <ColorSquare color={e} key={e} />
              ))}
            </div>
          )}
        </div>
        <DonationButton />
      </Container>
    </>
  );
}

export default FormPrompt;
