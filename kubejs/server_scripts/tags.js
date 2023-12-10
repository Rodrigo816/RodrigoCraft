// Listen to item tag event
ServerEvents.tags('item', event => {
    // Add the 'ad_astra:fuel_bucket' tag to the 'tfmg:diesel_bucket'
    event.get('ad_astra:fuel_bucket').add('tfmg:diesel_bucket');
  })