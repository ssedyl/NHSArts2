import React, { Component } from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';

class ArtPieceModal extends Component{


  render(){
    return(
        <div>
          <a className="waves-effect waves-light modal-trigger left" href={"#modal" + this.props.artID}>DETAILS</a>
          <div>
          <a download href={this.props.artURL}><GetAppIcon color="primary"></GetAppIcon></a>
          </div>

          <div id={"modal" + this.props.artID} className="modal">
            <div className="modal-content">
              
              <h5>{this.props.artTIT}</h5>
              <hr></hr>
              <img src={this.props.artURL} className="resizeImage" />
              <br></br>

              <p>{"Created By: " + this.props.artAUTH}</p>
              <p>{this.props.artGEN}</p>
              <p>{this.props.artDES}</p>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-close waves-effect waves-green btn-flat">Dismiss</a>
            </div>
          </div>
        </div>

    )
    }
}


export default ArtPieceModal
