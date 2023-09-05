import React from 'react';
import nobel_logo from '../assets/nobel_logo.png';

class Header extends React.Component {
  render() {
    return (
      <div>
        <img src={ nobel_logo } alt="Nobel Logo" />
      </div>
    );
  }
}

export default Header;
