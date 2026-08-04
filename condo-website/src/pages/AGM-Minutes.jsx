import React from "react";
import PdfViewerPage from "@/components/PdfViewerPage/PdfViewerPage";

import AGM2024 from "@/assets/pdf/agm-minutes/0276_AGM_Minutes_2024.pdf";
import AGM2023 from "@/assets/pdf/agm-minutes/0276_AGM_Minutes_2023.pdf";
import AGM2022 from "@/assets/pdf/agm-minutes/0276_AGM_Minutes_2022.pdf";
import AGM2021 from "@/assets/pdf/agm-minutes/0276_AGM_Minutes_2021.pdf";
import AGM2020 from "@/assets/pdf/agm-minutes/0276_AGM_Minutes_2020.pdf";
import AGM2019 from "@/assets/pdf/agm-minutes/0276_AGM_Minutes_2019.pdf";
import AGM2018 from "@/assets/pdf/agm-minutes/0276_AGM_Minutes_2018.pdf";
import AGM2017 from "@/assets/pdf/agm-minutes/0276_AGM_Minutes_2017.pdf";
import AGM2016 from "@/assets/pdf/agm-minutes/0276_AGM_Minutes_2016.pdf";
import AGM2015 from "@/assets/pdf/agm-minutes/0276_AGM_Minutes_2015.pdf";
import AGM2014 from "@/assets/pdf/agm-minutes/0276_AGM_Minutes_2014.pdf";
import AGM2013 from "@/assets/pdf/agm-minutes/0276_AGM_Minutes_2013.pdf";
import AGM2012 from "@/assets/pdf/agm-minutes/0276_AGM_Minutes_2012.pdf";
import AGM2011 from "@/assets/pdf/agm-minutes/0276_AGM_Minutes_2011.pdf";
import AGM2010 from "@/assets/pdf/agm-minutes/0276_AGM_Minutes_2010.pdf";
import AGM2009 from "@/assets/pdf/agm-minutes/0276_AGM_Minutes_2009.pdf";


const AGMMinutes = () => {
  const pdfList = [
    { title: "CCC276 - AGM Minutes 2024", file: AGM2024 },
    { title: "CCC276 - AGM Minutes 2023", file: AGM2023 },
    { title: "CCC276 - AGM Minutes 2022", file: AGM2022 },
    { title: "CCC276 - AGM Minutes 2021", file: AGM2021 },
    { title: "CCC276 - AGM Minutes 2020", file: AGM2020 },
    { title: "CCC276 - AGM Minutes 2019", file: AGM2019 },
    { title: "CCC276 - AGM Minutes 2018", file: AGM2018 },
    { title: "CCC276 - AGM Minutes 2017", file: AGM2017 },
    { title: "CCC276 - AGM Minutes 2016", file: AGM2016 },
    { title: "CCC276 - AGM Minutes 2015", file: AGM2015 },
    { title: "CCC276 - AGM Minutes 2014", file: AGM2014 },
    { title: "CCC276 - AGM Minutes 2013", file: AGM2013 },
    { title: "CCC276 - AGM Minutes 2012", file: AGM2012 },
    { title: "CCC276 - AGM Minutes 2011", file: AGM2011 },
    { title: "CCC276 - AGM Minutes 2010", file: AGM2010 },
    { title: "CCC276 - AGM Minutes 2009", file: AGM2009 },
  ];

  return (
    <PdfViewerPage
      title="AGM Minutes"
      description="Below are the AGM Minutes for CCC276 - Sandhamn Private."
      pdfList={pdfList}
    />
  );
};

export default AGMMinutes;
