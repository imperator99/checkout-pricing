$(document).foundation();

$(document).ready(function() {

  // Add event listener to the number inputs.
  $('.product-amount input[type="number"]').change(function(evt) {
    getItemTotal(evt);
  });

  function getItemTotal(evt) {
    var el = evt.currentTarget;
    var data = $(el).data();
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
    $(el).parents('.product-amount')
      .next('.product-total')
      .data( { 'total': parseInt(total) } )
      .html('$' + total);
    getTotal();
  }

  // Add event listener to the 'submit' button.
  $('button[type="submit"]').click(function() {
    console.log('Button clicked');
    purchaseItems();
  });

  //Calculate grand total.
  function getTotal() {
    var grandTotal = new Number;
    $('.product-total').each(function() {
      grandTotal += parseInt($(this).data('total'));
      $('.total').text('$' + grandTotal);
    });

    // Turn off the submit button if the grand total is 0.
    if (grandTotal === 0) {
      $('button[type="submit"]').prop('disabled', true);
    } else {
      $('button[type="submit"]').prop('disabled', false);
    }
  }

  // Collect the 'form' responses and create an object to send to a server.
  function purchaseItems() {
    console.log('Items purchased!');
  }

  // Calculate initial totals.
  getTotal();
});
