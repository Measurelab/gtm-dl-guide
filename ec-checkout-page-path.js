//This is example code, and all values are example values. Please refer to the document provided to you for the values that should be used to populate the fields.

dataLayer.push({
'event' : 'checkout',
'page_path' : '/checkout/step1'                       // Non-ecommerce value—used for virtual page path.
'ecommerce': {
      'currencyCode': 'GBP',                          // Local currency - optional.
      'checkout': {
        'actionField': {'step': 1, 'option': 'Visa'}, // Checkout step number compulsory, option field optional.
        'products': [{                                // List of productFieldObjects.
          'name': 'Vulcan - 6 Days',                  // Product name - required.
          'id': 'VULC6-024059',                       // Product ID/SKU - required.
          'price': '799.99',                          // Unit price of the product - optional
          'brand': 'Federation Cruises',              // Brand of the product - optional
          'category': 'Holidays',                     // Category of the product  - optional
          'variant': 'Week',                          // Variant of the product - optional
          'quantity': 2                               // Quantity of the product - required
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

