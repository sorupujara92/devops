import React from 'react';
import {shallow} from 'enzyme';
import HomePageLogo from '../homepage-logo/homepage-logo';
import { Typography } from "@material-ui/core";
import { render} from "@testing-library/react";


describe('Logo component', () => {
    it('displays text with logo', () => {
        const wrapper = shallow(<HomePageLogo />);
        const content = wrapper.find(Typography).props().children;
        expect(content).toEqual('Todo');
    });
     it("renders an image", () => {
         const { getByTestId } = render(<HomePageLogo />);
         expect(getByTestId("logoImage")).toBeInTheDocument();
     });
});