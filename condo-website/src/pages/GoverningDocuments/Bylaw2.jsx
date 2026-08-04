import React from "react";
import PdfViewerPage from "@/components/PdfViewerPage/PdfViewerPage";

import Bylaw2PDF from "@/assets/pdf/bylaw/0276 - By-Laws - No-2.pdf";

const Bylaw2 = () => {
  const pdfList = [
    { title: "CCC276 - By-law No. 2", file: Bylaw2PDF },
  ];

  return (
    <PdfViewerPage
      title="Bylaw No.2"
      description="Below is the PDF for Bylaw No.2"
      pdfList={pdfList}
    />
  );
};

export default Bylaw2;
