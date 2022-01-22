import { render, screen } from "@testing-library/react";
import { Alert } from "./index";

it("should render without crashing", () => {
  render(<Alert />);
  expect(screen.getByRole("alert")).toBeInTheDocument();
});

it("should render also the text content", () => {
  render(<Alert>Hello World</Alert>);

  const element = screen.getByRole("alert");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Hello World");
});

it("should render also the className", () => {
  render(<Alert className="my-class">Hello World</Alert>);

  const element = screen.getByRole("alert");
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass("my-class");
});

it("should render also the style", () => {
  render(<Alert style={{ color: "red" }}>Hello World</Alert>);

  const element = screen.getByRole("alert");
  expect(element).toBeInTheDocument();
  expect(element).toHaveStyle("color: red");
});
