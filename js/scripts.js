var topping = .75;

function Pizza(size) {
  this.size = size;
  this.toppings = 0;
  this.total = 0;
}

Pizza.prototype.finalTotal = function() {
  var checkboxes = $("input:checkbox[name=topping]:checked");
  var countToppings = checkboxes.filter(':checked').length;
  this.toppings = (countToppings * topping);
  this.total = (this.toppings + this.size);
}



$(document).ready(function(){
  $("form#pizza_order").submit(function(event){
    event.preventDefault();
    var size = parseInt($("#sizes").val());
    var newPizza = new Pizza(size);

    $("#order-recap").show();

    $("input:checkbox[name=topping]:checked").each(function(){
      var yourToppings = $(this).val();
      newPizza.finalTotal();
      console.log(newPizza.total);
      $('#order-recap').append(yourToppings + "<br>");
    });
    $('#pizza_order').hide();
  });
});
