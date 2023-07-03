import CVPdf from '@/assets/PDF/JoeAltCV2023.pdf'
import './pdfViewer.scss';

const PdfViewer = () => {
  return (
    <div>
      <a href={CVPdf} download="cv-joe-alt">Download the pdf</a>
      <embed src={`${CVPdf}#toolbar=0&navpanes=0&scrollbar=0`} type="application/pdf" width="100%" height="600px" />
    </div>
  );
}

export default PdfViewer