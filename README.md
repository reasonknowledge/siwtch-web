# Siwtch Direct - Frontend

Application web pour la simplification des démarches administratives en Côte d'Ivoire.

## Prérequis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- [Bun](https://bun.sh/) (runtime et package manager)
- [Git](https://git-scm.com/)

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/reasonknowledge/siwtch-web.git
cd siwtch-web
```

### 2. Installer les dépendances

```bash
bun install
```

### 3. Lancer le serveur de développement

```bash
bun run dev
```

L'application sera accessible à l'adresse : **http://localhost:5173**

## Scripts disponibles

| Commande          | Description                           |
| ----------------- | ------------------------------------- |
| `bun run dev`     | Lance le serveur de développement     |
| `bun run build`   | Compile le projet pour la production  |
| `bun run preview` | Prévisualise la version de production |
| `bun run lint`    | Exécute le linter ESLint              |

## Structure du projet

```
siwtch-web/
├── src/
│   ├── assets/          # Images et ressources statiques
│   ├── components/      # Composants React
│   │   ├── admins/      # Composants admin
│   │   ├── comons/      # Composants partagés
│   │   └── ui/          # Composants shadcn/ui
│   ├── data/            # Données statiques
│   ├── hooks/           # Hooks personnalisés
│   ├── lib/             # Utilitaires
│   ├── pages/           # Pages de l'application
│   ├── store/           # Gestion d'état
│   └── users/           # Composants utilisateur
├── public/              # Fichiers publics
├── index.html           # Point d'entrée HTML
├── package.json         # Dépendances et scripts
├── tailwind.config.js   # Configuration Tailwind CSS
├── tsconfig.json        # Configuration TypeScript
└── vite.config.ts       # Configuration Vite
```

## Technologies utilisées

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool et dev server
- **Tailwind CSS** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI réutilisables
- **React Router** - Navigation
- **Lucide React** - Icônes

## Pages principales

| Page            | URL                      | Description                               |
| --------------- | ------------------------ | ----------------------------------------- |
| Accueil         | `/`                      | Landing page avec services et témoignages |
| Services        | `/services`              | Liste des services disponibles            |
| Service détail  | `/services/:serviceName` | Détails d'un service                      |
| À propos        | `/about`                 | Informations sur la plateforme            |
| Paiement        | `/choice-payement`       | Choix du mode de paiement                 |
| Paiement Mobile | `/mobile-payement`       | Paiement via mobile money                 |
| Assistance      | `/assistance`            | FAQ et contact                            |
| Support         | `/support`               | Support utilisateur                       |

## Déploiement

Pour créer une version de production :

```bash
bun run build
```

Les fichiers compilés seront dans le dossier `dist/`.

## Contribution

1. Créer une branche : `git checkout -b ma-fonctionnalite`
2. Faire les modifications
3. Commiter : `git commit -m 'Ajout de ma fonctionnalite'`
4. Pousser : `git push origin ma-fonctionnalite`
5. Créer une Pull Request

## Licence

Propriétaire - Siwtch Direct
