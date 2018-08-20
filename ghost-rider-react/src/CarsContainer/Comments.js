import React from 'react';
import CreateComment from './CRUDComments/AddComment';
import EditComment from './CRUDComments/EditComment';


const Comments = (props) => {

  let apiCarID = 'http://127.0.0.1:8000/api/cars/' + props.carID;

    const commentList = props.comments.map((comment, i) => {
        console.log(comment, ' comment id')
      if (apiCarID === comment.car) {
        return (
            <li key={comment.id}>
                <span>{comment.comment}</span><br />
                <span>{comment.car}</span><br />
                <button onClick={props.deleteComment.bind(null, comment.id)}>Delete</button>
                <button onClick={props.showCommentModal.bind(null, comment.id)}>Edit</button>
            </li>
          )
        }
    })


    return (
        <ul>
            {commentList}
        </ul>
    )


};


export default Comments;
