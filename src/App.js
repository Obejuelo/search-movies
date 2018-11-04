import React, { Component } from 'react';
import { Detail } from "./pages/Detail";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "./pages/notFound";
import {Home} from './pages/Home'
import 'bulma/css/bulma.css';
import './App.css';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component {

  render() {
    return (
      <div className="App">

      {/* Animations for pages */}
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
							key={location.key}
							timeout={300}
							classNames="fade">

            {/* Routes and pages */}
            <Switch location={location}>
              <Route exact path='/' component={Home}/>
              <Route path='/detail/:id' component={Detail} />
              <Route component={NotFound} />
            </Switch>

          </CSSTransition>
        </TransitionGroup>
      )}>
      </Route>
      
      </div>
    );
  }
}

export default App;
