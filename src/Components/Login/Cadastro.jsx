import React, { useState } from 'react';
import './Login.css';

const Cadastro = (props) => {
  const [usuarioNome, setUsuarioNome] = useState('')
  const [usuarioSenha, setUsuarioSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

  let usuario

  const cadastro = () => {
    if(!usuarioNome || !usuarioSenha || !confirmarSenha || usuarioSenha !== confirmarSenha) {
      alert('Informações incorretas')
    } else {
      usuario = {usuarioNome, usuarioSenha}
      addUsuario(usuario)
      alert('Usuário cadastrado com sucesso!')
    }

    setUsuarioNome('')
    setUsuarioSenha('')
    setConfirmarSenha('')
  }

    const addUsuario = async (usuario) => {
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
          <input type="text" value={usuarioNome} onChange={e => setUsuarioNome(e.target.value)}/>
        </label>
        <label>
          <p> Senha </p>
          <input type="password" value={usuarioSenha} onChange={e => setUsuarioSenha(e.target.value)}/>
        </label>
        <label>
          <p> Confirmar senha </p>
          <input type="password" value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)}/>
        </label>
        <div id="button">
          <button type="button" onClick={cadastro}> Realizar Cadastro </button>
          <button type="button" onClick={(e) =>
          props.cadastro(1)}> Voltar para tela Login </button>
        </div>
      </form>
    </div>
  )
}

export default Cadastro