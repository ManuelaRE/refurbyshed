import React from "react";
import { render } from "@testing-library/react";
import Donate from "./Donate";

describe("Donate tests", () => {
  it("should render", () => {
    expect(render(<Donate />)).toBeTruthy();
  });
});
