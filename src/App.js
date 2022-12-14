import { Route, Routes } from 'react-router-dom';
import './App.css';
import StartPage from './components/StartPage';
import Play from './components/Play';
import { createContext } from 'react';

export const Context = createContext()

function App() {


  const colorTemplate = {
    primary: '#b8a161',
    secondary:'#524b37',
    shadow: '0px 5px 19px 0px rgba(0,0,0,0.75)'
  }

  return (
    <div>
      <Context.Provider value={{ 'colorTemplate': colorTemplate}}>
        <div>
          <Routes>
            <Route path='/' element={ <StartPage /> }></Route>
            <Route path='/play' element={ <Play /> }></Route>
          </Routes>
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
