import loadJsPDF from 'promise?global!jspdf';

export default function () {
    this.generatePdf = () => {
        loadJsPDF().then(createAndDownloadPdf);
    };

    function createAndDownloadPdf(jsPDF) {
        const document = new jsPDF();

        document.text(20, 20, 'Hello, world!!');
        document.save('test.pdf');
    }
};
