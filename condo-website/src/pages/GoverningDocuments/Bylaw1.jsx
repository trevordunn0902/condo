import React from "react";
import PdfViewerPage from "@/components/PdfViewerPage/PdfViewerPage";

import Bylaw1PDF from "@/assets/pdf/bylaw/0276 - By-Laws - No-1.pdf";

const Bylaw1 = () => {
  const pdfList = [
    { title: "CCC276 - By-law No. 1", file: Bylaw1PDF },
  ];

  return (
    <PdfViewerPage
      title="Bylaw No.1"
      description="Below is the PDF for Bylaw No.1"
      pdfList={pdfList}
    />
  );
};

export default Bylaw1;
