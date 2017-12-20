![Measurelab logo](http://sandpit.measurelab.co.uk/images/measurelab_black.png)
# Google Tag Manager (GTM) Data Layer Guide - code examples
These are the code examples for our generic GTM implementation guide.

Some of these actions or values may not be relevant to you—for more specifics about your own setup, please check your copy of the implementation guide and any further documentation provided with that.

## [Page level data layer](/page-dl.js)

This is for values we want in place *before* GTM loads so they can be e.g. sent as custom dimensions with a pageview.

Before the values are pushed, the data layer is declared—this is to prevent any possibility of multiple declarations—further discussed [here](https://www.simoahava.com/gtm-tips/datalayer-declaration-vs-push/).

**NB: These are sample parameters to serve as examples: your site might have its own specific parameters required.**

## [Pushing events to the data Layer](/events-dl.js)

This is an example event with sample code to indicate how pushing values to the data layer for events.

## Enhanced Ecommerce

All EE actions are being sent as events to provide a simple, unified approach which will prevent conflicts with some values being declared and some being pushed etc.

### [Transactions](/ec-transaction.js)

This code should be present on the transaction completion/thank you page, after the user has completed a transaction.

### [Checkout steps and checkout options](/ec-checkout.js)

This code should be placed on every step of the checkout funnel. Checkout step numbering should be sorted out with us in advance of implementation.

### [Product detail views](/ec-detail.js)

This code should be placed on individual product pages.

### [Product list impressions](/ec-prod-imp.js)

This code should be placed on pages where products are listed—e.g. search pages, product category pages etc.

### [Internal promotion impressions](/ec-promo-imp.js)

This code should be placed on pages where internal promotions are present.

### [Add to cart](/ec-a2c.js)

This code should be added when a user adds a product to their shopping trolley/cart.

### [Remove from cart](/ec-rfc.js)

This code should be added when a user removes a product from their shopping trolley/cart.

### [Product list clicks](/ec-prod-click.js)

This code should be added when a user clicks on a link to a product page in one of the aforementioned product lists.

### [Internal promotion clicks](/ec-promo-click.js)

This code should be added when a user clicks on an internal promotion.

### [Refunds](/ec-refund.js)

This code should be included when a user completes the refund process.

### [Product level custom dimensions](/product-level-cust-dim.js)

This code pertains to the inclusion of product level custom dimensions.

### [Custom metrics](/custom-metrics.js)

This code pertains to the inclusion of custom metrics.
