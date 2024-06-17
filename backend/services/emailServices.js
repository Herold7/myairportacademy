const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();//Chargement des variables d'environnement

const sendRegistrationEmail = async (profileData) => {//Fonction d'envoi de mail
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });

    try {//Essai d'envoi du mail
        
        const info = await transporter.sendMail({
            from: '"Test aéroportuaire" <mail@mail.email>', // expéditeur
            to: profileData.email, //destinataires
            subject: 'Confirmation d\'inscription', 
            text: `Cher ${profileData.firstname},
            \n\nMerci de vous être inscrit. Nous avons bien reçu vos informations.
            \n\nVoici les détails de votre entretien:\nDate: ${profileData.interviewDate}
            \nHeure: ${profileData.timeSlot}\n\nCordialement,\nVotre entreprise`, 
            html: `<b>Cher ${profileData.firstname},
            </b><br><br>Merci de vous être inscrit. Nous avons bien reçu vos informations.
            <br><br>Voici les détails de votre entretien:
            <br>Date: ${profileData.interviewDate}<br>Heure: ${profileData.timeSlot}<br><br>Cordialement,<br>Votre entreprise`, 
        });

        console.log("Message envoyé: %s", info.messageId);//Confirmation de l'envoi du mail
    } catch (error) {
        console.log(error);//Gestion des erreurs
    }
};

module.exports = sendRegistrationEmail;