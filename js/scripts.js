$(document).ready(function(){
  $("form#pizza_order").submit(function(event){
    event.preventDefault();
    $("#order-recap").show();
    $("input:checkbox[name=topping]:checked").each(function(){
      var yourToppings = $(this).val();
      $('#order-recap').append(yourToppings + "<br>");
    });
    $('#pizza_order').hide();
  });
});
