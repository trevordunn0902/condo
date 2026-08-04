import React, { useState } from "react";
import "./PdfViewerPage.css";

const PdfViewerPage = ({ title, description, pdfList }) => {
  const [selectedPdf, setSelectedPdf] = useState(pdfList[0]);

  return (
    <div className="pdf-page">
      <div className="pdf-content">
        <h1 className="pdf-title">{title}</h1>
        {description && <p className="pdf-text">{description}</p>}
        <p className="pdf-note">
          <em>Select a document below to view or download it.</em>
        </p>

        <h2 className="pdf-heading">{selectedPdf.title}</h2>
        <div className="pdf-viewer">
          <iframe
            src={selectedPdf.file}
            title={selectedPdf.title}
            width="100%"
            height="600px"
          ></iframe>
        </div>

        <div className="pdf-downloads">
          <h3 className="downloads-title">Available Documents</h3>
          <ul>
            {pdfList.map((pdf, index) => (
              <li key={index}>
                <button
                  className={`pdf-button ${
                    selectedPdf.file === pdf.file ? "active" : ""
                  }`}
                  onClick={() => setSelectedPdf(pdf)}
                >
                  {pdf.title}
                </button>
                <a
                  href={pdf.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-link"
                >
                  (Download PDF)
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PdfViewerPage;
