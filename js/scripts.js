function Pizza(size) {
  this.size = size;
  this.sizePrice = 0;
  this.toppings = 0;
  this.total = 0;
};

Pizza.prototype.sizeToPrice = function() {
    if (this.size === "small") {
      this.sizePrice = 8;
    } else if (this.size === "medium") {
      this.sizePrice = 12;
    } else {
      this.sizePrice = 16;
    }
};

Pizza.prototype.finalTotal = function() {
  var topping = .75;
  var checkboxes = $("input:checkbox[name=topping]:checked");
  var countToppings = checkboxes.filter(':checked').length;
  this.total = ((countToppings * topping) + this.sizePrice);
};

function listToppings() {
  $("input:checkbox[name=topping]:checked").each(function(){
    var yourToppings = $(this).val();
    $('#order-recap').append(yourToppings + "<br>");
  });
};


$(document).ready(function(){
  $("form#pizza_order").submit(function(event){
    event.preventDefault();
    var size = $("#sizes").val();
    var newPizza = new Pizza(size);
    $("#order-recap").show();
    listToppings();
    newPizza.sizeToPrice();
    newPizza.finalTotal();
    $('#pizza-size').text(newPizza.size);
    $('#total-cost').text(newPizza.total);
    $('#pizza_order').hide();
  });
});
