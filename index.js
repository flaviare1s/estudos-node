const express = require('express')
const app = express()
const handlebars = require('express-handlebars').create({ defaultLayout: 'main' })
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')


// Config
    // Template Engine:
        app.engine('handlebars', handlebars.engine)
        app.set('view engine', 'handlebars')
    // Body Parser:
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    // Conexão com o banco de dados MySQL:
    const sequelize = new Sequelize('test', 'root', 'root', {
        host: "localhost",
        dialect: "mysql"
    })

// Rotas
    app.get('/cad', function(req, res) {
        res.render('formulario')
    })

    app.post('/add', function(req, res) {
        res.send('Texto: ' + req.body.titulo + ' Conteúdo: ' + req.body.conteudo)
    })


app.listen(8081, function() {
    console.log('Servidor rodando na url http://localhost:8081/')
})