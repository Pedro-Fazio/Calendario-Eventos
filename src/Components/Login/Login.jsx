import React, { useState } from 'react';
import './Login.css';

const Login = (props) => {
  const [usuarioNome, setUsuarioNome] = useState('')
  const [usuarioSenha, setUsuarioSenha] = useState('')

  let loginVerificacao = 2

  const entrar = () => {
    if(JSON.stringify(props.usuarios).replace(/"/g, "").includes(`${usuarioNome}`) 
      &&
      JSON.stringify(props.usuarios).replace(/"/g, "").includes(`${usuarioSenha}`)  ) {
        console.log('usuarios: ', props.usuarios)
        loginVerificacao = 2
        props.login(loginVerificacao, {usuarioNome, usuarioSenha})
      } else if(!usuarioNome || !usuarioSenha) {
        alert('Por favor preencha todos os campos')
      } else {
        alert('Informações incorretas')
      }

    setUsuarioNome('')
    setUsuarioSenha('')
  }

  const criarCadastro = () => {
      loginVerificacao = 0
      props.login(loginVerificacao)
  }

  return(
    <div className="login-wrapper">
      <h1>Faça o Login</h1>
      <form>
        <label>
          <p> Nome </p>
          <input type="text" value={usuarioNome} onChange={e => setUsuarioNome(e.target.value)}/>
        </label>
        <label>
          <p>Senha</p>
          <input type="password" value={usuarioSenha} onChange={e => setUsuarioSenha(e.target.value)}/>
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