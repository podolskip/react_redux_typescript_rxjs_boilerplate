// tslint:disable
const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Places = require('./backend/boilerplateApi/models/boilerplateModel');
const routes = require('./backend/boilerplateApi/routes/boilerplateRoutes');
''

const app = express();
const enter = '\r' //'\033[0G';
// MongoDB setup
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Placesdb', { useNewUrlParser: true })

mongoose.connection.on('connected', () => {
  process.stdout.write('mongo DB connected');
})

mongoose.connection.on('error', (error) => {
  console.error('monogo db faced unexpected error : ' + error);
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/build'));
app.route('/')
  .get(function (req, res) {
    res.sendFile(path.join(__dirname,'/build/index.html'))
  })

routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port,() => {
  console.log('Test places server started at port:' + port); 
});

console.log(app.get('appPath'))
