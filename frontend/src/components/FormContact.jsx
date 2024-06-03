import React from "react";
import { useForm } from "react-hook-form";// Importation des hooks du formulaire
import { yupResolver } from "@hookform/resolvers/yup";// Importation de yup pour la validation
import * as yup from "yup";// Importation de yup pour la validation
import emailjs from '@emailjs/browser';// Importation de la librairie emailjs


function FormContact() {

    const validationSchema = yup.object({// Création du schéma de validation
        firstname: yup.string().required("Veuillez renseigner votre prénom").matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{1,50}$/, "Merci de ne pas utiliser de caractères spéciaux").max(50),
        lastname: yup.string().required("Veuillez renseigner votre nom").matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{1,50}$/, "Merci de ne pas utiliser de caractères spéciaux").max(50),
        phone: yup.string().required("Veuillez renseigner votre numéro de téléphone")
            .matches(/(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/, "Merci de renseigner un numéro de téléphone valide")
            .max(12),
        email: yup.string().email().required("Veuillez renseigner votre adresse email")
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Merci de renseigner une adresse email valide")
            .max(50),
        object: yup.string().required("Veuillez renseignerl'objet de votre message").matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{1,50}$/, "Merci de ne pas utiliser de caractères spéciaux").max(50),    
        message: yup.string().required("Veuillez indiquer l'objet de votre prise de contact").matches(/^[\s\S]{0,255}$/, "Merci de ne pas utiliser de caractères spéciaux")
            .max(255),
    })
        .required();

    const { register, formState: { errors }, handleSubmit, reset} = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data, r) => {
        alert("Merci d'avoir rempli le formulaire");
        const SERVICE_ID = 'service_vqmn109';
        const TEMPLATE_ID_CONTACT = 'template_ho47x65';
        try {
            sendFeedBack(SERVICE_ID, TEMPLATE_ID_CONTACT, {
                firstname: data.firstname,
                lastname: data.lastname,
                phone: data.phone,
                email: data.email,
                object: data.object,
                message: data.message,
                reply_to: r.target.reset(),
            });
        } catch (error) {
            console.error('Il y a une erreur lors de l\'envoi du formulaire', error);
            alert('Une erreur est survenue lors de l\'envoi du formulaire')

        }
    };
    const PUBLIC_KEY = 'w8qdr60q4EL2CZNrX';
    const sendFeedBack = (SERVICE_ID, TEMPLATE_ID_CONTACT, variables) => {
        emailjs
            .send(SERVICE_ID, TEMPLATE_ID_CONTACT, variables, PUBLIC_KEY)
            .then((res) => {
                console.log('SUCCESS!');
            })
            .catch((err) => console.error('Il y a une erreur'));
    };

  return (
    <>
      <section className="container">
        <div className="form-container">
          <p>Les champs suivis d'une * sont obligatoires.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ flex: '0 0 60%' }}>
              <form onSubmit={handleSubmit(onSubmit)}
                className="mx-5 p-5 shadow border-0 rounded-4 justify-content-md-center"
                style={{ marginTop: '7rem', marginBottom: '5rem' }} >
                <div className="mb-3">
                  <h3 className="contain mb-5 display-3 text-center fw-bold text-primary">Rencontrons-nous</h3>
                </div>
                <div className="mb-3">
                  <label htmlFor="InputGender" className="form-label">Gender</label>
                  <select className="form-control form-control-lg" id="InputGender" name="gender" aria-describedby="genderHelp"
                    {...register('gender')}>
                    <option value=""> </option>
                    <option value="M.">M.</option>
                    <option value="Mme">Mme</option>
                  </select>
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
                  <label htmlFor="FormControlObject" className="form-label">Objet de votre message</label>
                  <input type="text" className="form-control form-control-lg" id="FormControlObject" name="object" {...register('object')}
                    placeholder="Ecrivez l'objet de votre message" aria-describedby="objectHelp"></input>
                </div>
                {errors.object && <p id="c-yup">{errors.object.message}</p>}
                <div className="mb-3">
                  <label htmlFor="FormControlTextarea1" className="form-label">Message</label>
                  <textarea className="form-control form-control-lg" id="FormControlTextarea1" name="message" {...register('message')}
                    placeholder="Ecrivez votre message" aria-describedby="messageHelp" rows="10" cols="10"></textarea>
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FormContact;