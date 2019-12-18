import React from "react";


class Navtab extends React.Component {
  render() {
    return(
      <div>
        <h1>React Weather Application w/ OpenWeatherData API</h1>
        <p>Whats Your Local Temp </p>
      </div>
    )
  }
}
// function Navtab() {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <Link className="navbar-brand" to="/">
//           React Weather App Coding Challenge
//         </Link>
//         <div>
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link
//                 to="/"
//                 className={
//                   window.location.pathname === "/" || window.location.pathname === "/current"
//                     ? "nav-link active"
//                     : "nav-link"
//                 }
//               >
//                 Current Temperature
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="/discover"
//                 className={window.location.pathname === "/forecast" ? "nav-link active" : "nav-link"}
//               >
//                 Forecast
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );

    export default Navtab;