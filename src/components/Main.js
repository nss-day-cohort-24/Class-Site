import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeBody from './Home';
import Work from './Work';
import './Home.css';
import PeopleDeetz from './PeopleDeets';



const Main = () => (
    <main>
      <Switch>
        <Route exact path='/Class-Site' component={HomeBody}/>
        <Route path='/Class-Site/#About' component={HomeBody}/> 
        <Route path='/Class-Site/#Meet' component={HomeBody} />
        <Route path='/Class-Site/#Tech' component={HomeBody}/>
        <Route path='/Class-site/Work' component={Work}/>
        <Route path='/Class-site/amber' component={PeopleDeetz} />
        <Route path='/Class-site/arthur' component={PeopleDeetz} />
        <Route path='/Class-site/ben' component={PeopleDeetz} />
        <Route path='/Class-site/dan' component={PeopleDeetz} />
        <Route path='/Class-site/dylan' component={PeopleDeetz} />
        <Route path='/Class-site/jeremy' component={PeopleDeetz} />
        <Route path='/Class-site/jesie' component={PeopleDeetz} />
        <Route path='/Class-site/kelsey' component={PeopleDeetz} />
        <Route path='/Class-site/laura' component={PeopleDeetz} />
        <Route path='/Class-site/lindsay' component={PeopleDeetz} />
        <Route path='/Class-site/marc' component={PeopleDeetz} />
        <Route path='/Class-site/mike' component={PeopleDeetz} />
        <Route path='/Class-site/meg' component={PeopleDeetz} />
        <Route path='/Class-site/melissa' component={PeopleDeetz} />
        <Route path='/Class-site/million' component={PeopleDeetz} />
        <Route path='/Class-site/ryan' component={PeopleDeetz} />
        <Route path='/Class-site/sam' component={PeopleDeetz} />
        <Route path='/Class-site/taylor' component={PeopleDeetz} />
        <Route path='/Class-site/phonethip' component={PeopleDeetz} />
      </Switch>
    </main>
  )
  
  export default Main