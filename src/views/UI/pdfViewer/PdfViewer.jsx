import { Modal, ConfigProvider, theme } from 'antd';
import CVPdf from '@/assets/PDF/JoeAltCV.pdf'
import { BsDownload } from 'react-icons/bs'
import './pdfViewer.scss';

const PdfViewer = ({ open, setOpen }) => {
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#ff5c62" }
      }}
    >
      <Modal
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={834}
        style={{
          top: 10,
        }}
      >
        <div className="pdf-viewer-modal">
          <b>PDF: </b>
          <a href={CVPdf} download="cv-joe-alt" className="pdf-viewer-modal__header">
            <h3 className="pdf-viewer-modal__header--title">Joe Alt CV</h3>
            <BsDownload />
          </a>
          <iframe src="https://drive.google.com/file/d/1HU_XzKChJD5h5Xxz0Q64oqjzw4-_1_LN/preview" frameBorder="0"></iframe>
        </div>
      </Modal>
    </ConfigProvider>
  );
}

export default PdfViewer