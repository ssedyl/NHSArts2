import React, { Component } from 'react'
import { Alert, AlertTitle } from '@material-ui/lab';
import { Link, NavLink } from 'react-router-dom';


class SubmitArt extends Component {

  submitForm(){
    var elem = document.getElementById("hiddenSuccess");
    console.log(elem);
    var card = document.getElementById("cardForm");

    var w = window.open('','','width=500,height=200')
    w.document.write('Submitting your application, please wait about 2 seconds!')
    w.focus();
    setTimeout(function() {w.close();}, 2000)
    setTimeout(function() {    card.style.display = "none";
    elem.style.display = "block";
}, 2500)

    // document.getElementById("hiddenSuccess").style = "block";
  }
  render(){
    return (
        <div>
        <div className="container">
          <h4 className="center">Join the N-HS Arts Club!</h4>

          <hr></hr>
          {/* <p className="center"><b>Please use the form below to fill out an application to join the club!</b></p>
          <hr></hr> */}


          <div className="row">
            <div className="col s12">
              <div className="card indigo lighten-1">

                <div className="card-content white-text center">
                  <span className="card-title">Please use the form below to fill out an application to join the club!</span>
                  <hr></hr>
                  <div id="hiddenSuccess">
                    <Alert severity="success">
                      <AlertTitle >Congratulations!</AlertTitle>
                      You've successfully submitted your application — <strong>please wait 5 business days for a response by us to your email!</strong><br></br><br></br>
                      If you do not receive an email within 5 days regarding the status of your application, <strong>please visit us in person or contact us by email at NHSArts@nhs.ca!</strong>
                    </Alert>
                    <NavLink to='/'><button id="goBackHome" >Click here to go back to Home</button></NavLink>

                    </div>

                  <div id="cardForm" className="row">
                  <form className="col s12 submitForm">
                  <div className="input-field col s12">
                    <input id="student_name" type="text" className="validate"/>
                    <label htmlFor="student_name">Name</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="student_number" type="text" className="validate"/>
                    <label htmlFor="student_number">Student Number</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="student_email" type="email" className="validate"/>
                    <label htmlFor="student_email">Email</label>
                    <span className="helper-text" data-error="Please enter a valid email!"></span>

                  </div>
                  <div className="input-field col s12">
                    <textarea id="student_reason" className="materialize-textarea validate" type="textarea"></textarea>
                    <label htmlFor="student_reason">Please tell us why you want to join and how you heard of the club</label>
                    <hr></hr>
                  </div>
                  </form>
                  <button id="submitAppBtn" onClick={() => this.submitForm()}>Submit Your Application</button>
                  </div>
                </div>


              </div>
            </div>
        </div>
            

        </div>
      </div>
  
    )
}
}

export default SubmitArt