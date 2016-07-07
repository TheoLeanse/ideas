import React from 'react';
import { connect } from 'react-redux';

const IdeaSubmit = ({ user, handleSubmit }) => {
    return (
            <form onSubmit={ (e) => {
                e.preventDefault();
                handleSubmit(e.target);
                Array.from(e.target.elements).forEach(el => {
                    if (el.name === 'title') el.focus();
                    if (el.value !== 'Submit') el.value = '';
                });
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
