import React from 'react';
require('dotenv').config();

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_AUTH_ID,
        scope: 'email'
      })
    });
  }

  render () {
    return (
      <div> Google Auth </div>
    )
  }
}

export default GoogleAuth;
