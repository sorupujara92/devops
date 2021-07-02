import React from 'react';

import {shallow} from 'enzyme';
import InboxEmpty from '../inbox-empty/inbox-empty';
import { render} from "@testing-library/react";

describe("InboxEmpty component", () => {
    const wrapper = shallow(<InboxEmpty />);
    it("renders the landing page", () => {
        const { getByTestId } = render(<InboxEmpty />);
        expect(getByTestId("image")).toBeInTheDocument()
    });
    it("should have the text Keep tasks organised", () => {
        const content = wrapper.find({'data-testid' : "keepTasksOrganised"}).text();
        expect(content).toBe('Keep your tasks organized');
    });
    it("should have the text Keep tasks organised", () => {
        const content = wrapper.find({'data-testid' : "startAddingTasks"}).text();
        expect(content).toBe('Start by adding all the tasks using the Add Task button.');
    });
    it("should render a + icon", () => {
        const addIcon = wrapper.find({'data-testid': "addIcon"});
        expect(addIcon).toBe;
    });
    it("button should render the text Add task", () => {
        const addtask = wrapper.find("span").text();
        expect(addtask).toBe('Add task');
    });
});