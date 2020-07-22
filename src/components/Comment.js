import React, { Component } from 'react'

class Comment extends Component{
  
  render(){
    const { comments } = this.props;
    const commentListNew = comments.map(comment => {
      return (
        <div className="col s12 " key={comment.commentID}>
                  <div className="card hoverable indigo lighten-1">
          <div className="card-content white-text">
          <div>
            <b> By: {comment.name} </b>
          </div>
          <div>
            <i> {comment.comment} </i>
          </div><br></br>
        </div>

          </div>
        </div>

    
      )
    })
    return(
      <div className="container">
        {commentListNew}
      </div>
    )
    }
  }
  


export default Comment
