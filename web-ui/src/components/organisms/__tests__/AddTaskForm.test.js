import React from "react";
import { shallow } from "enzyme";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import { render, fireEvent, act } from "@testing-library/react";

jest.mock("../DatePicker/DatePicker", () => ({
  __esModule: true,
  default: () => <span>DatePicker</span>,
}));

describe("Testing add form task", () => {
  let formProps = {
    hidden: "true",
    setUpdatedList: jest.fn(),
    setHidden: jest.fn(),
    setHideInbox: jest.fn(),
  };

  it("testing inputfield", () => {
    const { getByTestId } = render(<AddTaskForm {...formProps} />);
    const wrapper = shallow(<AddTaskForm {...formProps} />);
    const input = getByTestId("inputField2");
    act(() => {
      fireEvent.change(input, {
        target: {
          value: "Testing",
        },
      });
    });
    expect(input.getAttribute("value")).toEqual("Testing");
    expect(wrapper).toMatchSnapshot();
  });

  it("test  save button ", () => {
    const { getByTestId } = render(<AddTaskForm {...formProps} />);

    const saveButton = getByTestId("save-button");
    const input = getByTestId("inputField2");
    act(() => {
      fireEvent.click(saveButton);
    });
    expect(input.getAttribute("value")).toEqual("");
  });
  it("test cancel button", () => {
    const { getByTestId } = render(<AddTaskForm {...formProps} />);

    const saveButton = getByTestId("cancel-button");
    const input = getByTestId("inputField2");
    act(() => {
      fireEvent.click(saveButton);
    });

    expect(input.getAttribute("value")).toEqual("");
  });
});
