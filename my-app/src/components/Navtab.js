import React from "react";
// import { Link } from 'react-router';
import App from "../App";

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6"
  },
  heading: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
  }
};

class Navtab extends React.Component {
  render() {
    return(
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
     

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link">
            {/* <Link to="/current">Current Weather</Link> */}
               <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
            {/* <Link to="/forecast">5-Day Forecast</Link> */}
            </a>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form> */}
      </div>
    </nav>
    )
  }
}
  

    export default Navtab;