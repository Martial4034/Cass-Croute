# Cass-Croute

### [English version of README.md](https://github.com/Martial4034/MVP/blob/main/EN-ReadMe.md)

## 15 ans

L'idée m'est venue de créer une **plateforme** destinée aux **professionnels** tels que les *restaurateurs, boulangers, bouchers, etc.,* pour engager des **freelancers** pour des missions physiques ou non. Le but était de permettre aux **entreprises locales de Lyon** d'engager et de recruter des **freelancers** pour des microservices, comme la gestion des réseaux sociaux, la photographie de plats, ou encore la création de menus pour des événements.

### Projet
Ce projet est malheureusement **obsolète** et n'est plus en développement actif, malgré l'intérêt **initial** de quelques VC/LoveMoney. L'attention s'est recentrée sur le développement de **PiglyAgency** que je commençais à monter.

![Preview-Login](https://github.com/Martial4034/MVP/blob/main/public/login.png)

### Modèle Économique
Le **business model** envisagé reposait sur une **commission** prélevée sur chaque prestation, simple.

### Technologies Utilisées
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=Twilio&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white) 

- **Next.js & TypeScript** : Pour le développement frontend et backend.
- [Payload](https://payloadcms.com/) : Gestion de la base de données **MongoDB** et de l'**authentification**.
- [Resend](https://resend.com/) : Pour les **e-mails** (campagnes marketing et récupération de mot de passe).
- [Twilio](https://www.twilio.com/fr-fr) : Vérification par SMS pour les KYC effectifs.
- [Stripe](https://stripe.com/) : Gestion des paiements, avec un système de retenue des fonds jusqu'à la finalisation et l'**évaluation** du service pour prévenir les fraudes et les litiges.
- [TRPC](https://trpc.io/) : Pour les requêtes **API**.
- [Webpack](https://webpack.js.org/) : Pour le build du projet.

### Note
Bien que ce projet ne soit plus **actif**, les enseignements tirés et les compétences acquises durant son développement restent **rentable**.


## Getting Started

First, install dependencies:

```bash
npm i
# or
yarn i
# or
pnpm i
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
