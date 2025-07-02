import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'DD Planner API',
    description: 'API documentation for the DD Planner project',
    version: '1.0.0'
  },
  servers: [
    { url: 'http://localhost:3000/' },
    { url: 'https://dnd-planner-api.onrender.com/' }
  ]
};

const outputFile = './swagger.json';
const endpointsFiles = [
  './routes/users.ts',
];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);