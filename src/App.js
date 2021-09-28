import React from 'react';
import Navbar from './features/Navbar';
import Container from './features/Container';
import Home from './features/Home';
import Detail from './features/Detail/index';

import {  Switch, Route } from 'react-router-dom';




function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Switch>
          <Route path ="/" exact>
            <Home /> 
          </Route>
          <Route path="/detail/:id" exact>
            <Detail />
					</Route>
            
        </Switch>
      </Container>
    </div>
  );
}

export default App;
