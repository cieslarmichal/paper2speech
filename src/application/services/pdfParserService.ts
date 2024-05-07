import { PDFExtract } from 'pdf.js-extract';

interface ParsePdfPayload {
  readonly pdfPath: string;
}

export class PdfParserService {
  private readonly pdfExtract: PDFExtract;

  public constructor() {
    this.pdfExtract = new PDFExtract();
  }

  public async parsePdf(payload: ParsePdfPayload): Promise<string> {
    const { pdfPath } = payload;

    const extractedData = await this.pdfExtract.extract(pdfPath);

    extractedData.pages.forEach((page) => {
      page.content.forEach((content) => {
        console.log({
          x: content.x,
          y: content.y,
          str: content.str,
        });
      });
    });

    return 'parsed pdf';
  }
}
