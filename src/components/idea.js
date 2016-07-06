import React from 'react';
import { Supporters } from '.';

export default ({ idea }) => {
    return (
            <div>
            <h1>{ idea.title }</h1>
            <h2>{ idea.author }</h2>
            <p>{ idea.description }</p>
            <Supporters supporters={ idea.supporters } id={ idea.id } />
            </div>
    );
};
