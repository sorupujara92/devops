import React from "react";
import { shallow } from "enzyme";
import DatePicker from "../DatePicker/DatePicker";
import { render, fireEvent, act } from "@testing-library/react";

describe("Testing the datepicker ", () => {
  const datePickerProps = {
    datePickerHidden: true,
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DatePicker {...datePickerProps} />);
  });

  it("Render the date picker", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Test calendar icon in the date picker", () => {
    expect(wrapper.find("CalendarTodayIcon")).toBeDefined();
  });
  it("Test calendar in the date picker", () => {
    expect(wrapper.find("Calendar")).toBeDefined();
  });
  it("Test Time picker  in the date picker", () => {
    expect(wrapper.find("MyTimePicker")).toBeDefined();
  });
});
