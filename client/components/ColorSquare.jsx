function ColorSquare({ color }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="h-full text-white w-1/2 rounded-lg text-center p-2 flex items-center justify-center"
    >
      {color}
    </div>
  );
}

export default ColorSquare;
