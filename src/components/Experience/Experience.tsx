import React from "react";
import withPage from "../Page/Page";

import CompanyList from "./CompanyList";
import Header from "../Header";

const Experience = () => {
  return (
    <div>
      <Header title={"Experience"} />

      <CompanyList />
    </div>
  );
};

export default withPage(Experience);
