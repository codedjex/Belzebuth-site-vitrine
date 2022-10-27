let express = require ('express')
let app = express()
let bodyParser = require('body-parser')
const session = require('express-session')
const User = require('./models/login')
const connection = require('./config/connexion')
const { request } = require('http')
const Produit = require('./models/product')
const { render } = require('ejs')

const user = new User();
var expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour
// moteur de template
app.set('view engine', 'ejs')

// middlewares
app
.use(express.static(__dirname + '/public'))
.use(bodyParser.urlencoded({extended: false}))
.use(bodyParser.json())
.use(session({
    secure: true,
    httpOnly: true,
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: expiryDate
    }
}))
.use(require('./middleware/flash'))

app.post('/', (request, response) =>{

    if(request.body == undefined || request.body ===''){
      request.flash('error',"Vous n'avez pas remplis correctement")
    response.redirect('/index')
    }else{
    let Message = require ('./models/message')
    Message.create(request.body, function(){
        request.flash('success', "Merci pour votre commentaire tout gentil, tout kiki!")
        response.redirect('/index')
        })
    }
})



app.post('/email', (request, response) =>{

    if(request.body == undefined){
      request.flash('error',"Vous n'avez pas remplis correctement")
    response.redirect('/index')
    }else{
    let Email = require ('./models/email')
    Email.createMessage(request.body, function(){
        request.flash('success', "Votre mail a bien était envoyé !")
        response.redirect('/index')
        })
    }
})
app.post('/backOffice/AddProduct', (request, response) =>{

    if(request.body == undefined){
      request.flash('error',"Vous n'avez pas remplis correctement")
    response.redirect('/')
    }else{
    let Produit = require ('./models/product')
    Produit.createProduit(request.body, function(){
        request.flash('success', "Votre produit a bien été ajouté!")
        response.redirect('/backOffice/Control');
        })
    }
})


app.post('/backOffice/delete',(request, response, next)=>{
    let Message = require ('./models/message')
    Message.deleteCom(request.body.com1, function (result){
    response.send('suppression reussi');
    });
    })

app.post('/backOffice/delete',(request, response, next)=>{
    let Email = require ('./models/email')
    Email.deleteMessage(request.body.Email1, function (result){
    response.send('suppression reussi');
    });
    })

    app.post('/backOffice/delete',(request, response, next)=>{
        let Users = require ('./models/email')
        Users.deleteUser(request.body.user1, function (result){
        response.send('suppression reussi');
        });
        })

    app.post('/backOffice/delete',(request, response, next)=>{
        let Produit = require ('./models/email')
        Produit.deleteProduct(request.body.product1, function (result){
        response.send('suppression reussi');
        });
        })


app.get('/index', (request, response) => {
    let ProduitType = require ('./models/type')
    ProduitType.allProductType(function (type)
    {
    let Message = require ('./models/message')
    Message.validCom(function (comment)
    {
    response.render('pages/index2',{types: type, comments: comment})
    
})
    })})
app.post('/backOffice', (req, res, next) => {

    user.loginUser(req.body.Username, req.body.Password, function(result) {
        if(result){
            req.session.user = result;
            req.session.opp = 1;

        res.render('pages/backOffice');
    }else{
        res.send('identifiant ou mot de passe incorrecte');
    }
 })
});


app.post('/registry', (req, res, next) => {
    let userInput = {
        Username: req.body.Username,
        Email: req.body.Email,
        Password: req.body.Password
    };
    user.createUser(userInput, function(lastId){
        if(lastId){
            req.session.user = result;
            req.session.opp = 0;

        res.redirect('/backOffice');
        }else{
            console.log('Error to creating new user');
        }
    });
});

app.get('/NosProduits', (request, response, next) => {
    let ProduitType = require ('./models/type')
    ProduitType.allProductType(function (type)
    {
        let Produit = require ('./models/product')
        Produit.allProduct(function (product){
    response.render('pages/NosProduits',{types: type, products: product})
        })
    })
})
app.post('/NosProduits/recuperer',(request, response, next)=>{
    let Produit = require ('./models/product')
    Produit.allProduct1(request.body.AllProduit, function (result){
        response.json(result);
    });
    })

app.get('/backOffice', (req, res, next)=>{
    let user = req.session.user;
    if (user){
        res.render('pages/backOffice', {opp:req.session.opp, name: user.Username});
    }})


app.get('/backOffice/Control', (req, res, next)=>{
    let user = req.session.user;
    if(user){
            let Message = require ('./models/message')
        Message.all(function (comment)
        {
        let Email = require ('./models/email')
        Email.allMessage(function (messagerie)
        { 
        let Users = require ('./models/user')
        Users.allUsers(function (user)
        {
        let Produit = require ('./models/product')
        Produit.allProduct(function (product)
        {
            res.render('pages/backOfficeControl',
            {opp:req.session.opp, 
            name: user.Username,
            comments: comment, 
            messageries: messagerie, 
            products: product, 
            users: user});
            return;
        })
    })
})})
}})
app.post("/backOffice/ModifProduct", (req, res) => {
    let id = req.body.ID === "" ? null : req.body.ID;
    let titre = req.body.Title;
    let description = req.body.Description;
    let type = req.body.Type;
  
    let reqSql =
      id === null
        ? "INSERT INTO product(ID, Title, Description, Type) VALUES(?, ?, ?, ?)"
        : "UPDATE product SET Title = ?, Description = ?, Type = ? WHERE ID = ?";
  
    let donnees =
      id === null ? [null, titre, description, type] : [titre, description, type, id];
    connection.query(reqSql, donnees, (error, result) => {
        res.redirect('/backOffice/Control');
        });
    })
    app.post("/backOffice/AddCom", (req, res) => {
        let idC = req.body.ID === "" ? null : req.body.ID;
        let validerC = req.body.valider;
      
        let reqSqlC =
          idC === null
            ? "INSERT INTO comment(ID, valider) VALUES(?, ?)"
            : "UPDATE comment SET valider = ? WHERE ID = ?";
      
        let donneesC =
          idC === null ? [null,validerC] : [validerC, idC];
        connection.query(reqSqlC, donneesC, (error, result) => {
            res.redirect('/backOffice/Control');
            });
        })
app.listen(8000)