import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeBody from './Home';
import MeetUs from './MeetUs';
import Technologies from './Technologies';
import Work from './Work'

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={HomeBody}/>
        <Route path='/About' component={MeetUs}/> 
        <Route path='/Meet' component={MeetUs}/>
        <Route path='/Tech' component={Technologies}/>
        <Route path='/Work' component={Work}/>
      </Switch>
    </main>
  )
  
  export default Main