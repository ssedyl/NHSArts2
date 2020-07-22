import React, { Component } from 'react'
import ArtPieceModal from './ArtPieceModal';
import M from 'materialize-css';

class ArtPiece extends Component{

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.modal');
          var instances = M.Modal.init(elems, {});
        });
      
      }
    
  render(){
    // console.log(this.props);
    const { artpieces } = this.props;
    const artpiecesList = artpieces.map(artpiece => {
        return (
            <div className="artpieceframe col s3" key={artpiece.id}>
                <div className="card hoverable">
                    <div className="card-image">
                    <img src={artpiece.artUrl} height="200"/>
                    <span className="card-title">{artpiece.artTitle}</span>
                    </div>
                    <div className="card-content">
                        <div>Author: {artpiece.author} </div>
                        <div>Genre: {artpiece.genre} </div>
                    </div>
                    <div className="card-action">
                        <ArtPieceModal artURL={artpiece.artUrl} artTIT={artpiece.artTitle} artDES={artpiece.description} artID={artpiece.id} artAUTH={artpiece.author} artGEN={artpiece.genre} artList={artpieces}></ArtPieceModal>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            { artpiecesList }
        </div>
    )
  }
}

export default ArtPiece
