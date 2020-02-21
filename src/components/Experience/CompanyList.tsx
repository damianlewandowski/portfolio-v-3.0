import React from "react";
import List from "@material-ui/core/List";

import CompanyListItem from "./CompanyListItem";
import experienceJson from "../../static/experience.json";

const experiences = [...experienceJson];

const CompanyList = () => {
  return (
    <div>
      <List disablePadding={true}>
        {experiences.map(experience => (
          <CompanyListItem key={experience.companyName} {...experience} />
        ))}
      </List>
    </div>
  );
};

export default CompanyList;
