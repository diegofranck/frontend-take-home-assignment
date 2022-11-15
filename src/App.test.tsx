import { render } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("renders correctly the application", () => {
    const component = render(<App />);

    expect(component.getByTestId("page-subtitle").innerHTML).toBe(
      "Let's plan your <strong>saving goal.</strong>"
    );

    expect(component.getByTestId("page-header")).toBeInTheDocument();

    expect(component.getByTestId("main-component")).toBeInTheDocument();
  });
});
