import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { PorfolioContainer } from './components/Porfolio/PorfolioContainer'
import { Nav } from './components/common/Nav';
import { Footer } from './components/common/Footer';
import  {BlogContainer} from './components/Blog/BlogList/BlogContainer';

function App() {


  return (
    <div className="App">
      <Nav />

      <BlogContainer/>
      {/* <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/porfolio">
          <PorfolioContainer />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>

      </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
