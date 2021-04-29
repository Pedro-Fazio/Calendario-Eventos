import React from 'react';
import './Login.css';

const Logado = (props) => {

  return(
    <div id='logado'>
        Bem vindo, {props.nomeUsuario.replace(/"/g, "")}
    </div>
  )
}

export default Logado