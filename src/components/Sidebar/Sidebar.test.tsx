import React from "react";

import Sidebar from "./Sidebar";
import { shallow } from "enzyme";
import { List } from "@material-ui/core";

it("renders correctly", () => {
  const wrapper = shallow(<Sidebar />);

  expect(wrapper).toMatchSnapshot();
});
