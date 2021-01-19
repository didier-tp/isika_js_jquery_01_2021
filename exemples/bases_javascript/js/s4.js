
 var eltDivA; // variable de portee globale

function initComportementJs(){
	console.log("initComportementJs");
	
	eltDivA = document.getElementById("divA"); //ou .querySelector("#divA")
	
	var btnAction =  document.querySelector("#btnAction");
	btnAction.addEventListener("click",doAction,false);
	
	document.querySelector("#btnMontrerCacher").addEventListener("click",function(evt){
		if(eltDivA.style.display == "none" )
			eltDivA.style.display = "block";
		else 
			eltDivA.style.display = "none"
	},false);
	
}

function doAction(){
	
	var eltListe = document.getElementById("idListe"); //ou .querySelector("#idListe")
	var eltSelect = document.getElementById("idSelect"); //ou .querySelector("#idSelect")
	
	var listeValeurAsJsonString=
	'[ { "label" : "janvier" , "value" : 120} , { "label" : "fevrier" , "value" : 70 } ]';
	var tableauObjetsJs = JSON.parse(listeValeurAsJsonString);
	for(i=0;i<tableauObjetsJs.length;i++){
		var objetJs = tableauObjetsJs[i];
		//ajout dans liste à puces <ul> :
		var eltLI = document.createElement("li"); 
		eltListe.appendChild(eltLI); //ajouter <li> dans parent <ul>
		var noeudTexte = document.createTextNode(objetJs.label + " : " + objetJs.value);
	    eltLI.appendChild(noeudTexte);
		
		//ajout dans liste deroulante <select>:
		var eltOption = document.createElement("option"); 
		eltSelect.appendChild(eltOption);
		var noeudTexte2 = document.createTextNode(objetJs.label + " : " + objetJs.value);
	    eltOption.appendChild(noeudTexte2);
		eltOption.setAttribute("value",JSON.stringify(objetJs));
	}
	
	eltSelect.addEventListener("change",function (evt){
		console.log("changement de selection sur " + evt.target.nodeName );
		console.log("de id=" + evt.target.id );
		console.log("de valeur=" + evt.target.value );
		document.getElementById("spanMsg").innerHTML = "valeur selectionnee:" + evt.target.value ;
	}, false);
	
	
   
	
	var nouvelEltP = document.createElement("p");
	eltDivA.appendChild(nouvelEltP);
	
	var noeudTexte = document.createTextNode("789");
	nouvelEltP.appendChild(noeudTexte);
	
	var listeSousElements = eltDivA.childNodes;
	var nbVal= 0;
	var sommeVal = 0;
	for(i=0;i<listeSousElements.length;i++){
		var sousElement = listeSousElements.item(i);	
		if(sousElement.nodeType==Node.ELEMENT_NODE) {
		    console.log(sousElement.nodeName + " : " + sousElement.innerHTML );
			if(sousElement.nodeName.toLowerCase()  == "p" ){
				nbVal ++;
				sommeVal += Number(sousElement.innerHTML); //encore améliorable
			}
		}
	}
	console.log("nbVal=" + nbVal + ", sommeVal=" + sommeVal + ", moyenne=" + sommeVal/nbVal );
}
