# 🚀 Express Web API – Backend Only

Ce projet est un backend **Node.js** utilisant **Express.js** et **Sequelize** pour gérer des utilisateurs et des produits avec une base de données **MySQL**.  
🎨 **Aucune interface front-end** : tous les tests se font via **Postman** ou un autre client HTTP.

---

## ✨ Fonctionnalités principales

- 🔐 Authentification des utilisateurs (inscription, connexion)
- 👤 Gestion des rôles (user, admin)
- 🛡️ Sécurité avec hashage des mots de passe (**bcrypt**) et **JWT**
- ✅ Validation des données (middleware)
- 📦 Gestion des produits (CRUD de base)
- 🗂️ Structure MVC (Models, Controllers, Routers, Middleware)

---

## ⚙️ Installation & Configuration

1. **Cloner le projet**
   ```bash
   git clone <repo>
   cd express web
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer la base de données**
   - Crée une base **MySQL**.
   - Ajoute un fichier `.env` à la racine :

     ```
     DB_NAME=nom_de_ta_base
     DB_USER=ton_utilisateur
     DB_PASSWORD=ton_mot_de_passe
     DB_HOST=localhost
     DB_DIALECT=mysql
     JWT_SECRET=UneCléSecrèteTrèsLongue
     ```

4. **Lancer le serveur**
   ```bash
   node app.js
   ```
   Les tables seront créées automatiquement si elles n'existent pas.

---

## 🧩 Structure du projet

```
/models         # Modèles Sequelize (User, Product)
  user.js
  product.js

/controllers    # Logique métier (UserController)
  userController.js

/routers        # Définition des routes Express
  user.js
  product.js

/middleware     # Middlewares (auth, validation, rôle)
  userverify.js
  registerverify.js
  role.js

/DB             # Connexion Sequelize
  db.js

app.js          # Point d'entrée principal
.env            # Variables d'environnement
```

---

## 📬 Utilisation avec Postman

### 1. 📝 Inscription
- **POST** `/user/register`
- Body (JSON) :
  ```json
  {
    "nom": "Doe",
    "prenom": "John",
    "email": "john@exemple.com",
    "password": "motdepasse"
  }
  ```

### 2. 🔑 Connexion
- **POST** `/user/login`
- Body (JSON) :
  ```json
  {
    "email": "john@exemple.com",
    "password": "motdepasse"
  }
  ```
- Réponse : un token JWT

### 3. 🔒 Accès protégé
- Pour accéder à une route protégée, ajoute dans les headers :
  ```
  Authorization: Bearer <token>
  ```

### 4. 📦 Exemple de route produit
- **GET** `/product`
- **GET** `/product/1`

---

## 🛠️ Points importants du code

- 🔒 **Hashage du mot de passe** : fait avec `bcrypt` dans le contrôleur d'inscription.
- 🪪 **JWT** : généré à la connexion, vérifié dans le middleware `userverify`.
- 🧹 **Validation** : middleware `registerverify` pour l'inscription.
- 🏷️ **Rôles** : middleware `role.js` pour vérifier si l'utilisateur est admin.
- 🛡️ **Sécurité** : aucune donnée sensible n'est renvoyée, les tokens sont obligatoires pour les routes protégées.

---

## 💡 Conseils

- Utilise **Postman** pour tester toutes les routes.
- Change la clé `JWT_SECRET` pour la production.
- Ajoute d'autres routes ou modèles selon tes besoins.

---

## 👨‍💻 Auteur

Projet backend **Express.js** – Testé avec **Postman**.  
N'hésite pas à contribuer ou à poser des questions