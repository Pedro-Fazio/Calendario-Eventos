import React, {useState, useEffect} from 'react'
import './App.css';
import Calendar from './Components/Calendar/Calendar.jsx'
import Login from './Components/Login/Login'
import Cadastro from './Components/Login/Cadastro'
import Logado from './Components/Login/Logado'

const App = () => {
  const [estadoLoginVerify, setEstadoLoginVerify] = useState(1)
  const [eventos, setEventos] = useState([])
  const [showCalendar, setShowCalendar] = useState(false)

  useEffect(() => {
    const getEventos = async () => {
      const eventosServer = await fetchEventos()
      setEventos(eventosServer)
    }

    getEventos()
  }, [])

  const fetchEventos = async () => {
    const res = await fetch('http://localhost:5000/eventos')
    const data = await res.json()

    console.log(data)
    return data
  }

  const showCalendario = () => {
    setShowCalendar(true)
  }

  const estadoLogin = () => {
    if(estadoLoginVerify == 0) {
      return <Cadastro onCadastro={cadastro}/>
    } else if(estadoLoginVerify == 1) {
      return <Login onLogin={login}/>
    } else if(estadoLoginVerify == 2) {
      return <Logado showCalendario={showCalendario}/>
    }
  }

  const cadastro = (cadastroVerify, infoCadastro) => {
    if(cadastroVerify == 1) {
      setEstadoLoginVerify(1)
      console.log(infoCadastro)
    }
  }

  const login = (loginVerify, infoLogin) => {
    if(loginVerify == 0) {
      setEstadoLoginVerify(0)
    } else if(loginVerify == 2) {
      setEstadoLoginVerify(2)
      console.log(infoLogin)
    }
  }
  
  return (
    <div className='App'>
      {estadoLogin()}
      {showCalendar && <Calendar />}
    </div>
  );
}

export default App;