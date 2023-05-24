import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers";



const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames(['app', theme])}>
      <div>
        <Link to='/'>home </Link>
        <Link to='/about'>about</Link>
        <button onClick={toggleTheme}>toggle theme</button>
      </div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path='/' element={<MainPageAsync/>}/>
          <Route path='/about' element={<AboutPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;