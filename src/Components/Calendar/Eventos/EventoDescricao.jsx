import './EventoDescricao.css'

const EventoDescricao = (props) => {
    const excluirEvento = async (id) => {
        // await = fetch(`http://localhost:5000/eventos ${id}`, {
        //     method: 'DELETE'
        // })
        // alert('Excluir')
    }

    const editarEvento = () => {
        alert('Editar')
    }

    return (
            <div className='evento'>
                <ul>
                    <li> Título do evento </li>
                    <li> Descrição do evento </li>
                    <li> Data inicio: 08/06/2000 </li>
                    <li> Data fim: 23/04/2021 </li>
                </ul>

                <ul>
                    <li> <button onClick={excluirEvento}> Excluir </button> </li>
                    <li> <button onClick={editarEvento}> Editar </button> </li>
                </ul>
            </div>
    )
}

export default EventoDescricao