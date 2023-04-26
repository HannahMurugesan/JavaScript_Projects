$(document).ready(function(){

    // To add an item
    $(".add-btn").click(function(){
        var item = $("#info").val();
        $('.list-item').append('<li> <input type="checkbox" class="check">  '+item+'<button type="button" class="del">Delete</button></li>');  
    });

    //To strike the item list
    $('.list-item').on('change','.check', check);
    function check(event){
        $(this).parent().toggleClass('line-strike');
    }
    

    
    $('.list-item').on('click','.del', cancel);
    function cancel(event){
        $(this).parent().remove();
    }

    
});