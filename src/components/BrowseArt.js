import React, { Component } from 'react'
import ArtPiece from './ArtPiece';
import M from 'materialize-css';
var originalState = [
  {id: 1, artTitle: 'Rainbow', author:'Sally', description:'Description for art piece 1', genre:'Abstract', artUrl:'images/abstract1.jpg'},
  {id: 2, artTitle: 'Purple Box', author:'Billy', description:'Description for art piece 2', genre:'Modern', artUrl:'images/modern1.jpg'},
  {id: 3, artTitle: 'Picnic', author:'Bob', description:'Description for art piece 3', genre:'Impressionism', artUrl:'images/impressionism1.jpg'},
  {id: 4, artTitle: 'Vase', author:'John', description:'Description for art piece 4.', genre:'Rennaissance', artUrl:'images/renaissance2.jpg'},
  {id: 5, artTitle: 'Ponder', author:'Mary', description:'Description for art piece 5', genre:'Rennaissance', artUrl:'images/renaissance1.jpg'},
  {id: 6, artTitle: 'Wave', author:'Anne', description:'Description for art piece 6', genre:'Abstract', artUrl:'images/abstract2.jpg'},
  {id: 7, artTitle: 'Wilt', author:'Jeff', description:'Description for art piece 7', genre:'Classic', artUrl:'images/classic.jpg'},
  {id: 8, artTitle: 'Pollen', author:'Jill', description:'Description for art piece 8  ', genre:'Abstract', artUrl:'images/abstract3.jpg'}

]

class BrowseArt extends Component {
  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, {});
    });  
  }

  filterImages(){

    var cat = document.getElementById("filterSelect").value;
    console.log(cat);

    var auth = document.getElementById("filterAuthor").value;
    console.log(auth);

    if(cat === 'Abstract'){
        this.setState({
          artpieces: [
          {id: 1, artTitle: 'Rainbow', author:'Sally', description:'Description for art piece 1', genre:'Abstract', artUrl:'images/abstract1.jpg'},
          {id: 6, artTitle: 'Wave', author:'Anne', description:'Description for art piece 6', genre:'Abstract', artUrl:'images/abstract2.jpg'},
          {id: 8, artTitle: 'Pollen', author:'Jill', description:'Description for art piece 8  ', genre:'Abstract', artUrl:'images/abstract3.jpg'}
          ]
        })
  
    }
    
    if(cat === 'Modern'){
      this.setState({
        artpieces: [
          {id: 2, artTitle: 'Purple Box', author:'Billy', description:'Description for art piece 2', genre:'Modern', artUrl:'images/modern1.jpg'},
        ]
      })
    }
    
    if(cat === 'Impressionism'){
      this.setState({
        artpieces: [
          {id: 3, artTitle: 'Picnic', author:'Bob', description:'Description for art piece 3', genre:'Impressionism', artUrl:'images/impressionism1.jpg'},
        ]
      })
    }
    
    if(cat === 'Rennaissance'){
      this.setState({
        artpieces: [
          {id: 4, artTitle: 'Vase', author:'John', description:'Description for art piece 4.', genre:'Rennaissance', artUrl:'images/renaissance2.jpg'},
          {id: 5, artTitle: 'Ponder', author:'Mary', description:'Description for art piece 5', genre:'Rennaissance', artUrl:'images/renaissance1.jpg'},
                ]
      })
    }

    if(cat === 'Classic'){
      this.setState({
        artpieces: [
          {id: 7, artTitle: 'Wilt', author:'Jeff', description:'Description for art piece 7', genre:'Classic', artUrl:'images/classic.jpg'},
        ]
      })
    }

    if(cat === ''){
      this.setState({
        artpieces: originalState
      })

    }

    this.forceUpdate();
    console.log("AFTER: " + this.state.artpieces);
  }

  state = {
    artpieces : originalState
  }
  render(){
    return (
      <div>
        <div className="container">
          <h4 className="center">Browse Art</h4><hr></hr>
          <p className="center"><b>All of the art pieces featured below were created by none other than N-HS Arts Club members over the years!</b></p>
          <p className="center"><b>Click on an art piece to view details!</b></p>
          <hr></hr>
          <div className="row">

              <div className="col s6">
                <label>Filter By Genre</label>
                <select id="filterSelect" className="browser-default">
                  <option value=""></option>
                  <option value="Abstract">Abstract</option>
                  <option value="Classic">Classic</option>
                  <option value="Impressionism">Impressionism</option>
                  <option value="Modern">Modern</option>
                  <option value="Rennaissance">Renaissance</option>

                </select>
              </div>
              <div className="col s6">
                <label>Filter By Author</label>
                <select id="filterAuthor" className="browser-default">
                  <option value=""></option>
                  <option value="Anne">Anne</option>
                  <option value="Billy">Billy</option>
                  <option value="Bob">Bob</option>
                  <option value="Jeff">Jeff</option>
                  <option value="Jill">Jill</option>
                  <option value="John">John</option>
                  <option value="Mary">Mary</option>
                  <option value="Sally">Sally</option>
                </select>
              </div>
              <button id="submitSearch" onClick={() => this.filterImages()}>Filter</button>
              <button id="resetSearch" onClick={() => this.setState({
                artpieces:originalState
              })}>Reset</button>
          </div>

          <div className="row">
          <ArtPiece artpieces={this.state.artpieces}></ArtPiece>
          </div>
        </div>

      </div>
  
    )
  }
}

export default BrowseArt