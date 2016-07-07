import React from 'react';
import { connect } from 'react-redux';
import { User, SupportButton } from '.';

const Supporters = ({ supporters, user }) => {
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
        <SupportButton user={ user } />
        </div>
    );
}
