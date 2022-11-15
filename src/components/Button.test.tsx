import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { IconButton, LabelButton } from "./Button";

describe("Button", () => {
  describe.each([IconButton, LabelButton])("%s", (ComponentName) => {
    it("renders the button ", () => {
      const component = render(
        <ComponentName>
          <></>
        </ComponentName>
      );

      const button = component.getByRole("button");

      expect(button).toBeInTheDocument();
    });

    it("can be disabled", () => {
      const component = render(
        <ComponentName disabled>
          <></>
        </ComponentName>
      );

      const button = component.getByRole("button") as HTMLButtonElement;

      expect(button.disabled).toBeTruthy();
    });

    it("triggers the onClick callback when the onClick event is fired", () => {
      const props = { onClick: jest.fn() };

      const component = render(
        <ComponentName {...props}>
          <img src="any-source" alt="any alt" />
        </ComponentName>
      );

      const button = component.getByRole("button");

      fireEvent.click(button);

      expect(props.onClick).toHaveBeenCalledTimes(1);
    });
  });
});
