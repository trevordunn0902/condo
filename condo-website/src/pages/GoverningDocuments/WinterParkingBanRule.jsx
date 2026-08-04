import React from "react";
import PdfViewerPage from "@/components/PdfViewerPage/PdfViewerPage";

import WinterParkingBanPDF from "@/assets/pdf/rules-and-regulations/0276 -  Winter Maintenance - Parking Ban Rule.pdf";

const WinterParkingBanRule = () => {
  const pdfList = [
    { title: "CCC276 - Winter Parking Ban Rule", file: WinterParkingBanPDF },
  ];

  return (
    <PdfViewerPage
      title="Winter Parking Ban Rule"
      description="Below is the Winter Parking Ban Rule for CCC276 - Sandhamn Private."
      pdfList={pdfList}
    />
  );
};

export default WinterParkingBanRule;
