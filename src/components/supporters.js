import React from 'react';
import { connect } from 'react-redux';
import { User } from '.';

const Supporters = ({ supporters, id, clickHandler }) => {
    return (
        <div className="ideas-supporters">
        <p>Supporters:</p>
        <ul className='ideas-list'>

        {
            supporters.map((supporter, i) => {
                return (<li className='ideas-user' key={ i }>
                    <User name={ supporter } link="/" avatar="http://bit.ly/29pRJ7e"/>
                    </li>);
            })
        }

        </ul>

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
            dispatch({type: 'SUPPORT', username, id});
        }
    };
};

export default connect(mapStateToSupportProps, mapDispatchToSupportProps)(Supporters);
