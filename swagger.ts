import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'DD Planner API',
    description: 'API documentation for the DD Planner project',
    version: '1.0.0'
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./index.ts', './routes/index.ts'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);