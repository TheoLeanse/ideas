import React from 'react';
import { connect } from 'react-redux';

const IdeaSubmit = ({ handleSubmit }) => {
    return (
            <form onSubmit={ (e) => {
                e.preventDefault();
                handleSubmit(e.target);
            }} >
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" />
            <label htmlFor="author">Author:</label>
            <input type="text" name="author" />
            <label htmlFor="description">Description:</label>
            <input type="text" name="description" />
            <input type="submit" value="Submit" />
            </form>
    );
};

const mapStateToIdeaSubmitProps = () => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit(formData) {
            dispatch({type: 'ADD_IDEA', data: formData});
        }
    };
};

export default connect(mapStateToIdeaSubmitProps, mapDispatchToProps)(IdeaSubmit);
