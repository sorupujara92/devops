import React from "react";
import { render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Tagline from "../tagline/tagline";
import { create } from "react-test-renderer";


describe("Tagline component",()=>{
    it("Matches the snapshot", () => {
        const tagline = create(<Tagline />);    
        expect(tagline.toJSON()).toMatchSnapshot();
    });
    it("tagline should be Remember everything that matters",() => {
        const { getByTestId } = render(<Tagline />);
        expect(getByTestId("taglineText")).toHaveTextContent("Remember everything that matters");     
    })
});
 