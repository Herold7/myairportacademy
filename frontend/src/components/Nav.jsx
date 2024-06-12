import React from 'react';
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" style={{ height: '40px', marginRight: '10px' }} >
                    <img src="logo.png" alt="Logo" className="d-inline-block align-text-top" />
                    Airport Training Academy
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link text-capitalize active" aria-current="page" >Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/formations" className="nav-link text-capitalize" >Formations</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/inscription" className="nav-link text-capitalize" >Inscription</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/financement" className="nav-link text-capitalize" >Financements</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact-faq" className="nav-link text-capitalize" >Contact/FAQ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog" className="nav-link text-capitalize" >Blog</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Recherche" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Rechercher</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
