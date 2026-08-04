import React from "react";
import PdfViewerPage from "@/components/PdfViewerPage/PdfViewerPage";

import RulesPDF from "@/assets/pdf/rules-and-regulations/0276 - Rules and Regulations - 2011.01 - Schedule A - Rules and Regulations - UPDATED.pdf";

const RulesRegulations = () => {
  const pdfList = [
    { title: "CCC276 - Rules & Regulations", file: RulesPDF },
  ];

  return (
    <PdfViewerPage
      title="Rules & Regulations"
      description="Below are the Rules & Regulations for CCC276 - Sandhamn Private."
      pdfList={pdfList}
    />
  );
};

export default RulesRegulations;
