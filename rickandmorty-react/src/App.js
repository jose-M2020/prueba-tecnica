import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Explore from './page/Explore';
import Favorites from './page/Favorites';
import { ThemeColorContext, useThemeColor } from './theme';

function App() {
  const { themeColor, setThemeColor } = useThemeColor();

  return (
    <ThemeColorContext.Provider value={{ themeColor, setThemeColor }}>
      <div
        className={[
          'bg-primary100 min-h-screen',
          themeColor && `theme-${themeColor}`,
          true && `theme-${"light"}`
        ].join(' ')}
      >
        <div className='container mx-auto px-4'>
          <Routes>
            <Route path='/' element={<Explore />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </ThemeColorContext.Provider>
  );
}

export default App;
