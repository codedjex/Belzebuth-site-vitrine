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
function supprimerEmail(ID){
    $.post(
        '/backOffice/delete',
        {Email1:ID},
        function(data, status){
            Object.values(data=>{
                document.getElementsByClassName('testdel')[0].innerHTML += "<h5>Email "+value['ID']+" supprimé</h5>"
            })
            console.log(data)
        }
    )
    }
