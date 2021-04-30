import './Calendario.css'
import React, { useEffect, useState } from "react"
import EventoEdicao from './Eventos/EventoEdicao.jsx'
import EventoDescricao from './Eventos/EventoDescricao'
import {subMonths, addMonths, addDays, isSameDay, format, startOfWeek, startOfMonth,
  endOfMonth, endOfWeek, isSameMonth} from "date-fns"

const Calendar = () => {
    const [mesAtual, setMesAtual] = useState (new Date())
    const [dataSelecionada, setDataSelecionada] = useState(new Date())
    const [data, setData] = useState()
    const [dataVerificacao, setDataVerificacao] = useState()
    const [eventos, setEventos] = useState([{data: "", info: null}])
    const [isExcluir, setIsExcluir] = useState(false)

    let edicaoOrDescricao = false
    let eventoEncontrado

    useEffect(() => {
      console.log('eventos: ', eventos)

    }, [eventos])

    const eventoCriado = (dataVerificacao, infoEvento) => {
      setEventos([...eventos, {
          data: dataVerificacao,
          info: infoEvento
        }
      ])
    }

    const isExcluirEvento = (value) => {
      if(value) {
        setIsExcluir(true)
      }
    }

    const excluirEvento = (diaEvento) => {
      eventoEncontrado = eventos.find(element => element.data.toString() === diaEvento.toString())
      const indexEvento = eventos.indexOf(eventoEncontrado)

      if (indexEvento > -1) {
        eventos.splice(indexEvento, 1)
        edicaoOrDescricao = false
        alert('Excluido/Editado')
      }
    }

    const isSelecionado = (dia, dataSelecionada) => {
      if(isSameDay(dia, dataSelecionada) || (JSON.stringify(eventos)).includes(dia.toString())) {
        if(isSameDay(dia, dataSelecionada) && (JSON.stringify(eventos)).includes(dia.toString())) {
          if(isExcluir) {
            excluirEvento(dia)
          } else {
            edicaoOrDescricao = true
            mostrarDescricao(dia)
          }
      }
        return "selected"
      } else {
          return ""
      }
    }

    const mostrarDescricao = (dia) => {
      eventoEncontrado = eventos.find(element => element.data.toString() === dia.toString())
    }

    const headerCalendario = () => {
        const nextMonth = () => {
            setMesAtual(addMonths(mesAtual, 1))
          }
    
        const prevMonth = () => {
            setMesAtual(subMonths(mesAtual, 1))
          }
    
        return (
          <div className="header row flex-middle">
            <div className="col col-start">
              <div className="icon" onClick={prevMonth}>
                chevron_left
              </div>
            </div>
            <div className="col col-center">
              <span>{format(mesAtual, 'MMMM yyyy')}</span>
            </div>
            <div className="col col-end" onClick={nextMonth}>
              <div className="icon"> chevron_right </div>
            </div>
          </div>
        )
    }

    const diasCalendario = () => {
        const dias = []
    
        let diaInicio = startOfWeek(mesAtual)
    
        for (let i = 0; i < 7; i++) {
          dias.push(
            <div className="col col-center" key={i}>
              {format(addDays(diaInicio, i), "ddd")}
            </div>
          )
        }
    
        return <div className="days row">{dias}</div>
      }

      const celulasCalendario = () => {
        const onDateClick = (dia) => {
          setIsExcluir(false)
          //console.log(dia)
          setData(format(dia, "dd/MM/y"))
          setDataVerificacao(dia.toString())
          setDataSelecionada(dia)
        }

        const monthStart = startOfMonth(mesAtual)
        const monthEnd = endOfMonth(monthStart)
        const diaInicio = startOfWeek(monthStart)
        const endDate = endOfWeek(monthEnd)
    
        const rows = []
    
        let dias = []
        let dia = diaInicio
        let formattedDate = ""

        while (dia <= endDate) {
          for (let i = 0; i < 7; i++) {
            formattedDate = format(dia, "d")
            const cloneDia = dia
            dias.push(
              <div
                className={`col cell ${
                  !isSameMonth(dia, monthStart)
                    ? "disabled"
                    : isSelecionado(dia, dataSelecionada, isExcluir)
                }`}
                key={dia}
                onClick={() => {
                                return (
                                  onDateClick(cloneDia)                              
                                )}}
              >
                <span className="number">{formattedDate}</span>
                <span className="bg">{formattedDate}</span>
              </div>
            )
            dia = addDays(dia, 1)
          }
          rows.push(
            <div className="row" key={dia}>
              {dias}
            </div>
          )
          dias = []
        }
        return <div className="body">{rows}</div>
      }

    return (
        <div className="calendar">
            {headerCalendario()}
            {diasCalendario()}
            {celulasCalendario()}
            {edicaoOrDescricao ? 
            <EventoDescricao isExcluirEvento={isExcluirEvento}
            eventoEncontrado={eventoEncontrado}/> :
            <EventoEdicao dataVerificacao={dataVerificacao} data={data} onEvento={eventoCriado}/>}
        </div>
    )
}

export default Calendar