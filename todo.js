$(document).ready(function(){ 
    $('#todoAdd').on('click', () => {
        var newItem = $("#todoText").val();
        if (newItem.length>0) {
            $("#todoList").append("<div class='listElement'><li>"+newItem+"</li>+<input type='checkbox' class='checkbox'></div>"); 
            $("#todoAdd").val('')
        }
        else {
            window.alert("Please write a todo in the box.");
        }
    });

    
});


