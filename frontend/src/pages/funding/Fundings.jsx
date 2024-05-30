import React from 'react';
import './Fundings.css'; // Assurez-vous d'importer le fichier CSS correspondant

const Fundings = () => {
    return (
        <>
            <section className="full-width-section" style={{ paddingTop: 'var(--wp--preset--spacing--30)', paddingBottom: 'var(--wp--preset--spacing--30)', backgroundColor: 'var(--wp--preset--color--kenta-base-300)' }}>
                <div className="columns-section" style={{ paddingRight: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--50)' }}>
                    <div className="column" style={{ flexBasis: '50%' }}>
                        <h2 className="heading">Le Compte Personnel de Formation (CPF)</h2>
                        <ul className="checkmark-list" style={{ lineHeight: '1.75' }}>
                            <li>Le CPF permet à toute personne active, dès son entrée sur le marché du travail et jusqu'à sa retraite, d'accumuler des droits à la formation qu'elle peut utiliser pour financer des actions de formation.</li>
                            <li>Le compte est alimenté automatiquement chaque année en euros, en fonction des heures travaillées par l'individu au cours de l'année précédente.</li>
                            <li>Le CPF peut être utilisé pour financer une large gamme de formations certifiantes, qualifiantes. Les formations doivent être inscrites au Répertoire National des Certifications Professionnelles (RNCP) ou au Répertoire Spécifique (RS) pour être éligibles.</li>
                            <li>Pour utiliser ses droits CPF, l'individu doit créer un compte sur le site moncompteformation.gouv.fr. Il peut ensuite s'inscrire à des sessions de formation et payer les frais de formation directement via la plateforme. Si les droits CPF ne couvrent pas intégralement les frais de formation, l'individu peut compléter avec d'autres sources de financement ou payer le reste à charge.</li>
                        </ul>
                        <div className="buttons-section">
                            <div className="button has-custom-font-size" style={{ borderRadius: '100px' }}>
                                <a className="button-link" href="https://www.moncompteformation.gouv.fr/espace-public/comment-financer-ma-formation-utiliser-mon-solde-cpf" target="_blank" rel="noopener">Mon compte Formation</a>
                            </div>
                            <div className="button is-style-outline has-custom-font-size">
                                <a className="button-link" href="formations">Je choisis ma formation</a>
                            </div>
                        </div>
                    </div>
                    <div className="column" style={{ flexBasis: '50%' }}>
                        <figure className="image-container" style={{ borderRadius: '32px', aspectRatio: '4/3', objectFit: 'cover' }}>
                            <img src="https://myairportacademy.com/wp-content/uploads/2024/04/2-1.png" alt="Logo mon compte formation (CPF)" />
                        </figure>
                    </div>
                </div>
            </section>

            <section className="full-width-section" style={{ paddingTop: 'var(--wp--preset--spacing--30)', paddingBottom: 'var(--wp--preset--spacing--30)', backgroundColor: 'var(--wp--preset--color--kenta-base-300)' }}>
                <div className="columns-section" style={{ paddingRight: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--50)' }}>
                    <div className="column" style={{ flexBasis: '50%' }}>
                        <figure className="image-container" style={{ borderRadius: '32px', aspectRatio: '4/3', objectFit: 'cover' }}>
                            <img src="https://myairportacademy.com/wp-content/uploads/2024/04/3-1.png" alt="Logo France Travail" />
                        </figure>
                    </div>
                    <div className="column" style={{ flexBasis: '50%' }}>
                        <h2 className="heading">France travail (ex pôle emploi)</h2>
                        <ul className="checkmark-list" style={{ lineHeight: '1.75' }}>
                            <li>Pour les demandeurs d'emploi, France Travail peut proposer des financements pour des formations qui contribuent à améliorer leurs compétences et favorisent leur retour rapide à l'emploi. Ces formations doivent être ciblées et répondre aux besoins du marché du travail local ou national.</li>
                            <li>Le financement des formations peut prendre plusieurs formes, comme la prise en charge des frais de formation, des aides à la mobilité et parfois des rémunérations pour les demandeurs d'emploi en formation (AFPR, POEI, etc.).</li>
                            <li>Pour bénéficier d'un financement, le demandeur d'emploi doit d'abord discuter de son projet avec son conseiller France Travail. Si le projet est validé, le conseiller aidera le demandeur à monter son dossier de financement et à suivre les étapes nécessaires pour l'inscription à la formation.</li>
                        </ul>
                        <div className="buttons-section">
                            <div className="button has-custom-font-size" style={{ borderRadius: '100px' }}>
                                <a className="button-link" href="https://www.francetravail.fr/candidat/en-formation/mes-aides-financieres.html" target="_blank" rel="noopener">France Travail</a>
                            </div>
                            <div className="button is-style-outline has-custom-font-size">
                                <a className="button-link" href="formations">Je choisis ma formation</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="full-width-section" style={{ paddingTop: 'var(--wp--preset--spacing--30)', paddingBottom: 'var(--wp--preset--spacing--30)', backgroundColor: 'var(--wp--preset--color--kenta-base-300)' }}>
                <div className="columns-section" style={{ paddingRight: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--50)' }}>
                    <div className="column" style={{ flexBasis: '50%' }}>
                        <h2 className="heading">Les Missions Locales</h2>
                        <ul className="checkmark-list" style={{ lineHeight: '1.75' }}>
                            <li>Elles s'adressent aux jeunes de 16 à 25 ans, en particulier ceux qui sont confrontés à des difficultés d'insertion dans le monde du travail.</li>
                            <li>Elles peuvent orienter les jeunes vers des dispositifs de financement adaptés à leur situation : le Conseil Régional, le Fonds Social Européen, le Compte Personnel de Formation (CPF), et d'autres aides spécifiques pour les jeunes en difficulté. Elles peuvent proposer des bourses ou des prises en charge partielles des frais de formation.</li>
                            <li>Elles accompagnent les jeunes dans le montage de leurs dossiers de demande de financement : l'aide à la rédaction de lettres de motivation, la préparation aux entretiens avec les organismes financeurs, et le suivi du dossier.</li>
                        </ul>
                        <div className="buttons-section">
                            <div className="button has-custom-font-size" style={{ borderRadius: '100px' }}>
                                <a className="button-link" href="https://www.unml.info/#" target="_blank" rel="noopener">Les Missions locales</a>
                            </div>
                            <div className="button is-style-outline has-custom-font-size">
                                <a className="button-link" href="formations">Je choisis ma formation</a>
                            </div>
                        </div>
                    </div>
                    <div className="column" style={{ flexBasis: '50%' }}>
                        <figure className="image-container" style={{ borderRadius: '32px', aspectRatio: '4/3', objectFit: 'cover' }}>
                            <img src="https://myairportacademy.com/wp-content/uploads/2024/04/RML_logo_verti_rvb.jpg" alt="Logo des missions locales" />
                        </figure>
                    </div>
                </div>
            </section>

            <section className="full-width-section" style={{ paddingTop: 'var(--wp--preset--spacing--30)', paddingBottom: 'var(--wp--preset--spacing--30)', backgroundColor: 'var(--wp--preset--color--kenta-base-300)' }}>
                <div className="columns-section" style={{ paddingRight: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--50)' }}>
                    <div className="column" style={{ flexBasis: '50%' }}>
                        <figure className="image-container" style={{ borderRadius: '32px', aspectRatio: '4/3', objectFit: 'cover' }}>
                            <img src="https://myairportacademy.com/wp-content/uploads/2024/04/4-1.png" alt="Logo AGEFIPH" />
                        </figure>
                    </div>
                    <div className="column" style={{ flexBasis: '50%' }}>
                        <h2 className="heading">L'AGEFIPH (Association de Gestion du Fonds pour l'Insertion Professionnelle des Personnes Handicapées)</h2>
                        <ul className="checkmark-list" style={{ lineHeight: '1.75' }}>
                            <li>Elle propose diverses aides financières pour les personnes handicapées souhaitant suivre une formation professionnelle. Ces aides peuvent couvrir tout ou partie des frais de formation.</li>
                            <li>Le financement peut inclure les frais pédagogiques, les coûts liés à l'adaptation des matériels de formation pour les personnes handicapées, ainsi que les frais annexes (transport, hébergement).</li>
                            <li>Pour bénéficier d'une aide financière de l'AGEFIPH pour une formation, la personne en situation de handicap doit d'abord prendre contact avec un conseiller spécialisé (Cap emploi, mission locale, ou un service d'accompagnement).</li>
                        </ul>
                        <div className="buttons-section">
                            <div className="button has-custom-font-size" style={{ borderRadius: '100px' }}>
                                <a className="button-link" href="https://www.agefiph.fr/aides-handicap/aide-la-formation-des-personnes-handicapees-dans-le-cadre-du-parcours-vers-lemploi" target="_blank" rel="noopener">L'AGEFIPH</a>
                            </div>
                            <div className="button is-style-outline has-custom-font-size">
                                <a className="button-link" href="formations">Je choisis ma formation</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="full-width-section" style={{ paddingTop: 'var(--wp--preset--spacing--30)', paddingBottom: 'var(--wp--preset--spacing--30)', backgroundColor: 'var(--wp--preset--color--kenta-base-300)' }}>
                <div className="columns-section" style={{ paddingRight: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--50)' }}>
                    <div className="column" style={{ flexBasis: '50%' }}>
                        <h2 className="heading">La région Île-de-France</h2>
                        <ul className="checkmark-list" style={{ lineHeight: '1.75' }}>
                            <li>Elle finance une gamme étendue de formations pour les demandeurs d'emploi, les jeunes en insertion, les salariés et les créateurs d'entreprise. Cela peut couvrir les frais pédagogiques, mais aussi des aides complémentaires comme les frais de transport et d'hébergement pour les stagiaires en formation.</li>
                            <li>Par exemple, le dispositif "Aide individuelle à la formation" (AIF) soutient les demandeurs d'emploi dans leurs projets de formation. Le "Plan régional de formation" (PRF), visent à répondre aux besoins spécifiques en compétences des secteurs porteurs de la région.</li>
                        </ul>
                        <div className="buttons-section">
                            <div className="button has-custom-font-size" style={{ borderRadius: '100px' }}>
                                <a className="button-link" href="https://www.iledefrance.fr/decouvrir-le-fonctionnement-de-la-region/la-region-en-action/laction-regionale-pour-la-formation-professionnelle" target="_blank" rel="noopener">La région Ile-de-France</a>
                            </div>
                            <div className="button is-style-outline has-custom-font-size">
                                <a className="button-link" href="formations">Je choisis ma formation</a>
                            </div>
                        </div>
                    </div>
                    <div className="column" style={{ flexBasis: '50%' }}>
                        <figure className="image-container" style={{ borderRadius: '32px', aspectRatio: '4/3', objectFit: 'cover' }}>
                            <img src="https://myairportacademy.com/wp-content/uploads/2024/04/1-1.png" alt="Logo de la région Ile-de-France" />
                        </figure>
                    </div>
                </div>
            </section>

            <section className="full-width-section" style={{ paddingTop: 'var(--wp--preset--spacing--30)', paddingBottom: 'var(--wp--preset--spacing--30)', backgroundColor: 'var(--wp--preset--color--kenta-base-300)' }}>
                <div className="columns-section" style={{ paddingRight: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--50)' }}>
                    <div className="column" style={{ flexBasis: '50%' }}>
                        <figure className="image-container" style={{ borderRadius: '32px', aspectRatio: '4/3', objectFit: 'cover' }}>
                            <img src="https://myairportacademy.com/wp-content/uploads/2024/04/logo-cb.jpg" alt="Logo CB" />
                        </figure>
                    </div>
                    <div className="column" style={{ flexBasis: '50%' }}>
                        <h2 className="heading">Prise en charge individuelle</h2>
                        <ul className="checkmark-list" style={{ lineHeight: '1.75' }}>
                            <li>Paiement en carte bleue VISA, MASTERCARD, AMEX, BANQUES EN LIGNE</li>
                            <li>Possibilité de payer comptant ou en plusieurs fois</li>
                            <li>Possibilité de paiement par d'autres moyens (espèces, chèques, Virement)</li>
                        </ul>
                        <div className="buttons-section">
                            <div className="button has-custom-font-size is-style-outline" style={{ borderRadius: '100px' }}>
                                <a className="button-link" href="formations">Je choisis ma formation</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Fundings;
