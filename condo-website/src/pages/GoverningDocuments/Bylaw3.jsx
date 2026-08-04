import React from "react";
import PdfViewerPage from "@/components/PdfViewerPage/PdfViewerPage";

import Bylaw3PDF from "@/assets/pdf/bylaw/0276 - By-Laws - No-3.pdf";

const Bylaw3 = () => {
  const pdfList = [
    { title: "CCC276 - By-law No. 3", file: Bylaw3PDF },
  ];

  return (
    <PdfViewerPage
      title="Bylaw No.3"
      description="Below is the PDF for Bylaw No.3"
      pdfList={pdfList}
    />
  );
};

export default Bylaw3;
