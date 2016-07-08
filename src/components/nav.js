import React from 'react';
import { connect } from 'react-redux';

const Menu = ({ handleNavClick }) => {
    return (
            <div className="ideas-menu">
            <a href='#/about' className="ideas-menu-option" onClick={ handleNavClick }>about</a>
            <a href='#/register' className="ideas-menu-option" onClick={ handleNavClick }>register</a>
            <a href='#/login' className="ideas-menu-option" onClick={ handleNavClick }>login</a>
            </div>
    );
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleNavClick() {
            dispatch({ type: 'TOGGLE_NAV'});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
