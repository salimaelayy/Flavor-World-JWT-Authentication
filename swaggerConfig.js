const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', // Specify the OpenAPI version
    info: {
      title: 'Recipe API',
      version: '3.0.0',
      description: 'authentification for recipe api',
    },
  },
  apis: ['./Routes/*.js', './Controllers/*.js'],
};

module.exports = swaggerJSDoc(options);
