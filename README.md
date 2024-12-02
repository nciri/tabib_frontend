
# Tabib - Plateforme de Gestion des Rendez-vous Médicaux

## 📝 Description

**Tabib** est une plateforme moderne et intuitive permettant aux patients de trouver des médecins, de consulter leurs profils et de prendre des rendez-vous en ligne. La solution inclut des fonctionnalités pour les praticiens et les patients avec une interface utilisateur fluide et réactive.

---

## 🌟 Fonctionnalités

### 🎯 Fonctionnalités principales

- **Recherche de médecins** par spécialité et localisation.
- **Fiche détaillée des praticiens** avec :
  - Spécialité
  - Adresse
  - Horaires
  - Tarifs
  - Options de rendez-vous (vidéo ou en cabinet).
- **Prise de rendez-vous** en ligne avec sélection des créneaux horaires.
- **Navigation intuitive** avec des composants réactifs basés sur Material-UI.
- **Carte interactive** pour localiser les médecins.

---

## 🛠️ Configuration et Installation

### 1️⃣ Prérequis

Assurez-vous d'avoir les outils suivants installés sur votre machine :
- [Node.js](https://nodejs.org/) (v16 ou supérieur)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Python (optionnel, pour certaines intégrations backend)

---

### 2️⃣ Installation du projet

Clonez le dépôt :

```bash
git clone <url-du-repository>
cd tabib
```

Installez les dépendances :

```bash
npm install
```

---

### 3️⃣ Configuration

Créez un fichier **`.env`** dans la racine du projet pour les variables d'environnement (par exemple pour les appels API). Voici un exemple :

```plaintext
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_MAPBOX_TOKEN=your_mapbox_token
```

---

### 4️⃣ Lancement des services

#### Démarrer l'application React :
```bash
npm start
```

L'application sera accessible sur : `http://localhost:3000`.

#### Lancer les tests :
```bash
npm test
```

---

## 🚀 Fonctionnalités techniques

### ⚙️ Architecture

- **Frontend** : Développé en React.js avec Material-UI pour les composants et React Router pour la navigation.
- **Backend (optionnel)** : Les appels API peuvent être configurés pour un backend RESTful (Node.js, Python, ou autre).
- **Responsivité** : Compatible mobile, tablette, et desktop.

---

## 🧪 Tests à effectuer

### Tests manuels

1. **Recherche de médecins**
   - Accédez à la page d'accueil et saisissez une spécialité et une localisation, puis cliquez sur "Rechercher".
   - Vérifiez que les résultats correspondent aux critères.

2. **Accès à la fiche d'un praticien**
   - Cliquez sur une carte de médecin ou sur le bouton "Prendre rendez-vous".
   - Vérifiez que la page du praticien affiche correctement les informations.

3. **Prise de rendez-vous**
   - Sélectionnez un créneau horaire dans la fiche du praticien.
   - Vérifiez que la page de confirmation affiche les détails du rendez-vous.

4. **Navigation dans le site**
   - Testez les liens vers la page d'accueil et les autres sections via la navbar.
   - Vérifiez que le logo redirige vers l'accueil.

5. **Carte interactive**
   - Vérifiez que la carte s'affiche correctement avec les localisations des médecins.

---

### Tests automatisés

Lancez les tests unitaires et d'intégration avec :

```bash
npm test
```

#### Exemple de tests

- **Composants** :
  - Vérifiez que les composants affichent les données correctement (ex. `DoctorCard`, `SimpleDoctorCard`, `PractitionerProfilePage`).
  - Vérifiez les comportements des boutons (ex. redirection vers `/practitioner/:id`).

- **Routes et navigation** :
  - Assurez-vous que toutes les routes (`/`, `/practitioner/:id`) fonctionnent.
  - Vérifiez que les redirections (`useNavigate`, `Link`) sont correctes.

- **API (si applicable)** :
  - Testez les appels pour récupérer les médecins et leurs détails.
  - Vérifiez les erreurs gérées correctement (404, 500).

---

## 🌐 Déploiement

Vous pouvez déployer l'application avec des services comme :

- **Netlify** :
  ```bash
  npm run build
  netlify deploy
  ```

- **Vercel** :
  ```bash
  npm run build
  vercel
  ```

- **Docker** :
  Si vous utilisez Docker, créez une image avec ce fichier Dockerfile :

  ```dockerfile
  FROM node:16-alpine
  WORKDIR /app
  COPY . .
  RUN npm install && npm run build
  CMD ["npx", "serve", "-s", "build", "-l", "3000"]
  ```

  Puis lancez :
  ```bash
  docker build -t tabib .
  docker run -p 3000:3000 tabib
  ```

---

## 📚 Documentation

1. **API Backend** :
   - Documentez les endpoints que l'application consomme (`GET /doctors`, `GET /doctors/:id`, etc.).

2. **Fichiers importants** :
   - **`src/components`** : Contient les composants réutilisables.
   - **`src/pages`** : Regroupe les pages principales (Accueil, Fiche Praticien, etc.).
   - **`public/css`** : Styles globaux.

---

## 📋 TODO

- [ ] Ajouter l'intégration d'un calendrier interactif.
- [ ] Connecter l'API backend pour gérer les rendez-vous.
- [ ] Ajouter des tests E2E avec Cypress.

---

## 🤝 Contribution

Si vous souhaitez contribuer au projet, suivez ces étapes :

1. Forkez le dépôt.
2. Créez une branche pour vos modifications :
   ```bash
   git checkout -b feature/nom-de-la-fonctionnalité
   ```
3. Poussez vos modifications :
   ```bash
   git push origin feature/nom-de-la-fonctionnalité
   ```
4. Ouvrez une Pull Request.

---

## 📧 Support

Pour toute question ou problème, contactez-nous à [support@tabib.com](mailto:support@tabib.com).
