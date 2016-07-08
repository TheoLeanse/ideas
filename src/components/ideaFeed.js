import React from 'react';
import { connect } from 'react-redux';
import { Idea } from '.';

const Ideas = ({ ideas }) => {
    return (
        <div>{ideas.map((idea, key) => <Idea key={ key } idea={ idea } /> ) }</div>
    );
};

const mapStateToProps = (state) => {
    return { ideas: state.ideas };
};

export default connect(mapStateToProps)(Ideas);
