import React from 'react';
import {shallow} from 'enzyme';
import SortMenu from '../sortmenu/sortmenu';

describe("SortMenu component", () => {
    let wrapper, sortIcon;
    beforeEach(() => {
        wrapper = shallow(<SortMenu />);
        sortIcon = wrapper.find('MoreHorizIcon');
    });
    it("sort icon should be in the document", () => {
        expect(sortIcon.exists()).toBe(true);
    });
    it("onclick event for sort icon should work", () => {
        expect(sortIcon.exists()).toBe(true);
        sortIcon.simulate('click');
        const sortByDateMenuItem = wrapper.find({'data-testid':"sortByDateMenuItem"}).text();
        expect(sortByDateMenuItem).toBe('Sort by date');
        const sortByNameMenuItem = wrapper.find({'data-testid':"sortByNameMenuItem"}).text();
        expect(sortByNameMenuItem).toBe('Sort by name');
    });
    it("arrow upward icon and arrow downward icon should be there", () => {
        expect(sortIcon.exists()).toBe(true);
        sortIcon.simulate('click');
        const arrowUpwardIconForDate = wrapper.find({'data-testid':"arrowUpwardIconForDate"});
        expect(arrowUpwardIconForDate).toBe;
        const arrowDownwardIconForDate = wrapper.find({'data-testid':"arrowDownwardIconForDate"});
        expect(arrowDownwardIconForDate).toBe;
        const arrowUpwardIconForName = wrapper.find({'data-testid':"arrowUpwardIconForName"});
        expect(arrowUpwardIconForName).toBe;
        const arrowDownwardIconForName = wrapper.find({'data-testid':"arrowDownwardIconForName"});
        expect(arrowDownwardIconForName).toBe;
    });
});
