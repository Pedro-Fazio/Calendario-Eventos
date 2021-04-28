import React, { useState } from 'react';
import './Login.css';

const Logado = (props) => {
  const [nomeUsuario, setnomeUsuario] = useState('Pedro')

  React.useEffect(() => {
    props.showCalendario()
  }, [])

  return(
    <div id='logado'>
        Bem vindo, {nomeUsuario}
    </div>
  )
}

export default Logado