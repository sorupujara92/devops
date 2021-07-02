import React from 'react';
import {shallow} from 'enzyme';
import MiniDrawer from '../Homepage/drawer';
import { Typography } from "@material-ui/core";
import * as Constants from "../../../constants";

describe("Drawer Component", () => {
    const wrapper = shallow(<MiniDrawer />);
    it("should render the inbox icon", () => {
        const inboxIcon = wrapper.find({'data-testid':"inboxIcon"});
        expect(inboxIcon).toBe;
    });
    it("should render the inbox tab content", () => {
        const inbox_tab_content = wrapper.find({'data-testid':"inbox_tab"}).text();
        expect(inbox_tab_content).toBe('Inbox');
    });
    it("should render the scheduled icon", () => {
        const scheduledIcon = wrapper.find({'data-testid':"scheduledIcon"});
        expect(scheduledIcon).toBe;
    });
    it("should render the scheduled tab content", () => {
        const scheduled_tab_content = wrapper.find({'data-testid':"scheduled_tab"}).text();
        expect(scheduled_tab_content).toBe('Scheduled');
    });
    it("should render the archive icon", () => {
        const archiveIcon = wrapper.find({'data-testid':"archiveIcon"});
        expect(archiveIcon).toBe;
    });
});