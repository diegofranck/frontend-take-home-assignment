import { fireEvent, render, RenderResult } from "@testing-library/react";
import PlanSimulation from "./PlanSimulation";

const mockedUsedNavigate = jest.fn();
const getItemMock = jest.fn();
const setItemMock = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
  useParams: () => ({
    slug: "slug",
  }),
}));

// Object.defineProperty(window, "alert"

Object.defineProperty(window, "localStorage", {
  value: {
    getItem: getItemMock,
    setItem: setItemMock,
  },
  writable: true,
  configurable: true,
});

describe("PlanSimulation", () => {
  let component: RenderResult;
  let inputAmount: HTMLInputElement;

  beforeEach(() => {
    component = render(<PlanSimulation />);

    inputAmount = component.getByTestId(
      "amount-input-field"
    ) as HTMLInputElement;
  });

  it("renders correctly the application", () => {
    expect(component.getByTestId("plan-simulation")).toBeInTheDocument();

    expect(component.queryByTestId("summary")).not.toBeInTheDocument();

    expect(getItemMock).toHaveBeenCalledTimes(1);
  });

  it("shows summary section and confirm button when amount and reach date are defined", () => {
    expect(component.queryByTestId("summary")).not.toBeInTheDocument();

    expect(component.queryByTestId("confirm-button")).not.toBeInTheDocument();

    fireEvent.change(inputAmount, { target: { value: 100 } });

    expect(inputAmount.value).toBe("100");

    expect(component.queryByTestId("summary")).toBeInTheDocument();

    expect(component.queryByTestId("confirm-button")).toBeInTheDocument();
  });

  it("doesn't show summary section and confirm button when ammount is $0", () => {
    expect(component.queryByTestId("summary")).not.toBeInTheDocument();

    expect(component.queryByTestId("confirm-button")).not.toBeInTheDocument();

    fireEvent.change(inputAmount, { target: { value: 0 } });

    expect(inputAmount.value).toBe("0");

    expect(component.queryByTestId("summary")).not.toBeInTheDocument();

    expect(component.queryByTestId("confirm-button")).not.toBeInTheDocument();
  });

  it("calculates correctly the monthly amount when amount and reach date are updated", () => {
    fireEvent.change(inputAmount, { target: { value: 25000 } });

    expect(inputAmount.value).toBe("25,000");

    const summary = component.queryByTestId("summary");
    const incrementButton = component.getByTestId("increment-button");
    const decrementButton = component.getByTestId("decrement-button");

    // Updating reach date values
    fireEvent.click(incrementButton);

    expect(summary).toHaveTextContent("$12,500.00");
    expect(summary).toHaveTextContent("2 monthly deposits");

    const reachDateInput = component.queryByTestId(
      "reach-date-input"
    ) as HTMLInputElement;

    fireEvent.keyDown(reachDateInput, { key: "ArrowRight" });

    expect(summary).toHaveTextContent("$8,333.33");
    expect(summary).toHaveTextContent("3 monthly deposits");

    fireEvent.keyDown(reachDateInput, { key: "ArrowRight" });

    expect(summary).toHaveTextContent("$6,250.00");
    expect(summary).toHaveTextContent("4 monthly deposits");

    fireEvent.keyDown(reachDateInput, { key: "ArrowLeft" });

    expect(summary).toHaveTextContent("$8,333.33");
    expect(summary).toHaveTextContent("3 monthly deposits");

    fireEvent.click(decrementButton);

    expect(summary).toHaveTextContent("$12,500.00");
    expect(summary).toHaveTextContent("2 monthly deposits");

    // Testing invalid keydown
    fireEvent.keyDown(reachDateInput, { key: "ArrowDown" });

    expect(summary).toHaveTextContent("$12,500.00");
    expect(summary).toHaveTextContent("2 monthly deposits");

    // Updating amount again
    fireEvent.change(inputAmount, { target: { value: 50000 } });

    expect(inputAmount.value).toBe("50,000");

    expect(summary).toHaveTextContent("$25,000.00");
    expect(summary).toHaveTextContent("2 monthly deposits");

    fireEvent.click(incrementButton);

    expect(summary).toHaveTextContent("$16,666.67");
    expect(summary).toHaveTextContent("3 monthly deposits");
  });

  it("persists correctly the update values for amount and reach date", () => {
    const incrementButton = component.getByTestId("increment-button");

    fireEvent.change(inputAmount, { target: { value: 25000 } });

    expect(inputAmount.value).toBe("25,000");

    fireEvent.click(incrementButton);

    const confirmButton = component.queryByTestId(
      "confirm-button"
    ) as HTMLButtonElement;

    expect(confirmButton).toBeInTheDocument();

    fireEvent.click(confirmButton);

    expect(setItemMock).toHaveBeenCalledTimes(1);

    expect(setItemMock).toHaveBeenCalledWith(
      "origin",
      JSON.stringify({
        slug: {
          amount: inputAmount.value,
          reachDate: new Date(),
        },
      })
    );
  });
});
