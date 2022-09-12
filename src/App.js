import { Route, Routes } from 'react-router-dom';
import './App.css';
import StartPage from './components/StartPage';
import Play from './components/Play';

function App() {
  return (
    <div>
      <div>
      </div>
      <div>
        <Routes>
          <Route path='/' element={ <StartPage /> }></Route>
          <Route path='/play' element={ <Play /> }></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
