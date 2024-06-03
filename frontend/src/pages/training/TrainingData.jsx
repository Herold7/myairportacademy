// src/DataContext.js
import React, { createContext, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const data = {
        baggageAgent: {
            imageSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/baggage-1697327_1280.jpg",
            imageSrcAlt:
            title: "Agent Bagagiste (uniquement pour les candidats sans permis)",
            description: "L'Agent Bagagiste, souvent appelé aussi agent de piste...",
            sections: [
                {
                    backgroundColor: '#2face2',
                    title: 'Formation Métier',
                    imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-Depart.gif",
                    items: [
                        "Engins et servitude avions / Connaissance du Loader et convoyeur à bande",
                        "Connaissance des ULD et porte ULD",
                        "Connaissance des étiquettes bagages et Documents de chargements (PDC)",
                        "Arrimage et sanglage / Calage et balisage avion"
                    ]
                },
                {
                    backgroundColor: '#141414',
                    title: 'Formation Générale',
                    imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-check-in.gif",
                    items: [
                        "Plateforme aéroportuaire, Règles de sécurité en piste",
                        "Facteurs humains et Gestes et postures",
                        "Anglais aéroportuaire",
                        "Préparation aux entretiens de sélection"
                    ]
                },
                {
                    backgroundColor: '#e58e4f',
                    title: 'Formation réglementaire',
                    imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-1714049788560.gif",
                    items: [
                        "Module sûreté Contributeur",
                        "Module sûreté Contributeur",
                        "Marchandises Dangereuses Catégorie 8c (Piste+RRW)",
                    ]
                },
                {
                    title: 'Outils Pédagogiques',
                    imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-coffee.gif",
                    items: [
                        "Présentiel",
                        "Diaporama",
                        "Ordinateur / Support de cours papier",
                        "Paperbord / Ecran interactif",
                        "Formation terrain / Mise en situation",
                    ]
                }
            ]
        },
        cleaningAgent: {
            imageSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/agent-de-nettoyage-2.webp",
            title: "Agent de nettoyage avion/aéroport",
            description: "L'Agent de Nettoyage avion/aéroport en France...",
            sections: [
                {
                    backgroundColor: '#2face2',
                    title: 'Formation Métier',
                    imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-Depart.gif",
                    items: [
                        "Connaitre l’environnement et les acteurs aéroportuaire...",
                        "Code IATA + typologie des passagers + passager à particularité",
                        "Le catering aéroportuaire / sensibilisation aux normes HACCP",
                        "Nettoyage avion (clean & search) / types avion / méthode de nettoyage cabine / techniques de base de nettoyage / temps d’intervention"
                    ]
                },
                {
                    backgroundColor:'#141414',
                    title: 'Formation Générale',
                    imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-check-in.gif",
                    items: [
                        "Facteurs humains",
                        "Préparation aux entretiens de sélection"
                    ]
                },
                {
                    backgroundColor: '#e58e4f',
                    title: 'Formation réglementaire',
                    imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-1714049788560.gif",
                    items: [
                        "Sensibilisation législation aéroportuaire...",
                        "Sécurité aéroportuaire...",
                        "Connaître les exigences réglementaires concernant EWIS...",
                        "Connaître les exigences réglementaires concernant EWIS...",
                        "Module sûreté Contributeur 11.2.3.6 - Connaissance de la Fouille de sûreté",
                        "Module sûreté Contributeur 11.2.3.10 - Connaissance des variantes d’approvisionnement de bord",
                    ]
                },
                {
                    title: 'Outils Pédagogiques',
                    imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-coffee.gif",
                    items: [
                        "Présentiel",
                        "Diaporama",
                        "Ordinateur / Support de cours papier",
                        "Paperbord / Ecran interactif",
                        "Formation terrain / Mise en situation",
                    ]
                },
            ]
        },
        rampAgent: {
            imageSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/rampe-1.jpg",
            title: "Agent de piste",
            description: "L'Agent de Piste en France est un professionnel...",
            sections: [
                {
                    backgroundColor: '#2face2',
                    title: 'Formation Métier',
                    imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-Depart.gif",
                    items: [
                        "Engins et servitude avions / Connaissance du Loader et convoyeur à bande",
                        "Sécurité piste (inclus le MAN & TRA)",
                        "Connaissance des documents de chargements (PDC)",
                        "Arrimage et sanglage / Calage et balisage avion",
                    ]
                },
                {
                    backgroundColor: '#141414',
                    title: 'Formation Générale',
                    imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-check-in.gif",
                    items: [
                        "Plateforme aéroportuaire, Règles de sécurité en piste",
                        "Facteurs humains et Gestes et postures",
                        "Anglais aéroportuaire",
                        "Préparation aux entretiens de sélection",
                    ]
                },
                {
                    backgroundColor: '#e58e4f',
                    title: 'Formation réglementaire',
                    imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-1714049788560.gif",
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
                        title: 'Outils Pédagogiques',
                        imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-coffee.gif",
                        items: [
                            "Présentiel",
                            "Diaporama",
                            "Ordinateur / Support de cours papier",
                            "Paperbord / Ecran interactif",
                            "Formation terrain / Mise en situation",
                        ]
                    },
                ]
            ]
        },
        securityAgent: {
            imageSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/securite-1.jpg",
            title: "Agent de sûreté aéroportuaire",
            description: 'L\’Agent de Sûreté Aéroportuaire en France, et en particulier en Île-de-France, où se trouvent des aéroports internationaux <br /> majeurs comme Charles de Gaulle (CDG), le Bourget (LBG) et Orly (ORY), joue un rôle crucial dans <br /> la sécurité des passagers, des équipages, et des infrastructures aéroportuaires. Cette profession est dédiée à <br />prévenir toute forme de menace à la sécurité aérienne, notamment les actes de terrorisme, la contrebande, ou <br />tout autre crime.'
            sections: [
                {
                    backgroundColor: '#2face2',
                    title: 'Formation Métier',
                    imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-Depart.gif",
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
                    backgroundColor: '#141414',
                    title: 'Formation Générale',
                    imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-check-in.gif",
                    items: [
                        "Sauveteur secouriste du travail",
                        "Environnement juridique de la sécurité",
                        "Transmissions des consignes et des informations",
                        "Gestion des risques et des situations conflictuelles",
                        "Préparation aux entretiens de sélection",
                    ]
                },
                {
                    backgroundColor: '#e58e4f',
                    title: 'Formation réglementaire',
                    imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-1714049788560.gif",
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
                    title: 'Outils Pédagogiques',
                    imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-coffee.gif",
                    items: [
                        "Présentiel",
                        "Diaporama",
                        "Ordinateur / Support de cours papier",
                        "Paperbord / Ecran interactif",
                        "Formation terrain / Mise en situation",
                    ]
                },
            ]
        },
        groundHandlingAgent:{
            imageSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/ground-handling-1.jpg",
            title: "Agent d'escale",
            description: "L'Agent d'Escale en France est un professionnel...",
            sections: [
                {
                    backgroundColor: '#2face2',
                    title: 'Formation Métier',
                    imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-Depart.gif",
                    items: [
                        "Connaitre l’environnement et les acteurs aéroportuaire...",
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
                    backgroundColor: '#141414',
                    title: 'Formation Générale',
                    imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-check-in.gif",
                    items: [
                        "Découverte de l’aéroport et mise en situation réelle avec les passagers",
                        "Facteurs humains et Gestes et postures",
                        "Gestion de conflits",
                        "Anglais aéroportuaire",
                        "Préparation aux entretiens de sélection",
                    ]
                },
                {
                    backgroundColor: '#e58e4f',
                    title: 'Formation réglementaire',
                    imgSrc: "https://myairportacademy.com/wp-content/uploads/2024/04/Animation-1714049788560.gif",
                    items: [
                        "Sensibilisation législation aéroportuaire...",
                        "Sécurité aéroportuaire...",
                        "Module sûreté Contributeur
                }

                    };

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
