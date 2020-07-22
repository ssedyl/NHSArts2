import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Redirect, Switch  } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import BrowseArt from './components/BrowseArt';
import SubmitArt from './components/SubmitArt';
import Suggestions from './components/Suggestions';
import ErrorPage from './components/ErrorPage';
import PageFooter from './components/PageFooter';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/browseart' component={BrowseArt} />
          <Route path='/join' component={SubmitArt} />
          <Route path='/suggestions' component={Suggestions} />
          <Route exact path="/404" component={ErrorPage} />
          <Route path="*" component={ErrorPage}/>
        </Switch>
        <PageFooter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
