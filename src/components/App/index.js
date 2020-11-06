import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../Navigation';
import Footer from '../Footer';
import Home from '../Home';
import News from '../News';
import Resources from '../Resources';
import Meetings from '../Meetings';
import Inequity from '../Inequity';
import Admin from '../Admin';
import CreateArticle from '../CreateArticle';
import UpdateArticle from '../UpdateArticle';
import CreateMeeting from '../CreateMeeting';
import UpdateMeeting from '../UpdateMeeting';

import * as ROUTES from '../../constants/routes';

class App extends Component {

    <Router>
        <Navigation />
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.NEWS} component={News} />
        <Route path={ROUTES.RESOURCES} component={Resources} />
        <Route path={ROUTES.MEETINGS} component={Meetings} />
        <Route path={ROUTES.INEQUITY} component={Inequity} />
        <Route path={ROUTES.ADMIN} component={Admin} />
        <Route path={ROUTES.CREATE_ARTICLE} component={CreateArticle} />
        <Route path={ROUTES.UPDATE_ARTICLE} component={UpdateArticle} />
        <Route path={ROUTES.CREATE_MEETING} component={CreateMeeting} />
        <Route path={ROUTES.UPDATE_MEETING} component={UpdateMeeting} />
        <Footer />
    </Router>
    
}

export default App;
