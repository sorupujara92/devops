import React from "react";
import ReactDOM from 'react-dom';
import CheckBoxComponent from "../CheckBoxComponent/CheckBoxComponent";
import { shallow } from "enzyme";


  it("Test Checkbox Component", () => {
    let wrapper=shallow(<CheckBoxComponent/>)

    expect(wrapper).toMatchSnapshot()

})
