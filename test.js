
function addListItem(){
var text = $("#new-text").val();
	if($("#new-text add") !== ""){
	alert("fjdk")
     
}

$( "#todo" ).append('<li>'+text+' <button class="delete"> Delete </button></li> ');
$("#new-text").val("");

}

function deleteListItem(){
 $(this).parent().remove()
 
}

$(document).ready(function(){
 
$("#add").on("click", addListItem);

$(".delete").on("click",  deleteListItem);
$(document).on("click", ".delete", deleteListItem);

});


