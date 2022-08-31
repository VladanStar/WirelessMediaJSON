jQuery(document).ready(function($){

    $.ajax({
        url:"https://jsonkeeper.com/b/LUH3",
        type:"GET",
        dataType:"xml",
        // data:{param1:"value1"},
    })

    .done(function(result){
        var allData = $(result).find("d");
        allData.each(function(index,el){
            $("#wrapp").append('<p><a href="'+$(this).attr('email')+'">'+$(this).attr('name')+'</a></p>')

        })

       
        console.log("success");

        console.log(allData);
    })
    .fail(function(){
        console.log("error")
    })
    .always(function(){
        console.log("complete")
    })
});