//This is example code, and all values are example values. Please refer to the document provided to you for the values that should be used to populate the fields.

dataLayer.push({
    'event': 'product_click',
    'ecommerce': {
      'click': {
        'actionField': {'list': 'Search Results'},      // Optional list property.
        'products': [{
          'name': 'Vulcan - 6 Days',                 // Name or ID is required.
          'id': 'VULC6-024059',                      // Name or ID is required.
          'price': '799.99',                         // Unit price of the product - optional
          'brand': 'Federation Cruises',             // Brand of the product - optional
          'category': 'Holidays',                    // Category of the product  - optional
          'variant': 'Week',                         // Variant of the product - optional
          'list': 'Search Results',                  // List containing the product - optional
          'position': 1                              // Product's position within the list - optional
         }]
       }
     }
  });
