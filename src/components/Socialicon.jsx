import React, { Component } from "react";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/Github.svg";
import instagram from "../assets/img/Instagram.svg";
import email from "../assets/img/envelope.svg";

export class Socialicon extends Component {
  render() {
    return (
        <div className="social-icon">
        <a href="https://www.linkedin.com/feed/" target="_blank" rel='noreferrer'><img src={linkedin} alt="linkedin" /></a>
        <a href="https://github.com/" target="_blank" rel='noreferrer'><img src={github} alt="github" /></a>
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel='noreferrer'><img src={email} alt="email" /></a>

      </div>
    );
  }
}

export default Socialicon;