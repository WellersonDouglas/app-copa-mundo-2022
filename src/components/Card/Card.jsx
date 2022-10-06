export function CardsTime({ timeA, timeB, match }) {
  return (
    <div className="rounded-xl border border-gray-300 p-4 text-center space-y-4">
      <span className="text-sm text-red-700 font-bold md:text-md">
        {match.time}
      </span>

      <div className="flex justify-around items-center space-x-2">
        <span className="uppercase font-semibold">{timeA.slug}</span>
        <img src={`./img/${timeA.slug}.png`} alt="" />
        <input
          type="number"
          className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl"
        />

        <span className="text-red-500 font-bold">X</span>

        <input
          type="number"
          className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl"
        />

        <img src={`./img/${timeB.slug}.png`} alt="" />
        <span className="uppercase font-semibold">{timeB.slug}</span>
      </div>
    </div>
  )
}
