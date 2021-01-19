
function initComportementJs(){
	console.log("initComportementJs");
	var btnAfficher =  document.querySelector("#btnAfficher");
	btnAfficher.addEventListener("click",calculerEtAfficher,false);
}

 
function calculerEtAfficher(){
     var fx =  document.querySelector("#fx").value;
	 var x = 0;
	 
	 var canvasElement = document.getElementById("idCanvas");
	 var ctx = canvasElement.getContext("2d");
		ctx.beginPath();
		
	var h=400;
    var	l=600;
	var oh = h/2 
	var ol=l/2;
	var ech=100;
	ctx.moveTo(0,oh); ctx.lineTo(l,oh); //axe horizontal
	ctx.moveTo(ol,0); ctx.lineTo(ol,h); //axe vertical
	var x1=null;ech
	var y1=null;
		 
	for(x=-10;x<=10;x=x+0.1){
		 y = eval(fx);
		 var x2=x * ech + ol;
		 var y2= -y * ech + oh;
		 console.log("x="+x +" ,y=" + y + ",x1="+x1 +" ,y1=" + y1 + ",x2="+x2 +" ,y2=" + y2);
		 if(x1!=null){			ctx.moveTo(x1,y1);	            ctx.lineTo(x2,y2);
		 }	
         x1=x2; y1=y2; //for next loop	iteration	 
	 }
     ctx.closePath();
	 ctx.stroke(); 	  
}