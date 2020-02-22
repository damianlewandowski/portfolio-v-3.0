import React from "react";

import Sidebar from "./Sidebar";
import { shallow } from "enzyme";

it("renders correctly", () => {
  const wrapper = shallow(<Sidebar />);

  expect(wrapper).toMatchSnapshot();
});
