function ColorSquare({color}) {
  return (
    <div className={`bg-[${color}] rounded-md w-24 h-10`}>{color}</div>
  )
}

export default ColorSquare