// Seems that the minified version does not publish 'jsPDF' in window and this results in an error with the export
// module.exports = DEBUG ? require('exports?jsPDF!jspdf/dist/jspdf.debug.js') : require('exports?jsPDF!jspdf/dist/jspdf.min.js');

module.exports = require('exports?jsPDF!jspdf/dist/jspdf.debug.js');
