import React from "react";
import PdfViewerPage from "@/components/PdfViewerPage/PdfViewerPage";

import ReserveFund2023 from "@/assets/pdf/reserve-fund/1230266-CCC-276-RFS-Class-2-FINAL-2024.03.01.pdf";
import ReserveFund2020 from "@/assets/pdf/reserve-fund/276_2020-Reserve-Fund-Study.pdf";
import ReserveFund2017 from "@/assets/pdf/reserve-fund/276_2017-Reserve-Fund-Study.pdf";
import ReserveFund2014 from "@/assets/pdf/reserve-fund/276_2014-Reserve-Fund-Study.pdf";
import ReserveFund2011 from "@/assets/pdf/reserve-fund/276_2011-Reserve-Fund-Study.pdf";
import ReserveFund2008 from "@/assets/pdf/reserve-fund/276_2008-Reserve-Fund-Study.pdf";

const ReserveFundStudy = () => {
  const pdfList = [
    { title: "Comprehensive Reserve Fund Study 2023", file: ReserveFund2023 },
    { title: "Reserve Fund Study 2020 Update", file: ReserveFund2020 },
    { title: "Comprehensive Reserve Fund Study 2017", file: ReserveFund2017 },
    { title: "Reserve Fund Study 2014 Update", file: ReserveFund2014 },
    { title: "Reserve Fund Study 2011 Update", file: ReserveFund2011 },
    { title: "Comprehensive Reserve Fund Study 2008", file: ReserveFund2008 }
  ];

  return (
    <PdfViewerPage
      title="Reserve Fund Study"
      description="Below are all Reserve Fund Studies for CCC276 - Sandhamn Private."
      pdfList={pdfList}
    />
  );
};

export default ReserveFundStudy;
