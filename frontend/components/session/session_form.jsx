import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '', 
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDefault = this.loginDefault.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(() => this.props.history.push("/"));
  }

  loginDefault() {
    this.props.login({
      username: "Joe Example", 
      email: "example@testing.com", 
      password: "asdf1234" 
    })
      .then(() => this.props.history.push("/"));
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <div className="session-form-errors">
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
    
  }

  render() {
    let title;
    if (this.props.formType === 'login') {
      title = ( 
      <div>
        <h2>Sign in to Slack</h2>
        <h4>Enter your login information</h4>
      </div>
      );
    } else {
      title = (
        <div>
          <h2>Sign up for Slack</h2>
          <h4>Enter your information</h4>
        </div>
      );
    }





    return (
      <div>
          {this.renderErrors()}
        
        <div className="session-form">
          {title}
          <form onSubmit={this.handleSubmit}>

            <input className="session-form-username" placeholder="Username" type="text" value={this.state.username} onChange={this.handleInput('username')} />


            <input className="session-form-email" placeholder="Email" type="text" value={this.state.email} onChange={this.handleInput('email')} />


            <input className="session-form-password" placeholder="Password" type="password" value={this.state.password} onChange={this.handleInput('password')} />

            <input className="session-form-submit" type="submit" value="Continue   &#8594;" />
          </form>
          <div className="login-with-default-button" onClick={this.loginDefault}>Login with default user</div>
        </div>
      </div>
      
    );
  }
};

export default SessionForm;