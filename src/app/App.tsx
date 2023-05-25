import React from 'react';
import './styles/index.scss'

import {useTheme} from "shared/lib/hooks";
import {classNames} from "shared/lib/helpers";
import {AppRouter} from "app/providers/Router";
import {Navbar} from "widgets/Navbar";


const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames(['app', theme])}>
      <div>
        <Navbar/>
      </div>
      <AppRouter/>
    </div>
  );
};

export default App;