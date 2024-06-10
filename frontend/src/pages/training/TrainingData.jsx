// src/DataContext.js
import React, { createContext, useContext } from 'react';
import { DataProvider } from './DataContext';
import bagagge from '../../assets/img/training/agent_bagagiste.jpg';
import cleaning from '../../assets/img/training/agent_de_nettoyage.webp';
import security from '../../assets/img/training/agent_de_surete_aeroportuaire.jpg';
import groundHandling from '../../assets/img/training/agent_descale.webp';
import importExport from '../../assets/img/training/agent_importexport.jpg';
import ramp from '../../assets/img/training/agent_de_piste.webp';
import mealTray from '../../assets/img/training/agent_plateaux_repas.webp';
import apmr from '../../assets/img/training/agent_pmr.webp';
import checkIn from '../../assets/video/Animation-check-in.gif';
import coffe from '../../assets/video/Animation-coffee.gif';
import control from '../../assets/video/Animation-control.gif';
import depart from '../../assets/video/Animation-Depart.gif';

const DataContext = createContext();// DataProvider component

export const DataProvider = ({ children }) => {
    const data = {// Data object
        baggageAgent: {// Baggage Agent data
            img: bagagge,
            imgAlt: "Agent de piste bagagiste",
            title: "Agent Bagagiste (uniquement pour les candidats sans permis)",
            description: "L'Agent Bagagiste, souvent appelé aussi agent de piste en raison de ses fonctions qui se déroulent majoritairement sur la piste des aéroports, joue un rôle essentiel dans le fonctionnement et la logistique aéroportuaire. Ce professionnel est chargé de la manipulation des bagages dans les aéroports, assurant leur transfert entre les avions, les tapis de réception, et les zones de tri. En Île-de-France, où se trouvent certains des aéroports les plus importants et les plus fréquentés de France, tels que Charles de Gaulle (CDG), le Bourget (LBG) et Orly (ORY), le rôle de l'agent bagagiste est particulièrement important.",
            section: [
                {
                    bgColor: '#2face2',
                    color: '#fefefe',
                    heading: 'Formation Métier',
                    icon: depart,
                    iconAlt: "GIF inline d'un avion noir sur fond orange et cartouche noir et écriture grise noir sur fond orange et cartouche noir et écriture grise",
                    description: "Les missions spécifiques de l'Agent Bagagiste :",
                    items: [
                        "Engins et servitude avions / Connaissance du Loader et convoyeur à bande",
                        "Connaissance des ULD et porte ULD",
                        "Connaissance des étiquettes bagages et Documents de chargements (PDC)",
                        "Arrimage et sanglage / Calage et balisage avion"
                    ]
                },
                {
                    bgColor: '#141414',
                    color: '#fefefe',
                    heading: 'Formation Générale',
                    icon: checkIn,
                    iconAlt: "GIF inline d'un check-in bleu aéroportuaire sur fond orange et cartouche bleue et écriture orange",
                    description: "Compétences générales de l'Agent Bagagiste :",
                    items: [
                        "Plateforme aéroportuaire, Règles de sécurité en piste",
                        "Facteurs humains et Gestes et postures",
                        "Anglais aéroportuaire",
                        "Préparation aux entretiens de sélection"
                    ]
                },
                {
                    bgColor: '#e58e4f',
                    color: '#fefefe',
                    heading: 'Formation réglementaire',
                    icon: control,
                    iconAlt: "GIF inline d'un contrôle de passeport aéroportuaire sur fond bleu et cartouche noir et écriture grise",
                    description: "Connaissances sécuritaires et réglementaires :",
                    items: [
                        "Module sûreté Contributeur 11.2.3.8 - Traitement des bagages",
                        "Module sûreté Contributeur 11.2.3.9 - Traitement du fret, des biens et produits",
                        "Marchandises Dangereuses Catégorie 8c (Piste+RRW)",
                    ]
                },
                {
                    heading: 'Outils Pédagogiques',
                    icon: coffe,
                    iconAlt: "GIF inline d'une tasse de café orange sur fond bleu et cartouche orange et écriture bleue",
                    description: "Les dispositifs mis en place pour une formation de qualité :",
                    items: [
                        "Présentiel",
                        "Diaporama",
                        "Ordinateur / Support de cours papier",
                        "Paperbord / Ecran interactif",
                        "Formation terrain / Mise en situation",
                    ]
                },
                {
                    moreInfoLink: "https://candidat.francetravail.fr/marche-du-travail/fichemetierrome?codeRome=N2203",
                    signupLink: "../registration/Course.jsx",
                },
            ]
        },
        cleaningAgent: {// Cleaning Agent data
            img: cleaning,
            imgAlt: "Agent de nettoyage, vu de face, dans un avion. Exécute une tache de nettoyage avec un chiffon vert et un spray, à genoux sur un siège. Il porte un uniforme gris foncé, sous un chasuble rouge, gris et jaune fluo. Il a un masque et porte des lunettes noires. Au fond il a deux collègues, l'une réalisant la même tache que lui et le second est en discussion avec une personne habillé d'un bleue jean et d'une veste rose.",
            title: "Agent de Nettoyage Avion/Aéroport",
            description: "L'Agent de Nettoyage avion/aéroport en France, particulièrement en Île-de-France, occupe un poste polyvalent et essentiel au bon fonctionnement des services aéroportuaires et à bord des avions. Cette profession englobe la responsabilité de maintenir la propreté non seulement dans les avions et les zones aéroportuaires. La demande pour ces professionnels est particulièrement élevée dans des zones à trafic intense comme celles de Charles de Gaulle (CDG), le Bourget (LBG) et Orly (ORY), qui sont parmi les aéroports les plus fréquentés d'Europe.",
            section: [
                {
                    bgColor: '#2face2',
                    color: '#fefefe',
                    heading: 'Formation Métier',
                    icon: depart,
                    iconAlt: "GIF inline d'un avion noir sur fond orange et cartouche noir et écriture grise",
                    items: [
                        "Connaitre l’environnement et les acteurs aéroportuaire (co-activité / alphabet aéroportuaire / SGS / environnement de la piste)",
                        "Code IATA + typologie des passagers + passager à particularité",
                        "Le catering aéroportuaire / sensibilisation aux normes HACCP",
                        "Nettoyage avion (clean & search) / types avion / méthode de nettoyage cabine / techniques de base de nettoyage / temps d’intervention"
                    ]
                },
                {
                    bgColor: '#141414',
                    color: '#fefefe',
                    heading: 'Formation Générale',
                    icon: checkIn,
                    iconAlt: "GIF inline d'un check-in bleu aéroportuaire sur fond orange et cartouche bleue et écriture orange",
                    description: "Compétences générales de l'Agent de Nettoyage avion/aéroport :",
                    items: [
                        "Facteurs humains",
                        "Préparation aux entretiens de sélection"
                    ]
                },
                {
                    bgColor: '#e58e4f',
                    color: '#fefefe',
                    heading: 'Formation réglementaire',
                    icon: control,
                    iconAlt: "GIF inline d'un contrôle de passeport aéroportuaire sur fond bleu et cartouche noir et écriture grise",
                    description: "Connaissances sécuritaires et réglementaires :",
                    items: [
                        "Sensibilisation législation aéroportuaire (être en mesure de connaitre et comprendre l’application des différents règlements à l’échelle internationale et européenne) / instances internationales / code OACI",
                        "Sécurité aéroportuaire (Les FOD / règles de prévention / la touchée / type d’embarquement) / Acquérir l’accès piéton aux secteurs TRA et MAN des plateformes du groupe ADP",
                        "Connaître les exigences réglementaires concernant EWIS et leur impact sur la préservation du câblage tout au long de la vie d’un aéronef / Acquérir une connaissance technique en matière de sécurité EWIS du groupe 6 en rapport avec son activité sur un aéronef",
                        "Connaître les exigences réglementaires concernant EWIS et leur impact sur la préservation du câblage tout au long de la vie d’un aéronef / Connaître le système d’interconnexion de câblage électrique pour les groupes 4 et 5",
                        "Module sûreté Contributeur 11.2.3.6 - Connaissance de la Fouille de sûreté",
                        "Module sûreté Contributeur 11.2.3.10 - Connaissance des variantes d’approvisionnement de bord",
                    ]
                },
                {
                    heading: 'Outils Pédagogiques',
                    icon: coffe,
                    iconAlt: "GIF inline d'une tasse de café orange sur fond bleu et cartouche orange et écriture bleue",
                    description: "Les dispositifs mis en place pour une formation de qualité :",
                    items: [
                        "Présentiel",
                        "Diaporama",
                        "Ordinateur / Support de cours papier",
                        "Paperbord / Ecran interactif",
                        "Formation terrain / Mise en situation",
                    ]
                },
                {
                    moreInfoLink: "https://candidat.francetravail.fr/marche-du-travail/fichemetierrome?codeRome=K2204",
                    signupLink: "../registration/Course.jsx",
                },
            ]
        },
        rampAgent: {// Ramp Agent data
            img: ramp,
            imgAlt: "Agent de piste aéroportuaire, vu de dos en plein jour, en uniforme bleu et jaune fluorescent donnant des indications à avion lui faisant face. Les deux sont alignés sur une ligne jaune",
            title: "Agent de Piste",
            description: "Le métier d'Agent de Piste aéroportuaire, également connu sous les appellations <i>d'opérateur de piste</i>, joue un rôle essentiel dans les opérations au sol des aéroports. Cela est particulièrement vrai en Île-de-France, région qui abrite certains des aéroports les plus fréquentés de France, comme Charles de Gaulle (CDG), le Bourget (LBG) et Orly (ORY), où la demande pour ces professionnels est constante.",
            section: [
                {
                    bgColor: '#2face2',
                    color: '#fefefe',
                    heading: 'Formation Métier',
                    icon: depart,
                    iconAlt: "GIF inline d'un avion noir sur fond orange et cartouche noir et écriture grise",
                    description: "Les missions spécifiques de l'Agent de Piste :",
                    items: [
                        "Engins et servitude avions / Connaissance du Loader et convoyeur à bande",
                        "Sécurité piste (inclus le MAN & TRA)",
                        "Connaissance des documents de chargements (PDC)",
                        "Arrimage et sanglage / Calage et balisage avion",
                    ]
                },
                {
                    bgColor: '#141414',
                    color: '#fefefe',
                    heading: 'Formation Générale',
                    icon: checkIn,
                    iconAlt: "GIF inline d'un check-in bleu aéroportuaire sur fond orange et cartouche bleue et écriture orange",
                    description: "Compétences générales de l'Agent de Piste :",
                    items: [
                        "Plateforme aéroportuaire, Règles de sécurité en piste",
                        "Facteurs humains et Gestes et postures",
                        "Anglais aéroportuaire",
                        "Préparation aux entretiens de sélection",
                    ]
                },
                {
                    bgColor: '#e58e4f',
                    color: '#fefefe',
                    heading: 'Formation réglementaire',
                    icon: control,
                    iconAlt: "GIF inline d'un contrôle de passeport aéroportuaire sur fond bleu et cartouche noir et écriture grise",
                    description: "Connaissances sécuritaires et réglementaires :",
                    items: [
                        "Module sûreté Contributeur Contributeur 11.2.3.8 - Traitement des bagages",
                        "Module sûreté Contributeur Contributeur 11.2.3.9 - Traitement du fret, des biens et produits",
                        "Module sûreté Contributeur Contributeur 11.2.3.7 - Protection des aéronefs",
                        "Module sûreté Contributeur 11.2.3.6 - Fouille des aéronefs",
                        "Module sûreté Contributeur 11.2.6.2 - Badge aéroportuaire",
                        "Marchandises Dangereuses DGR Fonction 4 IATA",
                    ]
                },
                [
                    {
                        heading: 'Outils Pédagogiques',
                        icon: coffe,
                        iconAlt: "GIF inline d'une tasse de café orange sur fond bleu et cartouche orange et écriture bleue",
                        description: "Les dispositifs mis en place pour une formation de qualité :",
                        items: [
                            "Présentiel",
                            "Diaporama",
                            "Ordinateur / Support de cours papier",
                            "Paperbord / Ecran interactif",
                            "Formation terrain / Mise en situation",
                        ]
                    },
                ],
                {
                    moreInfoLink: "https://candidat.francetravail.fr/marche-du-travail/fichemetierrome?codeRome=N2203",
                    signupLink: "../registration/Course.jsx",
                },
            ]
        },
        securityAgent: {// Security Agent data
            image: security,
            imgAlt: "Agent de sureté noir ouvrant un sac. Il est dans un aéroport et porte un uniforme blanc et bleu marine. Il porte aussi des gants en latex.",
            title: "Agent de Sûreté Aéroportuaire",
            description: "L\’Agent de Sûreté Aéroportuaire en France, et en particulier en Île-de-France, où se trouvent des aéroports internationaux <br /> majeurs comme Charles de Gaulle (CDG), le Bourget (LBG) et Orly (ORY), joue un rôle crucial dans <br /> la sécurité des passagers, des équipages, et des infrastructures aéroportuaires. Cette profession est dédiée à <br />prévenir toute forme de menace à la sécurité aérienne, notamment les actes de terrorisme, la contrebande, ou <br />tout autre crime.",
            section: [
                {
                    bgColor: '#2face2',
                    color: '#fefefe',
                    heading: 'Formation Métier',
                    icon: depart,
                    iconAlt: "GIF inline d'un avion noir sur fond orange et cartouche noir et écriture grise noir sur fond orange et cartouche noir et écriture grise",
                    description: "Les missions spécifiques de l'Agent de Sûreté Aéroportuaire :",
                    items: [
                        "Inspection/Filtrage des Passagers et Bagages Cabine – IFPBC",
                        "Inspection/Filtrage des Bagages de Soute – IFBS",
                        "Inspection/Filtrage du Fret",
                        "Inspection/Filtrage du Courrier et des Approvisionnements de bord",
                        "Inspection/Filtrage des véhicules",
                        "Surveillance et patrouille",
                        "Théorie sur les équipements",
                        "Entraînement sur le simulateur LOGYx Web",
                    ]
                },
                {
                    bgColor: '#141414',
                    color: '#fefefe',
                    heading: 'Formation Générale',
                    icon: checkIn,
                    iconAlt: "GIF inline d'un check-in bleu aéroportuaire sur fond orange et cartouche bleue et écriture orange",
                    description: "Compétences générales de l'Agent de Sûreté Aéroportuaire :",
                    items: [
                        "Sauveteur secouriste du travail",
                        "Environnement juridique de la sécurité",
                        "Transmissions des consignes et des informations",
                        "Gestion des risques et des situations conflictuelles",
                        "Préparation aux entretiens de sélection",
                    ]
                },
                {
                    bgColor: '#e58e4f',
                    color: '#fefefe',
                    heading: 'Formation réglementaire',
                    icon: control,
                    iconAlt: "GIF inline d'un contrôle de passeport aéroportuaire sur fond bleu et cartouche noir et écriture grise",
                    description: "Connaissances sécuritaires et réglementaires :",
                    items: [
                        "Sensibilisation législation aéroportuaire",
                        "Sécurité aéroportuaire",
                        "Module sûreté Contributeur 11.2.3.6 - Connaissance de la Fouille de sûreté",
                        "Module sûreté Contributeur 11.2.3.7 - Protection des aéronefs",
                        "Module sûreté Contributeur 11.2.3.8 - Connaissance de la vérification de concordance entre les passagers et leurs bagages de soute",
                        "Module sûreté Contributeur 11.2.3.9 - Traitement du fret, des biens et produits",
                        "Module sûreté Contributeur 11.2.3.10 - Connaissance des variantes d’approvisionnement de bord",
                        "Module sûreté Contributeur 11.2.6.2 - Badge aéroportuaire",
                        "Cyber-sécurité",
                        "Matières dangereuses DGR cat.12",]
                },
                {
                    heading: 'Outils Pédagogiques',
                    icon: coffe,
                    iconAlt: "GIF inline d'une tasse de café orange sur fond bleu et cartouche orange et écriture bleue",
                    description: "Les dispositifs mis en place pour une formation de qualité :",
                    items: [
                        "Présentiel",
                        "Diaporama",
                        "Ordinateur / Support de cours papier",
                        "Paperbord / Ecran interactif",
                        "Formation terrain / Mise en situation",
                    ]
                },
                {
                    moreInfoLink: "https://candidat.francetravail.fr/marche-du-travail/fichemetierrome?codeRome=K2503",
                    signupLink: "../registration/Course.jsx",
                },
            ]
        },
        groundHandlingAgent: {
            img: groundHandling,
            imgAlt: "Agent d'escale noire en uniforme noir, portant le chignon réceptionnant le billet d'un voyageur noir portant un ensemble en jean et un sac à dos beige. Il porte des lunettes de soleil dorées. Ils sont séparés par un comptoir d'enregistrement dans un aéroport.",
            title: "Agent d'escale",
            description: "Le métier d'Agent d'Escale aéroportuaire, aussi connu sous le nom d'agent d'escale commercial ou agent de service à la clientèle aéroportuaire, joue un rôle crucial dans le bon fonctionnement des aéroports, notamment en France et plus spécifiquement en Île-de-France, où se trouvent certains des aéroports les plus fréquentés du pays, comme Roissy-Charles de Gaulle, le Bourget et Orly.",
            section: [
                {
                    bgColor: '#2face2',
                    color: '#fefefe',
                    heading: 'Formation Métier',
                    icon: depart,
                    iconAlt: "GIF inline d'un avion noir sur fond orange et cartouche noir et écriture grise",
                    description: "Les missions spécifiques de l'Agent d'Escale :",
                    items: [
                        "Connaitre l’environnement et les acteurs aéroportuaire (co-activité / alphabet aéroportuaire / SGS / environnement de la piste)",
                        "Code IATA + typologie des passagers + passager à particularité",
                        "Les différentes missions de l\’agent d’escale / les positionnements / les particularités du métier en fonction des compagnies aériennes",
                        "Connaissance des procédures d\’enregistrement",
                        "Connaissance des différents types de documents d’identité et des réglementation internationales en vigueur (Passeport / Visa / titre de séjour / ESTA…)",
                        "Sensibilisation au métier de PMR et au Handicap / réglementation UE / Connaître les obligations légales",
                        "Traitement des bagages (soute, cabine et hors format)",
                        "Savoir décoder un e-ticket, une carte d’embarquement / les différents types d’étiquettes bagage",
                        "Connaissance des procédures d’embarquement et des procédures d’une arrivée",
                        "Être capable d’enregistrer et embarquer les passagers via le DCS (DCS ALTEA CM)",
                    ]
                },
                {
                    bgColor: '#141414',
                    color: '#fefefe',
                    heading: 'Formation Générale',
                    icon: checkIn,
                    iconAlt: "GIF inline d'un check-in bleu aéroportuaire sur fond orange et cartouche bleue et écriture orange",
                    description: "Compétences générales de l'Agent d'Escale :",
                    items: [
                        "Découverte de l’aéroport et mise en situation réelle avec les passagers",
                        "Facteurs humains et Gestes et postures",
                        "Gestion de conflits",
                        "Anglais aéroportuaire",
                        "Préparation aux entretiens de sélection",
                    ]
                },
                {
                    bgColor: '#e58e4f',
                    color: '#fefefe',
                    heading: 'Formation réglementaire',
                    icon: control,
                    iconAlt: "GIF inline d'un contrôle de passeport aéroportuaire sur fond bleu et cartouche noir et écriture grise",
                    description: "Connaissances sécuritaires et réglementaires :",
                    items: [
                        "Sensibilisation législation aéroportuaire (être en mesure de connaitre et comprendre l’application des différents règlements à l’échelle internationale et européenne) / instances internationales / code OACI",
                        "Sécurité aéroportuaire (Les FOD / règles de prévention / la touchée / type d’embarquement) / Acquérir l’accès piéton aux secteurs TRA et MAN des plateformes du groupe ADP",
                        "Module sûreté Contributeur 11.2.3.8 + TCA - Connaissance de la vérification de concordance entre les passagers et leurs bagages de soute",
                        "Module sûreté Contributeur 11.2.8 - Connaissance de la cyber sécurité",
                        "Marchandises Dangereuses DGR 8",
                    ]
                },
                {
                    heading: 'Outils Pédagogiques',
                    icon: coffe,
                    iconAlt: "GIF inline d'une tasse de café orange sur fond bleu et cartouche orange et écriture bleue",
                    description: "Les dispositifs mis en place pour une formation de qualité :",
                    items: [
                        "Présentiel",
                        "Diaporama",
                        "Ordinateur / Support de cours papier",
                        "Paperbord / Ecran interactif",
                        "Formation terrain / Mise en situation",
                    ]
                },
                {
                    moreInfoLink: "https://candidat.francetravail.fr/marche-du-travail/fichemetierrome?codeRome=N2201",
                    signupLink: "../registration/Course.jsx",
                },
            ]
        },
        ImportExportAgent: {
            img: importExport,
            imgAlt: "Assistante vue de face, assise devant un ordinateur portable blanc sur une table ronde blanche. Elle porte une robe rouge, cheveux bruns lâchés. En arrière plan une salle avec des murs vitrées",
            title: "Assistant Import-Export",
            description: "Le métier d’Assistant Import-Export est un rôle clé dans le domaine du commerce international. Cette profession implique de gérer les opérations d'importation et d'exportation de marchandises, en assurant la coordination et la logistique nécessaires pour le bon déroulement des échanges internationaux. En Île-de-France, région économiquement dynamique et dotée d'infrastructures majeures comme le port de Gennevilliers et l'aéroport Charles de Gaulle, les assistants import-export jouent un rôle crucial dans le soutien des activités commerciales transfrontalières.",
            section: [
                {
                    bgColor: '#2face2',
                    color: '#fefefe',
                    heading: 'CCP1 - Administrer les ventes et les achats à l\'international en français et en anglais',
                    icon: depart,
                    iconAlt: "GIF inline d'un avion noir sur fond orange et cartouche noir et écriture grise",
                    items: [
                        "Elaborer une offre à l'international et en assurer le suivi - Incoterms, Anglais niveau B2, PBIS (Pratiques Bancaires Internationales Standard)",
                        "Traiter les commandes à l'international - RUU (Règles et Usances Uniformes) de la Chambre de Commerce internationale (ICC)",
                        "Gérer la relation client ou fournisseur à l'international",
                    ]
                },
                {
                    bgColor: '#141414',
                    color: '#fefefe',
                    heading: 'CCP 2 - Optimiser les opérations logistiques internationales en français et en anglais',
                    icon: checkIn,
                    iconAlt: "GIF inline d'un check-in bleu aéroportuaire sur fond orange et cartouche bleue et écriture orange",
                    items: [
                        "Coordonner les opérations d'acheminement à l'international - Connaissement (B/L), Lettre de transport aérien (LTA), Lettre de voiture (CMR)",
                        "Traiter les litiges transport et logistique à l'international",
                        "Suivre les opérations administratives de dédouanement",
                    ]
                },
                {
                    bgColor: '#e58e4f',
                    color: '#fefefe',
                    heading: 'CCP 3 - Assurer les fonctions de support au développement commercial en français et en anglais',
                    icon: control,
                    iconAlt: "GIF inline d'un contrôle de passeport aéroportuaire sur fond bleu et cartouche noir et écriture grise",
                    items: [
                        "Promouvoir l'image de l'entreprise à l'international - Données et respect du Règlement Général sur la Protection des Données (RGPD), Principes fondamentaux de l'Organisation mondiale du commerce (OMC)",
                        "Contribuer à l'optimisation des achats et au développement des ventes à l'international",
                        "Bases de l'assistanat de bureau - Pack office, Standard téléphonique, rédaction de compte-rendus",
                        "Elaborer et actualiser des tableaux de bord commerciaux",
                    ]
                },
                {
                    heading: 'Outils Pédagogiques',
                    icon: coffe,
                    iconAlt: "GIF inline d'une tasse de café orange sur fond bleu et cartouche orange et écriture bleue orange sur fond bleu et cartouche orange et écriture bleue",
                    description: "Les dispositifs mis en place pour une formation de qualité :",
                    items: [
                        "Présentiel",
                        "Diaporama",
                        "Ordinateur / Support de cours papier",
                        "Paperbord / Ecran interactif",
                        "Formation terrain / Mise en situation",
                    ]
                },
                {
                    moreInfoLink: "https://candidat.francetravail.fr/marche-du-travail/fichemetierrome?codeRome=D1409",
                    signupLink: "../registration/Course.jsx",
                },
            ]
        },
        AirportPMRAgent: {
            img: apmr,
            imgAlt: "Agent APMR (Assistant de Personne à Mobilité Réduite) blanche souriante au cheveux auburn, portant une chemise en jean bleue, et un jean beige un pantalon qui pousse un homme en tenue militaire de camouflage, assis sur une chaise roulante, tenant entre ses jambes un sac à dos vert foncé et un drapeau états-uniens. Il sourit à l'APMR. Ils sont de 3/4 face dans un hall d'attente d'un aéroport",
            title: "Agent APMR",
            description: "L'Agent PMR, ou Agent Passager à Mobilité Réduite, est un professionnel de l'aéroportuaire dont la mission est d'assister les passagers en situation de handicap ou à mobilité réduite. En France, et plus particulièrement en Île-de-France, où se trouvent des aéroports internationaux majeurs comme Charles de Gaulle (CDG), le Bourget (LBG) et Orly (ORY), l'Agent PMR joue un rôle crucial dans l'accessibilité et le confort des voyageurs aériens. Cette profession est dédiée à garantir une expérience de voyage sûre et agréable pour tous les passagers, quelles que soient leurs particularités.",
            section: [
                {
                    bgColor: '#2face2',
                    color: '#fefefe',
                    heading: 'Formation Métier',
                    icon: depart,
                    iconAlt: "GIF inline d'un avion noir sur fond orange et cartouche noir et écriture grise",
                    description: "Les missions spécifiques d'un Agent PMR :",
                    items: [
                        "Connaitre l’environnement et les acteurs aéroportuaire (co-activité / alphabet aéroportuaire / SGS / environnement de la piste)",
                        "Code IATA + typologie des passagers + passager à particularité",
                        "Métier de PMR : les particularités du métier, les outils, les missions",
                        "Les différents types de handicap (procédures, difficultés, prise en charge)",
                        "Gestes et postures pour la prise en charge des passagers PMR / Pratique avec le matériel (fauteuil roulant, béquilles…) Techniques de transfert des passagers WCHC",
                    ]
                },
                {
                    bgColor: '#141414',
                    color: '#fefefe',
                    heading: 'Formation Générale',
                    icon: checkIn,
                    iconAlt: "GIF inline d'un check-in bleu aéroportuaire sur fond orange et cartouche bleue et écriture orange",
                    description: "Compétences générales de l'Agent PMR :",
                    items: [
                        "Découverte de l’aéroport et mise en situation réelle avec les passagers",
                        "Facteurs humains et Gestes et postures",
                        "Gestion de conflits",
                        "Anglais aéroportuaire",
                        "Préparation aux entretiens de sélection",
                    ]
                },
                {
                    bgColor: '#e58e4f',
                    color: '#fefefe',
                    heading: 'Formation réglementaire',
                    icon: control,
                    iconAlt: "GIF inline d'un contrôle de passeport aéroportuaire sur fond bleu et cartouche noir et écriture grise",
                    description: "Connaissances sécuritaires et réglementaires :",
                    items: [
                        "Sensibilisation législation aéroportuaire (être en mesure de connaitre et comprendre l’application des différents règlements à l’échelle internationale et européenne) / instances internationales / code OACI",
                        "Sécurité aéroportuaire (Les FOD / règles de prévention / la touchée / type d’embarquement) / Acquérir l’accès piéton aux secteurs TRA et MAN des plateformes du groupe ADP",
                        "Module sûreté Contributeur 11.2.3.8 + TCA - Connaissance de la vérification de concordance entre les passagers et leurs bagages de soute",
                    ]
                },
                {
                    heading: 'Outils Pédagogiques',
                    icon: coffe,
                    iconAlt: "GIF inline d'une tasse de café orange sur fond bleu et cartouche orange et écriture bleue",
                    description: "Les dispositifs mis en place pour une formation de qualité :",
                    items: [
                        "Présentiel",
                        "Diaporama",
                        "Ordinateur / Support de cours papier",
                        "Paperbord / Ecran interactif",
                        "Formation terrain / Mise en situation",
                    ]
                },
                {
                    moreInfoLink: "https://candidat.francetravail.fr/marche-du-travail/fichemetierrome?codeRome=N2201",
                    signupLink: "../registration/Course.jsx",
                },
            ]
        },
        MealTrayPreparer: {
            img: mealTray,
            imgAlt: "Une main gantée bleue dépose des carottes dans des plats en plastique noir contenant du poulet et des haricots verts",
            title: "Préparateur de Plateaux Repas",
            description: "Le métier de Préparateur de Plateaux Repas est un rôle clé dans le secteur de l'aviation. Cette profession implique de préparer et de distribuer les repas servis à bord des avions, en veillant à la qualité, à l'hygiène et à la sécurité alimentaire. En Île-de-France, région économiquement dynamique et dotée d'infrastructures majeures comme les aéroports de Roissy-Charles de Gaulle (CDG) et d'Orly (ORY), les préparateurs de plateaux repas jouent un rôle crucial dans le confort et la satisfaction des passagers aériens.",
            section: [
                {
                    bgColor: '#2face2',
                    color: '#fefefe',
                    heading: 'CCP1 - Préparer les plateaux repas en respectant les règles d’hygiène et de sécurité alimentaire',
                    description: "Les missions spécifiques d'un Préparateur de Plateaux Repas :",
                    icon: depart,
                    iconAlt: "GIF inline d'un avion noir sur fond orange et cartouche noir et écriture grise",
                    items: [
                        "Connaitre l’environnement et les acteurs aéroportuaire (co-activité / alphabet aéroportuaire / SGS / environnement de la piste)",
                        "Code IATA + typologie des passagers + passager à particularité",
                        "Le catering aéroportuaire / sensibilisation aux normes HACCP",
                        "Nettoyage avion (clean & search) / types avion / méthode de nettoyage cabine / techniques de base de nettoyage / temps d’intervention",
                    ]
                },
                {
                    bgColor: '#141414',
                    color: '#fefefe',
                    heading: 'Formation Générale',
                    description: "Compétences générales du Préparateur de Plateaux Repas :",
                    icon: checkIn,
                    iconAlt: "GIF inline d'un check-in bleu aéroportuaire sur fond orange et cartouche bleue et écriture orange",
                    items: [
                        "Facteurs humains",
                        "Préparer les entretiens de sélection",
                    ]
                },
                {
                    bgColor: '#e58e4f',
                    color: '#fefefe',
                    heading: 'Formation réglementaire',
                    description: "Connaissances sécuritaires et réglementaires :",
                    icon: control,
                    iconAlt: "GIF inline d'un contrôle de passeport aéroportuaire sur fond bleu et cartouche noir et écriture grise",
                    items: [
                        "Sensibilisation législation aéroportuaire (être en mesure de connaitre et comprendre l’application des différents règlements à l’échelle internationale et européenne) / instances internationales / code OACI",
                        "Sécurité aéroportuaire (Les FOD / règles de prévention / la touchée / type d’embarquement) / Acquérir l’accès piéton aux secteurs TRA et MAN des plateformes du groupe ADP",
                        "Module sûreté Contributeur 11.2.3.6 - Connaissance de la Fouille de sûreté",
                        "Module sûreté Contributeur 11.2.3.10 - Connaissance des variantes d’approvisionnement de bord",
                    ]
                },
                {
                    heading: 'Outils Pédagogiques',
                    description: "Les dispositifs mis en place pour une formation de qualité :",
                    icon: coffe,
                    iconAlt: "GIF inline d'une tasse de café orange sur fond bleu et cartouche orange et écriture bleue",
                    items: [
                        "Présentiel",
                        "Diaporama",
                        "Ordinateur / Support de cours papier",
                        "Paperbord / Ecran interactif",
                        "Formation terrain / Mise en situation",
                    ]
                },
                {
                    moreInfoLink: "https://candidat.francetravail.fr/metierscope/fiche-metier/G1603/equipier-polyvalent-equipiere-polyvalente-de-restauration-rapide",
                    signupLink: "../registration/Course.jsx",
                },
            ]
        },

        welcomeAgent: {
            img: welcome,
            imgAlt: "Agent welcome blanche vu de face en uniforme bleu marine, chemise blanche et foulard bleu et rose, avec les cheveux attaché style elfe ; réceptionnant le billet dans le passeport d'un voyageur blanc aux cheveux poivre et sel, portant un costume sombre, une chemise blanche, une montre à bracelet marron et des lunettes. Vu de coté. Ils sont séparés par un comptoir d'accueil dans un aéroport.",
            title: "Agent d'accueil",
            description: "L'Agent Welcome, souvent rencontré dans les contextes aéroportuaires en France, et tout particulièrement en Île-de-France, joue un rôle crucial dans l'accueil et l'orientation des visiteurs, des touristes et des voyageurs. Cette profession, axée sur le service client, est essentielle pour offrir une première impression positive et pour aider les gens à naviguer dans des environnements souvent complexes et très fréquentés, comme les aéroports de Paris-Charles de Gaulle (CDG), le Bourget (LBG) et Paris-Orly (ORY).",
            section: [
                {
                    bgColor: '#2face2',
                    color: '#fefefe',
                    heading: 'Formation Métier',
                    icon: depart,
                    iconAlt: "GIF inline d'un avion noir sur fond orange et cartouche noir et écriture grise",
                    description: "Les missions spécifiques de l'Agent d'accueil :",
                    items: [
                        "Connaitre l’environnement et les acteurs aéroportuaire (co-activité / alphabet aéroportuaire / SGS / environnement de la piste)",
                        "Code IATA + typologie des passagers + passager à particularité",
                        "Les différentes missions d’un agent welcome / les positionnements / les particularités du métier en fonction des compagnies aériennes",
                        "Les différents types de handicap (procédures, difficultés, prise en charge)",
                        "Gestes et postures pour la prise en charge des passagers PMR / Pratique avec le matériel (fauteuil roulant, béquilles…) Techniques de transfert des passagers WCHC",
                    ]
                },
                {
                    bgColor: '#141414',
                    color: '#fefefe',
                    heading: 'Formation Générale',
                    icon: checkIn,
                    iconAlt: "GIF inline d'un check-in bleu aéroportuaire sur fond orange et cartouche bleue et écriture orange",
                    description: "Compétences générales de l'Agent d'accueil :",
                    items: [
                        "Découverte de l’aéroport et mise en situation réelle avec les passagers",
                        "Facteurs humains et Gestes et postures",
                        "Gestion de conflits",
                        "Anglais aéroportuaire",
                        "Préparation aux entretiens de sélection",
                    ]
                },
                {
                    bgColor: '#e58e4f',
                    color: '#fefefe',
                    heading: 'sécuritaires et réglementaires :',
                    icon: control,
                    iconAlt: "GIF inline d'un contrôle de passeport aéroportuaire sur fond bleu et cartouche noir et écriture grise",
                    description: "Connaissances sécuritaires et réglementaires :",
                    items: [
                        "Sensibilisation législation aéroportuaire (être en mesure de connaitre et comprendre l’application des différents règlements à l’échelle internationale et européenne) / instances internationales / code OACI",
                        "Sécurité aéroportuaire (Les FOD / règles de prévention / la touchée / type d’embarquement) / Acquérir l’accès piéton aux secteurs TRA et MAN des plateformes du groupe ADP",
                        ">Module sûreté Contributeur 11.2.3.8 + TCA - Connaissance de la vérification de concordance entre les passagers et leurs bagages de soute",
                    ]
                },
                {
                    heading: 'Outils Pédagogiques',
                    icon: coffe,
                    iconAlt: "GIF inline d'une tasse de café orange sur fond bleu et cartouche orange et écriture bleue",
                    description: "Les dispositifs mis en place pour une formation de qualité :",
                    items: [
                        "Présentiel",
                        "Diaporama",
                        "Ordinateur / Support de cours papier",
                        "Paperbord / Ecran interactif",
                        "Formation terrain / Mise en situation",
                    ]
                },
                {
                    moreInfoLink: "https://candidat.francetravail.fr/marche-du-travail/fichemetierrome?codeRome=M1601",
                    signupLink: "../registration/Course.jsx",
                },
            ]
        },
    };

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
