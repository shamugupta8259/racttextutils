import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom';
// let tex = "Enable Dark Mode";
// let co = "text-dark";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href='#'>{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">{props.aboutText}</a>
            </li>

          </ul>


          {/* <form className="d-flex" role="search">
            <input className="form-check me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-danger mx-2" type="submit">Search</button>
          </form> */}
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" onClick={props.toogleMode}  id="customSwitch1" />
            <label className={`custom-control-label ${props.mode==='light'?"text-dark":"text-light"}`} htmlFor="customSwitch1">{props.mode==='light'? "Enable dark Mode": "Enable light Mode"} </label>
        </div>
      </div>
    </div>
    </nav >

  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps
  = {
  title: "set title",
  aboutText: "About"
}


