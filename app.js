
// on récupére notre dépendance externe - ici express.
const express = require('express');
const hbs = require("handlebars");
var path = require('path');
// on construit notre application qui nous servira à créer nos routes
const app = express();
// on donne un port sur lequel notre serveur écoute
const port = 3000;

const logger = require('morgan');
app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded());

app.set('view engine', 'hbs');
// on indique que nos vues se trouverons toujours dans le dossier views 
app.set('views', path.join(__dirname, 'views'));

const { MongoClient } = require('mongodb');

const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:admin@cluster0.6xtj1.mongodb.net/OlympicDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const SportsRouter = require('./routers/sports.router');

const athleteRouter = require('./routers/athlete.router');

app.use('/api', SportsRouter.routes);
app.use('/api', athleteRouter);

async function main() {
    await client.connect();
    console.log("test");
    const db = client.db('OlympicDatabase');
    const collectionSports = db.collection('Sports');
    const sports = await collectionSports.find().toArray();
    sports.forEach(sport => {
        console.log(sport);
    });

    client.close();
}

// notre première route !
// on envoi un Hello World si la requête est sur la racine.
app.get('/', (req, res) => {
  res.render('index', { name: "test" });
});
/*
app.get('/createSports', (req, res) => {
  res.render('addSports');
});*/
/*
app.post('/create', (req, res) => {
  console.log('Hellooooooooooooooooo!');
  var dbo = db.db("Cluster0");
  var myobj = { name: "" };
  dbo.collection("Sports").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document ajouté");
    db.close();
});
*/

// on écoute sur notre port.
app.listen(port, () => {
  console.log(`Olympic Games listening at http://localhost:${port}`)
});

main();
