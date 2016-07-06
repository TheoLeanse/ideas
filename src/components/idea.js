import React from 'react';
import { Supporters } from '.';

export default ({ idea }) => {
    return (
            <div className="ideas-idea ideas-border">
            <h1>{ idea.title }</h1>
            <p>{ idea.description }</p>
            <h2>Submitted by { idea.author }</h2>
            <Supporters supporters={ idea.supporters } id={ idea.id } />
            </div>
    );
};
