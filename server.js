require('./models/db');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const employecon = require('./controllers/employecon.js');
const bodyparser = require('body-parser');
const EmployeeModel = require('./models/employeemodel')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const Handlebars = require('Handlebars')

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', handlebars: allowInsecurePrototypeAccess(Handlebars), defaultLayout: 'mainlayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs','handlebars');
app.listen(3000, () => {
    console.log('node running on port 3000');
});

app.use('/employee', employecon);