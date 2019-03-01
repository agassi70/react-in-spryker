const Swagger = require('swagger-client');

Swagger('https://raw.githubusercontent.com/spryker/glue-public-spec/master/glue-swagger-public-spec.yaml?token=ALSwrurpXlGZegoJVEEAn80fX6eLcqUxks5cPaobwA%3D%3D')
  .then( client => {
    console.log(client.spec); // The resolved spec
    console.log(client.originalSpec); // In case you need it
    console.log(client.errors); // Any resolver errors


});
