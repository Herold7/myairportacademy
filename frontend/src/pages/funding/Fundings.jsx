import React from 'react';
import moncompteformation from '../../assets/img/logo/logo_moncompteformation.png';
import francetravail from '../../assets/img/logo/logo_francetravail.png';
import misionslocales from '../../assets/img/logo/logo_misionslocales.jpg';
import agefiph from '../../assets/img/logo/logo_agefiph.png';
import regionidf from '../../assets/img/logo/logo_regionidf.png';
import cb from '../../assets/img/logo/logo_cb.jpg';

const Fundings = () => {
    const fundingOptions = [
        {
            title: "Le Compte Personnel de Formation (CPF)",
            description: [
                "Le CPF permet à toute personne active, dès son entrée sur le marché du travail et jusqu'à sa retraite, d'accumuler des droits à la formation qu'elle peut utiliser pour financer des actions de formation.",
                "Le compte est alimenté automatiquement chaque année en euros, en fonction des heures travaillées par l'individu au cours de l'année précédente.",
                "Le CPF peut être utilisé pour financer une large gamme de formations certifiantes, qualifiantes. Les formations doivent être inscrites au Répertoire National des Certifications Professionnelles (RNCP) ou au Répertoire Spécifique (RS) pour être éligibles.",
                "Pour utiliser ses droits CPF, l'individu doit créer un compte sur le site moncompteformation.gouv.fr. Il peut ensuite s'inscrire à des sessions de formation et payer les frais de formation directement via la plateforme. Si les droits CPF ne couvrent pas intégralement les frais de formation, l'individu peut compléter avec d'autres sources de financement ou payer le reste à charge.",
            ],
            img: moncompteformation,
            link: "https://www.moncompteformation.gouv.fr/espace-public/comment-financer-ma-formation-utiliser-mon-solde-cpf",
            textLink: "Mon compte formation",
        },
        {
            title: "France travail (ex pôle emploi)",
            description: [
                "Pour les demandeurs d'emploi, France Travail peut proposer des financements pour des formations qui contribuent à améliorer leurs compétences et favorisent leur retour rapide à l'emploi.",
                "Le financement des formations peut prendre plusieurs formes, comme la prise en charge des frais de formation, des aides à la mobilité et parfois des rémunérations pour les demandeurs d'emploi en formation (AFPR, POEI, etc.).",
                "Pour bénéficier d'un financement, le demandeur d'emploi doit d'abord discuter de son projet avec son conseiller France Travail. Si le projet est validé, le conseiller aidera le demandeur à monter son dossier de financement et à suivre les étapes nécessaires pour l'inscription à la formation.",
                "France Travail peut également proposer des aides pour les personnes en reconversion professionnelle, les jeunes en insertion, les travailleurs handicapés, et d'autres publics spécifiques. Les aides sont adaptées à chaque situation et peuvent couvrir tout ou partie des frais de formation.",
            ],
            link: "https://www.francetravail.fr/candidat/en-formation/mes-aides-financieres.html",
            img: francetravail,
            textLink: "France Travail",
        },
        {
            title: "Les Missions Locales",
            description: [
                "Elles s'adressent aux jeunes de 16 à 25 ans, en particulier ceux qui sont confrontés à des difficultés d'insertion dans le monde du travail.",
                "Elles peuvent orienter les jeunes vers des dispositifs de financement adaptés à leur situation : le Conseil Régional, le Fonds Social Européen, le Compte Personnel de Formation (CPF), et d'autres aides spécifiques pour les jeunes en difficulté. Elles peuvent proposer des bourses ou des prises en charge partielles des frais de formation.",
                "Elles accompagnent les jeunes dans le montage de leurs dossiers de demande de financement : l'aide à la rédaction de lettres de motivation, la préparation aux entretiens avec les organismes financeurs, et le suivi du dossier.",
                "Elles peuvent également proposer des aides complémentaires pour faciliter l'accès à la formation : aides au transport, à l'hébergement, à la restauration, etc.",
            ],
            img: misionslocales,
            link: "https://www.unml.info/#",
            textLink: "Les Missions locales",
        },
        {
            title: "L'AGEFIPH (Association de Gestion du Fonds pour l'Insertion Professionnelle des Personnes Handicapées)",
            description: [
                "Elle propose diverses aides financières pour les personnes handicapées souhaitant suivre une formation professionnelle. Ces aides peuvent couvrir tout ou partie des frais de formation.",
                "Le financement peut inclure les frais pédagogiques, les coûts liés à l'adaptation des matériels de formation pour les personnes handicapées, ainsi que les frais annexes (transport, hébergement).",
                "Pour bénéficier d'une aide financière de l'AGEFIPH pour une formation, la personne en situation de handicap doit d'abord prendre contact avec un conseiller spécialisé (Cap emploi, mission locale, ou un service d'accompagnement).",
                "Le conseiller l'aidera à monter son dossier de demande de financement et à le présenter à l'AGEFIPH. Si le projet est validé, l'AGEFIPH prendra en charge tout ou partie des frais de formation",
            ],
            link: "https://www.agefiph.fr/aides-handicap/aide-la-formation-des-personnes-handicapees-dans-le-cadre-du-parcours-vers-lemploi",
            img: agefiph,
            textLink: "L'AGEFIPH",
        },
        {
            title: "La région Île-de-France",
            description: [
                "Elle finance une gamme étendue de formations pour les demandeurs d'emploi, les jeunes en insertion, les salariés et les créateurs d'entreprise. Cela peut couvrir les frais pédagogiques, mais aussi des aides complémentaires comme les frais de transport et d'hébergement pour les stagiaires en formation.",
                "Par exemple, le dispositif \"Aide individuelle à la formation\" (AIF) soutient les demandeurs d'emploi dans leurs projets de formation. Le \"Plan régional de formation\" (PRF), visent à répondre aux besoins spécifiques en compétences des secteurs porteurs de la région.",
                "Pour bénéficier d'un financement de la région Île-de-France, il faut s'adresser à un organisme de formation agréé par la région et monter un dossier de demande de financement. Les critères d'éligibilité et les modalités de financement varient en fonction des dispositifs et des publics cibles.",
                "La région Île-de-France propose également des aides pour les créateurs d'entreprise, les salariés en reconversion professionnelle, et les jeunes en insertion. Les aides sont adaptées à chaque situation et peuvent couvrir tout ou partie des frais de formation.",
                
            ],
            img: regionidf,
            link: "https://www.iledefrance.fr/decouvrir-le-fonctionnement-de-la-region/la-region-en-action/laction-regionale-pour-la-formation-professionnelle",
            textLink: "La région Ile-de-France",
        },
        {
            title: "Prise en charge individuelle",
            description: [
                "Paiement en carte bleue VISA, MASTERCARD, AMEX, BANQUES EN LIGNE.",
                "Paiement en carte bleue AMEX",
                "Paiement en carte bleue BANQUES EN LIGNE.",
                "Possibilité de payer comptant ou en plusieurs fois.",
            ],
            link: "",
            img: cb,
            textLink: "France Travail",
        },
    ];

    const oddFundingOptions = fundingOptions.filter((_, index) => index % 2 !== 0);
    const evenFundingOptions = fundingOptions.filter((_, index) => index % 2 === 0);

    return (
        <>
            {oddFundingOptions.map((option, index) => (
                <section key={index} className="py-5" style={{ backgroundColor: 'var(--wp--preset--color--kenta-base-300)' }}>
                    <div className="container px-5">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="heading">{option.title}</h2>
                                <ul className="checkmark-list" style={{ lineHeight: '1.75' }}>
                                    {option.description.map((desc, i) => <li key={i}>{desc}</li>)}
                                </ul>
                                <div className="d-flex flex-wrap">
                                    <a className="btn btn-primary rounded-pill m-2" href={option.link} target="_blank" rel="noopener">{option.textLink}</a>
                                    <a className="btn btn-outline-primary rounded-pill m-2" href="formations">Je choisis ma formation</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <figure className="image-container">
                                    <img className="img-fluid rounded-3" src={option.img} alt={`Logo ${option.title}`} />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
            {evenFundingOptions.map((option, index) => (
                <section key={index} className="py-5" style={{ backgroundColor: 'var(--wp--preset--color--kenta-base-300)' }}>
                    <div className="container px-5">
                        <div className="row">
                            <div className="col-md-6 order-md-2">
                                <figure className="image-container">
                                    <img className="img-fluid rounded-3" src={option.img} alt={`Logo ${option.title}`} />
                                </figure>
                            </div>
                            <div className="col-md-6 order-md-1">
                                <h2 className="heading">{option.title}</h2>
                                <ul className="checkmark-list" style={{ lineHeight: '1.75' }}>
                                    {option.description.map((desc, i) => <li key={i}>{desc}</li>)}
                                </ul>
                                <div className="d-flex flex-wrap">
                                    <a className="btn btn-primary rounded-pill m-2" href={option.link} target="_blank" rel="noopener">{option.textLink}</a>
                                    <a className="btn btn-outline-primary rounded-pill m-2" href="formations">Je choisis ma formation</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

export default Fundings;
