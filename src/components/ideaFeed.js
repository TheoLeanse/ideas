import React from 'react';
import { connect } from 'react-redux';
import { Idea, IdeaSubmit, Header, Nav } from '.';

const Ideas = ({ ideas, nav }) => {
    return (
        <div className="ideas-main">
        <Header />
        { nav && <Nav /> }
        {ideas.map((idea, key) => <Idea key={ key } idea={ idea } /> ) }
      	</div>
    );
};

const mapStateToProps = (state) => {
    return { ideas: state.ideas, nav: state.nav };
};

export default connect(mapStateToProps)(Ideas);
