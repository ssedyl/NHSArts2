import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
class Navbar extends Component {
  
  toggleLanguageEN(){
    if(window.location.pathname === '/'){
      if(this.state.languageToggle === false){
        document.getElementById("englishHome").style.display="block";
        document.getElementById("frenchHome").style.display="none";
        this.setState({
          languageToggle: true
        })
      }
    }
    document.getElementById("englishNAV").style.display="block";
    document.getElementById("frenchNAV").style.display="none";

  }

  toggleLanguageFR(){
    if(window.location.pathname === '/'){
      if(this.state.languageToggle === true){
        document.getElementById("frenchHome").style.display="block";
        document.getElementById("englishHome").style.display="none";

        this.setState({
          languageToggle: false
        })
      } 
    }
    document.getElementById("englishNAV").style.display="none";
    document.getElementById("frenchNAV").style.display="block";

  }

  state = {
    languageToggle : true
  }

  render(){
    return (
        <nav className="nav-wrapper indigo darken-3">
        <div id="englishNAV" className="container">
        <a className="brand-logo">N-HS Arts Club</a>
          <ul className="right">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/browseart'>Browse Art</NavLink></li>
            <li><NavLink to='/join'>Join</NavLink></li>
            <li><NavLink to='/suggestions'>Suggestions</NavLink></li>
            <li><a id="bt" onClick={() => this.toggleLanguageEN()}>EN</a></li>
            <li>/</li>
            <li><a id="bt" onClick={() => this.toggleLanguageFR()}>FR</a></li>
          </ul>
        </div>
        <div id="frenchNAV" className="container">
        <a className="brand-logo">N-HS Club des Arts</a>
          <ul className="right">
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><NavLink to='/about'>À propos</NavLink></li>
            <li><NavLink to='/browseart'>Parcourir l'art</NavLink></li>
            <li><NavLink to='/join'>Joindre</NavLink></li>
            <li><NavLink to='/suggestions'>Suggestions</NavLink></li>
            <li><a id="bt" onClick={() => this.toggleLanguageEN()}>EN</a></li>
            <li>/</li>
            <li><a id="bt" onClick={() => this.toggleLanguageFR()}>FR</a></li>
          </ul>
        </div>

      </nav> 
    )
}
}

export default Navbar