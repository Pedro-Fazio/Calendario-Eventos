import './EventoDescricao.css'

const EventoDescricao = (props) => {
    const titulo = props.eventoEncontrado.info.titulo
    const descricao = props.eventoEncontrado.info.descricao
    const data = props.eventoEncontrado.info.data

    return (
            <div className='evento'>
                <ul>
                    <li> Título: {titulo} </li>
                    <li> Descrição: {descricao} </li>
                    <li> Data: {data} </li>
                </ul>

                <ul>
                    <li> <button> Excluir </button> </li>
                    <li> <button> Editar </button> </li>
                </ul>
            </div>
    )
}

export default EventoDescricao