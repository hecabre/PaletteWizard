function ColorSquare({ color }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="h-28 text-white w-1/5 rounded-lg text-center p-1 flex items-center justify-center flex-wrap"
    >
      {color}
    </div>
  );
}

export default ColorSquare;
