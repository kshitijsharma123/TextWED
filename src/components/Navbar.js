import React from "react"; 

// import {Link} from "react-router-dom"
 
export default function Navbar(props) {

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <div className="container-fluid">
          <h3> TextWED</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* <Link className="nav-link active" aria-current="page"   to="/" style={{color:"red"}}> */}
                {/* Home */}
              {/* </Link> */}
              {/* <Link className="nav-link" to="/about" style={{color:"red"}} > */}
                {/* About */}
              {/* </Link> */}


            </div>
          </div>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
          <label className={`form-check-label text-${props.color}`} for="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </nav>
    </div>
  );
}
