import React from 'react';
import { shallow } from 'enzyme';
import Button from '../button/signInButton';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from "react-test-renderer";

configure({ adapter: new Adapter() });

describe('Test Button component', () => {
  it("Matches the snapshot", () => {
    const button = create(<Button />);  
    expect(button.toJSON()).toMatchSnapshot();
  });
    it('Test click event', () => {
      const mockcall = jest.fn();  
      const button = shallow(<Button onClick={mockcall}>Button clicked</Button>);
      button.find('#button').simulate('click');
      expect(mockcall.mock.calls.length).toEqual(1);
    });
  });