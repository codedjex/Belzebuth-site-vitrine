function voir(){
    document.querySelector('.contenu1').classList.toggle('open')
}
function voir1(){
    document.querySelector('.contenu2').classList.toggle('open')
}
function voir2(){
    
    document.querySelector('.contenu3').classList.toggle('open')
}
function voir3(){
    
    document.querySelector('.contenu4').classList.toggle('open')
}
function supprimerEmail(e, ID){
    if(window.confirm('Voulez-vous vraiment supprimer cet email ?')){         

        $.post(
        '/backOffice/delete',
        {Email1:ID},
        function(data, status){
            document.getElementsByClassName('testdel').innerHTML += "<p>email supprimé</p>";
            e.parentElement.parentElement.remove();
        }
    );
    
        }    
}
function supprimerCom(e, ID){
    if(window.confirm('Voulez-vous vraiment supprimer ce commentaire ?')){         

        $.post(
        '/backOffice/delete',
        {com1:ID},
        function(data, status){
            document.getElementsByClassName('testdel1').innerHTML += "<p>commentaire supprimé</p>";
            e.parentElement.parentElement.remove();
        }
    );
    
        }    
}
function supprimerProduct(e, ID){
    if(window.confirm('Voulez-vous vraiment supprimer ce commentaire ?')){         

        $.post(
        '/backOffice/delete',
        {product1:ID},
        function(data, status){
            document.getElementsByClassName('testdel2').innerHTML += "<p>produit supprimé</p>";
            e.parentElement.parentElement.remove();
        }
    );
    
        }    
}
function supprimerUser(e, ID){
    if(window.confirm('Voulez-vous vraiment supprimer ce commentaire ?')){         

        $.post(
        '/backOffice/delete',
        {user1:ID},
        function(data, status){
            document.getElementsByClassName('testdel3').innerHTML += "<p>utilisateur supprimé</p>";
            e.parentElement.parentElement.remove();
        }
    );
    
        }    
}
function remplirDonneesProduit(ID, Title, Description, Type) {
    document.querySelector('.BackgroundEditProduct').classList.add('open1');

    document.getElementById('ID').value = ID;
    document.getElementById('Title').value = Title;
    document.getElementById('Description').value = Description;
    document.getElementById('Type').value = Type;



}
function ajoutProduit(){
document.querySelector('.BackgroundAddProduct').classList.add('open1');
}

function rentrer() {
    document.querySelector('.BackgroundEditProduct').classList.remove('open1');
}
function rentrerAjoutProduit() {
    document.querySelector('.BackgroundAddProduct').classList.remove('open1');

}
function remplirDonneesCommentaire(ID) {
    document.querySelector('.BackgroundAddCom').classList.add('open1');

    document.getElementById('IDC').value = ID;
 

}
function rentrerAjoutCom() {
    document.querySelector('.BackgroundAddCom').classList.remove('open1');

}




