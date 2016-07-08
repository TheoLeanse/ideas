import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router'

const IdeaSubmit = ({ user, handleSubmit }, context) => {
    console.log(context);
    return (
            <form onSubmit={ (e) => {
                e.preventDefault();
                handleSubmit(e.target);
                hashHistory.push('/');
            }} className="ideas-border ideas-form">

            <label className="" htmlFor="title">Give your idea a title</label>
            <input className="ideas-input" autoFocus placeholder="" type="text" name="title" />
            <label className="" htmlFor="description">Describe your idea</label>
            <textarea className="ideas-input  ideas-input--long"  type="text" name="description"></textarea>
            <div className="ideas-rhs-button-container">
            <input type="submit" value="Submit" className='ideas-button' />
            </div>

            <label className="ideas-hidden" htmlFor="author">Author:</label>
            <input className="ideas-hidden" type="text" name="author" defaultValue="theo" />
            </form>
    );
};

const mapStateToIdeaSubmitProps = (state) => {
    return { user: state.user };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit(formData) {
            dispatch({type: 'ADD_IDEA', data: formData});
        }
    };
};

export default connect(mapStateToIdeaSubmitProps, mapDispatchToProps)(IdeaSubmit);
