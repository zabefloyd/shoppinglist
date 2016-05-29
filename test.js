
function addListItem(){
var text = $("#new-text").val();
	if (document.getElementById("new-text").value.length === 0){
		document.getElementById("field-req").style.display = "block";
		return false;
		}
		else{
			document.getElementById("field-req").style.display = "none";
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

$(".sweet-overlay").click(function(){

 $(".swal").hide();
   event.preventDefault();
});

});


