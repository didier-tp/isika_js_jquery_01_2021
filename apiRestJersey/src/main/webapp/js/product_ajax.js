//variables globales:

var eltSelProduct;
//var eltSpanIdProd;
var eltTxtCode;
var eltTxtNom;
var eltTxtPrix;
var eltTxtDescription;
var eltTxtCategorie;

var selectedProd = null; //produit selectionné (existant ou nouveau)
var estNouveau = false; //nouveau produit ou pas (pas encore ajouté ni sélectionné)

var tabProduits = []; //tableau des produits en mémoire

/*
//fonction préparant un tableau de produits en mémoire (jeu de données)
function initDataSet(){
   tabProduits = [
      { code:1 , nom : "cahier" , prix: 3.5 , 
        description : "grand cahier" , categorie : "papeterie" } ,
     { code:2 , nom : "stylo" , prix: 1.5 , 
        description : "stylo bille bleu" , categorie : "papeterie" } ,
     { code:3 , nom : "pc" , prix: 567.5 , 
        description : "pc portable 15 pouces" , categorie : "ordinateur" } 
   ];
}
*/

//fonction qui retrouve un produit dans le tableau en mémoire depuis son id:
function findProductById(idProd){
   let prod=null;
   for(let i in tabProduits){
      if(idProd==tabProduits[i].code){
         prod=tabProduits[i]; break;
      }
   }
   return prod;
}

//fonction qui supprime un produit dans le tableau en mémoire depuis son id:
function deleteProductById(idProd){
   for(let i in tabProduits){
      if(idProd==tabProduits[i].code){
         //delete tabProduits[i]; break;
         tabProduits.splice(i,1); break;
      }
   }
}

//fonction qui affiche les valeurs d'un produit
//dans les différents champs de saisie du formulaire:
function displayProductInFormFields(prod){
   //eltSpanIdProd.innerHTML=prod.code;
   eltTxtCode.value = prod.code;
   eltTxtNom.value = prod.nom;
   eltTxtPrix.value = prod.prix;
   eltTxtDescription.value = prod.description;
   eltTxtCategorie.value = prod.categorie;
}

//fonction inverse qui réactualise les valeurs d'un produit
//en fonction des valeurs saisies dans les champs du formulaire:
function updateProductFromValuesOfFormFields(prod){
   let toutOk = true;
   if(isNaN(eltTxtCode.value)){
      toutOk =false;
      alert("le code doit etre numerique ");
      eltTxtCode.focus();
      eltTxtCode.select();
   }else{ 
      prod.code = eltTxtCode.value ;
      if(prod.code == "") 
          prod.code = undefined; //la valeur sera auto-incrémentée par le serveur
   }
   if(eltTxtNom.value == ""){
      toutOk =false;
      alert("la valeur du nom ne doit est vide");
      eltTxtNom.focus();
   }   else{ 
      prod.nom = eltTxtNom.value;
   }
   if(eltTxtPrix.value == "" || isNaN(eltTxtPrix.value)){
      toutOk =false;
      alert("le prix doit etre numerique ");
      eltTxtPrix.focus();
      eltTxtPrix.select();
   }else {
      prod.prix = eltTxtPrix.value;
   }
   prod.description = eltTxtDescription.value;
   prod.categorie = eltTxtCategorie.value;
   return toutOk;
}

//fonction actualisant les états des boutons et ...
function manageStates(){
   if(estNouveau){
      document.querySelector("#btnAdd").disabled = false;
      document.querySelector("#btnUpdate").disabled = true;
      document.querySelector("#btnDelete").disabled = true;
      eltTxtCode.disabled = false;
   }else{
      document.querySelector("#btnAdd").disabled = true;
      document.querySelector("#btnUpdate").disabled = false;
      document.querySelector("#btnDelete").disabled = false;
      eltTxtCode.disabled = true;
   }
}

//Nouvelle sélection dans liste
function onSelectProduct(evt){
   //eltSpanIdProd.innerHTML=evt.target.value;
   let idOfSelectedProd = evt.target.value;
   selectedProd = findProductById(idOfSelectedProd);        
   if(selectedProd!=null){
       estNouveau=false;
       displayProductInFormFields(selectedProd);
       manageStates();
   }
}

//Nouveau produit à saisir
function onNewProduct(evt){
  console.log("onNewProduct()")
  selectedProd={
     code : "",
     nom : "",
     prix : 0,
     description : "",
     categorie : ""
  };
  estNouveau=true;
  eltSelProduct.value=undefined;//plus d'existant sélectionné dans liste <select>
  displayProductInFormFields(selectedProd);
  manageStates();
}



//produit à ajouter (nouveau)
function onAddProduct(evt){
   let saisieCorrecte = updateProductFromValuesOfFormFields(selectedProd);
   if(saisieCorrecte){
      console.log("onAddProduct() , selectedProd="+JSON.stringify(selectedProd));

      let url = "./my-rest-api/product";
	  makeAjaxPostRequest(url,JSON.stringify(selectedProd),function (jsonData) {
		 console.log("ajout bien pris en compte coté serveur=" + jsonData);
	    selectedProd = JSON.parse(jsonData); //avec id/code auto-incrémenté coté serveur
	     //ajout dans le tableau javascript tabProduits (en mémoire):
      	tabProduits.push(selectedProd);
      	//ajout de l'option dans le <select> HTML:
      	addOrUpdateOptionInSelect(selectedProd);
      	//sélection de cette option:
      	eltSelProduct.value=selectedProd.code; 
      	estNouveau=false; //marqué comme enregistré (plus nouveau)
      	manageStates(); //griser/dégriser pour cohérence
	     });
      
   }
}

//produit existant (sélectionné) à mettre à jour
function onUpdateProduct(evt){
   let saisieCorrecte = updateProductFromValuesOfFormFields(selectedProd);
   if(saisieCorrecte){
      console.log("onUpdateProduct() , selectedProd="+JSON.stringify(selectedProd));
      addOrUpdateOptionInSelect(selectedProd);
      let url = "./my-rest-api/product/"+selectedProd.code;
	  makeAjaxPutRequest(url,JSON.stringify(selectedProd),function (jsonData) {
		 console.log("modification bien prise en compte coté serveur=" + jsonData);
	     });
  }   
}

//produit existant (sélectionné) à supprimer
function onDeleteProduct(evt){
   console.log("onDeleteProduct(), selectedProd="+JSON.stringify(selectedProd))
   if(selectedProd && !estNouveau){
      let confirmOk = confirm("confirmez vous la suppression du produit sélectionné ?");
      if(confirmOk){
	     //suppression coté serveur:
         let deleteUrl = "./my-rest-api/product/" + selectedProd.code;
	     makeAjaxDeleteRequest(deleteUrl,function () {
		     //code déclenché en différé (lorsque suppression effectuée coté serveur):
	         deleteProductById(selectedProd.code); //supression dans tabProduits
	         console.log("nouvelle taille de tabProduits après suppression:" + tabProduits.length)
	         //suppression de l'option dans le <select> html :
	         let eltOption = eltSelProduct.querySelector("option[value='"+selectedProd.code+"']");
	         eltSelProduct.removeChild(eltOption);
	         //appel de onNewProduct() pour réinitialiser les champs de saisies:
	         onNewProduct();
	        });
      }
   }
}

//fonction qui ajoute ou met à jour une option dans la balise <select>
function addOrUpdateOptionInSelect(prod){
   let eltOption = null;
   //recherche option éventuellement déjà existante:
   eltOption = eltSelProduct.querySelector("option[value='"+prod.code+"']");
   if(eltOption == null){
      //création d'une nouvelle option:
      eltOption = document.createElement("option");
      eltSelProduct.appendChild(eltOption);
      eltOption.setAttribute("value",prod.code);
   }
   
   //eltOption.innerHTML=prod.nom;
   eltOption.innerHTML="[" + prod.code + "] " + prod.nom + " ("+ prod.prix + ")";
}

function callbackGetProduits(jsonData){
	//jsonData = texte de la réponse fabriquée et retournée par le serveur
	tabProduits = JSON.parse(jsonData);
	for(let i in tabProduits){
		addOrUpdateOptionInSelect(tabProduits[i]);
	}
}

function callbackGeneric(jsonData){
	console.log("jsonData="+jsonData);
}

function onGetViaAjax(){
	//let url ="http://server_xy/.../product"; //quelquefois possible 
	     //mais avec RESTRICTIONS "CORS"
    let url ="./my-rest-api/product"; // URL relative (partant du même serveur)
    makeAjaxGetRequest(url,callbackGetProduits);
}


function initialisations(){
     eltSelProduct = document.querySelector("#selProduct");
     //eltSpanIdProd = document.querySelector("#spanIdProd");
     eltTxtCode = document.querySelector("#txtCode");
     eltTxtNom = document.querySelector("#txtNom");
     eltTxtPrix = document.querySelector("#txtPrix");
     eltTxtCategorie = document.querySelector("#txtCategorie");
     eltTxtDescription = document.querySelector("#txtDescription");

     //initDataSet();

    for(let i in tabProduits){
      addOrUpdateOptionInSelect(tabProduits[i]);
    }

    eltSelProduct.addEventListener("change",onSelectProduct);

    document.querySelector("#btnGetViaAjax").addEventListener("click",onGetViaAjax);

    document.querySelector("#btnNew").addEventListener("click",onNewProduct);
    document.querySelector("#btnAdd").addEventListener("click",onAddProduct);
    document.querySelector("#btnUpdate").addEventListener("click",onUpdateProduct);
    document.querySelector("#btnDelete").addEventListener("click",onDeleteProduct);

    manageStates();
}
window.onload= initialisations;