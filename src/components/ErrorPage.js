import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
        <div className="container">
          <div className="row">
            <div className="row">
            <div className="col s12 center">
              <div className="card  indigo lighten-1">
                <div className="card-content white-text">
                  <span className="card-title"><h1 className="center">404</h1></span>
                  <hr></hr>
                  <h2 className="center">Oooops!!</h2>
                  <h2 className="center">Page Not Found</h2>
                  <h3 className="center">We can't seem to find the page you're looking for.</h3>
                  <hr></hr>
                </div>
                <div className="card-action">
                <NavLink to='/'><button id="goBackHome" >Click here to go back to Home</button></NavLink>
                </div>
              </div>
            </div>
          </div>
          </div>
          


        </div>
      </div>
  
    )
}

export default ErrorPage