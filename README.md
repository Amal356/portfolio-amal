# portfolio-amal

Portfolio Next.js de **Amal Jemli**, généré automatiquement par le Software Template Backstage `portfolio-nextjs-template`.

## Contenu du dépôt

| Fichier | Rôle |
|---|---|
| `app/` | Application Next.js (App Router) ; `app/profile.js` contient les informations personnelles |
| `app/api/health/route.js` | Endpoint de santé `GET /api/health` |
| `Dockerfile` | Build multi-étapes (deps → builder → runner), image finale non-root |
| `.dockerignore` | Fichiers exclus du contexte de build |
| `docker-compose.yml` | Déploiement local sur http://localhost:3000 |
| `.github/workflows/deliver.yml` | Pipeline : build → push Docker Hub → déploiement → health check |
| `catalog-info.yaml` | Métadonnées du composant pour le Backstage Catalog |

## Cycle de vie (piloté depuis Backstage)

```
Modification du code → Build → Image Docker → Docker Hub → Déploiement local → Validation
```

- Image : `amal878/portfolio-nextjs:<version>` (convention `v1`, `v2`, `v1.1`…)
- Application : http://localhost:3000
- Santé : http://localhost:3000/api/health

Aucune commande Git, Docker ou Docker Compose n'est lancée à la main : tout est déclenché depuis Backstage.
