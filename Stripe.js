(function() {
  var stripe = Stripe('pk_live_EMd5N1igHwmKTxgPnVum8ktJ0053tWC3Br');

  var checkoutButton = document.getElementById('checkout-button-plan_H58yULpeKFpu3j');
  checkoutButton.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
      items: [{plan: 'plan_H58yULpeKFpu3j', quantity: 1}],

      // Do not rely on the redirect to the successUrl for fulfilling
      // purchases, customers may not always reach the success_url after
      // a successful payment.
      // Instead use one of the strategies described in
      // https://stripe.com/docs/payments/checkout/fulfillment
      successUrl: 'http://nquryshi.github.io/success.html',
      cancelUrl: 'http://nquryshi.github.io/canceled.html',
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
})();