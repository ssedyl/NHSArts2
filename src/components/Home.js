import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

class Home extends Component {
    
  render(){
  return (
      <div>
        <div id="englishHome"className="container">
          <h4 className="center">Welcome to Nowheresville Highschool's Arts Club!</h4>
          <hr></hr>
          <div className="row">
            <div className="col s4 center">
              <div className="card hoverable indigo lighten-1">
                <div className="card-content white-text">
                  <span className="card-title">ABOUT US AND THIS WEBSITE</span>
                  <hr></hr>
                  <p>We are the Nowhereville High School Arts Club! Our club is dedicated to the wonderful past time of art.</p>
                </div>
                <div className="card-action">
                <NavLink to='/about'>Click to learn about us!</NavLink>
                </div>
              </div>
            </div>
            <div className="col s4 center">
              <div className="card hoverable indigo lighten-1">
                <div className="card-content white-text">
                  <span className="card-title">BROWSE OUR CLUB MEMBERS' ART</span>
                  <hr></hr>
                  <p>Our club members have made great pieces of art in the past! With plenty of genres and plenty of pieces, what are you waiting for?</p>
                </div>
                <div className="card-action">
                  <NavLink to='/browseart'>Click to browse our art!</NavLink>
                </div>
              </div>
            </div>
            <div className="col s4 center">
              <div className="card hoverable indigo lighten-1">
                <div className="card-content white-text">
                  <span className="card-title">APPLY TO JOIN THE CLUB</span>
                  <hr></hr>
                  <p>We at the N-HS Arts Club are always looking for new club members! Come see us in person or fill out a simple form on our website!</p>
                </div>
                <div className="card-action">
                  <NavLink to='/submitart'>Click to join our club!</NavLink>
                </div>
              </div>
            </div>
            <div className="col s12 center">
              <div className="card hoverable indigo lighten-1">
                <div className="card-content white-text">
                  <span className="card-title">SUGGESTIONS AND COMMENTS</span>
                  <hr></hr>
                  <p>Do you have any suggestions and/or comments for us? Perhaps our club could do things a little better or perhaps you think we're doing a great job, let us know!</p>
                </div>
                <div className="card-action">
                  <NavLink to='/suggestions'>Click here to give us your suggestions and comments!</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>





        <div id="frenchHome"className="container">
          <h4 className="center">Bienvenue au Club des Arts de Nowheresville Highschool!</h4>
          <hr></hr>
          <div className="row">
            <div className="col s4 center">
              <div className="card hoverable indigo lighten-1">
                <div className="card-content white-text">
                  <span className="card-title">À PROPOS DE NOUS ET DE CE SITE WEB</span>
                  <hr></hr>
                  <p>Nous sommes le Nowhereville High School Arts Club! Notre club est dédié au merveilleux passé de l'art.</p>
                </div>
                <div className="card-action">
                <NavLink to='/about'>Cliquez pour en savoir plus sur nous!</NavLink>
                </div>
              </div>
            </div>
            <div className="col s4 center">
              <div className="card hoverable indigo lighten-1">
                <div className="card-content white-text">
                  <span className="card-title">PARCOURIR L'ART DES MEMBRES DE NOTRE CLUB</span>
                  <hr></hr>
                  <p>Les membres de notre club ont fait de grandes œuvres d'art dans le passé! Avec beaucoup de genres et de pièces, qu'attendez-vous?</p>
                </div>
                <div className="card-action">
                  <NavLink to='/browseart'>Cliquez pour parcourir notre art!</NavLink>
                </div>
              </div>
            </div>
            <div className="col s4 center">
              <div className="card hoverable indigo lighten-1">
                <div className="card-content white-text">
                  <span className="card-title">POSTULER POUR REJOINDRE LE CLUB</span>
                  <hr></hr>
                  <p>Au N-HS Arts Club, nous sommes toujours à la recherche de nouveaux membres! Venez nous voir en personne ou remplissez un simple formulaire sur notre site Web!</p>
                </div>
                <div className="card-action">
                  <NavLink to='/submitart'>Cliquez pour rejoindre notre club!</NavLink>
                </div>
              </div>
            </div>
            <div className="col s12 center">
              <div className="card hoverable indigo lighten-1">
                <div className="card-content white-text">
                  <span className="card-title">SUGGESTIONS ET COMMENTAIRES</span>
                  <hr></hr>
                  <p>Avez-vous des suggestions et / ou des commentaires à nous faire? Peut-être que notre club pourrait faire les choses un peu mieux ou peut-être pensez-vous que nous faisons un excellent travail, faites-le nous savoir!</p>
                </div>
                <div className="card-action">
                  <NavLink to='/suggestions'>Cliquez ici pour nous faire part de vos suggestions et commentaires!</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
 
      </div>
  
    )
}
}

export default Home