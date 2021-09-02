const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Posts')
//invocar servidor
app.listen(8081, function(){
    console.log('servidor rodando')
});

//config
// template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
//body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function(req, res){
    Post.findAll().then(function(posts){
    res.render('home', {posts: posts})
    })
    })


app.post("/add", function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Houve um erro")
    })
})

app.get('/editar' , function(req,res){
    res.render(__dirname +'/views/layouts/formulario')
})

app.get('/cad' , function(req,res){
    res.render(__dirname +'/views/layouts/formulario')
})

app.get('/deletar/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("Postagem deletada")
    }).catch(function(erro){
        res.send("houve um erro"+erro)
    })
})

