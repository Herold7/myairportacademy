import React from 'react';

const WelcomeAgent = () => {
    return (
        <div style={{ marginTop: 0, marginBottom: 0, paddingTop: 'var(--wp--preset--spacing--70)', paddingBottom: 'var(--wp--preset--spacing--70)' }}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '0 var(--wp--preset--spacing--50)' }}>
                <div style={{ flexBasis: '50%', display: 'flex', alignItems: 'center' }}>
                    <figure style={{ borderRadius: '32px', aspectRatio: '4/3', objectFit: 'cover' }}>
                        <img
                            src="https://myairportacademy.com/wp-content/uploads/2024/04/agent-welcome1-scaled.webp"
                            alt="Agent welcome blanche vu de face en uniforme bleu marine, chemise blanche et foulard bleu et rose, avec les cheveux attaché style elfe ; réceptionnant le billet dans le passeport d'un voyageur blanc aux cheveux poivre et sel, portant un costume sombre, une chemise blanche, une montre à bracelet marron et des lunettes. Vu de coté. Ils sont séparés par un comptoir d'accueil dans un aéroport."
                            style={{ borderRadius: '32px', aspectRatio: '4/3', objectFit: 'cover' }}
                        />
                    </figure>
                </div>
                <div style={{ flexBasis: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2>Agent Welcome</h2>
                    <p>
                        L'Agent Welcome, souvent rencontré dans les contextes aéroportuaires en France, et tout particulièrement en Île-de-France, joue un rôle crucial dans l'accueil et l'orientation des visiteurs, des touristes et des voyageurs. Cette profession, axée sur le service client, est essentielle pour offrir une première impression positive et pour aider les gens à naviguer dans des environnements souvent complexes et très fréquentés, comme les aéroports de Paris-Charles de Gaulle (CDG), le Bourget (LBG) et Paris-Orly (ORY).
                    </p>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#2face2', padding: 'var(--wp--preset--spacing--50) var(--wp--preset--spacing--80)' }}>
                <div style={{ flexBasis: '50%', color: 'white' }}>
                    <h3 style={{ marginTop: '-1rem', marginBottom: '-4rem' }}>
                        Formation Métier
                        <img
                            src="https://myairportacademy.com/wp-content/uploads/2024/04/Animation-Depart.gif"
                            alt="GIF inline d'un avion noir sur fond orange et cartouche noir et écriture grise"
                        />
                    </h3>
                    <p>Les missions spécifiques d'un Agent Welcome :</p>
                    <ul style={{ lineHeight: '1.75' }}>
                        <li>Connaitre l’environnement et les acteurs aéroportuaire (co-activité / alphabet aéroportuaire / SGS / environnement de la piste)</li>
                        <li>Code IATA + typologie des passagers + passager à particularité</li>
                        <li>Les différentes missions d’un agent welcome / les positionnements / les particularités du métier en fonction des compagnies aériennes</li>
                        <li>Les différents types de handicap (procédures, difficultés, prise en charge)</li>
                        <li>Gestes et postures pour la prise en charge des passagers PMR / Pratique avec le matériel (fauteuil roulant, béquilles…) Techniques de transfert des passagers WCHC</li>
                    </ul>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#141414', color: 'white', padding: 'var(--wp--preset--spacing--50) var(--wp--preset--spacing--80)' }}>
                <div style={{ flexBasis: '50%' }}>
                    <h3 style={{ marginTop: '-1rem', marginBottom: '-4rem' }}>
                        Formation Générale
                        <img
                            src="https://myairportacademy.com/wp-content/uploads/2024/04/Animation-check-in.gif"
                            alt="GIF inline d'un check-in bleu aéroportuaire sur fond orange et cartouche bleue et écriture orange"
                        />
                    </h3>
                    <p>Compétences générales de l'Agent Welcome :</p>
                    <ul style={{ lineHeight: '1.75' }}>
                        <li>Découverte de l’aéroport et mise en situation réelle avec les passagers</li>
                        <li>Facteurs humains et Gestes et postures</li>
                        <li>Gestion de conflits</li>
                        <li>Anglais aéroportuaire</li>
                        <li>Préparation aux entretiens de sélection</li>
                    </ul>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#e58e4f', color: 'white', padding: 'var(--wp--preset--spacing--50) var(--wp--preset--spacing--80)' }}>
                <div style={{ flexBasis: '50%' }}>
                    <h3 style={{ marginTop: '-1rem', marginBottom: '-4rem' }}>
                        Formation réglementaire
                        <img
                            src="https://myairportacademy.com/wp-content/uploads/2024/04/Animation-1714049788560.gif"
                            alt="GIF inline d'un contrôle de passeport aéroportuaire sur fond bleu et cartouche noir et écriture grise"
                        />
                    </h3>
                    <p>Connaissances sécuritaires et réglementaires :</p>
                    <ul style={{ lineHeight: '1.75' }}>
                        <li>Sensibilisation législation aéroportuaire (être en mesure de connaitre et comprendre l’application des différents règlements à l’échelle internationale et européenne) / instances internationales / code OACI</li>
                        <li>Sécurité aéroportuaire (Les FOD / règles de prévention / la touchée / type d’embarquement) / Acquérir l’accès piéton aux secteurs TRA et MAN des plateformes du groupe ADP</li>
                        <li>Module sûreté Contributeur 11.2.3.8 + TCA - Connaissance de la vérification de concordance entre les passagers et leurs bagages de soute</li>
                    </ul>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', padding: 'var(--wp--preset--spacing--50) var(--wp--preset--spacing--80)' }}>
                <div style={{ flexBasis: '50%' }}>
                    <h3 style={{ marginTop: '-1rem', marginBottom: '-4rem' }}>
                        Outils Pédagogiques
                        <img
                            src="https://myairportacademy.com/wp-content/uploads/2024/04/Animation-coffee.gif"
                            alt="GIF inline d'une tasse de café orange sur fond bleu et cartouche orange et écriture bleue"
                        />
                    </h3>
                    <p>Les dispositifs mis en place pour une formation de qualité :</p>
                    <ul style={{ lineHeight: '1.75' }}>
                        <li>Présentiel</li>
                        <li>Diaporama</li>
                        <li>Ordinateur / Support de cours papier</li>
                        <li>Paperbord / Ecran interactif</li>
                        <li>Formation terrain / Mise en situation</li>
                    </ul>
                </div>
            </div>
            <div style={{ display: 'flex', gap: 'var(--wp--preset--spacing--30)', justifyContent: 'center', padding: 'var(--wp--preset--spacing--50)' }}>
                <a
                    className="wp-block-button__link"
                    style={{ borderRadius: '100px', padding: 'var(--wp--preset--spacing--50) var(--wp--preset--spacing--60)', fontSize: 'var(--wp--preset--font-size--kenta-font-xsmall)' }}
                    href="https://candidat.francetravail.fr/marche-du-travail/fichemetierrome?codeRome=M1601"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    En savoir plus
                </a>
                <a
                    className="wp-block-button__link is-style-outline"
                    style={{ borderRadius: '100px', padding: 'var(--wp--preset--spacing--50) var(--wp--preset--spacing--60)', fontSize: 'var(--wp--preset--font-size--kenta-font-xsmall)' }}
                    href="inscription"
                >
                    Je m'inscris
                </a>
            </div>
        </div>
    );
};

export default WelcomeAgent;
