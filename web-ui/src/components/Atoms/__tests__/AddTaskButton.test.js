import React from "react";
import { shallow } from "enzyme";
import AddTaskButton from "../AddTaskButton/AddTaskButton";

describe("Test AddTaskButton component", () => {
  it("Test click event on AddTask Button", () => {
    let props = {
      setHidden: jest.fn(),
    };

    let wrapper = shallow(<AddTaskButton {...props} />);
    wrapper.find("#button").simulate("click");

    expect(props.setHidden).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot()
  });
  it("Test the button label",()=>{
    
    let wrapper = shallow(<AddTaskButton />);
    expect(wrapper.find('#add-task').props().children).toEqual("Add task");
    expect(wrapper).toMatchSnapshot()

  });
});
