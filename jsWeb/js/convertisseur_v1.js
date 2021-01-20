//variables globales:
var eltTxtRadians ;
var eltTxtDegres ;
var eltSpanMessage ;

var coeff;

function initialisations(){

    coeff = 360 / Math.PI;

    eltTxtRadians = document.getElementById("txtRadians");
    eltTxtDegres = document.getElementById("txtDegres");
    eltSpanMessage = document.getElementById("spanMessage");
    razMessage();
}

function razMessage(){
    eltSpanMessage.innerHTML="<i>jusqu'ici tout va bien</i>";
    //eltSpanMessage.innerText="jusqu'ici tout va bien";
    eltSpanMessage.style.color="green";
}

function afficherErreur(errorMsg){
    eltSpanMessage.innerText=errorMsg;
    eltSpanMessage.style.color="red";
}

function radiansToDegres(){
    razMessage();
    if (isNaN(eltTxtRadians.value)){
        afficherErreur("le nombre de radians à convertir doit être numérique")
    }else{
        eltTxtDegres.value = coeff * eltTxtRadians.value;
    }
}

function degresToRadians(){
    razMessage();
    if (isNaN(eltTxtDegres.value)){
        afficherErreur("le nombre de degrés à convertir doit être numérique")
    }else{
        eltTxtRadians.value =   eltTxtDegres.value / coeff;
    }
}