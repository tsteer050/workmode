import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <p>Workmode is a project developed by Trevor Steer.  Technologies used include Ruby on Rails, React, Redux and PostgreSQL.</p>
      <p>For additional information about this project and others, follow the links below:</p>
      <div className="about-page-link-icons">
        <ul>
          <li>
            <a href="https://github.com/tsteer050">
              <i class="fab fa-github"></i>
              <h5>Github</h5>
            </a>
          </li>
          <li>
            <a href="https://www.trevorsteer.com">
              <i class="fas fa-globe"></i>
              <h5>Website</h5>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/trevor-steer/">
              <i class="fab fa-linkedin-in"></i>
              <h5>LinkedIn</h5>
            </a>
          </li>
          <li>
            <a href="https://angel.co/trevor-steer?public_profile=1">
              <i class="fab fa-angellist"></i>
              <h5>AngelList</h5>
            </a>
          </li>
        </ul>
        <div className="contact-info">
          <h4>Contact:</h4>
          <h5>Trevor Steer</h5>
          <h5>trevorasteer@gmail.com</h5>
          <h5>831.214.4864</h5>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;