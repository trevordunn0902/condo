import React from "react";
import PdfViewerPage from "@/components/PdfViewerPage/PdfViewerPage";

import Insurance2025 from "@/assets/pdf/insurance/2025-Certificate-of-Insurance-CCC276.pdf";

const InsuranceCertificate = () => {
  const pdfList = [
    { title: "CCC276 - Insurance Certificate 2025", file: Insurance2025 },
  ];

  return (
    <PdfViewerPage
      title="Insurance Certificate"
      description="Below is the Insurance Certificate for CCC276 - Sandhamn Private."
      pdfList={pdfList}
    />
  );
};

export default InsuranceCertificate;
