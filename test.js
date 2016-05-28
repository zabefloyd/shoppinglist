
function addListItem(){
var text = $("#new-text").val();
	
$( "#todo" ).append('<li>'+text+' <button class="delete"> Delete </button></li> ');
$("#new-text").val("").valid();
$("#new-text").valid();
}

function deleteListItem(){
 $(this).parent().remove()
 
}

$(document).ready(function(){
 
$("#add").on("click", addListItem);
$(".delete").on("click",  deleteListItem);
$(document).on("click", ".delete", deleteListItem);

});


$(document).ready(function() {
    $("#form1").validate({
        rules: {
            field1: "required"
        },
        messages: {
            field1: "Please specify your name"

        }
    })

    $('#btn').click(function() {
        $("#form1").valid();
    });
});