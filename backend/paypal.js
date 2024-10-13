const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');

// Crear entorno
const environment = new checkoutNodeJssdk.core.SandboxEnvironment(
  'AfRyojsGdJjPYlvM0aUQxYz1sNYICVTFnDBeOBHXNmyo9P9mDO0Xan8xhJJYHy2EVTVbwto6Wt81fnka', //Client ID
  'ECuDVcYrFR56Wa6c_NDQunT4VOgLrfkrcIm3gr_KkPkNpfTKOVnKQNZaV8kK6Sn91BoQAbBprA5ojYtiLIENT_SECRET_AQUI' // Client Secret
);

const client = new checkoutNodeJssdk.core.PayPalHttpClient(environment);

module.exports = { client };
