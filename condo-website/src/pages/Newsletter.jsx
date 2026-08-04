import React from "react";
import PdfViewerPage from "@/components/PdfViewerPage/PdfViewerPage";

import Spring2024 from "@/assets/pdf/newsletter/CCC276_Spring_Newsletter_2024.pdf";
import Fall2024 from "@/assets/pdf/newsletter/CCC276_Fall_Newsletter_2024.pdf";

const Newsletter = () => {
  const pdfList = [
    { title: "CCC276 - Fall Newsletter 2024", file: Fall2024 },
    { title: "CCC276 - Spring Newsletter 2024", file: Spring2024 },
  ];

  return (
    <PdfViewerPage
      title="Newsletters"
      description="Below are all newsletters for CCC276 - Sandhamn Private."
      pdfList={pdfList}
    />
  );
};

export default Newsletter;
