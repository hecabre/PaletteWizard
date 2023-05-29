import { Vortex } from "react-loader-spinner";
function Loader() {
  return (
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={["green", "orange", "green",  "orange", "green",  "orange"]}
    />
  );
}

export default Loader;
