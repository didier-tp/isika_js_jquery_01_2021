function f1(){
    addMessage("f1");
}

var g1="ok";

var refF2 = function (){
    addMessage("f2");
}

function Adresse(rue,cp,ville){
    this.rue=rue;
    this.cp=cp;
    this.ville=ville;
}

function Personne(prenom , nom){
    this.prenom = prenom;
    this.nom = nom;
    this.age = 0; //undefined;
    this.adresse = new Adresse();
    this.incrementerAge = function (){
        this.age++;
    }
    this.toString= function (){
        return JSON.stringify(this);
    }
}

function moyenne(tableau){
    var n = tableau.length;
    var somme =0;
    for(let i in tableau){
      somme += tableau[i];
    }
    return somme/n;
}

function inverserTab(tableau){
    var n = tableau.length;
    var tabInv = new Array(); //ou bien []
    for(let i = n-1; i >=0; i--){
        tabInv.push(tableau[i]);
    }
    return tabInv;
}

function Produit(reference , label, prixHt){
    this.reference = reference;
    this.label = label;
    this.prixHt = prixHt; 
    this.tauxTva = 20; //20% par defaut
    this.prixTtc = function (){
        return this.prixHt * (1 + this.tauxTva/100);
    }
    this.toString= function (){
        return JSON.stringify(this);
    }
}


function mesEssais(){
    //v3 (à faire en Tp)

    //construire , remplir et afficher un tableau associatif
    //entre couleurs anglaises et francaises ( green - vert , red - rouge, ...)
    var tabColors = [];
    tabColors['green']="vert";
    tabColors['red']="rouge";
    tabColors['blue']="bleu";
    tabColors['yellow']="jaune";
    tabColors['white']="blanc";
    tabColors['black']="noir";
    for(let key in tabColors){
        addMessage(key + " - " + tabColors[key]);
    }

    //construire et remplir un tableau de valeurs numeriques
    //puis - calculer et afficher la moyenne
    //     - inverser l'ordre des éléments (premier , dernier , ...)
    var tabVal = [ 23 , 45 , 67 , 4 , 6 , 89 , 6];
    tabVal.push(83); tabVal.push(37);
    var m = moyenne(tabVal);
    addMessage("moyenne =" + m);
    var tabValInverse = inverserTab(tabVal);
    addMessage("tabValInverse =" + tabValInverse);

    //construire une classe de Produit permettant d'écrire
    //p1 = new Produit('refP1' , 'grand cahier' , 3.5); où 3.5 est le prix
    p1 = new Produit('refP1' , 'grand cahier' , 3.5); 
    addMessage("Produit p1=" + p1.toString());
    addMessage("prix ttc de p1=" + p1.prixTtc());


    //constuire en remplir un tableau de produits (avec 3 ou 4 produits)
    //puis : 
    //     - calculer la somme des prix des produits
    //     - afficher que les produits dont le prix est < 20
    var tabProduits = []
    tabProduits.push(p1);
    tabProduits.push(new Produit('refP2' , 'clef USB 256Go' , 23.5));
    tabProduits.push(new Produit('refP3' , 'stylo bille' , 1.25));
    tabProduits.push(new Produit('refP4' , 'imprimante jet encre' , 263.59));
    var sommePrix = 0;
    for(let i in tabProduits){
        sommePrix += tabProduits[i].prixTtc();  //ou bien.prixHt;
    }
    addMessage("somme des prix ttc des produits=" + sommePrix);
    addMessage(">>liste des produits de prix < à 20 :" );
    for(let i in tabProduits){
        if(tabProduits[i].prixHt < 20)
           addMessage(">> " + tabProduits[i]);
    }
    //+ autres essais libres
    //retrier selon prix croissants
    tabProduits.sort( (p1,p2)=>p1.prixHt - p2.prixHt );
    addMessage("## liste des produits par  prix croissants" );
    for(let i in tabProduits){
           addMessage("## " + tabProduits[i]);
    }

}

function mesEssais_v2(){
   var p1 = new Personne("alain" , "Therieur");
   p1.age=25;
   p1.adresse = new Adresse("12 rue Elle",75001 , "Paris");
   p1.incrementerAge();
   p1["incrementerAge"](); //possible mais moins naturel.
   addMessage("p1.age=" + p1.age);
   addMessage("p1.toString()=" + p1.toString());

   p1.couleurYeux = 'vert'; //possible

   addMessage("age de p1=" + p1["age"]);

   var sP1Json = JSON.stringify(p1);
   addMessage("sP1Json=" + sP1Json);

   localStorage.setItem("p1",sP1Json); //localStorage = objet prédéfini navigateur HTML5
   //...
   var copy_sP1Json = localStorage.getItem("p1");
   var cloneDeP1 = JSON.parse(copy_sP1Json);
   addMessage("cloneDeP1.nom=" + cloneDeP1.nom);

   var p2 = new Personne();
   addMessage("p2.nom=" + p2.nom);
   addMessage("typeof p2:" + typeof p2);
   if( p2 instanceof Personne)
      addMessage("p2 est de type Personne");
    else addMessage("p2 n'est pas de type Personne");

   // objet literal javascript (proche de JSON mais sans les "" sur les propriétés)
   var p3 = {
       prenom : "didier",      
       nom : "Defrance",       
       age : 51,
       fou : true
   }
   addMessage("typeof p3:" + typeof p3);
   if( p3 instanceof Personne)
      addMessage("p3 est de type Personne");
    else addMessage("p3 n'est pas de type Personne");

    var p3AsPersonne = Object.assign(new Personne(),p3);
    if( p3AsPersonne instanceof Personne)
       addMessage("p3AsPersonne est de type Personne");
    p3AsPersonne.incrementerAge();
    addMessage(p3AsPersonne.toString());
    
    var tab1 = [ 23 , 45 , 67.8 ];
    delete tab1[1]; //remplace 45 par undefined
    //tab1.splice(1,1); //supprime 1 case à partir de la position 1

    var tab2 = [ "lundi" , "mardi" ]; // = []
    tab2[2]="mercredi";
    tab2.push("jeudi");

    for(let i=0; i<tab1.length;i++){
        addMessage(i + " - " + tab1[i]);
    }
    for(let ii in tab1){
        addMessage(ii + " -- " + tab1[ii]);
    }
   
    for(let j in tab2){
        addMessage(j + " - " + tab2[j]);
    }

    var tabAssoc = [];
    tabAssoc['hiver']="neige";
    tabAssoc['été']="soleil";
    for(let key in tabAssoc){
        addMessage(key + " - " + tabAssoc[key]);
    }

}

function mesEssais_v1(){

    refF2();

    var ref_f1 ;
    ref_f1 = f1;
    ref_f1(); //appel de la fonction référencée par ref_f1
    addMessage("type de ref_f1=" + (typeof ref_f1));

    var prenom='jean';
    var nom ="Bon";
    //addMessage("je m'appelle " + prenom + " " + nom);
    var age=33;
    addMessage("j'ai " + age + " ans");
    //addMessage("type de variable nom: " + typeof nom)
   //à compléter par la suite en Tp 
   var v;
   addMessage("type de variable v: " + typeof v)
   v = "abc";
   addMessage("type de variable v: " + typeof v)
   v=50; age=34
   addMessage("type de variable v: " + typeof v)

   var n=25; 
   let s="25";
   var s2="30";
   addMessage("s+s2=" + (s+ s2));
   addMessage("addition s+s2=" + (Number(s)+ Number(s2)));
   if(n==s) 
     addMessage(" s et n ont des valeurs considérées comme identiques");
   if(n===s) 
     addMessage(" s et n ont a la fois meme type et meme valeur");
   
   var x = Number(s);
   addMessage("x="+x+" et est de type  " + typeof x);

   if(isNaN(s))
      addMessage("la valeur de s n'est pas numerique");
    else 
      addMessage("la valeur de s est numerique");
}

