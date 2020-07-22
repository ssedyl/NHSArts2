import React from 'react';

const About = () => {
    return (
        <div>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h4 className="center">About Us</h4><hr></hr>
              <p className="center">
              We are the Nowheresville High School Arts Club! We were founded in 2001 and are currently supervised by Mr. Doesnotexist.
              </p>
            
              <p className="center">We're located on the <b>3rd floor at room 80</b>, yep right beside the science lab.
              </p>
              <p className="center">
              If you'd like to contact us, you can do so via our email: <b>NHSArts@nhs.ca</b>.
              </p>
              <p className="center">
                Or if someones at our desk during club hours, feel free to call us at: <b>123-456-7890</b>.
              </p>
            </div>
            <div className="col s12">
              <h4 className="center">About Art</h4><hr></hr>
              <p className="center">
                Art is the expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power.
              </p>
              <p className="center">
                Here are some videos about the history of art and the different genres of art!
              </p>
              <div className=" center">
                <iframe width="475" height="280" src="https://www.youtube.com/embed/0C_ArE9TxmY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className=" center"><hr></hr>
              <iframe width="475" height="280" src="https://www.youtube.com/embed/AAXGwE0bzj0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

            </div>
          </div>
          


        </div>
      </div>
  
    )
}

export default About