import React from 'react';
import { connect } from 'react-redux';
import { Idea, IdeaSubmit } from '.';

const App = ({ ideas }) => {
    return (
        <div>
        	{ideas.map((idea, key) => <Idea key={ key } idea={ idea } /> ) }
        	<IdeaSubmit />
        </div>
    );
};

const mapStateToProps = (state) => {
    return { ideas: state };
};

export default connect(mapStateToProps)(App);
