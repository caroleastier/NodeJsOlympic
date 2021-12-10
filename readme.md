# TP 1 NodeJsOlympic

### Récupération du projet

1.Cloner ce projet Github
2.Placer le projet dans un dossier ProjetIPI
3.Ouvrir le projet dans l'éditeur de code de votre choix

### Lancer l'application :
1. Se placer dans le dossier NodeJsOlympic dans le Terminal
2. Récupérer le dossier des dépendances npm avec la commande
  `npm install`
3. Lancer l'application avec les commande
   `npm start`
   `node app.js`
 


### Check List de réalisation du projet

##### Points de terminaison Sports
  [ ]  Endpoint Créer un sport : POST /api/sports
  [ ]  Endpoint Lister les sports : GET /api/sports (déjà fourni dans le squelette du projet)
  [ ]  Endpoint Consulter les athlètes d'un sport : GET /api/sports/{sportId}/athletes
  [ ]  Endpoint Ajouter un athlète dans un sport : POST /api/sports/{sportId}/athletes/{athleteId}

##### Points de terminaison Athlètes
  [ ]  Endpoint Créer un athlète : POST /api/athletes
  [ ]  Endpoint Lister les athlètes : GET /api/athletes
  [ ]  Endpoint Consulter les sports d'un athlète : GET /api/athletes/{athleteId}/sports


##### Interface Web
##### Pages Web Sports/Athlètes
  [ ]  Page Web Lister les sports
  [ ]  Page Web Lister les athlètes
  [ ]  Page Web Créer un sport (formulaire)
  [ ]  Page Web Créer un athlète (formulaire)

##### Autres pages Web Sports/Athlètes (optionnel)
  [ ]  Page Web ou fonctionnalité Supprimer un sport
  [ ]  Page Web ou fonctionnalité Supprimer un athlète
  [ ]  Page Web Modifier un sport (formulaire)
  [ ]  Page Web Modifier un athlète (formulaire)


##### Rendu attendu
  [ ] Code source sur un repo Git (sans le dossier node_modules 🙏)
  README.md
  [ ]     Instructions pour installer le projet (git clone, npm install, npm start, éventuels exemples de commande curl, ...)
  [ ]     Checklist des API et des fonctionnalités Web avec un statut des tests (OK ✅ ou KO ❌)
