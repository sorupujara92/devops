import React from 'react';
import {shallow} from 'enzyme';
import PrimarySearchAppBar from '../Homepage/appbar';
import AppBar from "@material-ui/core/AppBar";
import * as Constants from "../../../constants";
import { Typography } from "@material-ui/core";

describe("AppBar component", () => {
    const wrapper = shallow(<PrimarySearchAppBar />);
    it("App Bar should exits", () => {
        expect(wrapper.exists()).toBe(true);
    });
    it("Search bar should exists", () => {
        const searchBar = wrapper.find({'data-testid':"searchbar"});
        expect(searchBar).toBe;
    });
    it("should render the search icon", () => {
        const searchIcon = wrapper.find({'data-testid':"searchIcon"});
        expect(searchIcon).toBe;
    });
    it("should render the notifications avatar", () => {
        const notificationsIcon = wrapper.find({'data-testid':"notificationsIcon"});
        expect(notificationsIcon).toBe;
    });
    it("should render the profile icon", () => {
        const profileMenu = wrapper.find({'data-testid':"profileMenu"});
        expect(profileMenu).toBe;
    });
});