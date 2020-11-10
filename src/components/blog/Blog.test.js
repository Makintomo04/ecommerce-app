import React from "react"
import {shallow} from "enzyme"
import Blog from "./Blog"


it("Should render Blog component correctly", () => {
    const blog = shallow(<Blog />);
    expect(blog).toMatchSnapshot(); // check if a component renders correctly
  });