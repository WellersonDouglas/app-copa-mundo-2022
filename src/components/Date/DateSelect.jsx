import { subDays, addDays, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { useState } from 'react'

const initialDate = '2022-11-20T13:00:00Z'

export function DateSelect() {
  const [currentDate, setCurrentDate] = useState(new Date(initialDate))

  const DateOfDay = format(currentDate, "dd 'de' MMMM", {
    locale: ptBR,
  })

  const prevDay = () => {
    const nextDate = subDays(currentDate, 1)
    setCurrentDate(nextDate)
  }
  const nextDay = () => {
    const nextDate = addDays(currentDate, 1)
    setCurrentDate(nextDate)
  }

  return (
    <div className="p-4 flex space-x-4 items-center justify-center">
      <ArrowLeft
        size={26}
        weight="bold"
        className="text-red-500"
        onClick={prevDay}
      />
      <span className="font-bold">{DateOfDay}</span>
      <ArrowRight
        size={26}
        weight="bold"
        className="text-red-500"
        onClick={nextDay}
      />
    </div>
  )
}
