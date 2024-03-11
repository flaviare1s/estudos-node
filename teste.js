const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(
    function() {
        console.log('Conectado com sucesso!')
    }).catch(function(erro) {
        console.log('Falha ao se conectar! ', erro)
    })



const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: 'Um título qualquer', 
    conteudo: 'Um conteúdo qualquer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur quo expedita hic? Tempore est in nisi optio illum nemo mollitia iste repudiandae cupiditate corrupti aliquam quibusdam rem, dolorum reiciendis! '
})

// Postagem.sync({force: true})


const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: 'João',
    sobrenome: 'Souza',
    idade: 33,
    email: 'teste@email.com'
})

// Usuario.sync({force: true})