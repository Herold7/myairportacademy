# MYAIRPORTACADEMY

## Description

Myairportacademy est une application web qui présente les services de l'organisme de formation "Airport Training Academy". 
Le site permet de se renseigner, de prendre rendez-vous, de s'inscrire et de suivre une formation dans le secteur de l'aéroportuaire.

### Les étapes de réalisation

1. Installation de React
   ```bash
   1. npm create vite@latest myairportacademy
   2. npm i dotenv (accès des fichiers .env au travers de process.env)
   3. npm i react-hook-form (création et gestion des formulaires)
   4. npm i yup (analyse et validation de valeur d’exécution)
   5. npm install react-router-dom localforage match-sorter sort-by (router react)
   6. npm i emailjs
   7. npm install styled-components
   8. 
   9. package.json
   ```

2. Création des composants
3. Création des pages
4. Mise en place d'un router
5. Installation d'ExpressJS
   ```bash
   1. npm init -y
   2. npm install express
   3. npm install nodemon
   4. Création cluster MongoDB « myairportacademy »
   5. npm install mongoose (environnement asynchrone node/mongodb)
   6. npm install mongoose-unique-validator (validation unique du mdp des Users lors du login)
   7. npm install bcrypt (Hashage du mdp)
   8. npm install jsonwebtoken (token d’authentification)
   9. npm install multer (téléversement de fichiers)
   10. package.json
   ```
6. Configuration du server
   1. Mise en place des Middlewares
   2. Mise en place de CORS
7. Création des models
8. Création des controllers
9.  Création des routes

---

### Création des composants

Pour les composants, dans ce projet nous avons l'architecture suivante :

```
backend
    ├── controllers
        ├── blog.js
        ├── profile.js
        ├── registration.js
        ├── user.js 
    ├── files
    ├── images
    ├── middleware
        ├── auth.js
        ├── multer-config.js
    ├── models
        ├── client.js 
        ├── interview.js 
        ├── post.js 
        ├── user.js
    ├── node_modules
    ├── routes
        ├── blogs.js
        ├── profile.js 
        └── registration.js 
        └── user.js 
    ├──.env
    ├──.gitignore
    ├──app.js
    ├──package-lock.json
    ├──package.json
    ├──server.js
frontend
    ├── node_modules
    ├──public
        ├── vite.svg
    ├──src
        ├── assets
            ├──img
                ├──back
                    ├──airport-scaled.jpeg ├──arlington-research-Kz8nHVg_tGI-unsplash-2.jpg ├──certification.webp 
                    ├──cours.webp 
                    ├──DALL·E-2024-04-08-12.17.07-Create-an-image-featuring-a-landscape-of-glittering-particles-similar-to-a-digital-wave-with-a-predominance-of-blue-tones.-The-background-should-be-l.webp ├──DALL·E-2024-04-08-12.18.32-Create-an-image-featuring-a-landscape-of-glittering-particles-similar-to-a-digital-wave-with-a-predominance-of-orange-tones.-The-background-should-be.webp 
                    ├──DALL·E-2024-04-08-12.4102-Create-a-wide-aspect-ratio-abstract-image-featuring-smooth-flowing-ribbons-with-gradients-transitioning-between-blue-and-orange-tones-against-a-light.webp ├──DALL·E-2024-04-22-12.14.30-In-an-airport-setting-a-diverse-group-of-young-candidates-predominantly-women-including-Black-individuals-and-other-people-of-color-are-lined-up-f.webp ├──DALL·E-2024-04-22-16.02.25-In-a-modern-office-setting-a-young-white-man-and-a-lighter-skinned-black-woman-sit-two-meters-apart-facing-each-other-across-a-large-rectangular-tab.webp 
                    ├──header.jpg 
                    ├──Interrogation.webp
                    ├──krakenimages-376KN_ISplE-unsplash-2.jpg 
                    ├──standardiste.png
                ├──logo
                    ├──logo_adef.png 
                    ├──logo_agefiph.png 
                    ├──logo_ata_slogan.png 
                    ├──logo_ata.png 
                    ├──logo_cb.jpg 
                    ├──logo_cnaps.jpg 
                    ├──logo_formationscertifiantes.png 
                    ├──logo_francetravail.png 
                    ├──logo_misionslocales.jpg 
                    ├──logo_moncompteformation-2.png 
                    ├──logo_moncompteformation.png 
                    ├──logo_qualiopi.webp 
                    ├──logo_qualiopiformation.png 
                    ├──logo_regionidf.png 
                    ├──logo_republique-francaise.png 
                    ├──logo_veritas.png 
                    ├──mockup_besoin-de-financer-votre-formation-4.png 
                    ├──mockup-financement.png
                ├──team
                    ├──team/csophie.webp 
                    ├──team/fsellier.webp 
                    ├──team/gallevan.webp 
                    ├──team/jdelatorrebleu.webp 
                    ├──team/jdelatorrenoir.jpg 
                    ├──team/kvillanueva.webp 
                    ├──team/odelatorre.webp 
                    ├──team/rbadila.webp
                ├──training
                    ├──training/agent_baggagiste.jpg 
                    ├──training/agent_de_nettoyage.webp 
                    ├──training/agent_de_surete_aeroportuaire.jpg 
                    ├──training/agent_descale.webp 
                    ├──training/agent_importexport.jpg 
                    ├──training/agent_nettoyage.webp 
                    ├──training/agent_piste.webp 
                    ├──training/agent_plateaux_repas.webp 
                    ├──training/agent_pmr.webp 
                    ├──training/agent_welcome.webp
            ├──video
                ├──Animation-check-in.gif 
                ├──Animation-checkin.gif 
                ├──Animation-coffee.gif 
                ├──Animation-control.gif 
                ├──Animation-Depart.gif 
                ├──Introduction.mp4
                ├──temoignage_fille_escale.mp4 
                ├──temoignage_fille_nettoyage.mp4 
                ├──temoignage_fille_welcome.mp4 
                ├──temoignage_homme_agentdepiste.mp4 ├──temoignage_homme_remerciement.mp4
        ├──react.svg
    ├──components
        ├──nav.jsx
        ├──footer.jsx
        ├──formContact.jsx
        ├──formRegistration.jsx
    ├──pages
        ├── homeAccueil
            ├── 
        ├──testimonialsTémoignages
            ├── 
        ├──trainingformations
            ├── 
        ├──fundingfinancement
            ├── 
        ├──registrationInscription
            ├── 
        ├──blog
            ├── 
        ├──contact
            ├── 
    ├──app.
    styles    
        ├── style.css
    ├──.env
    ├──.eslintrc.cjs
    ├──.gitignore
    ├──index.js
    ├──main.jsx    
    ├──package.json Fichier de config
    ├──package-lock.json 
├──README.md
├──vite.config.js

```

