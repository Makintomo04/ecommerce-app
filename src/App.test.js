import React from "react"
import {shallow} from "enzyme"
import {App} from "./App"


it("Should render App component correctly", () => {
    const app = shallow(<App />);
    expect.assertions(1)
    expect(app.props().children).toMatchSnapshot() // check if a component renders correctly
  });