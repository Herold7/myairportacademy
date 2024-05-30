import React from 'react';
import './Course.css'; // Assurez-vous d'importer le fichier CSS correspondant

const Course = () => {
    return (
        <section className="full-width-section">
            <div className="group-section" style={{ marginTop: 'var(--wp--preset--spacing--60)', marginBottom: 'var(--wp--preset--spacing--60)', paddingTop: 0, paddingBottom: 0 }}>
                <div className="content-section" style={{ paddingRight: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--50)' }}>
                    <h2 className="heading has-text-align-center has-kenta-font-large-font-size" style={{ marginTop: 0, marginBottom: 0 }}>
                        Déroulé du processus de formation
                    </h2>
                    <p className="paragraph has-text-align-center" style={{ marginTop: '12px', marginBottom: '48px' }}>
                        De la définition de vos besoins en terme de formation, jusqu'à l'obtention de votre certification voire au-delà, nous vous accompagnons afin que votre parcours soit une réussite.
                    </p>
                </div>
                <div className="columns-section alignwide" style={{ paddingRight: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--50)' }}>
                    {[
                        {
                            imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/DALL·E-2024-04-22-16.02.25-In-a-modern-office-setting-a-young-white-man-and-a-lighter-skinned-black-woman-sit-two-meters-apart-facing-each-other-across-a-large-rectangular-tab.webp",
                            altText: "Dans un bureau moderne, un jeune homme blanc et une femme noire à la peau plus claire sont assis à deux mètres l'un de l'autre, face à face sur une grande tablette rectangulaire.",
                            title: "Evaluation des capacités"
                        },
                        {
                            imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Interrogation.webp",
                            altText: "Des apprenants sont assis dans une salle de cours, chacun devant un bureau. Ils sont en train d'écrire sur des feuilles",
                            title: "Formation & Tests"
                        },
                        {
                            imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Certification.webp",
                            altText: "Des apprenants tiennent des diplômes entre leurs mains. Ils sont debout dans une salle de cours. Ils ont tous le sourire, sont de sexe et de couleurs différentes, et regardent tous du même côté",
                            title: "Certification"
                        },
                        {
                            imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/DALL·E-2024-04-22-12.14.30-In-an-airport-setting-a-diverse-group-of-young-candidates-predominantly-women-including-Black-individuals-and-other-people-of-color-are-lined-up-f.webp",
                            altText: "Dans un aéroport, un groupe diversifié de jeunes candidats, principalement des femmes, y compris des Noirs et d'autres personnes de couleur, sont alignés face une agent d'escale",
                            title: "Entretien d'embauche"
                        }
                    ].map((item, index) => (
                        <div className="column" key={index}>
                            <div className="cover" style={{ borderRadius: '16px', minHeight: '430px', padding: 'var(--wp--preset--spacing--50)' }}>
                                <img className="cover-image" src={item.imgSrc} alt={item.altText} style={{ objectFit: 'cover' }} />
                                <div className="cover-inner-container">
                                    <p className="cover-title" style={{ fontStyle: 'normal', fontWeight: 'bold', color: 'white' }}>{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Course;
