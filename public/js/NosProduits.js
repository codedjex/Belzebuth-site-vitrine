

function deplier(ID_Product){
$.post(
    '/NosProduits/recuperer',
    {AllProduit:ID_Product},
    function(data, status){
        Object.values(data).forEach(value=>{
            document.getElementsByClassName('block2')[ID_Product-1].innerHTML += "<div class='blockListeProduit'><h4>"+value['Title']+"</h4> <p>"+value['Description']+"</p></div>"
        })
        console.log(data)
    }
)
    document.getElementsByClassName('containerProduit')[ID_Product-1].setAttribute("class","containerProduit open");
}
function deplier1(){
    document.getElementsByClassName('open')[0].setAttribute("class","containerProduit");

}