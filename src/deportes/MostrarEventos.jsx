import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/usuarios/shevents'
const URI2 = 'http://localhost:8000/usuarios/delevent/'

export const CompShowEventos= () => {
    
    const [ceventos, setEventos] = useState([])
   
    useEffect( ()=>{
        getBlogs()
    },[])

    //procedimineto para mostrar todos los registros
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setEventos(res.data)
    }

    //procedimineto para eliminar un registro
    const deleteBlog = async (_id) => {
       await axios.delete(`${URI2}${_id}`)
       getBlogs()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/regevento" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i>Crear Evento Deportivo</Link>
                    <table className='table'>
                        <thead className='thead tr:first-child'>
                            <tr>
                                <th>Fecha</th>
                                <th>Equipo 1</th>
                                <th>Equipo 2</th>
                                <th>Marcador E1</th>
                                <th>Marcador E2</th>
                                <th>Tipo evento</th>
                            </tr>
                        </thead>
                        <tbody>
                            { ceventos.map ( (blog) => (
                                <tr key={ blog._id}>
                                    <td > { blog.fecha } </td>
                                    <td > { blog.equipo1 } </td>
                                    <td > { blog.equipo2 } </td>
                                    <td > { blog.marcador1 } </td>
                                    <td > { blog.marcador2 } </td>
                                    <td > { blog.tipoevento } </td>
                                    <td>
                                        <Link to={`/editevento/${blog._id}`} className=''><i className="fas fa-edit"></i>edit</Link>
                                        <button onClick={ ()=>deleteBlog(blog._id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i>Eliminar</button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowEventos