import React, { useState } from 'react';
import './Login.css';

const Cadastro = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  let usuario

  const cadastro = () => {
    if(!username || !password || !confirmPassword || password !== confirmPassword) {
      alert('Informações incorretas')
    } else {
      usuario = {username, password}
      addUsuario(usuario)
      alert('Usuário cadastrado com sucesso!')
    }

    setUsername('')
    setPassword('')
    setConfirmPassword('')
  }

    const addUsuario = async (usuario) => {
      console.log('entrouaddusuario: ', usuario)
      const res = await fetch('http://localhost:5000/usuarios/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(usuario)
      })
    }


  return(
    <div className="login-wrapper">
      <h1>Faça o cadastro</h1>
      <form>
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
          <button type="button" onClick={(e) =>
          props.onCadastro(1, {username, password, confirmPassword})}> Login </button>
          <button type="button" onClick={cadastro}> Realizar Cadastro </button>
        </div>
      </form>
    </div>
  )
}

export default Cadastro