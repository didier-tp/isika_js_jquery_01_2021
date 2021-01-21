//variables globales:

var eltSelProduct;
var eltSpanIdProd;

var tabProduits = [
   { code:1 , nom : "cahier" , prix: 3.5 , 
     description : "grand cahier" , categorie : "papeterie" } ,
  { code:2 , nom : "stylo" , prix: 1.5 , 
     description : "stylo bille bleu" , categorie : "papeterie" } ,
  { code:3 , nom : "pc" , prix: 567.5 , 
     description : "pc portable 15 pouces" , categorie : "ordinateur" } 
];

//...

function initialisations(){
     eltSelProduct = document.querySelector("#selProduct");
     eltSpanIdProd = document.querySelector("#spanIdProd");

    for(let i in tabProduits){
      let eltOption = document.createElement("option");
      eltOption.setAttribute("value",tabProduits[i].code);//construit value="1_ou_2"
     
      //eltOption.appendChild(document.createTextNode(tabProduits[i].nom));

      //eltOption.innerHTML=tabProduits[i].nom;
      eltOption.innerHTML="[" + tabProduits[i].code + "] " + tabProduits[i].nom;
      eltSelProduct.appendChild(eltOption);
    }

    eltSelProduct.addEventListener("change",function (evt){
        eltSpanIdProd.innerHTML=evt.target.value;
    });


}
window.onload= initialisations;