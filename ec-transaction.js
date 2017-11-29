//This is example code, and all values are example values. Please refer to the document provided to you for the values that should be used to populate the fields.

dataLayer.push({
'event' : 'transaction',
'ecommerce' : {
 'currencyCode': 'GBP',                       // Local currency - optional.
 'purchase': {
       'actionField': {
         'id': 'BOIS-4815162342',                        // Transaction ID. Required for purchases and refunds.
         'affiliation': 'Federation Cruises',       // Affiliation of the transaction - optional
         'revenue': '1827.94',                      // Total transaction value (incl. tax, shipping, coupon discounts)
         'tax':'380.00',                            // Tax associated with the transaction - optional
         'shipping': '5.00',                        // Shipping costs associated with the transaction - optional
         'coupon': 'PICARDDAY'                      // Coupon used for the transaction (if any) - optional
       },
       'products': [{                               // List of productFieldObjects.
         'name': 'Vulcan - 6 Days',                 // Product name - required.
         'id': 'VULC6-024059',                      // Product ID/SKU - required.
         'price': '799.99',                         // Unit price of the product - optional
         'brand': 'Federation Cruises',             // Brand of the product - optional
         'category': 'Holidays',                    // Category of the product  - optional
         'variant': 'Week',                         // Variant of the product - optional
         'quantity': 2,                             // Quantity of the product - required
         'coupon': ''                               // Coupon associated specifically with the product (if any) - optional
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
