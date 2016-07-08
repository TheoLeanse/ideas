import React from 'react';
import { connect } from 'react-redux';
import { Header, Nav } from '.';

const App = ({ children, nav }) => {
    return (
        <div className="ideas-main">
        <Header />
        { nav && <Nav /> }
        { children }
      	</div>
    );
};

const mapStateToProps = (state) => {
    return { nav: state.nav };
};

export default connect(mapStateToProps)(App);
