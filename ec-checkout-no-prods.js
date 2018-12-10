//This is example code, and all values are example values. Please refer to the document provided to you for the values that should be used to populate the fields.
//This example shows a checkout push with no products
dataLayer.push({
    'event': 'checkout',
    'ecommerce': {
        'checkout': {
            'actionField': { 'step': 1, 'option': 'Visa' } // Checkout step number compulsory, option field optional.
        }
    }
});