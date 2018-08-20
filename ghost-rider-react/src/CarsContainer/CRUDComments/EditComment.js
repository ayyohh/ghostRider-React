import React from 'react';


const EditComment = (props) => {

    return (
        <div>
            <h4> Edit Comment</h4>
            <form onSubmit={props.closeAndEditComment}>
                <label>
                    Edit Comment:
                    <input type="text" name="comment" onChange={props.handleCommentFormChange} value={props.commentToEdit.comment} />

                </label>
                <input type='Submit' value="Edit Comment" />
            </form>
        </div>

    )
}

export default EditComment;
