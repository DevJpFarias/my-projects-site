type Props = {
  college: string
  area: string
  course: string
  startDate: string
  endDate: string
}

export function Formation({ college, area, course, startDate, endDate }: Props) {
  return (
    <div className="text-white">
      <h3 className="text-xl">{college}</h3>
      <p className="text-sm">
        <span className="text-gray-300">{area}</span> - <span>{course}</span>
      </p>
      <p className="text-sm">
        <span>{startDate}</span> - <span>{endDate}</span>
      </p>
    </div>
  )
}