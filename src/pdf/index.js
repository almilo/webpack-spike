var angular = require('angular');

module.exports = angular.module('app.pdf', [])
    .controller('PdfController', require('./pdf-controller'));
