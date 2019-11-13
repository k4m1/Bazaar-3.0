import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import CardIndexContainer from '../components/cards/card_index_container'
import CardShowContainer from '../components/cards/card_show_container';

import SearchContainer from './search/search_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <img src="https://bazaar-media-bucket.s3-us-west-1.amazonaws.com/LogoMakr_96Ipsy.png" alt="" id="logo"/>
            </Link>
            <SearchContainer />
            <GreetingContainer />
            <nav className="main-nav"></nav>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/" component={CardIndexContainer} />
            <Route path="/cards/:cardId" component={CardShowContainer} />
        </Switch>
    </div>
);

export default App;





