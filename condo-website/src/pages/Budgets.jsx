import React from "react";
import PdfViewerPage from "@/components/PdfViewerPage/PdfViewerPage";

// Example PDF imports
import Budget2025 from "@/assets/pdf/budgets/Budget2025.pdf";
import Budget2024 from "@/assets/pdf/budgets/Budget2024.pdf";
import Budget2023 from "@/assets/pdf/budgets/Budget2023.pdf";
import Budget2022 from "@/assets/pdf/budgets/Budget2022.pdf";
import Budget2021 from "@/assets/pdf/budgets/Budget2021.pdf";
import Budget2020 from "@/assets/pdf/budgets/Budget2020.pdf";
import Budget2019 from "@/assets/pdf/budgets/Budget2019.pdf";
import Budget2018 from "@/assets/pdf/budgets/Budget2018.pdf";
import Budget2017 from "@/assets/pdf/budgets/Budget2017.pdf";

const Budgets = () => {
  const pdfList = [
    { title: "CCC276 - Budget 2025", file: Budget2025 },
    { title: "CCC276 - Budget 2024", file: Budget2024 },
    { title: "CCC276 - Budget 2023", file: Budget2023 },
    { title: "CCC276 - Budget 2022", file: Budget2022 },
    { title: "CCC276 - Budget 2021", file: Budget2021 },
    { title: "CCC276 - Budget 2020", file: Budget2020 },
    { title: "CCC276 - Budget 2019", file: Budget2019 },
    { title: "CCC276 - Budget 2018", file: Budget2018 },
    { title: "CCC276 - Budget 2017", file: Budget2017 },
  ];

  return (
    <PdfViewerPage
      title="Budgets"
      description="Below are the Budgets for CCC276 - Sandhamn Private."
      pdfList={pdfList}
    />
  );
};

export default Budgets;
