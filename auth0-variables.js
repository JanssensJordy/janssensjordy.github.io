var AUTH0_CLIENT_ID = 'mUtvk5tZTgEdeJfLtrtQrDhNjI4mlYbZ';
var AUTH0_DOMAIN = 'jrsecurity.eu.auth0.com';
var REDIRECT_URI = window.location.href
                    .slice(0, -window.location.hash.length || window.location.href.length)
                    .slice(0, -window.location.search.length || window.location.href.length);
var API_AUDIENCE = 'https://jrsecurity.eu.auth0.com/api/v2/';
