import React from "react";
import Nav from "../../components/Nav";// import Nav 
import FormRegistration from "../../components/FormRegistration";
import Footer from "../../components/Footer";// import Footer
import header from '../../assets/img/back/header.jpg';
import plane from '../../assets/img/back/plane.webp';
import tarmac from '../../assets/img/back/tarmac.webp';
import airportCounter from '../../assets/img/back/airportCounter.webp';
import airportHall from '../../assets/img/back/airportHall.webp';
import introduction from '../../assets/video/introduction.mp4';
import logo_formationscertifiantes from '../../assets/img/logo/logo_formationscertifiantes.png';
import jdelatorrenoir from '../../assets/img/team/jdelatorrenoir.jpg';


const App = () => {
    return (
        <>
            <div className="cover text-white d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundImage: `url(${header})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat:'no-repeat' }}>
                <Nav />
                <div className="text-center">
                    <h1 className="display-1 font-weight-bold">Airport Training Academy</h1>
                    <p className="lead" style={{ color: '#ffffffbf' }}>Votre centre de formation de référence dans l'aéroportuaire.</p>
                    <a className="btn btn-primary btn-lg rounded-pill" href="#resultats">Commençons ⬇︎</a>
                </div>
            </div>

            <p id="resultats" className="my-5"> </p>

            <div className="container py-5">
                <div className="row text-center">
                    {[
                        { text: "+2100", subtext: "Apprenants formés" },
                        { text: "96%", subtext: "reussite aux tests" },
                        { text: "98,7%", subtext: "apprenants en emploi" },
                        { text: "97,6%", subtext: "apprenants satisfaits" },
                    ].map((item, index) => (
                        <div className="col-lg-3 col-md-6 mb-4" key={index}>
                            <div className="p-4">
                                <p className="h1">{item.text}</p>
                                <p>{item.subtext}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="why-choose-us py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Pourquoi nous choisir ?</h2>
                    <p className="text-center">Situé au cœur du Parc Icade Paris Orly-Rungis, Airport Training Academy représente l'engagement vers l'excellence, le professionnalisme, et la rigueur dans la formation aéroportuaire. Notre mission est de forger les professionnels de demain dans le secteur aéroportuaire, en leur fournissant une formation complète, rigoureuse et adaptée aux défis contemporains du secteur.</p>
                    <div className="row mt-5">
                        {[
                            { imgSrc: plane, imgAlt: "Une photo sophistiquée et élégante d'un avion avec une palette de couleurs dominée par des teintes orange et bleues. L'avion est élégant et moderne." , title: "Les Témoignages", description: "Découvrez les avis de ceux qui ont suivis nos formations, et laissez-vous guider par leurs témoignages vers votre propre trajectoire professionnelle.", link: "temoignages" },
                            { imgSrc: tarmac, imgAlt: "Une photo sophistiquée et élégante d'un aéroport avec une palette de couleurs orange et bleue. La scène présente une architecture moderne et élégante avec de grandes vitres.", title: "Nos Formations", description: "Embarquez pour une aventure éducative unique, où chaque cours est une escale vers la professionnalisation aéroportuaire.", link: "formations" },
                            { imgSrc: airportCounter, imgAlt: "Une photo réaliste et élégante montrant deux agents au sol d'une compagnie aérienne dans un hall d'aéroport. L'agent féminin porte un uniforme élégant avec un foulard", title: "Contact / FAQ", description: "Vous avez des questions ? Plongez dans notre FAQ afin de gagner en clarté sur les détails de votre parcours de formation ou prenez contact avec nous.", link: "contact" },
                            { imgSrc: airportHall, imgAlt: "Une photo sophistiquée et élégante d'un tarmac d'aéroport avec une schéma de couleurs orange et bleu. La scène capture l'activité animée du tarmac", title: "Notre Blog", description: "Suivez notre blog où chaque article vous embarque dans un voyage au cœur du secteur de l'aéroportuaire et de ses innombrables innovations.", link: "blog" },
                        ].map((item, index) => (
                            <div className="col-lg-3 col-md-6 mb-4" key={index}>
                                <div className="card h-100">
                                    <img className="card-img-top" src={item.imgSrc} alt={item.imgAlt} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <a href={item.link} className="btn btn-outline-primary">En savoir plus →</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="team-section py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Notre équipe à pour objectif de vous préparer au mieux à intégrer efficacement le secteur de l'aéroportuaire.</h2>
                    <ul className="list-unstyled text-center">
                        <li>Une Pédagogie Innovante et Exigeante.</li>
                        <li>Un Cadre d'Apprentissage Professionnel et Élégant.</li>
                        <li>Une Préparation Rigoureuse pour une Carrière Réussie.</li>
                    </ul>
                    <div className="text-center mt-4">
                        <video className="img-fluid" src={introduction} autoPlay loop muted>
                            Désolé, votre navigateur ne supporte pas les vidéos embarquées.
                        </video>
                    </div>
                </div>
            </div>

            <div className="certification-section py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img className="img-fluid" src={logo_formationscertifiantes} alt="Les logos de certifications" />
                        </div>
                        <div className="col-md-6">
                            <h2>Des certifications reconnues par l'Etat.</h2>
                            <p>À l'issue de votre parcours d'apprentissage, un certificat reconnu par l'Etat vous sera remis pour attester de vos nouvelles compétences et les faire valoir sur le marché du travail. Notre organisme détient la certification QUALIOPI, qui est un gage de qualité délivré par l'Etat.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="quote-section py-5">
                <div className="container text-center">
                    <p className="quote">
                        <em>
                            "Chez Airport Training Academy, nous croyons que le ciel n'est pas la limite, mais le début de vos rêves. Façonner l'avenir, en alliant passion, expertise et innovation, pour élever chaque professionnel vers de nouveaux horizons."
                        </em>
                    </p>
                    <div className="quote-author mt-4">
                        <img className="rounded-circle" src={jdelatorrenoir} alt="J. De La Torre" style={{ width: '150px', height: '150px' }} />
                        <p className="author-name mt-3">J. De La Torre</p>
                        <p className="author-title">Directeur Général, Airport Training Academy</p>
                    </div>
                </div>
            </div>
        {/* formulaire d'enregistrement */}
            <FormRegistration />
            <Footer />
        </>
    );
};

export default App;
