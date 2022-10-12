import React, { Component } from 'react';


import steph from "../Assets/steph.png";


export default class Home extends Component {
    render() {
        return(
            <div className="home">
                
                <div className="row" id="banner" >
                    <div className="col-1" >

                    </div>
                    <div className="col-5">
                        <h1 className="title">Woofs in Wonderland</h1>
                        <hr className="line"></hr>
                        <h3 className="tagLine">Pet Grooming</h3>
                    </div>
                    <div className="col-5" id="content">
                        <img className="profilePic" src={steph} alt="profile picture"></img>
                    </div>
                    <div className="col-1" >

                    </div>
                </div>
                <div className="row" id="footer">
                    <div className="col-3" >
                        <h5>Home</h5>
                        <p>Grooming can be stressful for pets, which is why my salon is in my own home. Your pet will never be kenneled and can make themselves at home. </p>
                    </div>
                    <div className="col-3">
                        <h5>Comfort</h5>
                        <p>Your pet's comfort is my top priority. I work at the pace that is most comfortable for them and use positive reinforcement techniques to guide them through the process.</p>
                    </div>
                    <div className="col-3">
                        <h5>Health</h5>
                        <p>Not only do I want your pet to leave looking good, but also feeling good. I will work with you to choose the best product for their skin and coat.</p>
                    </div>
                    <div className="col-3">
                        <h5>Creative</h5>
                        <p>How you want you pet styled is up to you! Every visit your pet will have a photoshoot and recieve stylish bows or bandana. I can even style your pet with permanent or non-permanent color!</p>
                    </div>
                </div>
            </div>
        )
    }
}