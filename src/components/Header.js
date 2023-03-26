import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <nav className="navbar bg-danger">
        <div className="container-fluid">
        <span className="navbar-brand text-white mb-0 fs-1">Movie Reviews</span>
        </div>
    </nav>
    )
  }
}
