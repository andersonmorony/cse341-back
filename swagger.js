const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "CSE-341 Project 1 API",
        description: "API for CSE341 Project 1",
    },
    host: "localhost:3000",
    schemes: ['http'],
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server.js')
});