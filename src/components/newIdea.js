import React from 'react';
import { connect } from 'react-redux';
import { Header, IdeaSubmit, Nav } from '.';

const NewIdea = ({ nav }) => {
    return (
        <div className="ideas-main">
        <Header />
        { nav && <Nav />}
        <IdeaSubmit />
        </div>
    );
}
const mapStateToProps = (state) => {
    return { nav: state.nav };
}
export default connect(mapStateToProps)(NewIdea);
