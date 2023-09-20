import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Explore from './page/Explore';
import Favorites from './page/Favorites';

const colors = ['green', 'red', 'blue'];
const modes = ['light', 'dark'];

function App() {
  const [color, setColor] = useState(colors[0])
  const [mode, setMode] = useState(modes[0])

  return (
    <div
      className={[
        'bg-primaryBg min-h-screen',
        color && `theme-${color}`,
        mode && `theme-${mode}`
      ].join(' ')}
    >
      <div className='container mx-auto px-4'>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
