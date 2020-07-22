import React, { Component } from 'react'
import { Alert, AlertTitle } from '@material-ui/lab';

class AddComment extends Component{
    state = {
        name: null,
        comment: null
    }
  
    submitForm(){
      var elem = document.getElementById("hiddenSuccess");
      console.log(elem);
      var card = document.getElementById("cardForm");
      card.style.display = "none";
      elem.style.display = "block";
      // document.getElementById("hiddenSuccess").style = "block";
    }
  
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(this.state);
    }
  render(){
    return(

    <div className="container">
    <div className="col s12 center">
        <div className="card hoverable indigo lighten-1">
          <div className="card-content white-text">
          <span className="card-title">Submit a Comment or Suggestion</span>
                  <hr></hr>
          <div id="hiddenSuccess">
            <Alert severity="success">
              <AlertTitle >Success!</AlertTitle>
              You've successfully submitted your comment — <a href=""><strong>please click here if you wish to submit another comment!</strong></a><br></br><br></br>
            </Alert>
          </div>

        <div id="cardForm">
          <form onSubmit={this.handleSubmit}>
            <div className="input-field col s12">
                <input id="name" type="text" className="validate"  onChange={this.handleChange}/>
                <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s12">
                <input id="comment" type="text" className="validate"  onChange={this.handleChange}/>
                <label htmlFor="comment">Comment</label>
            </div>
            <button id="submitComment" onClick={() => this.submitForm()}>Submit</button>
          </form>
          </div>
          </div>
        </div>
      </div>


      </div>
    )
    }
  }
  


export default AddComment
