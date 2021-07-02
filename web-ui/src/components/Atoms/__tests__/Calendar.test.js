import React from "react";
import { shallow } from "enzyme";
import Calendar from "../Calendar/Calendar";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

describe("Test Calendar component", () => {

  
  it("Test change event", () => {
    let props = {
      value:  " ",
      onChange: jest.fn(),
    };

    const wrapper = shallow(<Calendar {...props} />);
    wrapper.find("#date-picker-inline").simulate("change");

    expect(props.onChange).toHaveBeenCalled();

  });
  it("Test the MuiPickersUtilsProvider ",()=>{
    
    let wrapper = shallow(<Calendar />);
    expect(wrapper.find(MuiPickersUtilsProvider)).toHaveLength(1);

  });
  it("Test the DatePicker items",()=>{
    
    let wrapper = shallow(<Calendar />);
    expect(wrapper.find(DatePicker).props().variant).toEqual("static");

  });

});
