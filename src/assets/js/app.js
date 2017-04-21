$(document).foundation();

$(document).ready(function() {

  // Add event listener to inputs.
  $('.product-amount input[type="number"]').change(function(evt) {

    var data = $(this).data();
    var qty = parseInt(evt.currentTarget.value);
    var currentPrice;
    var total = new Number;

    // Check if the special quantity is reached. If it is, assign the special price.
    // Otherwise, calculate the total based on the price and the quantity.
    if (qty === data.specialQty) {
      currentPrice = data.specialPrice;
      total = currentPrice;
    } else {
      currentPrice = data.price;
      total = qty * currentPrice;
    }

    // Update the text in the item total column.
    $(this).parents('.product-amount')
      .next('.product-total')
      .data( { 'total': parseInt(total) } )
      .html('$' + total);
    getTotal();
  });

  //Calculate grand total.
  function getTotal() {
    var grandTotal = new Number;
    $('.product-total').each(function() {
      grandTotal += parseInt($(this).data('total'));
      $('.total').text('$' + grandTotal);
    });
  }

  // Calculate initial totals.
  getTotal();
});
