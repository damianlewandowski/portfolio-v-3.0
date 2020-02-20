import Enzyme from "enzyme";
import React from "react"

import Adapter from "enzyme-adapter-react-16";

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
React.useLayoutEffect = React.useEffect;