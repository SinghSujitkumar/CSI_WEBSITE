import React from 'react';
import Layout from './Hoc/Layout';
import PrivateRoute from './Components/authRoutes/privateRoutes'
import PublicRoute from './Components/authRoutes/publicRoutes'
import { Switch, Route }  from 'react-router-dom';
import SignIn from './Components/signin';
import Home from './Components/home';
import TheTeam from'./Components/theTeam';
import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/matches';
import AddEditMatch from './Components/admin/matches/addEditMatch';
import registerEvents from './Components/Register/registerEvents';
import AdminPlayers from './Components/admin/players';
import AddEditPlayers from './Components/admin/players/addEditPlayers'
import EventMembers from './Components/admin/Event/registerations';
import AdminEvents from './Components/admin/Event';
import AddEditEvent from './Components/admin/Event/addEditEvent';
import Gallery from './Components/home/carrousel';
import AboutUs from './Components/home/about';
import Events from './Components/home/events';
import Council from './Components/home/council';

const Routes = (props) => {
  return(
    <Layout>
        <Switch>
            <PrivateRoute {...props} path="/admin_events/add_events/:id" exact component={AddEditEvent}/>
            <PrivateRoute {...props} path="/admin_events/add_events" exact component={AddEditEvent}/>
            <PrivateRoute {...props} path="/admin_events" exact component={AdminEvents}/>
            <PrivateRoute {...props} path="/admin_players/add_players/:id" exact component={AddEditPlayers}/>
            <PrivateRoute {...props} path="/admin_players/add_players" exact component={AddEditPlayers}/>
            <PrivateRoute {...props} path="/event_members/:id" exact component={EventMembers}/>
            <PrivateRoute {...props} path="/admin_players" exact component={AdminPlayers}/>
            <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches}/>
            <PrivateRoute {...props} path="/admin_matches/edit_match" exact component={AddEditMatch}/>
            <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch}/>
            <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
            <PublicRoute {...props} restricted={false} path="/the_team" exact component={TheTeam}/>
            <PublicRoute {...props} restricted={true}path="/sign_in" exact component={SignIn}/>
            <PublicRoute {...props} restricted={false}path="/register" exact component={registerEvents}/>
            <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
            <PublicRoute {...props} restricted={false} path="/gallery" exact component={Gallery}/>
            <PublicRoute {...props} restricted={false} path="/aboutus" exact component={AboutUs}/>
            <PublicRoute {...props} restricted={false} path="/events" exact component={Events}/>
            <PublicRoute {...props} restricted={false} path="/council" exact component={Council}/>
        </Switch>
    </Layout>
  )
}
export default Routes;
