import './EventoDescricao.css'
import {useState} from 'react'

const EventoDescricao = (props) => {
    const titulo = props.eventoEncontrado.info.titulo
    const descricao = props.eventoEncontrado.info.descricao
    const data = props.eventoEncontrado.info.data
    //const [isExcluir, setIsExcluir] = useState(false)

    let isExcluir = false

    const excluir = () => {
        //setIsExcluir(true)
        isExcluir = true
        props.isExcluirEvento(isExcluir)
    }

    return (
            <div className='evento'>
                <ul>
                    <li> Título: {titulo} </li>
                    <li> Descrição: {descricao} </li>
                    <li> Data: {data} </li>
                </ul>

                <ul>
                    <li> <button  onClick={excluir}> Excluir </button> </li>
                    <li> <button onClick={excluir}> Editar </button> </li>
                </ul>
            </div>
    )
}

export default EventoDescricao