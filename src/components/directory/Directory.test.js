import React from "react"
import {shallow} from "enzyme"
import Directory from "./Directory"


it("Should render Directory component correctly", () => {
    const directory = shallow(<Directory />);
    expect.assertions(1)
    expect(directory.props().children).not.toBeUndefined() // check if a component renders correctly
  });