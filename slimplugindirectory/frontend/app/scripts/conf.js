'use strict';

angular
  .module('frontendApp')
  // API url
  .constant('API_URL', 'http://glpiplugindirectory/api')
  // Recaptcha Public Key
  .constant('RECAPTCHA_PUBLIC_KEY', '6LcnrwoTAAAAAHfjzXrBWOBMkbHY2QuZJtER7Y6M')
  // client_id of github app
  .constant('GITHUB_CLIENT_ID', '275aaeb24ff5286b061e')
;