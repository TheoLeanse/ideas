import React from 'react';
import { Route } from 'react-router';
import { App, IdeaSubmit } from './components';

export default (
    <div>
    <Route path='/' component={ App }/>
    <Route path='/new' component={ IdeaSubmit }/>
    </div>
);
