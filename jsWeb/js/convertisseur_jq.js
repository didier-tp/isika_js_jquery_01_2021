//variables globales:
var coeff;

//function initialisations(){ }
$( function(){

    coeff = 360 / Math.PI;
    razMessage();

    $("#cbShowHisto").on("change" , function(evt){
		//var estCoche = evt.target.checked;
		var estCoche = $("#cbShowHisto").prop("checked");
		//var estCoche = ($("#cbShowHisto").get(0)).checked;
		
		console.log("estCoche="+estCoche);
		//V1:
        //$("#ulHistorique").css("display",estCoche?"block":"none");
		/*
		//V2:
		if(estCoche)
			$("#ulHistorique").show();
		 else
		   $("#ulHistorique").hide();
	    */
		//V3 (avec effet ):
		if(estCoche)
			$("#ulHistorique").fadeIn(800);//400ms par defaut
		 else
		   $("#ulHistorique").fadeOut(800);
    })
	
	$("#btnDegresToRadians").on("click" , degresToRadians);
	$("#btnRadiansToDegres").on("click" , radiansToDegres);
});

function addConversionHistorique(textConv){
    //V1:
	$("#ulHistorique").append("<li>"+textConv+"</li>");
}

function razMessage(){
    $("#spanMessage").html("<i>jusqu'ici tout va bien</i>");
    $("#spanMessage").css("color","green");
}

function afficherErreur(errorMsg){
	$("#spanMessage").html(errorMsg);
    $("#spanMessage").css("color","red");
}

function radiansToDegres(){
    razMessage();
	let valEnRadians = $("#txtRadians").val();
    if (isNaN(valEnRadians)){
        afficherErreur("le nombre de radians à convertir doit être numérique")
    }else{
		let valEnDegres = coeff * valEnRadians;
        $("#txtDegres").val( valEnDegres );
        addConversionHistorique(valEnRadians + " radians = " + valEnDegres + " degrés" )
    }
}

function degresToRadians(){
    razMessage();
	let valEnDegres = $("#txtDegres").val()
    if (isNaN(valEnDegres)){
        afficherErreur("le nombre de degrés à convertir doit être numérique")
    }else{
		let valEnRadians = valEnDegres / coeff;
        $("#txtRadians").val( valEnRadians );
        addConversionHistorique(  valEnDegres + " degrés = " + valEnRadians + " radians" )
    }
}

