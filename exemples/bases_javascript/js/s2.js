
function initComportementJs(){
	console.log("initComportementJs");
	var btnMultiplication =  document.querySelector("#btnMultiplication");
	//on enregistre le déclenchement de la fonction calculerMultiplication()
	//en l'associant à l'événement "click" sur la zone dont d'id est btnMultiplication
	btnMultiplication.addEventListener("click",calculerMultiplication,false);
}

function calculerMultiplication(){
    console.log("calculerMultiplication");
	calculerOperation("*");
}

function calculerOperation(pOperation){
		  
		  var a =  (document.querySelector("#a")).value; //document.getElementById("a").value;
		  console.log("a="+a);
		  var b =   document.querySelector("#b").value;  //document.getElementById("b").value;
		  console.log("b="+b);
		  
		  var res = 0;
		  if(pOperation == '+'){
		      res = Number(a)+Number(b); // le + déclenche une concaténation entre 2 string
		                 //ou bien une addition entre 2 choses numériques
		    }else if(pOperation == '*'){
			  res=a*b;
		   }
		  
		  //document.getElementById("spanRes").innerHTML = res;
          document.querySelector("#spanRes").innerHTML = res;
		  
		  document.querySelector(".enEvidence").style.backgroundColor = "yellow";	
          /* 
          var tabInputs = document.querySelectorAll("input");
		  for( index in tabInputs){
			  if(tabInputs[index] != null)
			     tabInputs[index].style.backgroundColor = "green";	
		  }
          */
          		  
		}