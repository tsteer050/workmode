import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h3>Workmode is a project </h3>
      <h3>developed by Trevor Steer</h3>
      <div className="about-description">
        <p>Technologies used include Ruby on Rails, React, Redux and PostgreSQL.</p>
        <p>For additional information about this project, check out the readme on <a href="https://github.com/tsteer050/workmode">Github.</a></p>
      </div>
      <h4>Contact Trevor:</h4>
      <div className="about-page-link-icons">
        <ul>
          <li>
            <a className="icon-link" href="https://github.com/tsteer050">
              <i className="fab fa-github link-icon"></i>
              <h5 className="contact-link-text">Github</h5>
            </a>
          </li>
          <li>
            <a className="icon-link" href="http://www.trevorsteer.com">
              <i className="fas fa-globe link-icon"></i>
              <h5 className="contact-link-text">Website</h5>
            </a>
          </li>
          <li>
            <a className="icon-link" href="https://www.linkedin.com/in/trevor-steer/">
              <i className="fab fa-linkedin-in link-icon"></i>
              <h5 className="contact-link-text">LinkedIn</h5>
            </a>
          </li>
          <li>
            <a className="icon-link" href="https://angel.co/trevor-steer?public_profile=1">
              <i className="fab fa-angellist link-icon"></i>
              <h5 className="contact-link-text">AngelList</h5>
            </a>
          </li>
          <a className="icon-link" href="mailto:trevorasteer@gmail.com">
            <i className="fas fa-envelope link-icon"></i>
            <h5 className="contact-link-text">Email</h5>
          </a>
          
        </ul>
      </div>
    </div>
  )
}

export default AboutPage;