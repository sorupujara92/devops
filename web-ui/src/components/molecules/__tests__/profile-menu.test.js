import React from 'react';
import ProfileMenu from '../profile-menu/profile-menu';
import {shallow} from 'enzyme';

describe("Profile component", () => {
    it("renders the profile avatar", () => {
        const wrapper = shallow(<ProfileMenu />);
        const avatar = wrapper.find({'data-testid':"avatar"});
        expect(avatar).toBe;
    });
});

