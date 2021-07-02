import React from "react";
import ReactDOM from 'react-dom';
import ChipComponent from "../ChipComponent/ChipComponent";
import { shallow } from "enzyme";

  it("Test ChipComponent", () => {
    
    let wrapper=shallow(<ChipComponent/>)
    expect(wrapper).toMatchSnapshot()

})
