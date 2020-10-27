const path = require('path')
const express = require('express')
const Handlebars = require('handlebars')
const expressHandlebars=require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const app = express()

// Routes
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

// Variables
const PORT = 3000

// handlebars configure
app.engine('hbs', expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout:'main',
    extname:'hbs'
}));
app.set('view engine','hbs')
app.set('views','views')

app.use(express.static(path.join(__dirname, 'public')))
console.log(path.join(__dirname, 'public'));

// Registration routes
app.use('/',indexRouter)
app.use('/users',usersRouter)


app.listen(PORT,()=>{
    console.log('Server has been started on port ',PORT);
})