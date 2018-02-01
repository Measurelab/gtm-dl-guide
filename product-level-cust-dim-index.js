//This is example code, and all values are example values. Please refer to the document provided to you for the values that should be used to populate the fields.

// We'll use the transaction code as an example here, but it applies to all product-related EE actions.

dataLayer.push({
'event' : 'transaction',
'ecommerce' : {
 'currencyCode': 'GBP',
 'purchase': {
       'actionField': {
         'id': 'BOIS-4815162342',
         'affiliation': 'Federation Cruises',
         'revenue': '1827.94',
         'tax':'380.00',
         'shipping': '5.00',
         'coupon': 'PICARDDAY'
       },
       'products': [{
         'name': 'Vulcan - 6 Days',
         'id': 'VULC6-024059',
         'price': '799.99',
         'brand': 'Federation Cruises',
         'category': 'Holidays',
         'variant': 'Week',
         'quantity': 2,
         'coupon': '',
         'dimension1': 'Vulcan',                    // Example custom dimension value. The key is arbitrary—it will be rewritten in GTM to be a dimension value.
         'dimension2' : 'M'                   // Example custom dimension value.
        },
        {
         'name': 'Risa - 3 Days',
         'id': 'RIS3-027749',
         'price': '299.95',
         'brand': 'Federation Cruises',
         'category': 'Break',
         'variant': 'Weekend',
         'quantity': 1,
         'dimension1': 'Risa',                      // Example custom dimension value.
         'dimension2' : 'M'                   // Example custom dimension value.
        }]
     }
}
});
