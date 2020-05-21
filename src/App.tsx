import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home } from './components/Home/Home'
// import {Porfolio} from './components/Porfolio'
// import {BlogContainer as Blog} from './components/Blog/BlogList/BlogContainer'
import { Nav } from './components/common/Nav';
import { Footer } from './components/common/Footer';

function App() {


  return (
    <div className="App">
      <Nav />
      <Home></Home>
      {/* <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/porfolio">
          <Porfolio />
        </Route>
      </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
