import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CompShowUsers } from './deportes/MostrarUsuarios.jsx'
import { CompCreateUser } from './deportes/CrearUsuarios.jsx'
import { CompEditUser } from './deportes/EditarUsuarios.jsx'
import { CompShowEventos } from './deportes/MostrarEventos.jsx'
import {CompCrearEvento} from './deportes/CrearEventos.jsx'
import {CompEditEvento} from './deportes/EditarEventos.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
                     <Routes>
                                
                         <Route path='/users' element={ <CompShowUsers />} />
                         <Route path='/create' element={ <CompCreateUser />} />  
                         <Route path= '/edit/:_id' element ={ <CompEditUser />} />  
                         <Route path= '/sheventos' element = {<CompShowEventos />} />
                         <Route path= '/regevento' element = {<CompCrearEvento />} />
                         <Route path= '/editevento/:_id' element = { <CompEditEvento />} />
                    </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
