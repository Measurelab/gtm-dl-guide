//This is example code, and all values are example values. Please refer to the document provided to you for the values that should be used to populate the fields.

dataLayer.push({
  'event': 'add_to_cart',
  'ecommerce': {
    'currencyCode': 'GBP',                         // Local currency is optional.
    'add': {                                       // 'add' actionFieldObject measures.
      'products': [{                               // List of productFieldObjects.
        'name': 'Vulcan - 6 Days',                 // Product name - required.
        'id': 'VULC6-024059',                      // Product ID/SKU - required.
        'price': '799.99',                         // Unit price of the product - optional
        'brand': 'Federation Cruises',             // Brand of the product - optional
        'category': 'Holidays',                    // Category of the product  - optional
        'variant': 'Week',                         // Variant of the product - optional
        'quantity': 2                              // Quantity of the product - required
       }]
    }
  }
});
