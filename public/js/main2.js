function descente(){
    document.querySelector('.Menu').classList.toggle('descente')
    document.querySelector('.menuBurger').classList.toggle('descente1')

}
const TextT = document.querySelector('.titleStSection');

window.addEventListener('scroll', ()=>{
    if(window.scrollY<548){
        TextT.style.top = window.scrollY/3.3 + "px";
    }else{
        TextT.style.top = TextT.style.top;
    }
})

const TexTypeWrapper = document.querySelector('.wrapperTypeProductShort')
const TextType = document.querySelector('.whisky');
const TextType1 = document.querySelector('.vodka');
const TextType2 = document.querySelector('.rhum');
const TextType3 = document.querySelector('.gin');
const TextType4 = document.querySelector('.tequila');
const TextType5 = document.querySelector('.bière');
const TextType6 = document.querySelector('.vin');
const TextType7 = document.querySelector('.Little');

window.addEventListener('scroll', ()=>{
    if(window.scrollY<190){
        TextType.style.transform= "translateX(100vw)";
    }else if(window.scrollY>=190 && window.scrollY<=220){
        TextType.style.transform= "translateX(66vw)";
    }else if (window.scrollY>220 && window.scrollY<=250){
        TextType.style.transform= "translateX(33vw)";  
    }else{
        TextType.style.transform= "translateX(0vw)"; 
    }
 } )
window.addEventListener('scroll', ()=>{
        if(window.scrollY<230){
            TextType1.style.transform= "translateX(100vw)";
        }else if(window.scrollY>=230 && window.scrollY<=260){
            TextType1.style.transform= "translateX(66vw)";
        }else if (window.scrollY>260 && window.scrollY<=290){
            TextType1.style.transform= "translateX(33vw)";  
        }else{
            TextType1.style.transform= "translateX(0vw)"; 
        }
} )
window.addEventListener('scroll', ()=>{
        if(window.scrollY<270){
            TextType2.style.transform= "translateX(100vw)";
        }else if(window.scrollY>=270 && window.scrollY<=300){
            TextType2.style.transform= "translateX(66vw)";
        }else if (window.scrollY>300 && window.scrollY<=330){
            TextType2.style.transform= "translateX(33vw)";  
        }else{
            TextType2.style.transform= "translateX(0vw)";; 
        }
} )
window.addEventListener('scroll', ()=>{
        if(window.scrollY<310){
            TextType3.style.transform= "translateX(100vw)";
        }else if(window.scrollY>=310 && window.scrollY<=340){
            TextType3.style.transform= "translateX(66vw)";
        }else if (window.scrollY>340 && window.scrollY<=370){
            TextType3.style.transform= "translateX(33vw)";;  
        }else{
            TextType3.style.transform= "translateX(0vw)"; 
        }
} )
window.addEventListener('scroll', ()=>{
        if(window.scrollY<350){
            TextType4.style.transform= "translateX(100vw)";
        }else if(window.scrollY>=350 && window.scrollY<=380){
            TextType4.style.transform= "translateX(66vw)";
        }else if (window.scrollY>380 && window.scrollY<=410){
            TextType4.style.transform= "translateX(33vw)"; 
        }else{
            TextType4.style.transform= "translateX(0vw)";
        }
} )
window.addEventListener('scroll', ()=>{
        if(window.scrollY<390){
            TextType5.style.transform= "translateX(100vw)";
        }else if(window.scrollY>=390 && window.scrollY<=420){
            TextType5.style.transform= "translateX(66vw)";
        }else if (window.scrollY>420 && window.scrollY<=450){
            TextType5.style.transform= "translateX(33vw)";  
        }else{
            TextType5.style.transform= "translateX(0vw)"; 
        }
} )
window.addEventListener('scroll', ()=>{
        if(window.scrollY<430){
            TextType6.style.transform= "translateX(100vw)";
        }else if(window.scrollY>=430 && window.scrollY<=460){
            TextType6.style.transform= "translateX(66vw)";
        }else if (window.scrollY>460 && window.scrollY<=490){
            TextType6.style.transform= "translateX(33vw)";  
        }else{
            TextType6.style.transform= "translateX(0vw)"; 
        }
} )
window.addEventListener('scroll', ()=>{
        if(window.scrollY<470){
            TextType7.style.transform= "translateX(100vw)";
        }else if(window.scrollY>=470 && window.scrollY<=500){
            TextType7.style.transform= "translateX(66vw)";
        }else if (window.scrollY>500 && window.scrollY<=530){
            TextType7.style.transform= "translateX(33vw)";  
        }else{
            TextType7.style.transform= "translateX(0vw)"; 
        }
} )
window.addEventListener('scroll', ()=>{
    if(window.scrollY<=623){
        TexTypeWrapper.style.color = "red";
    }else if(window.scrollY>623){
        TexTypeWrapper.style.color = "white";
    }
})

     function contact(){
        document.querySelector('.wrapperReseau').classList.add('open');
    }
    function Reseau1(){
        document.querySelector('.wrapperReseau').classList.remove('open');
    }

function connexion1(){
        document.querySelector('.wrapperConnexion').classList.add('open');
    }
function connexion2(){
        document.querySelector('.wrapperConnexion').classList.remove('open');
    }
    function Email(){
        document.querySelector('.wrapperEmail').classList.add('open');
    }
    function Email1(){
        document.querySelector('.wrapperEmail').classList.remove('open');
    }

// Il y a plusieurs façon de sélectionner un nœud DOM ; ici on récupère
// le formulaire et le champ d'e-mail ainsi que l'élément span
// dans lequel on placera le message d'erreur

var form  = document.getElementById('email');
var email = document.getElementById('E_mail');
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ e-mail.
  if (email.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    error.innerHTML = ""; // On réinitialise le contenu
    error.className = "error"; // On réinitialise l'état visuel du message
  }
}, false);
form.addEventListener("submit", function (event) {
  // Chaque fois que l'utilisateur tente d'envoyer les données
  // on vérifie que le champ email est valide.
  if (!email.validity.valid) {

    // S'il est invalide, on affiche un message d'erreur personnalisé
    error.innerHTML = "J'attends une adresse e-mail correcte, mon cher&nbsp;!";
    error.className = "error active";
    // Et on empêche l'envoi des données du formulaire
    event.preventDefault();
  }
}, false);
function sendEmail(){
    if(window.confirm('Voulez-vous vraiment envoyer cet Email ?')){         

        $.post(
        '/email',
        {field1:1, field2:2, field3:3, field4:4, field5:5},
        function(data, status){
            console.log(data)
           
        }
    );
    
        }  }
