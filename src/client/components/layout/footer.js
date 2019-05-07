import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="text-center">
        <hr />
        <h3 className="text-sm">Copyright &copy; {new Date().getFullYear()} Stumbo </h3>
      </footer>
    )
  }
}

export default Footer;
