import React from "react";
// import { Link } from 'react-router';
import App from "../App";


class Navtab extends React.Component {
  render() {
    return(
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
     

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link">
              {/* I would use the Link component to create the pages */}
              {/* Declare pages in index.html file */}
            {/* <Link to="/current">Current Weather</Link> */}
            <a className="nav-link" href="#">
                Current Weather <span className="sr-only"></span>
              </a>
               <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
            {/* <Link to="/forecast">5-Day Forecast</Link> */}
            <a className="nav-link" href="#">
                5-Day Forecast<span className="sr-only"></span>
              </a>
            </a>
          </li>
        </ul>
        {/* search cities weather */}
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
    )
  }
}
  

    export default Navtab;