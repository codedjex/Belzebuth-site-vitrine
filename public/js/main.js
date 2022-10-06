const imgTop = document.getElementById('imageTop');

const TextT = document.getElementById('textTitle');
const img1 = document.getElementById('img1');
const img3 = document.getElementById('img3');

window.addEventListener('scroll', ()=>{
imgTop.style.top = window.scrollY / 2 + "px";
});

window.addEventListener('scroll', ()=>{
    if(window.scrollY<250){
        img1.style.top = img1.style.top
    }else{
        img1.style.top = -window.scrollY/4 + "px";
    }
})
window.addEventListener('scroll', ()=>{
    if(window.scrollY<300){
        img3.style.top = img3.style.top
    }else if(window.scrollY>1350){
        img3.style.top = img3.style.top
    }else{
        img3.style.top = window.scrollY/3 + "px";
    }
})
function Reseau(){
    document.querySelector('.ContainerReseau').classList.add('open');
}
function Reseau1(){
    document.querySelector('.ContainerReseau').classList.remove('open');
}
function Email(){
    document.querySelector('.ContainerEmail').classList.add('open');
}
function Email1(){
    document.querySelector('.ContainerEmail').classList.remove('open');
}

function connexion1(){
    document.querySelector('.containerConnexion').classList.add('open');
}
function connexion2(){
    document.querySelector('.containerConnexion').classList.remove('open');
}
function descente(){
    document.querySelector('.Menu').classList.toggle('descente')
    document.querySelector('.menuBurger').classList.toggle('descente1')

}

function sendEmail(){
    if(window.confirm('Voulez-vous vraiment envoyer cet Email ?')){         

        $.post(
        '/email',
        {field1:1, field2:2, field3:3, field4:4, field5:5},
        function(data, status){
            console.log(data)
           
        }
    );
    
        }    
}
