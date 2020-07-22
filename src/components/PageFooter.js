import React from 'react';
const PageFooter = () => {
    return (
        <footer className="page-footer indigo darken-3">
          <div className="container">
            <div className="row">
              <div className="col s6 ">
                <h5 className="white-text">Nowheresville High School Arts Club</h5>
                <small>- one of the funnest clubs to be in!</small>
              </div>
              <div className="col s2 ">
              <p className="grey-text text-lighten-4 center"><b>Our Location</b> <hr></hr>3rd Floor room 80</p>
              </div>
              <div className="col s2 ">
              <p className="grey-text text-lighten-4 center"><b>Our Number</b><hr></hr> 123-456-7890</p>
              </div>
              <div className="col s2 ">
              <p className="grey-text text-lighten-4 center"><b>Our Email</b> <hr></hr>NHSArts@nhs.ca</p>
              </div>


            </div>
          </div>
        </footer>
    )
}

export default PageFooter