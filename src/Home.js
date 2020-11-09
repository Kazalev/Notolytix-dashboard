import React, { useState } from 'react';
import Main from './components/main';
import Navbar from './components/navbar';
import myContext from './contexts/ProjectContext';
import './Home.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calendar from './pages/calendar'
import Projects from './pages/projects';
import Statuses from './pages/statuses';
import People from './pages/people';
import SearchContextProvider from './contexts/SearchContext';

function Home() {
  const [value, setValue] = useState('Empty')

  return (
    <div className="Home">

      <myContext.Provider value={{ value, setValue }}>
        <Router>
          <SearchContextProvider>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/projects" component={Projects} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/statuses" component={Statuses} />
              <Route path="/people" component={People} />
            </Switch>
          </SearchContextProvider>
        </Router>
      </myContext.Provider>
    </div>
  );
}

export default Home;
