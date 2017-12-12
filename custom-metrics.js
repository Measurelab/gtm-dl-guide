//This is example code, and all values are example values. Please refer to the document provided to you for the values that should be used to populate the fields.

// We'll use the transaction code as an example here, but it applies more generally.
// This method requires creating a variable in GTM to rewrite the data layer so the additional values are passed as custom dimensions, otherwise they'll be ignored.
// This means that values can be added before we decide how exactly they're going to be used (if at all).
// There are two custom metrics values being set here: one outside of the ecommerce data, which we would proably use for a hit-level custom metric, and one being set at a product level, which we would probably use for a product-level custom metric.

dataLayer.push({
'event' : 'transaction',
'total_miles' : 668                       // Example custom metric value
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
         'miles': 420                   // Example custom metric value
        },
        {
         'name': 'Risa - 3 Days',
         'id': 'RIS3-027749',
         'price': '299.95',
         'brand': 'Federation Cruises',
         'category': 'Break',
         'variant': 'Weekend',
         'quantity': 1
         'miles': 248                   // Example custom metric value
        }]
     }
}
});
