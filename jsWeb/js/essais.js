function f1(){
    addMessage("f1");
}

var refF2 = function (){
    addMessage("f2");
}

function Personne(prenom , nom){
    this.prenom = prenom;
    this.nom = nom;
    this.age = 0; //undefined;
    this.incrementerAge = function (){
        this.age++;
    }
}


function mesEssais(){
   var p1 = new Personne("alain" , "Therieur");
   p1.age=25;
   p1.incrementerAge();
   addMessage("age=" + p1.age);
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

