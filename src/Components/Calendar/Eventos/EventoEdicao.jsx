import React, { useState } from 'react';
import './EventoEdicao.css'

const EventoEdicao = (props) => {
    const [titleTxt, setTitleTxt] = useState('')
    const [descriptionTxt, setDescriptionTxt] = useState('')
    const [evento, setEvento] = useState([])
    let data = props.data
    let dataVerify = props.dataTxt

    const onSubmit = (e) => {
        e.preventDefault()

        if(!titleTxt || !descriptionTxt) {
            alert('Por favor, preencha todos os campos')
        } else {
            setEvento(titleTxt, descriptionTxt, data)
            props.onEvento(dataVerify, {titleTxt, descriptionTxt, data})
            addEvento()
            alert('Evento criado com sucesso!')
        }

        setTitleTxt('')
        setDescriptionTxt('')
    }

    const addEvento = async () => {
        const res = await fetch(
            'http://localhost:5000/eventos', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            //colocar os dados do evento como parametro do json.stringify
            body: JSON.stringify(evento)
        })
    }

    return (
         <form className='evento' onSubmit={onSubmit}>
             <div id='titulo-evento'>
                 <label> Digite o título do evento </label>
                 <input type="text" value={titleTxt} onChange={e => setTitleTxt(e.target.value)}/>
             </div>

             <div id='descricao-evento'>
                 <label> Digite a descrição do evento </label> 
                 <input type="text" value={descriptionTxt} onChange={e => setDescriptionTxt(e.target.value)}/>
             </div>

             <div id='datas-evento'>
                 <h1> Data: {props.data} </h1>
             </div>
             <span> <button> Confirmar </button> </span>
         </form>
    )
}

export default EventoEdicao