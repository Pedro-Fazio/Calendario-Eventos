import React, { useState } from 'react';
import './Login.css';

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  let loginVerify = 2

  //template de como deve ser a string: username:pedro,password:senha
  const entrar = () => {
    if(JSON.stringify(props.usuarios).replace(/"/g, "").includes(
      `username:${username},password:${password}`)) {
        loginVerify = 2
        props.onLogin(loginVerify, {username, password})
      } else if(!username || !password) {
        alert('Por favor preencha todos os campos')
      } else {
        alert('Informações incorretas')
      }

    setUsername('')
    setPassword('')
  }

  const criarCadastro = () => {
      loginVerify = 0
      props.onLogin(loginVerify, {username, password})
  }

  return(
    <div className="login-wrapper">
      <h1>Faça o Login</h1>
      <form>
        <label>
          <p> Nome </p>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
        </label>
        <label>
          <p>Senha</p>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="button" onClick={entrar}> Entrar </button>
        </div>
        <div>
          <button type="button" onClick={criarCadastro}> Criar cadastro </button>
        </div>
      </form>
    </div>
  )
}

export default Login