
$(function(){
	$('#selCategorie').on("change", function(){
		let categorie = $('#selCategorie').val();
		console.log("categorie="+categorie);
		$('#tBodyProd').empty();
		$('#spanMessage').empty();
		let urlGetProducts= "./data/products_"+categorie+".json";
		$.ajax({
			type: "GET",
			url: urlGetProducts,
			contentType : "application/json",
			success: function (data,status,xhr) {
				  if (data) {
				    console.log("data=" + JSON.stringify(data));
					var tabProduits = data;
					for(let i in tabProduits){
					    $('#tBodyProd').append(
						       "<tr><td>"+tabProduits[i].code
						       +"</td><td>"+tabProduits[i].nom
							   +"</td><td>"+tabProduits[i].prix
							   +"</td><td>"+tabProduits[i].description
							   +"</td></tr>");
					}
				  }
				},
			error: function( jqXHR, textStatus, errorThrown ){
				console.log("error" + textStatus);
				$('#spanMessage').html(textStatus + " " +jqXHR.status);
			  }
		});//end $.ajax
	});//end $('#btnGetProdByCategorie').on("click"
})//end $()