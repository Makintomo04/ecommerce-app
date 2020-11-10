import React from "react"
import {shallow} from "enzyme"
import EmailList from "./EmailList"


it("Should render Blog component correctly", () => {
    const emailList = shallow(<EmailList />);
    expect(emailList).toMatchSnapshot(); // check if a component renders correctly
  });