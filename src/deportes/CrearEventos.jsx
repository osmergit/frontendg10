import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import '../../src/style.css';
//import '../style.css';

const URI = 'http://localhost:8000/usuarios/regevento'


export const CompCrearEvento = () => {
    const [fecha, setFecha] = useState('')
    const [equipo1, setEquipo1] = useState('')
    const [equipo2, setEquipo2] = useState('')
    const [marcador1, setMarcador1] = useState('')
    const [marcador2, setMarcador2] = useState('')
    const [tipoevento, setTipoevento] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {fecha: fecha, equipo1: equipo1, equipo2: equipo2, marcador1: marcador1, marcador2: marcador2, tipoevento: tipoevento})
        navigate('/sheventos')
    }   

    return (
        <div className="login-form">
           <h3>Creación de Eventos Deportivos</h3>
           
           <form onSubmit={store}>
                <div>
                    <input
                        value={fecha}
                        onChange={ (e)=> setFecha(e.target.value)} 
                        type="text"
                        placeholder = "Fecha Año/Mes/Dia"
                    />     
                </div>
                <div>
                     <input
                        value={equipo1}
                        onChange={ (e)=> setEquipo1(e.target.value)} 
                        type="text"
                        placeholder = "Digite Equipo 1"
                     />    
               </div>
               <div>
                     <input 
                        value={equipo2}
                        onChange={ (e)=> setEquipo2(e.target.value)} 
                        type = "text"
                        placeholder = "Digite Equipo 2"
                     />                 
                </div>
                <div>
                     <input 
                        value={marcador1}
                        onChange={ (e)=> setMarcador1(e.target.value)} 
                        type = "text"
                        placeholder = "Digite Marcador E1"
                     />                 
                </div>
                <div>
                     <input 
                        value={marcador2}
                        onChange={ (e)=> setMarcador2(e.target.value)} 
                        type = "text"
                        placeholder = "Digite Marcador E2"
                     />                 
                </div>
                <div>
                     <input 
                        value={tipoevento}
                        onChange={ (e)=> setTipoevento(e.target.value)} 
                        type = "text"
                        placeholder = "Digite el Evento D."
                     />                 
                </div>
                
                 <button type="submit" className="btn-register">Guardar</button>                  
           </form>
        </div>
    )
}

export default CompCrearEvento