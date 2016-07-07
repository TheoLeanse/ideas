import React from 'react';
import { connect } from 'react-redux';
import { Idea, IdeaSubmit, Header } from '.';

const App = ({ ideas }) => {
    return (
        <div>
        <Header />
            {ideas.map((idea, key) => <Idea key={ key } idea={ idea } /> ) }
        	<IdeaSubmit />
        	</div>
    );
};

const mapStateToProps = (state) => {
    return { ideas: state.ideas };
};

export default connect(mapStateToProps)(App);
