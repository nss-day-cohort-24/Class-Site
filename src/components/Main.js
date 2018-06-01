import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeBody from './Home';
import Work from './Work';
import About from './About';
import './Home.css';
import PeopleDeetz from './PeopleDeets';
import Gallery from './Gallery';



const Main = () => (
    <main>
      <Switch>
        <Route exact path='/Class-Site' component={HomeBody}/>
        <Route path='/Class-Site/#About' component={HomeBody}/> 
        <Route path='/Class-Site/#Meet' component={HomeBody} />
        <Route path='/Class-Site/#Tech' component={HomeBody}/>
        <Route path='/Class-site/Work' component={Work}/>
        <Route path='/amber' component={PeopleDeetz} />
        <Route path='/arthur' component={PeopleDeetz} />
        <Route path='/ben' component={PeopleDeetz} />
        <Route path='/dan' component={PeopleDeetz} />
        <Route path='/dylan' component={PeopleDeetz} />
        <Route path='/jeremy' component={PeopleDeetz} />
        <Route path='/jesie' component={PeopleDeetz} />
        <Route path='/kelsey' component={PeopleDeetz} />
        <Route path='/laura' component={PeopleDeetz} />
        <Route path='/lindsay' component={PeopleDeetz} />
        <Route path='/marc' component={PeopleDeetz} />
        <Route path='/mike' component={PeopleDeetz} />
        <Route path='/meg' component={PeopleDeetz} />
        <Route path='/melissa' component={PeopleDeetz} />
        <Route path='/million' component={PeopleDeetz} />
        <Route path='/ryan' component={PeopleDeetz} />
        <Route path='/sam' component={PeopleDeetz} />
        <Route path='/taylor' component={PeopleDeetz} />
        <Route path='/phonethip' component={PeopleDeetz} />
      </Switch>
    </main>
  )
  
  export default Main