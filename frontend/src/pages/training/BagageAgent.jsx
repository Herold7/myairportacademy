import React from 'react';
import './App.css'; // Assurez-vous d'importer le fichier CSS correspondant

const BagageAgent = () => {
    return (
        <div className="full-width-section" style={{ marginTop: 0, marginBottom: 0, paddingTop: 'var(--wp--preset--spacing--70)', paddingBottom: 'var(--wp--preset--spacing--70)' }}>
            <div className="columns-section" style={{ backgroundColor: '#141414', paddingRight: 'var(--wp--preset--spacing--70)', paddingLeft: 'var(--wp--preset--spacing--70)' }}>
                <div className="column" style={{ flexBasis: '50%' }}>
                    <figure className="image-container" style={{ borderRadius: '32px', aspectRatio: '4/3', objectFit: 'cover' }}>
                        <img src="https://myairportacademy.com/wp-content/uploads/2024/04/baggage-1697327_1280.jpg" alt="Agent de piste bagagiste" />
                    </figure>
                </div>
                <div className="column" style={{ flexBasis: '50%' }}>
                    <h2 className="heading">Agent Bagagiste (uniquement pour les candidats sans permis)</h2>
                    <br />
                    <p className="paragraph">
                        L'Agent Bagagiste, souvent appelé aussi agent de piste en raison de ses fonctions qui se déroulent majoritairement sur la piste des aéroports, joue un rôle essentiel dans le fonctionnement et la logistique aéroportuaire. Ce professionnel est chargé de la manipulation des bagages dans les aéroports, assurant leur transfert entre les avions, les tapis de réception, et les zones de tri. En Île-de-France, où se trouvent certains des aéroports les plus importants et les plus fréquentés de France, tels que Charles de Gaulle (CDG), le Bourget (LBG) et Orly (ORY), le rôle de l'agent bagagiste est particulièrement important.
                    </p>
                </div>
            </div>

            <div className="columns-section" style={{ backgroundColor: '#2face2', padding: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--80)', paddingRight: 'var(--wp--preset--spacing--80)' }}>
                <div className="column" style={{ flexBasis: '50%' }}>
                    <h3 className="heading" style={{ marginTop: '-1rem', marginBottom: '-4rem' }}>
                        Formation Métier
                        <img src="https://myairportacademy.com/wp-content/uploads/2024/04/Animation-Depart.gif" alt="GIF inline d'un avion" />
                    </h3>
                    <p className="paragraph">Les missions spécifiques de l'Agent Bagagiste :</p>
                    <ul className="checkmark-list" style={{ lineHeight: '1.75' }}>
                        <li>Engins et servitude avions / Connaissance du Loader et convoyeur à bande</li>
                        <li>Connaissance des ULD et porte ULD</li>
                        <li>Connaissance des étiquettes bagages et Documents de chargements (PDC)</li>
                        <li>Arrimage et sanglage / Calage et balisage avion</li>
                    </ul>
                </div>
            </div>

            <div className="columns-section" style={{ backgroundColor: '#141414', padding: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--80)', paddingRight: 'var(--wp--preset--spacing--80)' }}>
                <div className="column" style={{ flexBasis: '50%' }}>
                    <h3 className="heading" style={{ marginTop: '-1rem', marginBottom: '-4rem' }}>
                        Formation Générale
                        <img src="https://myairportacademy.com/wp-content/uploads/2024/04/Animation-check-in.gif" alt="GIF inline d'un check-in aéroportuaire" />
                    </h3>
                    <p className="paragraph">Compétences générales de l'Agent Bagagiste :</p>
                    <ul className="checkmark-list" style={{ lineHeight: '1.75' }}>
                        <li>Plateforme aéroportuaire, Règles de sécurité en piste</li>
                        <li>Facteurs humains et Gestes et postures</li>
                        <li>Anglais aéroportuaire</li>
                        <li>Préparation aux entretiens de sélection</li>
                    </ul>
                </div>
            </div>

            <div className="columns-section" style={{ backgroundColor: '#e58e4f', padding: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--80)', paddingRight: 'var(--wp--preset--spacing--80)' }}>
                <div className="column" style={{ flexBasis: '50%' }}>
                    <h3 className="heading" style={{ marginTop: '-1rem', marginBottom: '-4rem' }}>
                        Formation réglementaire
                        <img src="https://myairportacademy.com/wp-content/uploads/2024/04/Animation-1714049788560.gif" alt="GIF inline d'un contrôle de passeport aéroportuaire" />
                    </h3>
                    <p className="paragraph">Connaissances sécuritaires et réglementaires :</p>
                    <ul className="checkmark-list" style={{ lineHeight: '1.75' }}>
                        <li>Module sûreté Contributeur 11.2.3.8 - Traitement des bagages</li>
                        <li>Module sûreté Contributeur 11.2.3.9 - Traitement du fret, des biens et produits</li>
                        <li>Marchandises Dangereuses Catégorie 8c (Piste+RRW)</li>
                    </ul>
                </div>
            </div>

            <div className="columns-section" style={{ padding: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--80)', paddingRight: 'var(--wp--preset--spacing--80)' }}>
                <div className="column" style={{ flexBasis: '50%' }}>
                    <h3 className="heading" style={{ marginTop: '-1rem', marginBottom: '-4rem' }}>
                        Outils Pédagogiques
                        <img src="https://myairportacademy.com/wp-content/uploads/2024/04/Animation-coffee.gif" alt="GIF inline d'une tasse de café" />
                    </h3>
                    <p className="paragraph">Les dispositifs mis en place pour une formation de qualité :</p>
                    <ul className="checkmark-list" style={{ lineHeight: '1.75' }}>
                        <li>Présentiel</li>
                        <li>Diaporama</li>
                        <li>Ordinateur / Support de cours papier</li>
                        <li>Paperbord / Ecran interactif</li>
                        <li>Formation terrain / Mise en situation</li>
                    </ul>
                </div>
            </div>

            <div className="buttons-section" style={{ spacing: { blockGap: 'var(--wp--preset--spacing--30)' } }}>
                <div className="button has-custom-font-size" style={{ padding: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--60)', paddingRight: 'var(--wp--preset--spacing--60)' }}>
                    <a className="button-link" style={{ borderRadius: '100px' }} href="https://candidat.francetravail.fr/marche-du-travail/fichemetierrome?codeRome=N2203" target="_blank" rel="noopener">
                        En savoir plus
                    </a>
                </div>
                <div className="button is-style-outline has-custom-font-size">
                    <a className="button-link" style={{ borderRadius: '100px' }} href="inscription">
                        Je m'inscris
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BagageAgent;
