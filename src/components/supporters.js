import React from 'react';
import { connect } from 'react-redux';

const Supporters = ({ supporters, id, clickHandler }) => {
    return (
            <div> Supported by
            <ul>{ supporters.map((supporter, i) => <li key={ i }>{ supporter }</li>) }</ul>
            <button onClick={ () => clickHandler('Theo', id) }>Support</button>
            </div>
    );
}

const mapStateToSupportProps = () => {
    return {};
}

const mapDispatchToSupportProps = (dispatch) => {
    return {
        clickHandler(username, id) {
            dispatch({type: 'SUPPORT', username, id})
        }
    }
}

export default connect(mapStateToSupportProps, mapDispatchToSupportProps)(Supporters);
