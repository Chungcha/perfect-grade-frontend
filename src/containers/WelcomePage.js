/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';


class WelcomePage extends Component {
  render() {
    return (
      <div className="offside">
        <h2>
          Welcome to Perfect Grade
        </h2>

        <p>Log In</p>
        <p>Sign Up</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(WelcomePage);
