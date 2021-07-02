import React from "react";
import { render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Logo from "../logoImage/logo";
import { create } from "react-test-renderer";


describe("Logo component", () => {
    it("Matches the snapshot", () => {
        const logo = create(<Logo />);    
        expect(logo.toJSON()).toMatchSnapshot();
    });
    it( "logo image should be present", () => {
        const { getByTestId } = render(<Logo />);
        expect(getByTestId("logoImage")).toBeInTheDocument();
    });
    it("image title should be Todo",() => {
        const { getByTestId } = render(<Logo />);
        expect(getByTestId("imageTitle")).toHaveTextContent("Todo");   

    })
});
