import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeBody from './Home';
import Work from './Work';
import About from './About';
import './Home.css';

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={HomeBody}/>
        <Route path='/About' component={About}/> 
        <Route path='/Meet' component={HomeBody} />
        <Route path='/Tech' component={HomeBody}/>
        <Route path='/Work' component={Work}/>
      </Switch>
    </main>
  )
  
  export default Main