$(document).ready(function(){ 
    $('#todoAdd').on('click', () => {
        var newItem = $("#todoText").val();
        if (newItem.length>0) {
            $("#todoList").append("<li>"+newItem+"</li>+<input type='checkbox'>"); 
            $("#todoAdd").val('')
        }
        else {
            window.alert("Please write a todo in the box.");
        }
    });

    
});


