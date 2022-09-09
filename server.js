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
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: expiryDate
    }
}))
.use(require('./middleware/flash'))

// routes

// app.get('/backOffice', (req, res, next)=>{
// let user = req.session.user;
// if(user){
    
//     res.render('pages/backOfficeEmail',{opp:req.session.opp, name: user.Username});
//     return;
// }
// res.redirect('/');
// }); 

// app.get('/backOffice/commentaire', (request, response,) => {
    
//     let Message = require ('./models/message')
//     Message.all(function (comment){
//         response.render('pages/backOfficeCom',{comments: comment})
      
        
//     }) 
// })
app.post('/', (request, response) =>{

    if(request.body == undefined || request.body ===''){
      request.flash('error',"Vous n'avez pas remplis correctement")
    response.redirect('/')
    }else{
    let Message = require ('./models/message')
    Message.create(request.body, function(){
        request.flash('success', "Merci !")
        response.redirect('/')
        })
    }
})

// app.get('/backOffice/email', (request, response) => {
//     let Email = require ('./models/email')
//     Email.allMessage(function (messagerie){
//         response.render('pages/backOfficeEmail',{messageries: messagerie})
//     })
// })

app.post('/email', (request, response) =>{

    if(request.body == undefined){
      request.flash('error',"Vous n'avez pas remplis correctement")
    response.redirect('/')
    }else{
    let Email = require ('./models/email')
    Email.createMessage(request.body, function(){
        request.flash('success', "Merci !")
        response.redirect('/')
        })
    }
})

// app.post('/delete/(:ID)', (request, response, next) => {

//     let Email = require ('./models/email')
//     Email.deleteMessage(request.params.ID);
//     response.render('pages/index');
      
//     })
app.post('/delete/commentaire/(:ID)', (request, response, next) => {

    let Message = require ('./models/message')
    Message.deleteCom(request.params.ID);
    response.render('pages/backOffice');
          
        })

app.post('/backOffice/delete',(request, response, next)=>{
    let Email = require ('./models/email')
    Email.deleteMessage(request.body.Email1, function (result){
    response.json(result);
    });
    })


app.get('/', (request, response) => {
    let ProduitType = require ('./models/type')
    ProduitType.allProductType(function (type){
    response.render('pages/index',{types: type})
    
})
})
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
        res.render('pages/backOffice')
    })

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
            res.render('pages/backOfficeControl',{opp:req.session.opp, name: user.Username, comments: comment, messageries: messagerie, products: product, users: user});
            return;
        })
    })
})})
}})
     

app.listen(8000)