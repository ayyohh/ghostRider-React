import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import classes from './Comments.css';

const Comments = (props) => {

  let apiCarID = 'http://127.0.0.1:8000/api/cars/' + props.carID;

  const commentList = props.comments.map((comment, i) => {
    console.log(comment, ' comment id')
    if (apiCarID === comment.car) {
      return (

        <Col md='12'>
          <div key={comment.id} className='specificComment'>
            <span>{comment.comment}</span><br />
            <Button onClick={props.deleteComment.bind(null, comment.id)}>Delete</Button>
            <Button onClick={props.showCommentModal.bind(null, comment.id)}>Edit</Button>
          </div>
        </Col>


      )
    }
  })


  return (
    <Container>
      <Row>
        {commentList}
      </Row>
    </Container>
  )


};


export default Comments;
