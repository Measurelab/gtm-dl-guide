dataLayer.push({
'event' : 'product_impression',
'ecommerce': {
    'currencyCode': 'GBP',                       // Local currency is optional.
    'impressions': [{                            // List of productFieldObjects.
      'name': 'Vulcan - 6 Days',                 // Name or ID is required.
      'id': 'VULC6-024059',                      // Name or ID is required.
      'price': '799.99',                         // Unit price of the product - optional
      'brand': 'Federation Cruises',             // Brand of the product - optional
      'category': 'Holidays',                    // Category of the product  - optional
      'variant': 'Week',                         // Variant of the product - optional
      'list': 'Search Results',                  // List containing the product - optional
      'position': 1                              // Product's position within the list - optional
     },
     {
      'name': 'Risa - 3 Days',
      'id': 'RIS3-027749',
      'price': '299.95',
      'brand': 'Federation Cruises',
      'category': 'Break',
      'list': 'Search Results',
      'position': 2
     }]
  }
});
