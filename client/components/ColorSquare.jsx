function ColorSquare({ color }) {
  return (
    <div className="flex flex-col">
      <p className="text-black text-center">{color}</p>
      <div
        style={{ backgroundColor: color }}
        className=" text-white w-48 h-52 rounded-lg text-center p-2 flex items-center justify-center"
      ></div>
    </div>
  );
}

export default ColorSquare;
