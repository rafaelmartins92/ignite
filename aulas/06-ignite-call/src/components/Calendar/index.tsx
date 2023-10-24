import { CaretLeft, CaretRight } from 'phosphor-react'
import { getWeekDays } from '@/src/utils/get-week-days'

import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles'

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true })

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>December 2023</CalendarTitle>

        <CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <CalendarDay>1</CalendarDay>
              </td>
              <td>
                <CalendarDay>2</CalendarDay>
              </td>
              <td>
                <CalendarDay>3</CalendarDay>
              </td>
            </tr>
          </tbody>
        </thead>
      </CalendarBody>
    </CalendarContainer>
  )
}
