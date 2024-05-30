import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from '@emailjs/browser';


function FormContact() {

    const validationSchema = yup.object({
        firstname: yup.string().required("Veuillez renseigner votre prénom").matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{1,50}$/, "Merci de ne pas utiliser de caractères spéciaux").max(50),
        lastname: yup.string().required("Veuillez renseigner votre nom").matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{1,50}$/, "Merci de ne pas utiliser de caractères spéciaux").max(50),

        phone: yup.string().required("Veuillez renseigner votre numéro de téléphone")
            .matches(/(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/, "Merci de renseigner un numéro de téléphone valide")
            .max(12),
        email: yup.string().email().required("Veuillez renseigner votre adresse email")
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Merci de renseigner une adresse email valide")
            .max(50),
        message: yup.string().required("Veuillez indiquer l'objet de votre prise de contact").matches(/^[\s\S]{0,255}$/, "Merci de ne pas utiliser de caractères spéciaux")
            .max(255),
    })
        .required();

    const { register, formState: { errors }, handleSubmit, reset} = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data, r) => {
        alert("Merci d'avoir rempli le formulaire");
        const serviceId = 'service_vqmn109';
        const templateId = 'template_ho47x65';
        try {
            sendFeedBack(serviceId, templateId, {
                name: data.name,
                phone: data.phone,
                email: data.email,
                message: data.message,
                reply_to: r.target.reset(),
            });
        } catch (error) {
            console.error('Il y a une erreur lors de l\'envoi du formulaire', error);
            alert('Une erreur est survenue lors de l\'envoi du formulaire')

        }
    };
    const publicId = 'w8qdr60q4EL2CZNrX';
    const sendFeedBack = (serviceId, templateId, variables) => {
        emailjs
            .send(serviceId, templateId, variables, publicId)
            .then((res) => {
                console.log('SUCCESS!');
            })
            .catch((err) => console.error('Il y a une erreur'));
    };

    return (
        <>
            <section className="container">
                <form onSubmit={handleSubmit(onSubmit)}
                    className="mx-5 p-5 shadow border-0 rounded-4 justify-content-md-center"
                    style={{ marginTop: '7rem', marginBottom: '5rem' }} >
                    <div className="mb-3">
                        <h3 className="contain mb-5 display-3 text-center fw-bold text-primary">Rencontrons-nous</h3>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputGender" className="form-label">Gender</label>
                        <select  className="form-control form-control-lg" id="InputGender" name="gender" aria-describedby="genderHelp"
                             {...register('gender')}>
                             <option value=""> </option>
                             <option value="M.">M.</option>
                             <option value="Mme">Mme</option>
                        </select>           
                            
                        {errors.gender && <p id="c-yup">{errors.gender.message}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputLastname" className="form-label">Nom</label>
                        <input type="text" className="form-control form-control-lg" id="InputLastname" name="name" aria-describedby="nameHelp"
                            {...register('lastname')} />
                        {errors.lastname && <p id="c-yup">{errors.lastname.message}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputFirstname" className="form-label">Prénom</label>
                        <input type="text" className="form-control form-control-lg" id="InputFirstname" name="name" aria-describedby="nameHelp"
                            {...register('firstname')} />
                        {errors.firstname && <p id="c-yup">{errors.firstname.message}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPhone" className="form-label">Téléphone</label>
                        <input type="tel" className="form-control form-control-lg" id="InputPhone" name="phone" aria-describedby="phoneHelp "
                            {...register('phone')} />
                        {errors.phone && <p id="c-yup">{errors.phone.message}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control form-control-lg" id="InputEmail" name="email" {...register('email')}
                            aria-describedby="emailHelp" />
                        {errors.email && <p id="c-yup">{errors.email.message}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="FormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control form-control-lg" id="FormControlTextarea1" name="message" {...register('message')}
                            aria-describedby="messageHelp" rows="10" cols="10"></textarea>
                    </div>
                    {errors.message && <p id="c-yup">{errors.message.message}</p>}

                    <button type="button" className="btn btn-primary fs-2" data-bs-toggle="modal"
                        data-bs-target="#Modal">Envoyer</button>

                    {/* Modal de validation */}
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
            </section>
        </>
    )


    const App = () => {
      return (
        <div className="form-container">
          <p>Les champs suivis d'une * sont obligatoires.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ flex: '0 0 60%' }}>
              <label>
                Genre
                <select name="gender">
                  <option value=""> </option>
                  <option value="M.">M.</option>
                  <option value="Mme">Mme</option>
                </select>
              </label>
            </div>
            <div style={{ flex: '0 0 40%' }}>
              <label>
                Nom *
                <input type="text" name="lastname" autoComplete="name" minLength="2" maxLength="30" placeholder="Ecrivez votre nom de famille" required />
              </label>
            </div>
            <div style={{ flex: '0 0 40%' }}>
              <label>
                Prénom *
                <input type="text" name="firstname" autoComplete="firstname" minLength="2" maxLength="30" placeholder="Ecrivez votre prénom" required />
              </label>
            </div>
            <div style={{ flex: '0 0 40%' }}>
              <label>
                Téléphone *
                <input type="tel" name="phone" autoComplete="tel" minLength="10" maxLength="13" placeholder="Votre n° de téléphone" required />
              </label>
            </div>
            <div style={{ flex: '0 0 40%' }}>
              <label>
                E-mail *
                <input type="email" name="email" autoComplete="email" minLength="10" maxLength="50" placeholder="Votre email" required />
              </label>
            </div>
            <div style={{ flex: '0 0 60%' }}>
              <label>
                Objet de votre message *
                <input type="text" name="subject" minLength="8" maxLength="50" placeholder="Ecrivez le sujet de votre message" required />
              </label>
            </div>
            <div style={{ flex: '0 0 83%' }}>
              <label>
                Message *
                <textarea name="message" minLength="10" maxLength="250" placeholder="Ecrivez votre message" required></textarea>
              </label>
            </div>
            <div style={{ flex: '0 0 70%' }}>
              <label>
                En envoyant ce formulaire, vous acceptez que Airport Training Academy mémorise et utilise les informations collectées afin de traiter votre demande. Afin d'en savoir plus, vous pouvez cliquez sur <a href="politique-de-protection-des-donnees-personnelles" target="_blank" rel="noopener"><strong>notre politique de protection des données personnelles</strong></a>.
                <input type="checkbox" name="consent" required /> Oui, je donne mon consentement
              </label>
            </div>
            <div style={{ flex: '0 0 80%', display: 'flex', justifyContent: 'flex-end' }}>
              <button type="submit">Envoyer</button>
            </div>
          </div>
        </div>
      );
    };
    
    export default App;
    

}

export default FormContact;