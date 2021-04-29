import './EventoDescricao.css'

const EventoDescricao = (props) => {
    const titulo = props.eventoEncontrado.info.titulo
    const descricao = props.eventoEncontrado.info.descricao
    const data = props.eventoEncontrado.info.data

    const excluir = () => {
        props.isExcluirEvento(true)
    }

    return (
            <div className='evento'>
                <ul>
                    <li> Título: {titulo} </li>
                    <li> Descrição: {descricao} </li>
                    <li> Data: {data} </li>
                </ul>

                <ul>
                    <li> <button onClick={excluir}> Excluir </button> </li>
                    <li> <button onClick={excluir}> Editar </button> </li>
                </ul>
            </div>
    )
}

export default EventoDescricao