import React, { Component } from 'react'
import Comment from './Comment';
import AddComment from './AddComment';

class Suggestions extends Component{
  state = {
    submittedSuggestions : [
      {commentID: 1, name: "student1", comment:"Lol great site man"},
      {commentID: 2, name: "student2", comment:"Lol bad site man"},
      {commentID: 3, name: "student3", comment:"Lol okay site man"} 
    ]
  }
  
  addComment = (comment) => {
    comment.id = Math.random();
    let submittedSuggestions = [...this.state.submittedSuggestions, comment]
    this.setState({
      submittedSuggestions: submittedSuggestions
    })
  }
  render(){

    return(
    // console.log(this.props);
    <div className="container">
      <h4 className="center">Suggestions and Comments</h4><hr></hr>

      <div className="row">
      <AddComment addComment={this.addComment}></AddComment>
      <Comment comments={this.state.submittedSuggestions}></Comment>
      </div>
    </div>
    )
    }
  }
  


export default Suggestions
