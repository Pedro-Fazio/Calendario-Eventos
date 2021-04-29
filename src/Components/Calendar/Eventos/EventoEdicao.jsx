import React, { useState } from 'react';
import './EventoEdicao.css'

const EventoEdicao = (props) => {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')

    let data = props.data

    const submit = (e) => {
        e.preventDefault()

        if(!titulo || !descricao) {
            alert('Por favor, preencha todos os campos')
        } else {
            props.onEvento(props.dataVerificacao, {titulo, descricao, data})
            alert('Evento criado com sucesso!')
        }

        setTitulo('')
        setDescricao('')
    }

    return (
         <form className='evento' onSubmit={submit}>
             <div id='titulo-evento'>
                 <label> Digite o título do evento </label>
                 <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)}/>
             </div>

             <div id='descricao-evento'>
                 <label> Digite a descrição do evento </label> 
                 <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)}/>
             </div>

             <div id='datas-evento'>
                 <h1> Data: {props.data} </h1>
             </div>
             <span> <button> Confirmar </button> </span>
         </form>
    )
}

export default EventoEdicao