import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '', 
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <div className="signup-form">
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text" value={this.state.username} onChange={this.handleInput('username')} />
          </label>
          <label>Email:
            <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
          </label>
          <button type="submit" value="Submit"></button>
        </form>

      </div>
    );
  }
};

export default Signup;