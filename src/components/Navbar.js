import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (<div className="App">
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <div className="collapse navbar-collapse">
            <div className="navbar-nav">
                <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                <Link className="nav-item nav-link" to="/about">About</Link>
            </div>
        </div>
    </nav>
</div>);

export default Navbar;
