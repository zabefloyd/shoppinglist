
function addListItem(){
var text = $("#new-text").val();
//Not to add if input is empty
	if (document.getElementById("new-text").value.length === 0){
		document.getElementById("field-req").style.display = "block";
		return false;
		}
		else{
		document.getElementById("field-req").style.display = "none";
	}
$('#todo').append('<li>  &#x274E; '+text+' <button class="delete"> Delete </button></li>  ');

$("#new-text").val("");
 

}
function deleteListItem(){
 $(this).parent().remove()
}
$(document).ready(function(){
 //add Item
$("#add").on("click", addListItem);
//Remove all the list
$( "#removeall" ).click(function() {
  $( "li" ).remove();

});
//delete Item
$(".delete").on("click",  deleteListItem);
$(document).on("click", ".delete", deleteListItem);

//Add list by enter key code 13
$(document).on('keypress', function (key) {
    if (key.keyCode == 13) {
        addListItem();
    }
});
});


