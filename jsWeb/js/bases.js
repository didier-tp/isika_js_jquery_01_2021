function maPremiereFonctionJavascript(){
    /*
    document.write("texte1 ajouté en fin de page html <br/>")
    document.write("texte2 ajouté en fin de page html <br/>")
    console.log("nouveau message dans console web du navigateur")
    alert("message dans boite d'alerte");
    */
    var eltDivA = document.getElementById("divA");
    eltDivA.innerHTML="texte HTML dans Zone dont l'id est divA"
}

function f2(){
 var eltDivB = document.getElementById("divB");
 eltDivB.innerHTML="affichage dans Zone dont l'id est divB";
}