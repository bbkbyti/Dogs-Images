
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AllDogs from './components/AllDogs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AllDogs />} />
      </Routes>
    </div>
  );
}

export default App;
