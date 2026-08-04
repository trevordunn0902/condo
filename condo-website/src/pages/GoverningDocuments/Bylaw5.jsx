import React from "react";
import PdfViewerPage from "@/components/PdfViewerPage/PdfViewerPage";

import Bylaw5PDF from "@/assets/pdf/bylaw/0276 - By-Laws - No-5.pdf";

const Bylaw5 = () => {
  const pdfList = [
    { title: "CCC276 - By-law No. 5", file: Bylaw5PDF },
  ];

  return (
    <PdfViewerPage
      title="Bylaw No.5"
      description="Below is the PDF for Bylaw No.5"
      pdfList={pdfList}
    />
  );
};

export default Bylaw5;
