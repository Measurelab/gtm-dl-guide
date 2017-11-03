dataLayer.push({
'event' : 'checkout',
'ecommerce': {
      'currencyCode': 'GBP',                       // Local currency - optional.
      'checkout': {
        'actionField': {'step': 1, 'option': 'Visa'}, // Checkout step number compulsory, option field optional.
        'products': [{                            // List of productFieldObjects.
          'name': 'Vulcan - 6 Days',                 // Name or ID is required.
          'id': 'VULC6-024059',                      // Name or ID is required.
          'price': '799.99',                         // Unit price of the product - optional
          'brand': 'Federation Cruises',             // Brand of the product - optional
          'category': 'Holidays',                    // Category of the product  - optional
          'variant': 'Week',                         // Variant of the product - optional
          'quantity': 2                              // Quantity of the product - required
         },
         {
          'name': 'Risa - 3 Days',
          'id': 'RIS3-027749',
          'price': '299.95',
          'brand': 'Federation Cruises',
          'category': 'Break',
          'variant': 'Weekend',
          'quantity': 1
         }]
     }
   }
});

// If you want to send an option but the information isn't available at the time the checkout event fires, you can send it as a checkout option instead:

dataLayer.push({
    'event': 'checkout_option',
    'ecommerce': {
      'checkout_option': {
        'actionField': {'step': 1, 'option': 'Mastercard'}
      }
    }
  });
