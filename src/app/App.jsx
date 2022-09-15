import React from 'react';
import { ROUTES } from './routing';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from '../components/PublicRoute';
import HomeView from '../views/Home/HomeView';

const App = () => {
    return (
        <Router>
            <Switch>
                <PublicRoute exact path={ROUTES.HOME} component={HomeView} />
            </Switch>
        </Router>
    )
}

export default App;