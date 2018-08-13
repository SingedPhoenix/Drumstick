$(document).ready(function() {

  var iceCreams = ["Vanilla", "Chocolate", "Strawberry", "Caramel Toffee", "Cookies n' Cream", "Mint Chocolate"];

  iceCreams.forEach(function(iceCream) {
    $("ul#iceCream").append("<li>" + iceCream + "</li>")
  });
});
