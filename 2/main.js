jQuery(document).ready(function($){

    $.ajax({
        url:"https://jsonkeeper.com/b/LUH3",
        type:"get",
        dataType:"script",
        // data:{param1:"value1"},
    })

    .done(function(result){
    //     var allData = $(result).find("d");

      /// console.log(allData);
      result.forEach(function(e,i){
        console.log(e.name);

      })
        console.log("success");


    })
    .fail(function(){
        console.log("error")
    })
    .always(function(){
        console.log("complete")
    })
});