import React, { useState } from 'react';
import './EventoEdicao.css'

const EventoEdicao = (props) => {
    const [titulo, settitulo] = useState('')
    const [descricao, setdescricao] = useState('')
    const [evento, setEvento] = useState([])
    let data = props.data
    let dataVerify = props.dataTxt

    const onSubmit = (e) => {
        e.preventDefault()

        if(!titulo || !descricao) {
            alert('Por favor, preencha todos os campos')
        } else {
            setEvento(titulo, descricao, data)
            props.onEvento(dataVerify, {titulo, descricao, data})
            alert('Evento criado com sucesso!')
        }

        settitulo('')
        setdescricao('')
    }

    return (
         <form className='evento' onSubmit={onSubmit}>
             <div id='titulo-evento'>
                 <label> Digite o título do evento </label>
                 <input type="text" value={titulo} onChange={e => settitulo(e.target.value)}/>
             </div>

             <div id='descricao-evento'>
                 <label> Digite a descrição do evento </label> 
                 <input type="text" value={descricao} onChange={e => setdescricao(e.target.value)}/>
             </div>

             <div id='datas-evento'>
                 <h1> Data: {props.data} </h1>
             </div>
             <span> <button> Confirmar </button> </span>
         </form>
    )
}

export default EventoEdicao