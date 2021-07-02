import React from "react";
import { shallow } from "enzyme";
import MyTimePicker from "../MyTimePicker/MyTimePicker";

  it("Test MyTimePicker Component", () => {
    let props = {
        value:'12:30 PM',
      onChange: jest.fn()
    };

    let wrapper = shallow(<MyTimePicker {...props} />);
    wrapper.find('#time-picker').simulate('change');

    expect(props.onChange).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot()

  });

