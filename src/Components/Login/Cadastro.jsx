import React, { useState } from 'react';
import './Login.css';

const Cadastro = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  let cadastroVerify

  const onSubmit = (e) => {
    e.preventDefault()
    
    const userData = {
        username,
        password
    }

    if(!username || !password || !confirmPassword || password !== confirmPassword) {
      alert('Informações incorretas')
    } else {
      cadastroVerify = 1
      props.onCadastro(cadastroVerify, {username, password, confirmPassword})
    }
    setUsername('')
    setPassword('')
    setConfirmPassword('')

    //userData vai ser passado por uma função para o backend
    //loginUser(userData)
  }


  return(
    <div className="login-wrapper">
      <h1>Faça o cadastro</h1>
      <form onSubmit={onSubmit}>
        <label>
          <p> Nome </p>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
        </label>
        <label>
          <p> Senha </p>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <label>
          <p> Confirmar senha </p>
          <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit"> Realizar Cadastro </button>
        </div>
      </form>
    </div>
  )
}

export default Cadastro