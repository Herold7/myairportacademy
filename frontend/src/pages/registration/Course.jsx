import React from 'react';
import assessment from '../../assets/img/back/capacityAssessment.webp';
import certification from '../../assets/img/back/certification.webp';
import exam from '../../assets/img/back/exam.webp';
import training from '../../assets/img/back/training.webp';

const Course = () => {
    return (
        <section className="full-width-section">
            <div className="container my-5">
                <div className="text-center mb-5">
                    <h2 className="display-4">Déroulé du processus de formation</h2>
                    <p className="lead">
                        De la définition de vos besoins en termes de formation, jusqu'à l'obtention de votre certification voire au-delà, nous vous accompagnons afin que votre parcours soit une réussite.
                    </p>
                </div>
                <div className="row">
                    {[
                        {
                            imgSrc: assessment,
                            altText: "Dans un bureau moderne, un jeune homme blanc et une femme noire à la peau plus claire sont assis à deux mètres l'un de l'autre, face à face sur une grande tablette rectangulaire.",
                            title: "Evaluation des capacités"
                        },
                        {
                            imgSrc: training,
                            altText: "Des apprenants sont assis dans une salle de cours, chacun devant un bureau. Ils sont en train d'écrire sur des feuilles",
                            title: "Formation & Tests"
                        },
                        {
                            imgSrc: certification,
                            altText: "Des apprenants tiennent des diplômes entre leurs mains. Ils sont debout dans une salle de cours. Ils ont tous le sourire, sont de sexe et de couleurs différentes, et regardent tous du même côté",
                            title: "Certification"
                        },
                        {
                            imgSrc: exam,
                            altText: "Dans un aéroport, un groupe diversifié de jeunes candidats, principalement des femmes, y compris des Noirs et d'autres personnes de couleur, sont alignés face une agent d'escale",
                            title: "Entretien d'embauche"
                        }
                    ].map((item, index) => (
                        <div className="col-md-6 col-lg-3 mb-4" key={index}>
                            <div className="card h-100" style={{ border:'none', borderRadius:'16px', overflow:'hidden'}}>
                                <img className="card-img-top" src={item.imgSrc} alt={item.altText} style={{ objectFit: 'cover', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }} />
                                <div className="card-body d-flex align-items-end p-" style={{ backgroundColor: '#000', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', padding: '1rem' }}>
                                    <p className="card-title text-white mb-0" style={{ fontStyle: 'normal', fontWeight: 'bold' }}>{item.title}</p>
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
