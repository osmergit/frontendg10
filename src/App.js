import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CompShowUsers } from './deportes/MostrarUsuarios.jsx'
import { CompCreateUser } from './deportes/CrearUsuarios.jsx'

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
                    </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
