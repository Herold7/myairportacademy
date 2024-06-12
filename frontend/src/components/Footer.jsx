import React from 'react';
import { Link, NavLink } from "react-router-dom";
import header from '../assets/img/back/header.jpg';


const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start" style={{ backgroundColor: '#f8f9fa', padding: '1.5rem 0'}}>
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase" style={{ marginBottom: '1rem'}}>My Airport Academy</h5>
                        <p>
                            Ma formation, Ma carrière !
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0" style={{ minHeight: '100vh', backgroundImage: `url(${header})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat:'no-repeat' }}>
                        <h5 className="text-uppercase" style={{padding: '0', listStyle: 'none'}}>Liens utiles</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <NavLink to="https://myairportacademy.com/politique-de-protection-des-donnees-personnelles" className="text-dark">Politique de protection des données personnelles</NavLink>
                            </li>
                            <li>
                                <NavLink to="/groundHandlingAgent" className="text-dark">Agent d’Escale</NavLink>
                            </li>
                            <li>
                                <NavLink to="/rampAgent" className="text-dark">Agent de Piste</NavLink>
                            </li>
                            <li>
                                <NavLink to="/securityAgent" className="text-dark">Agent de Sureté</NavLink>
                            </li>
                            <li>
                                <NavLink to="/AirportPMRAgent" className="text-dark">Agent PMR</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cleaningAgent" className="text-dark">Agent de Nettoyage Avion / Aéroport</NavLink>
                            </li>
                            <li>
                                <NavLink to="/baggageAgent" className="text-dark">Agent Bagagiste</NavLink>
                            </li>
                            <li>
                                <NavLink to="/welcomeAgent" className="text-dark">Agent Welcome</NavLink>
                            </li>
                            <li>
                                <NavLink to="/MealTrayPreparer" className="text-dark">Préparateur de Plateaux Repas</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ImportExportAgent" className="text-dark">Assistant Import-Export</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Contact</h5>
                        <ul className="list-unstyled">
                            <li>
                                <p>22/24 rue Saarinen, 94150, Rungis</p>
                            </li>
                            <li>
                                <p>Tel: 01 49 79 06 76</p>
                            </li>
                            <li>
                                <p>Email: contact@myairportacademy.com</p>
                            </li>
                            <li>
                                <p>Heures d’ouverture: Du lundi au vendredi : 9h00—17h00</p>
                            </li>
                            <li>
                                <p>Accès: Tram n°7 ; arrêt : “Saarinen”, Bus 216 ; arrêt : “Saarinen”, Bus 131, 396 ; arrêt : “Général De Gaulle”</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 Copyright:
                <a className="text-dark" href="#"> MyAirportAcademy.com</a>
            </div>
        </footer>
    );
}

export default Footer;
