import NameDetails from "../NameDetails"
import React from "react";
import { render } from "@testing-library/react";

test("Verify button is disabled when the name has less than 3 characters", () => {
    const { getByTestId } = render (<NameDetails />)
    const input = getByTestId("nameInput");
    const button = getByTestId("getInfoButton");
    const testName = "Ru";

    input.value = testName;

    expect(button).toBeDisabled();

})