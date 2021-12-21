# TP 1 NodeJsOlympic

### Récupération du projet

1. Cloner ce projet Github
2. Placer le projet dans un dossier ProjetIPI
3. Ouvrir le projet dans l'éditeur de code de votre choix

### Lancer l'application :
1. Se placer dans le dossier NodeJsOlympic dans le Terminal
2. Récupérer le dossier des dépendances npm avec la commande
  `npm install mongoose`
3. Lancer l'application avec les commande
   `npm start`
   `node app.js`
   `npm run dev` // De préférence afin de modifier "en direct"
4. Se mettre sur localhost:3000/


### Check List de réalisation du projet

##### Points de terminaison Sports
- [x] Endpoint Créer un sport : `POST /api/sports`
- [x] Endpoint Lister les sports : `GET /api/sports/`
- [x] Endpoint Consulter les athlètes d'un sport : `GET /api/sports/{sportId}/athletes`
- [x] Endpoint Ajouter un athlète dans un sport : `POST /api/sports/{sportId}/athletes/{athleteId}`

##### Points de terminaison Athlètes
- [x]  Endpoint Créer un athlète : `POST /api/athletes`
- [x]  Endpoint Lister les athlètes : `GET /api/athletes/`
- [x]  Endpoint Consulter les sports d'un athlète : `GET /api/athletes/{athleteId}/sports`


##### Interface Web
##### Pages Web Sports/Athlètes
- [x]  Page Web Lister les sports
- [x]  Page Web Lister les athlètes
- [x]  Page Web Créer un sport (formulaire)
- [x]  Page Web Créer un athlète (formulaire)

##### Pages Web pour consulter : (En plus) 
- [x]  La liste des sports d'un athlète
- [x]  La liste d'un athlète dans ses sports

##### Autres pages Web Sports/Athlètes (optionnel)
- [ ]  Page Web ou fonctionnalité Supprimer un sport
- [ ]  Page Web ou fonctionnalité Supprimer un athlète
- [ ]  Page Web Modifier un sport (formulaire)
- [ ]  Page Web Modifier un athlète (formulaire)


##### Rendu attendu
- [x] Code source sur un repo Git
  README.md
- [x] Instructions pour installer le projet (git clone, npm install, npm start, éventuels exemples de commande curl, ...)
- [x] Checklist des API et des fonctionnalités Web avec un statut des tests
