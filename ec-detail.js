//This is example code, and all values are example values. Please refer to the document provided to you for the values that should be used to populate the fields.

dataLayer.push({
'event' : 'product_detail',
'ecommerce': {
    'currencyCode': 'GBP',                       // Local currency is optional.
    'detail': {
      'actionField': {'list': 'Holidays'},    // 'detail' actions have an optional list property.
      'products': [{
        'name': 'Vulcan - 6 Days',                 // Name or ID is required.
        'id': 'VULC6-024059',                      // Name or ID is required.
        'price': '799.99',                         // Unit price of the product - optional
        'brand': 'Federation Cruises',             // Brand of the product - optional
        'category': 'Holidays',                    // Category of the product  - optional
        'variant': 'Week'                          // Variant of the product - optional
       }]
     }
   }
});
