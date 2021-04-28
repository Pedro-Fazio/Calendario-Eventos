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
  const [usuarios, setUsuarios] = useState([])
  const [nomeUsuario, setNomeUsuario] = useState()

  useEffect(() => {
    const getUsuarios = async () => {
      const usuariosServidor = await fetchUsuarios()
      setUsuarios(usuariosServidor)
      console.log(usuariosServidor)
    }

    getUsuarios()
  }, [])

  const fetchUsuarios = async () => {
    const res = await fetch('http://localhost:5000/usuarios')
    const dadosUsuarios = await res.json()
  
    
    return dadosUsuarios
  }
  

  const showCalendario = () => {
    setShowCalendar(true)
  }

  const estadoLogin = () => {
    if(estadoLoginVerify == 0) {
      return <Cadastro onCadastro={cadastro}/>
    } else if(estadoLoginVerify == 1) {
      return <Login usuarios={usuarios} onLogin={login}/>
    } else if(estadoLoginVerify == 2) {
      return <Logado nomeUsuario={JSON.stringify(nomeUsuario)} showCalendario={showCalendario}/>
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
      setNomeUsuario(infoLogin.username)
      setEstadoLoginVerify(2)
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