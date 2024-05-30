import React from "react";
import './App.css'; // Assurez-vous d'importer le fichier CSS correspondant

const App = () => {
    return (
        <>
            <div className="cover" style={{ color: '#fefefe', minHeight: '100vh' }}>
                <img
                    className="cover-image"
                    style={{ objectPosition: '50% 0%' }}
                    src="https://myairportacademy.com/wp-content/uploads/2024/04/tiitus-saaristo-uIKfKTFge0Y-unsplash.jpg"
                    alt="piste d'atterrissage d'aéroport illuminée vue de nuit"
                />
                <div className="cover-inner">
                    <h1
                        className="cover-heading"
                        style={{ fontSize: '86px', fontStyle: 'normal', fontWeight: 'bold' }}
                    >
                        Airport Training Academy
                    </h1>
                    <div className="content-group">
                        <p
                            className="cover-paragraph"
                            style={{ color: '#ffffffbf', marginBottom: 'var(--spacing-60)' }}
                        >
                            Votre centre de formation de référence dans l'aéroportuaire.
                        </p>
                    </div>
                    <div className="button-group" style={{ marginTop: 0, marginBottom: 0 }}>
                        <a
                            className="cover-button"
                            style={{
                                borderStyle: 'none',
                                borderWidth: 0,
                                borderRadius: '100px',
                                paddingRight: 'var(--spacing-60)',
                                paddingLeft: 'var(--spacing-60)',
                            }}
                            href="#resultats"
                        >
                            Commençons ⬇︎
                        </a>
                    </div>
                </div>
            </div>

            <p id="resultats" style={{ scrollBehavior: 'smooth' }}> </p>

            <div className="columns" style={{ paddingTop: 'var(--spacing-70)', paddingBottom: 'var(--spacing-70)' }}>
                {[
                    { text: "+2100", subtext: "Apprenants formés" },
                    { text: "96%", subtext: "reussite aux tests" },
                    { text: "98,7%", subtext: "apprenants en emploi" },
                    { text: "97,6%", subtext: "apprenants satisfaits" },
                ].map((item, index) => (
                    <div className="column" key={index}>
                        <div className="column-content">
                            <p className="column-text">{item.text}</p>
                            <p className="column-subtext">{item.subtext}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="why-choose-us">
                <div className="content">
                    <h2 className="content-heading">Pourquoi nous choisir ?</h2>
                    <p className="content-paragraph">
                        Situé au cœur du Parc Icade Paris Orly-Rungis, Airport Training Academy représente l'engagement vers l'excellence, le professionnalisme, et la rigueur dans la formation aéroportuaire. Notre mission est de forger les professionnels de demain dans le secteur aéroportuaire, en leur fournissant une formation complète, rigoureuse et adaptée aux défis contemporains du secteur.
                    </p>
                </div>
                <div className="content-dedicated-pages">
                    <p className="dedicated-pages-title">Nos pages Dédiées</p>
                    <h2 className="dedicated-pages-heading">Pour en savoir plus</h2>
                    <div className="columns">
                        {[
                            { imgId: 92, title: "Les Témoignages", description: "Découvrez les avis de ceux qui ont suivis nos formations, et laissez-vous guider par leurs témoignages vers votre propre trajectoire professionnelle.", link: "temoignages" },
                            { imgId: 91, title: "Nos Formations", description: "Embarquez pour une aventure éducative unique, où chaque cours est une escale vers la professionnalisation aéroportuaire.", link: "formations" },
                            { imgId: 91, title: "Contact / FAQ", description: "Vous avez des questions ? Plongez dans notre FAQ afin de gagner en clarté sur les détails de votre parcours de formation ou prenez contact avec nous.", link: "contact" },
                            { imgId: 93, title: "Notre Blog", description: "Suivez notre blog où chaque article vous embarque dans un voyage au cœur du secteur de l'aéroportuaire et de ses innombrables innovations.", link: "blog" },
                        ].map((item, index) => (
                            <div className="column" key={index}>
                                <div className="column-content">
                                    <figure className="column-image">
                                        <img
                                            className="image"
                                            src={`https://myairportacademy.com/wp-content/uploads/2024/04/DALL·E-2024-04-08-12.21.29-Create-a-wide-aspect-ratio-abstract-image-with-dynamic-intertwining-lines-and-light-particles-in-both-blue-and-orange-tones-against-a-light-backgroun.webp`}
                                            alt={item.title}
                                        />
                                    </figure>
                                    <div className="column-text-content">
                                        <h3 className="column-heading">{item.title}</h3>
                                        <p>{item.description}</p>
                                        <a href={item.link}>En savoir plus →</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="team-section">
                <div className="team-content">
                    <h2 className="team-heading">
                        Notre équipe à pour objectif de vous préparer au mieux à intégrer efficacement le secteur de l'aéroportuaire.
                    </h2>
                    <ul className="team-list">
                        <li>Une Pédagogie Innovante et Exigeante.</li>
                        <li>Un Cadre d'Apprentissage Professionnel et Élégant.</li>
                        <li>Une Préparation Rigoureuse pour une Carrière Réussie.</li>
                    </ul>
                </div>
                <div className="team-video">
                    <video
                        className="video"
                        src="https://myairportacademy.com/wp-content/uploads/2024/05/Introduction.mp4"
                        autoPlay
                        loop
                        muted
                        width="300"
                        height="150"
                    >
                        Désolé, votre navigateur ne supporte pas les vidéos embarquées.
                    </video>
                </div>
            </div>

            <div className="certification-section">
                <div className="certification-content">
                    <figure className="certification-image">
                        <img
                            className="image"
                            src="https://myairportacademy.com/wp-content/uploads/2024/04/Design-sans-titre-4.png"
                            alt="Les logos de certifications"
                        />
                    </figure>
                    <div className="certification-text">
                        <h2>Des certifications reconnues par l'Etat.</h2>
                        <p>
                            À l'issue de votre parcours d'apprentissage, un certificat reconnu par l'Etat vous sera remis pour attester de vos nouvelles compétences et les faire valoir sur le marché du travail. Notre organisme détient la certification QUALIOPI, qui est un gage de qualité délivré par l'Etat.
                        </p>
                    </div>
                </div>
            </div>

            <div className="quote-section">
                <p className="quote">
                    <em>
                        "Chez Airport Training Academy, nous croyons que le ciel n'est pas la limite, mais le début de vos rêves. Façonner l'avenir, en alliant passion, expertise et innovation, pour élever chaque professionnel vers de nouveaux horizons."
                    </em>
                </p>
                <div className="quote-author">
                    <figure className="author-image">
                        <img
                            className="image"
                            src="https://myairportacademy.com/wp-content/uploads/2024/04/J.DeLaTorre-accueil.jpg"
                            alt="J. De La Torre"
                        />
                    </figure>
                    <p className="author-name">J. De La Torre</p>
                    <p className="author-title">Directeur Général, Airport Training Academy</p>
                </div>
            </div>
        </>
    );
};

export default App;
