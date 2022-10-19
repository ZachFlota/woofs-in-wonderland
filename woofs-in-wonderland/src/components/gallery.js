import React, { Component } from 'react';

import dogTrio from "../Assets/dogTrio2.jpg";
import finn from "../Assets/finn.JPG";
import yorkie from "../Assets/yorkie.JPG";
import crab from "../Assets/crab.JPG";
import hpyorkie from "../Assets/hpyorkie.JPG";
import cowboy from "../Assets/cowboy.JPG";
import cowgirl from "../Assets/cowgirl.JPG";
import lmdoodle from "../Assets/lmdoodle.JPG";

export default  class Gallery extends Component {
    render() {
        return (
            <div className="gallery" id="gallery">
                <div className="row">
                    <div className="col-5" id="gallery1">
                        <img className="dogTrio" src={dogTrio} alt="dog portrait"></img>
                        <img className="hppoodle" src={cowgirl} alt="poodle"></img>
                        <img className="lmdoodle" src={lmdoodle} alt="doodle"></img>
                        
                    </div>
                    <div className="col-3" id="gallery2">
                        <img className="finn" src={finn} alt="white dog"></img>
                        <img className="crab" src={crab} alt="miniature poodle"></img>
                        <img className="cowboy" src={cowboy} alt="american bulldog"></img>
                    </div>
                    <div className="col-4" id="gallery3">
                        <img className="hpyorkie" src={hpyorkie} alt="yorkie"></img>
                        <img className="yorkie" src={yorkie} alt="yorkie"></img>
                        
                    </div>
                </div>
            </div>
        )
    }
}