import React, { useState } from 'react';
import './Login.css';

const Logado = (props) => {
  const [nomeUsuario, setNomeUsuario] = useState('Pedro')

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