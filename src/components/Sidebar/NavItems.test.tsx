import React from "react";

import {shallow} from "enzyme";
import NavItems from "./NavItems";

it("renders correctly", () => {
  const wrapper = shallow(<NavItems />);

  expect(wrapper).toMatchSnapshot();
});

