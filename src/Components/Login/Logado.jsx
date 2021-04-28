import React, { useState } from 'react';
import './Login.css';

const Logado = (props) => {
  React.useEffect(() => {
    props.showCalendario()
  }, [])

  return(
    <div id='logado'>
        Bem vindo, {props.nomeUsuario.replace(/"/g, "")}
    </div>
  )
}

export default Logado