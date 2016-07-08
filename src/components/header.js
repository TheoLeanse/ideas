import React from 'react';
import { connect } from 'react-redux';

const Header = ({ nav, handleNavClick }) => {
    return (
            <header className="ideas-header">
            <div className="ideas-header-inner">
            <a href="#/" className="ideas-header-item ideas-header-logo" onClick={ () => nav && handleNavClick() }>Ideas</a>
            <div className="ideas-header-buttons">
            <a href='#/new' className="ideas-header-item" onClick={ () => nav && handleNavClick() }>new</a>
            <div className="ideas-header-item" onClick={ handleNavClick }>menu</div></div>
            </div>
            </header>
    );
};

const mapStateToProps = (state) => {
    return {nav: state.nav};
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleNavClick() {
            dispatch({ type: 'TOGGLE_NAV'});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
