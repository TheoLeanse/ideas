import React from 'react';
import { connect } from 'react-redux';

const SupportButton = ({ clickHandler, user, id }) => {
    return (
            <button className="ideas-button" onClick={ () => clickHandler(user, id) }>Support</button>
    );
}

const mapStateToSupportProps = () => {
    return {};
}

const mapDispatchToSupportProps = (dispatch) => {
    return {
        clickHandler(user, id) {
            dispatch({type: 'SUPPORT', user, id});
        }
    };
};

export default connect(mapStateToSupportProps, mapDispatchToSupportProps)(SupportButton);
