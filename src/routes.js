import React from 'react';
import { Route } from 'react-router';
import {
    IdeaFeed,
    IdeaSubmit,
    About,
    Register,
    Login,
    App
} from './components';

export default (
    <Route component={ App }>
    <Route path='/' component={ IdeaFeed }/>
    <Route path='/new' component={ IdeaSubmit }/>
    <Route path='/about' component={ About }/>
    <Route path='/register' component={ Register }/>
    <Route path='/login' component={ Login }/>
    </Route>
);
