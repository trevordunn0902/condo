import React from "react";
import PdfViewerPage from "@/components/PdfViewerPage/PdfViewerPage";

import ShortTermTenanciesPDF from "@/assets/pdf/rules-and-regulations/0276 - Rules and Regulations - 2019.03.26 - Short Term Tenancies.pdf";

const ShortTermTenancies = () => {
  const pdfList = [
    { title: "CCC276 - Short Term Tenancies", file: ShortTermTenanciesPDF },
  ];

  return (
    <PdfViewerPage
      title="Short Term Tenancies"
      description="Below are the Short Term Tenancy Rules for CCC276 - Sandhamn Private."
      pdfList={pdfList}
    />
  );
};

export default ShortTermTenancies;
