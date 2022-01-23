import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Toggle } from "./index";

it("should render without crashing", () => {
  render(<Toggle />);

  expect(screen.getByRole("button")).toBeInTheDocument();
  expect(screen.getByRole("button")).toHaveTextContent("Off");
});

it("should have the corrent aria attributes", () => {
  render(<Toggle />);

  expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "false");
  expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "false");
  expect(screen.getByRole("button")).toHaveAttribute("aria-label", "Toggle");
});

it("should toggle the state when clicked", () => {
  render(<Toggle />);

  userEvent.click(screen.getByRole("button"));

  expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByRole("button")).toHaveTextContent("On");

  userEvent.click(screen.getByRole("button"));

  expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "false");
  expect(screen.getByRole("button")).toHaveTextContent("Off");
});

it("should call onToggle when clicked", () => {
  const onToggle = jest.fn((toggleState) => !toggleState);

  render(<Toggle onToggle={onToggle} />);

  userEvent.click(screen.getByRole("button"));

  expect(onToggle).toHaveBeenCalledTimes(1);
  expect(onToggle).toHaveBeenCalledWith(false);
  expect(onToggle).toHaveReturnedWith(true);

  userEvent.click(screen.getByRole("button"));

  expect(onToggle).toHaveBeenCalledTimes(2);
  expect(onToggle).toHaveBeenCalledWith(true);
  expect(onToggle).toHaveReturnedWith(false);
});

it.skip("should call onToggle when spacebar is pressed", () => {
  const onToggle = jest.fn((toggleState) => !toggleState);

  render(<Toggle onToggle={onToggle} />);

  userEvent.type(screen.getByRole("button"), " ");

  // TODO: How the fuck this thing works?
  expect(onToggle).toHaveBeenCalledTimes(1);
  expect(onToggle).toHaveBeenCalledWith(false);
  expect(onToggle).toHaveReturnedWith(true);

  userEvent.type(screen.getByRole("button"), " ");

  expect(onToggle).toHaveBeenCalledTimes(2);
  expect(onToggle).toHaveBeenCalledWith(true);
  expect(onToggle).toHaveReturnedWith(false);
});

it("should call onToggle when enter is pressed", () => {
  const onToggle = jest.fn((toggleState) => !toggleState);

  render(<Toggle onToggle={onToggle} />);

  userEvent.type(screen.getByRole("button"), "Enter");

  expect(onToggle).toHaveBeenCalledTimes(1);
  expect(onToggle).toHaveBeenCalledWith(false);
  expect(onToggle).toHaveReturnedWith(true);

  userEvent.type(screen.getByRole("button"), "Enter");

  expect(onToggle).toHaveBeenCalledTimes(2);
  expect(onToggle).toHaveBeenCalledWith(true);
  expect(onToggle).toHaveReturnedWith(false);
});

it("should have the correct attributes when disabled", () => {
  render(<Toggle disabled />);

  expect(screen.getByRole("button")).toHaveAttribute("disabled", "");
  expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "true");
});

it("should render a pressed toggle when passed isToggled of true", () => {
  render(<Toggle isToggled={true} />);

  expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByRole("button")).toHaveTextContent("On");
});

it("should render with the correct className", () => {
  render(<Toggle className="test-class" />);

  expect(screen.getByRole("button")).toHaveClass("test-class");
});

it("should render with the correct style", () => {
  render(<Toggle style={{ color: "red" }} />);

  expect(screen.getByRole("button")).toHaveStyle("color: red;");
});
