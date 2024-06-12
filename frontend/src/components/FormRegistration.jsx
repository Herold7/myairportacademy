import React from "react";
import { useForm } from "react-hook-form";//Importation du hook useForm
import { yupResolver } from "@hookform/resolvers/yup";//Importation du validateur pour les formulaires
import * as yup from "yup";//Importation de yup pour la validation des formulaires
import emailjs from "@emailjs/browser";//Importation de la bibliothèque EmailJS

function FormRegistration() {

    const validationSchema = yup.object({//Définition des règles de validation
        lastname: yup.string().required("Veuillez renseigner votre nom").matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{1,50}$/, "Merci de ne pas utiliser de caractères spéciaux").max(50),
        firstname: yup.string().required("Veuillez renseigner votre prénom").matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{1,50}$/, "Merci de ne pas utiliser de caractères spéciaux").max(50),
        phone: yup.string().required("Veuillez renseigner votre numéro de téléphone")
            .matches(/(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/, "Merci de renseigner un numéro de téléphone valide")
            .max(12),
        email: yup.string().email().required("Veuillez renseigner votre adresse email")
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Merci de renseigner une adresse email valide")
            .max(50),
        birthday: yup.date().required("Veuillez renseigner votre date de naissance"),
        training: yup.string().required("Veuillez renseigner la formation souhaitée"),
        cv: yup.mixed().required("Veuillez joindre votre CV")//Validation du fichier
            .test("fileType", "Les fichiers doivent être au format PDF ou DOCX", (value) => {//Validation du type de fichier
                if (!value) return true;
                const allowedExtensions = ["pdf", "docx"];
                const fileExtension = value[0].name.split(".").pop().toLowerCase();
                return allowedExtensions.includes(fileExtension);
            })
            .test("fileSize", "La taille du fichier ne doit pas dépasser 1 Mo", (value) => {//Validation de la taille du fichier
                if (!value) return true;
                const maxSize = 1024 * 1024; // 1 Mo
                return value[0].size <= maxSize;
            }),
        interviewDate: yup.date().required("Veuillez sélectionner une date pour l'entretien"),
        timeSlot: yup.string().required("Veuillez sélectionner une heure pour l'entretien"),
        consent: yup.boolean().oneOf([true], "Vous devez accepter les conditions d'utilisation")
    }).required();

    const { register, formState: { errors }, handleSubmit, reset } = useForm({//Initialisation du hook useForm
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data, r) => {//Fonction de soumission du formulaire
        alert("Merci d'avoir rempli le formulaire");

        const profileData = new FormData();//Création d'un objet FormData pour les données du formulaire
        profileData.append('lastname', data.lastname);
        profileData.append('firstname', data.firstname);
        profileData.append('phone', data.phone);
        profileData.append('email', data.email);
        profileData.append('birthday', data.birthday);
        profileData.append('training', data.training);
        profileData.append('cv', data.cv[0]);
        profileData.append('consent', data.consent);

        try {
            // Enregistrement des informations d'inscription
            const profileResponse = await fetch('/api/profile', {
                method: 'POST',
                body: profileData
            });

            if (profileResponse.ok) {
                const profileResult = await profileResponse.json();
                console.log('Client saved successfully');

                // Enregistrement de l'entretien
                const interviewData = {
                    interviewDate: data.interviewDate,
                    timeSlot: data.timeSlot,
                    userId: 'someClientId', //Remplacez par l'identifiant du client actuel 
                    clientId: profileResult.clientId // Utilisez l'ID du client créé 
                };

                const interviewResponse = await fetch('/api/registration', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(interviewData)
                });

                if (interviewResponse.ok) {
                    console.log('Interview saved successfully');

                    // Envoi de l'email via EmailJS
                    const serviceId = 'service_vqmn109';
                    const templateId = 'template_ho47x65';
                    const publicId = 'w8qdr60q4EL2CZNrX';
                    const variables = {
                        lastname: data.lastname,
                        firstname: data.firstname,
                        phone: data.phone,
                        email: data.email,
                        birthday: data.birthday,
                        training: data.training,
                        interviewDate: data.interviewDate,
                        timeSlot: data.timeSlot
                    };

                    emailjs.send(serviceId, templateId, variables, publicId)
                        .then((res) => {
                            console.log('Email sent successfully!');
                            r.target.reset();
                        })
                        .catch((err) => {//Gestion des erreurs
                            console.error('There was an error sending the email', err);
                            alert('An error occurred while sending the email');
                        });
                } else {
                    console.error('There was an error saving the interview');
                    alert('An error occurred while saving the interview');
                }
            } else {
                console.error('There was an error saving the registration');
                alert('An error occurred while saving the registration');
            }
        } catch (error) {
            console.error('There was an error submitting the form', error);
            alert('An error occurred while submitting the form');
        }
    };

    return (
        <>
            <section className="container">
                <div className="form-container" style={{ border: '1px solid rgba(229, 142, 79, 1)', transition: 'border-width 0.3s' }}>
                    <p>Les champs suivis d'une * sont obligatoires.</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        <div style={{ flex: '0 0 60%' }}>
                            <form onSubmit={handleSubmit(onSubmit)}//Appel de la fonction de soumission du formulaire
                                className="mx-5 p-5 shadow border-0 rounded-4 justify-content-md-center"
                                style={{ marginTop: '7rem', marginBottom: '5rem' }} >
                                <div className="mb-3">
                                    <h3 className="contain mb-5 display-3 text-center fw-bold text-primary">Rencontrons-nous</h3>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputGender" className="form-label">Gender</label>
                                    <select className="form-control form-control-lg" id="InputGender" name="gender" aria-describedby="genderHelp"
                                        // Utilisation de la méthode register pour lier les champs du formulaire aux règles de validation
                                        {...register('gender')}> 
                                        <option value=""> </option>
                                        <option value="M.">M.</option>
                                        <option value="Mme">Mme</option>
                                    </select>
                                    {/* Affichage des erreurs */}
                                    {errors.gender && <p id="c-yup">{errors.gender.message}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputLastname" className="form-label">Nom</label>
                                    <input type="text" className="form-control form-control-lg" id="InputLastname" name="lastname" autoComplete="lastname" placeholder="Ecrivez votre nom de famille" aria-describedby="lastnameHelp"
                                        {...register('lastname')} />
                                    {errors.lastname && <p id="c-yup">{errors.lastname.message}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputFirstname" className="form-label">Prénom</label>
                                    <input type="text" className="form-control form-control-lg" id="InputFirstname" name="firstname" autoComplete="firstname" placeholder="Ecrivez votre prénom" aria-describedby="firstnameHelp"
                                        {...register('firstname')} />
                                    {errors.firstname && <p id="c-yup">{errors.firstname.message}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputPhone" className="form-label">Téléphone</label>
                                    <input type="tel" className="form-control form-control-lg" id="InputPhone" name="phone" autoComplete="phone" placeholder="Ecrivez votre n° de téléphone" aria-describedby="phoneHelp "
                                        {...register('phone')} />
                                    {errors.phone && <p id="c-yup">{errors.phone.message}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputEmail" className="form-label">Email</label>
                                    <input type="email" className="form-control form-control-lg" id="InputEmail" name="email" {...register('email')}
                                        autoComplete="email" placeholder="Ecrivez votre email" aria-describedby="emailHelp" />
                                    {errors.email && <p id="c-yup">{errors.email.message}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="FormControlBirthday" className="form-label">Date de naissance</label>
                                    <input type="date" className="form-control form-control-lg" id="FormControlBirthday" name="birthday" {...register('birthday')}
                                        placeholder="Renseignez votre date de naissance" aria-describedby="BirthdayHelp"></input>
                                </div>
                                {errors.birthday && <p id="c-yup">{errors.birthday.message}</p>}
                                <div className="mb-3">
                                    <label htmlFor="InputTraining" className="form-label">Formations</label>
                                    <select className="form-control form-control-lg" id="InputTraining" name="training" aria-describedby="trainingHelp"
                                        {...register('training')}>
                                        <option value="" selected >Sélectionner une formation</option>
                                        <option value="Agent d'Escale">Agent d'Escale</option>
                                        <option value="Agent de Piste">Agent de Piste</option>
                                        <option value="Agent Bagagiste">Agent Bagagiste</option>
                                        <option value="Agent Welcome">Agent Welcome</option>
                                        <option value="Agent PMR">Agent PMR (Personne à Mobilité Réduite)</option>
                                        <option value="Agent de Nettoyage Avion / Aéroport">Agent de Nettoyage Avion / Aéroport</option>
                                        <option value="Agent Import-Export">Agent Import-Export</option>
                                        <option value="Agent de Sûreté Aéroportuaire">Agent de Sûreté Aéroportuaire</option>
                                        <option value="Préparateur de Plateaux Repas">Préparateur de Plateaux Repas</option>
                                    </select>
                                    {errors.training && <p id="c-yup">{errors.training.message}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="FormControlInterviewDate" className="form-label">Date de l'entretien</label>
                                    <input type="date" className="form-control form-control-lg" id="FormControlInterviewDate" name="interviewDate" {...register('interviewDate')}
                                        placeholder="Sélectionnez une date pour l'entretien" aria-describedby="InterviewDateHelp"></input>
                                </div>
                                {errors.interviewDate && <p id="c-yup">{errors.interviewDate.message}</p>}
                                <div className="mb-3">
                                    <label htmlFor="FormControlTimeSlot" className="form-label">Heure de l'entretien</label>
                                    <select className="form-control form-control-lg" id="FormControlTimeSlot" name="timeSlot" aria-describedby="timeSlotHelp"
                                        {...register('timeSlot')}>
                                        <option value="" selected >Sélectionner une heure</option>
                                        <option value="09:00 - 10:00">09:00 - 10:00</option>
                                        <option value="10:00 - 11:00">10:00 - 11:00</option>
                                        <option value="11:00 - 12:00">11:00 - 12:00</option>
                                        <option value="13:00 - 14:00">13:00 - 14:00</option>
                                        <option value="14:00 - 15:00">14:00 - 15:00</option>
                                        <option value="15:00 - 16:00">15:00 - 16:00</option>
                                    </select>
                                    {errors.timeSlot && <p id="c-yup">{errors.timeSlot.message}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputCv" className="form-label">Fichier</label>
                                    <input type="file" className="form-control" id="InputCv" name="cv" {...register('cv')} />
                                    {errors.cv && <p id="c-yup">{errors.cv.message}</p>}
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="consent" {...register('consent')} />
                                    <label className="form-check-label" htmlFor="consent">J'accepte les conditions d'utilisation</label>
                                    {errors.consent && <p id="c-yup">{errors.consent.message}</p>}
                                </div>
                                <button type="button" className="btn btn-primary fs-2" data-bs-toggle="modal"
                                    data-bs-target="#Modal">Envoyer</button>

                                {/* Modal de confirmation */}
                                <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title " id="ModalLabel">Fenêtre de validation</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <h3>Cliquez sur valider pour envoyer</h3>
                                            </div>
                                            <div className="modal-footer" >
                                                <button type="button" className="btn btn-secondary fs-3" data-bs-dismiss="modal">Annuler</button>
                                                <button type="submit" className="btn btn-primary fs-3">Valider</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FormRegistration;
