import './EventoDescricao.css'

const EventoDescricao = (props) => {

    return (
            <div className='evento'>
                <ul>
                    <li> Título do evento </li>
                    <li> Descrição do evento </li>
                    <li> Data inicio: 08/06/2000 </li>
                </ul>

                <ul>
                    <li> <button> Excluir </button> </li>
                    <li> <button> Editar </button> </li>
                </ul>
            </div>
    )
}

export default EventoDescricao