import React, { Component } from 'react';

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value});
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.addFriend(this.state.name, this.state.age, this.state.email);
    this.setState({
      name: '',
      age: '',
      email: ''
    });
  }

  render() {
    // console.log('this.props.todos', this.props.todos);
    return (
      <div className="friendForm">
        <form onSubmit={this.handleSubmit}>
          <h3>Make a New Friend :)</h3>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <label htmlFor="age">Age</label>
          <input type="text" name="age" value={this.state.age} onChange={this.handleChange} />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          <input type="submit" value="Add new friend"/>
        </form>
      </div>
    );
  }
}

export default FriendForm;