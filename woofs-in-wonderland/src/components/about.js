import React, { Component } from 'react';



export default class About extends Component {
    render() {
        return(
            <div className="about" id="about">
                <div className="row" id="aboutRow">                    
                    <div className="col-6" id="about1">
                        <div id="tag">
                            <p>Pets are my passion and making sure your pet leaves my salon looking and feeling great is my promise. </p>
                        </div>
                    </div>
                    <div className="col-6" id="about2">
                        <div id="who">
                            <h2>Who I am </h2>
                            <h3>I have over 10 years of experience in grooming. More than just providing a great groom, I believe that your pet's over health and comfort is most important. For many pets, the process of grooming can be quite stressful. From puppies to seniors, I adjust my process and pace to match thier needs.  </h3>
                        </div>
                    </div>

                    
                </div>

            </div>

        )
    }
}    