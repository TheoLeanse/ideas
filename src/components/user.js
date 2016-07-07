import React from 'react';

const User = ({ name, avatar, link }) => {
    return (
            <div className="ideas-user">
            <img src={ avatar } />
            <a href={ link }>{ name }</a>
            </div>
    );
};

export default User;
