import './Calendar.css'
import React, { useEffect, useState } from "react"
import EventoEdicao from './Eventos/EventoEdicao.jsx'
import EventoDescricao from './Eventos/EventoDescricao'
import {subMonths, addMonths, addDays, isSameDay, format, startOfWeek, startOfMonth,
  endOfMonth, endOfWeek, isSameMonth} from "date-fns"

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState (new Date())
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [data, setData] = useState()
    const [dataTxt, setDataTxt] = useState()
    const [dataEventos, setDataEventos] = useState([{data: "", isEvento: null}])
    const [eventos, setEventos] = useState([{data: "", info: null}])

    let edicaoOrDescricao = false
    let eventoEncontrado

    React.useEffect(() => {
      console.log('dataEventos: ', dataEventos)
      console.log('eventos: ', eventos)

    }, [dataEventos, eventos])

    const eventoCriado = (dataVerify, infoEvento) => {
      setEventos([...eventos, {
          data: dataVerify,
          info: infoEvento
        }
      ])

       setDataEventos([...dataEventos, {
          data: dataVerify,
          isEvento: true
        }
      ])

    }

    const isSelected = (day, selectedDate) => {
      if(isSameDay(day, selectedDate) ||
        dataEventos.find((e) => 
          (JSON.stringify({data: day.toString(), isEvento: true}) === JSON.stringify(e))) !== undefined) {
        if(isSameDay(day, selectedDate) &&
          dataEventos.find((e) =>
            (JSON.stringify({data: day.toString(), isEvento: true}) === JSON.stringify(e))) !== undefined) {
          edicaoOrDescricao = true
          console.log('entrou')
          showDescricao(day)
      }
        return "selected"
      } else {
          return ""
      }
    }

    const showDescricao = (day) => {
      eventoEncontrado = eventos.find(element => element.data.toString() === day.toString())
    }

    const headerCalendar = () => {
        const nextMonth = () => {
            setCurrentMonth(addMonths(currentMonth, 1))
          }
    
        const prevMonth = () => {
            setCurrentMonth(subMonths(currentMonth, 1))
          }
    
        return (
          <div className="header row flex-middle">
            <div className="col col-start">
              <div className="icon" onClick={prevMonth}>
                chevron_left
              </div>
            </div>
            <div className="col col-center">
              <span>{format(currentMonth, 'MMMM yyyy')}</span>
            </div>
            <div className="col col-end" onClick={nextMonth}>
              <div className="icon"> chevron_right </div>
            </div>
          </div>
        )
    }

    const days = () => {
        const days = []
    
        let startDate = startOfWeek(currentMonth)
    
        for (let i = 0; i < 7; i++) {
          days.push(
            <div className="col col-center" key={i}>
              {format(addDays(startDate, i), "ddd")}
            </div>
          )
        }
    
        return <div className="days row">{days}</div>
      }

      const cells = () => {
        const onDateClick = (day) => {
          console.log(day)
          setData(format(day, "dd/MM/y"))
          setDataTxt(day.toString())
          setSelectedDate(day)
        }

        const monthStart = startOfMonth(currentMonth)
        const monthEnd = endOfMonth(monthStart)
        const startDate = startOfWeek(monthStart)
        const endDate = endOfWeek(monthEnd)
    
        const rows = []
    
        let days = []
        let day = startDate
        let formattedDate = ""

        while (day <= endDate) {
          for (let i = 0; i < 7; i++) {
            formattedDate = format(day, "d")
            const cloneDay = day
            days.push(
              <div
                className={`col cell ${
                  !isSameMonth(day, monthStart)
                    ? "disabled"
                    : isSelected(day, selectedDate)
                }`}
                key={day}
                onClick={() => {
                                return (
                                  onDateClick(cloneDay)                              
                                )}}
              >
                <span className="number">{formattedDate}</span>
                <span className="bg">{formattedDate}</span>
              </div>
            )
            day = addDays(day, 1)
          }
          rows.push(
            <div className="row" key={day}>
              {days}
            </div>
          )
          days = []
        }
        return <div className="body">{rows}</div>
      }


    return (
        <div className="calendar">
            {headerCalendar()}
            {days()}
            {cells()}
            {edicaoOrDescricao ? <EventoDescricao eventoEncontrado={eventoEncontrado}> </EventoDescricao> :
            <EventoEdicao dataTxt={dataTxt} data={data} onEvento={eventoCriado}/>}
        </div>
    )
}

export default Calendar