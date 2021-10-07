import { render } from "@testing-library/react";
import "cypress-localstorage-commands";
import { MemoryRouter } from "react-router-dom";
import Experiment from "../../../src/pages/Experiment";

describe("Tutorial component", () => {
  beforeEach(() => {
    cy.setLocalStorage("nickname", "test");
  });
  afterEach(() => {
    cy.clearLocalStorage();
  });
  it("Render the reactive expermient", () => {
    mount(<Experiment />);
  });
});
