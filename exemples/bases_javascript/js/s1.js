function afficher(pVal){
		   console.log(pVal);
	       //document.write(pVal); //ecrit dans la page en écrasant quelquefois le reste ==> rudimentaire
		   (document.getElementById("spanMsg")).innerHTML = pVal;
		   //alert(pVal);
		}