import React from "react";
import PdfViewerPage from "@/components/PdfViewerPage/PdfViewerPage";

import Bylaw4PDF from "@/assets/pdf/bylaw/0276 - By-Laws - No-4.pdf";

const Bylaw4 = () => {
  const pdfList = [
    { title: "CCC276 - By-law No. 4", file: Bylaw4PDF },
  ];

  return (
    <PdfViewerPage
      title="Bylaw No.4"
      description="Below is the PDF for Bylaw No.4"
      pdfList={pdfList}
    />
  );
};

export default Bylaw4;
