import React from 'react';
import { Route } from 'react-router';
import { IdeaFeed, NewIdea } from './components';

export default (
    <div>
    <Route path='/' component={ IdeaFeed }/>
    <Route path='/new' component={ NewIdea }/>
    </div>
);
