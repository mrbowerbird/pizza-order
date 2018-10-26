$(document).ready(function(){
  $("form#pizza_order").submit(function(event){
    event.preventDefault();
    $("#order-recap").show();
    var checkboxes = $("input:checkbox[name=topping]:checked");
    var countToppings = checkboxes.filter(':checked').length;
    $("input:checkbox[name=topping]:checked").each(function(){
      var yourToppings = $(this).val();
      console.log(countToppings);
      $('#order-recap').append(yourToppings + "<br>");
    });
    $('#pizza_order').hide();
  });
});
