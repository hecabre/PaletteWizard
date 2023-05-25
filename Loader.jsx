import { Vortex } from "react-loader-spinner"
function Loader() {
  return (
    <Vortex
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="2.00"
      width="96"
      visible={true}
    />
  );
}

export default Loader;
