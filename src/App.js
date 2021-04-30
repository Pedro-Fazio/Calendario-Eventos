import React, {useState, useEffect} from 'react'
import './App.css';
import Calendario from './Components/Calendar/Calendario.jsx'
import Login from './Components/Login/Login'
import Cadastro from './Components/Login/Cadastro'
import Logado from './Components/Login/Logado'

const App = () => {
  const [estadoLogin, setEstadoLogin] = useState(1)
  const [mostrarCalendario, setMostrarCalendario] = useState(false)
  const [usuarios, setUsuarios] = useState([])
  const [nomeUsuario, setNomeUsuario] = useState()

  useEffect(() => {
    const getUsuarios = async () => {
      const usuariosServidor = await fetchUsuarios()
      setUsuarios(usuariosServidor)
      //console.log(usuariosServidor)
    }

    getUsuarios()
  }, [])

  const fetchUsuarios = async () => {
    const res = await fetch('http://localhost:5000/usuarios')
    const dadosUsuarios = await res.json()
  
    
    return dadosUsuarios
  }
  

  const alteraCalendario = () => {
    setMostrarCalendario(true)
  }
  

  const estadoLoginVerificacao = () => {
    if(estadoLogin === 0) {
      return <Cadastro cadastro={cadastro}/>
    } else if(estadoLogin === 1) {
      return <Login usuarios={usuarios} login={login}/>
    } else if(estadoLogin === 2) {
      return <Logado nomeUsuario={nomeUsuario}/>
    }
  }

  const cadastro = (cadastroVerificacao) => {
    if(cadastroVerificacao === 1) {
      setEstadoLogin(1)
    }
  }

  const login = (loginVerificacao, infoLogin) => {
    if(loginVerificacao === 0) {
      setEstadoLogin(0)
    } else if(loginVerificacao === 2) {
      setNomeUsuario(infoLogin.usuarioNome)
      setEstadoLogin(2)
      alteraCalendario()
    }
  }
  
  return (
    <div className='App'>
      {estadoLoginVerificacao()}
      {mostrarCalendario && <Calendario />}
    </div>
  );
}

export default App;