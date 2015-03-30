module.exports = function PdfController($scope) {
    $scope.generatePdf = function () {
        require(['jspdf'], createAndDownloadPdf);

        function createAndDownloadPdf(jsPDF) {
            var document = new jsPDF();

            document.text(20, 20, 'Hello, world!!');
            document.save('test.pdf');
        }
    }
};
