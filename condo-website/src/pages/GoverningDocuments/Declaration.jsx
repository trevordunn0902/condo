import React from "react";
import PdfViewerPage from "@/components/PdfViewerPage/PdfViewerPage";

import DeclarationPDF from "@/assets/pdf/declaration/0276 - DECLARATION.pdf";

const Declaration = () => {
  const pdfList = [
    { title: "CCC276 - Declaration", file: DeclarationPDF },
  ];

  return (
    <PdfViewerPage
      title="Declaration"
      description="Below is the Declaration for CCC276 - Sandhamn Private."
      pdfList={pdfList}
    />
  );
};

export default Declaration;
