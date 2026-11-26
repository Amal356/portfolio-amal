// Données personnelles du portfolio (v2 : informations mises à jour)
export const profile = {
  fullName: "Amal Jemli",
  jobTitle: "Étudiante en Master DevOps & Cloud – ISET Tozeur",
  email: "amalyousef356@gmail.com",
  location: "Tozeur, Tunisie",
  githubUser: "Amal356",
  linkedin: "", // ex. "https://www.linkedin.com/in/ton-profil" (vide = non affiché)
  about:
    "Je conçois des plateformes DevOps et Cloud automatisées : portail développeur Backstage, CI/CD, conteneurs et Kubernetes.",
};

export const skills = [
  'Linux',
  'Docker',
  'Git & GitHub',
  'CI/CD (GitHub Actions, Jenkins)',
  'Kubernetes (K3s)',
  'GitOps (Argo CD)',
  'Backstage',
  'Prometheus & Grafana',
];

// v2 : nouvelle section « Certifications »
export const certifications = [
  { name: 'Docker Certified Associate (DCA)', issuer: 'Docker', status: 'En préparation' },
  { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'CNCF / Linux Foundation', status: 'En préparation' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', status: 'En préparation' },
];

// v2 : nouvelle section « Projets DevOps & Cloud »
export const projects = [
  {
    title: 'Plateforme développeur avec Backstage',
    description:
      "Software Templates, Catalog et plugin CI/CD : création, build, publication Docker Hub et déploiement de ce portfolio depuis Backstage.",
    stack: ['Backstage', 'GitHub Actions', 'Docker Hub', 'Docker Compose'],
  },
  {
    title: 'GitOps sur Kubernetes',
    description: 'Cluster K3s synchronisé par Argo CD depuis un dépôt Git (déploiements déclaratifs).',
    stack: ['K3s', 'Argo CD', 'Helm'],
  },
  {
    title: 'Chaîne CI avec registre privé',
    description: "Pipeline Jenkins qui construit les images et les publie dans un registre Harbor.",
    stack: ['Jenkins', 'Harbor', 'Docker'],
  },
  {
    title: 'Supervision',
    description: 'Collecte de métriques et tableaux de bord pour les services du cluster.',
    stack: ['Prometheus', 'Grafana'],
  },
];
