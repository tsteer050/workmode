import React from 'react';

class AboutDropdown extends React.Component {


  render() {
    return (
      <div id="about-dropdown" className="about-dropdown">
        <p id="about-p-1">
          Workmode is a group messaging platform inspired by Slack.  Its core feature revolves around the use of web sockets to facilitate instant messaging between users.  
        </p>
        <p>
          To see this feature in action, open up a second window in Incognito mode, navigate to this site, and create a second account.  When viewing and typing in the same channel, new messages will appear in both windows simultaneously.  
        </p>
        <p id="about-p-3">
          For additional information about this project, check out the readme on <a href="https://github.com/tsteer050/">Github.</a>
        </p>
        <p>
          Workmode was developed by Trevor Steer.  
        </p>
        <p>
          Contact info:
        </p>
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
    )
  }
}

export default AboutDropdown;