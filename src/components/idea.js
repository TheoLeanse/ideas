import React from 'react';
import { Supporters, User } from '.';

export default ({ idea }) => {
    return (
        <div className="ideas-idea ideas-border">
        <div className="ideas-idea-header">
        <h1 className="ideas-idea-title">{ idea.title }</h1>
        <User name={ idea.author } avatar="http://bit.ly/29pRJ7e" link="/" />
        </div>
        <div className="ideas-idea-description">{ idea.description }</div>
        <Supporters supporters={ idea.supporters } id={ idea.id } />
        </div>
    );
};
