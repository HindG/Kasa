import React from 'react';
import { ROUTES } from './routing';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from '../components/PublicRoute';
import HomeView from '../views/Home/HomeView';
import AboutView from '../views/About/AboutView';
import AccomodationView from '../views/Accomodation/AccomodationView';
import ErrorView from '../views/Error/ErrorView';

const App = () => {
    return (
        <Router>
            <Switch>
                <PublicRoute exact path={ROUTES.HOME} component={HomeView} />
                <PublicRoute exact path={ROUTES.ABOUT} component={AboutView} />
                <PublicRoute exact path={ROUTES.ACCOMODATION} component={AccomodationView} />
                <PublicRoute exact path={ROUTES.ERROR} component={ErrorView} />
            </Switch>
        </Router>
    )
}

export default App;