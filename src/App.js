import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


import Clients from './client/pages/client';
import Requests from './requests/pages/requests';

const App = () => {
  return ( 

  <Router>
    <Switch>

    
      <Route path='/clients' exact>
        <Clients/>
      </Route>

      <Route path='/requests' exact>
        <Requests/>
      </Route>

      <Redirect to='/' />

    </Switch>
  </Router>
  )
}

export default App;
