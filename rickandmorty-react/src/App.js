import { Route, Routes } from 'react-router-dom';
import './App.css';
import Explore from './page/Explore';
import Favorites from './page/Favorites';

function App() {
  return (
    <h1 className="container bg-primaryBg">
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </h1>
  );
}

export default App;
