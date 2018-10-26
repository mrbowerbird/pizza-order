var small = 8;
var medium = 12;
var large = 16;
var topping = .75;

function Pizza() {
  this.size = 0;
  this.toppings = 0;
  this.total = 0;
}

Pizza.prototype.toppingsCost = function() {
  var checkboxes = $("input:checkbox[name=topping]:checked");
  var countToppings = checkboxes.filter(':checked').length;
  this.toppings = (countToppings * topping);
}



$(document).ready(function(){
  $("form#pizza_order").submit(function(event){
    event.preventDefault();
    var newPizza = new Pizza();
    $("#order-recap").show();
    // var checkboxes = $("input:checkbox[name=topping]:checked");
    // var countToppings = checkboxes.filter(':checked').length;

    $("input:checkbox[name=topping]:checked").each(function(){
      var yourToppings = $(this).val();
      newPizza.toppingsCost()
      console.log(newPizza.toppings);
      $('#order-recap').append(yourToppings + "<br>");
    });
    $('#pizza_order').hide();
  });
});
