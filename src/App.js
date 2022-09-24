import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


import Clients from './clients/pages/client';
import Requests from './requests/pages/requests';
import Accueil from './accueil/pages/accueil';
import Experts from './experts/pages/Experts';


const App = () => {
  return ( 

  <Router>
    <Switch>

      <Route path='/accueil'>
        <Accueil/>
      </Route>

      <Route path='/experts' exact>
        <Experts/>
      </Route>
    
      <Route path='/clients' exact>
        <Clients/>
      </Route>

      <Route path='/requests' exact>
        <Requests/>
      </Route>

      <Redirect to='/accueil' />

    </Switch>
  </Router>
  )
}

export default App;
