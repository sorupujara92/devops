import React from "react";
import { shallow } from "enzyme";
import Task from "../Task/Task";
import moment from "moment";

describe("Testing the task component", () => {
  const taskProps = {
    endDate: new Date("10-06-2020").getFullYear(),
    description: "Testing",
  };
  const covertedTimeZone = (date) => {
    let endDate = moment(date).format("lll");
    console.log(endDate);
    endDate =
      endDate.substring(0, endDate.indexOf(",")) +
      ", " +
      endDate.substring(endDate.indexOf(",") + 6);
    console.log(endDate);
    return endDate;
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Task {...taskProps} />);
  });
  it("Test the checkbox Component in task Component", () => {
    expect(wrapper.find("CheckBoxComponent").props().size).toEqual("small");
    expect(wrapper).toMatchSnapshot();
  });
  it("Test the typoraphy Component in task Component", () => {
    expect(wrapper.find("#description").props().children).toEqual("Testing");
  });
  it("Test the Chip Component in task Component", () => {
    var date = new Date("01-01-1970").getFullYear();
    console.log(date);
    expect(wrapper.find("ChipComponent").props().label).toEqual(
      covertedTimeZone(date)
    );
  });
});
