import React from 'react';

const ImportExportAssistant = () => {
  return (
    <div style={{ marginTop: 0, marginBottom: 0, paddingTop: 'var(--wp--preset--spacing--70)', paddingBottom: 'var(--wp--preset--spacing--70)' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 var(--wp--preset--spacing--50)' }}>
        <div style={{ flexBasis: '50%', display: 'flex', alignItems: 'center' }}>
          <figure style={{ borderRadius: '32px', aspectRatio: '4/3', objectFit: 'cover' }}>
            <img
              src="https://myairportacademy.com/wp-content/uploads/2024/04/christina-wocintechchat-com-1Kf3jFemsPk-unsplash-2.jpg"
              alt="Assistante vue de face, assise devant un ordinateur portable blanc sur une table ronde blanche. Elle porte une robe rouge, cheveux bruns lâchés. En arrière plan une salle avec des murs vitrées"
              style={{ borderRadius: '32px', aspectRatio: '4/3', objectFit: 'cover' }}
            />
          </figure>
        </div>
        <div style={{ flexBasis: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Assistant Import-Export</h2>
          <p>
            Le métier d’Assistant Import-Export est un rôle clé dans le domaine du commerce international. Cette profession implique de gérer les opérations d'importation et d'exportation de marchandises, en assurant la coordination et la logistique nécessaires pour le bon déroulement des échanges internationaux. En Île-de-France, région économiquement dynamique et dotée d'infrastructures majeures comme le port de Gennevilliers et l'aéroport Charles de Gaulle, les assistants import-export jouent un rôle crucial dans le soutien des activités commerciales transfrontalières.
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#2face2', padding: 'var(--wp--preset--spacing--50) var(--wp--preset--spacing--80)' }}>
        <div style={{ flexBasis: '50%', color: 'white' }}>
          <h3>CCP1 - Administrer les ventes et les achats à l'international en français et en anglais</h3>
          <ul style={{ lineHeight: '1.75' }}>
            <li>Elaborer une offre à l'international et en assurer le suivi - Incoterms, Anglais niveau B2, PBIS (Pratiques Bancaires Internationales Standard)</li>
            <li>Traiter les commandes à l'international - RUU (Règles et Usances Uniformes) de la Chambre de Commerce internationale (ICC)</li>
            <li>Gérer la relation client ou fournisseur à l'international</li>
          </ul>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#141414', color: 'white', padding: 'var(--wp--preset--spacing--50) var(--wp--preset--spacing--80)' }}>
        <div style={{ flexBasis: '50%' }}>
          <h3>CCP 2 - Optimiser les opérations logistiques internationales en français et en anglais</h3>
          <ul style={{ lineHeight: '1.75' }}>
            <li>Coordonner les opérations d'acheminement à l'international - Connaissement (B/L), Lettre de transport aérien (LTA), Lettre de voiture (CMR)</li>
            <li>Traiter les litiges transport et logistique à l'international</li>
            <li>Suivre les opérations administratives de dédouanement</li>
          </ul>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#e58e4f', color: 'white', padding: 'var(--wp--preset--spacing--50) var(--wp--preset--spacing--80)' }}>
        <div style={{ flexBasis: '50%' }}>
          <h3>CCP 3 - Assurer les fonctions de support au développement commercial en français et en anglais</h3>
          <ul style={{ lineHeight: '1.75' }}>
            <li>Promouvoir l'image de l'entreprise à l'international - Données et respect du Règlement Général sur la Protection des Données (RGPD), Principes fondamentaux de l'Organisation mondiale du commerce (OMC)</li>
            <li>Contribuer à l'optimisation des achats et au développement des ventes à l'international</li>
            <li>Bases de l'assistanat de bureau - Pack office, Standard téléphonique, rédaction de compte-rendus</li>
            <li>Elaborer et actualiser des tableaux de bord commerciaux</li>
          </ul>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', padding: 'var(--wp--preset--spacing--50) var(--wp--preset--spacing--80)' }}>
        <div style={{ flexBasis: '50%' }}>
          <h3>Outils Pédagogiques
            <img
              src="https://myairportacademy.com/wp-content/uploads/2024/04/Animation-coffee.gif"
              alt="GIF inline d'une tasse de café orange sur fond bleu et cartouche orange et écriture bleue"
            />
          </h3>
          <p>Les dispositifs mis en place pour une formation de qualité :</p>
          <ul style={{ lineHeight: '1.75' }}>
            <li>Présentiel</li>
            <li>Diaporama</li>
            <li>Ordinateur / Support de cours papier</li>
            <li>Paperbord / Ecran interactif</li>
            <li>Formation terrain / Mise en situation</li>
          </ul>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 'var(--wp--preset--spacing--30)', justifyContent: 'center', padding: 'var(--wp--preset--spacing--50)' }}>
        <a
          className="wp-block-button__link"
          style={{ borderRadius: '100px', padding: 'var(--wp--preset--spacing--50) var(--wp--preset--spacing--60)', fontSize: 'var(--wp--preset--font-size--kenta-font-xsmall)' }}
          href="https://candidat.francetravail.fr/marche-du-travail/fichemetierrome?codeRome=D1409"
          target="_blank"
          rel="noopener noreferrer"
        >
          En savoir plus
        </a>
        <a
          className="wp-block-button__link is-style-outline"
          style={{ borderRadius: '100px', padding: 'var(--wp--preset--spacing--50) var(--wp--preset--spacing--60)', fontSize: 'var(--wp--preset--font-size--kenta-font-xsmall)' }}
          href="inscription"
        >
          Je m'inscris
        </a>
      </div>
    </div>
  );
};

export default ImportExportAssistant;
