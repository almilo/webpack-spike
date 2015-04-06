import PdfController from './pdf-controller.js';

describe('PdfController', () => {
    const pdfController = new PdfController();

    it('should have a generatePdf() method', () => {
        expect(typeof pdfController.generatePdf).toBe('function');
    });
});
