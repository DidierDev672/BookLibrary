import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <h3 className="navbar-brand">Book Shelving</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="/" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/" aria-current="page">Our Shelving</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/" aria-current="page">My Shelving</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/" aria-current="page">Book's</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/" aria-current="page">Comic's</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/" aria-current="page">Manga's</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/sign-in" aria-current="page">Sign In</Link>
                            </li>
                            <li className="navbar-nav">
                                <Link className="nav-link" to="/sign-up" aria-current="page">Sign Up</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Header;