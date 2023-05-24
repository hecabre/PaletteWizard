import { RotatingLines } from "react-loader-spinner";
function Loader() {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="2.00"
      width="96"
      visible={true}
    />
  );
}

export default Loader;
