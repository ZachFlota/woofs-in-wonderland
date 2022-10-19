import React, { Component } from 'react';

import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';


export default class Contact extends Component {
    render() {
        return(
            <div className="contact" id="contact">
                <div className="row">
                    <div className="col-1" id="checker"></div>
                    <div className="col-5">
                        <h1 id="contact1">Let's get in touch!</h1>
                        <p>Appointments are available Tuesday - Saturday</p>
                        <p><BsFacebook className="icon" /> Facebook</p>
                        <p><BsInstagram className="icon" /> Instagram</p>
                        <p><MdEmail className="icon" /> Email</p>
                    </div>
            
                    <div className="col-6" id="checker"></div>
                </div>
            </div>
        )
    }
}