import { render, screen } from "@testing-library/react";
import { Breadcrumb } from "./index";

it("should render without crashing", () => {
  render(<Breadcrumb />);

  expect(screen.getByRole("navigation")).toBeInTheDocument();
  expect(screen.getByRole("navigation")).toHaveAttribute(
    "aria-label",
    "Breadcrumb"
  );
});

it("should render the breadcrumb items", () => {
  render(
    <Breadcrumb>
      <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/library">Library</Breadcrumb.Item>
      <Breadcrumb.Item href="/data">Data</Breadcrumb.Item>
    </Breadcrumb>
  );

  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Library" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Data" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Data" })).toHaveAttribute(
    "aria-current",
    "page"
  );
});

it("should render the breadcrumb with the default separator", () => {
  render(
    <Breadcrumb>
      <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/library">Library</Breadcrumb.Item>
      <Breadcrumb.Item href="/data">Data</Breadcrumb.Item>
    </Breadcrumb>
  );

  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getByRole("list")).toHaveTextContent("Home > Library > Data");
});

it("should render the breadcrumb with the custom separator", () => {
  render(
    <Breadcrumb separator="/">
      <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/library">Library</Breadcrumb.Item>
      <Breadcrumb.Item href="/data">Data</Breadcrumb.Item>
    </Breadcrumb>
  );

  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getByRole("list")).toHaveTextContent("Home / Library / Data");
});

it("should render the className for the list", () => {
  render(
    <Breadcrumb className="my-class">
      <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/library">Library</Breadcrumb.Item>
      <Breadcrumb.Item href="/data">Data</Breadcrumb.Item>
    </Breadcrumb>
  );

  const element = screen.getByRole("navigation");
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass("my-class");
});

it("should render the style for the list", () => {
  render(
    <Breadcrumb style={{ color: "red" }}>
      <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/library">Library</Breadcrumb.Item>
      <Breadcrumb.Item href="/data">Data</Breadcrumb.Item>
    </Breadcrumb>
  );

  const element = screen.getByRole("navigation");
  expect(element).toBeInTheDocument();
  expect(element).toHaveStyle("color: red");
});

it("should render the className for the items", () => {
  render(
    <Breadcrumb>
      <Breadcrumb.Item href="/home" className="my-class">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/library">Library</Breadcrumb.Item>
      <Breadcrumb.Item href="/data">Data</Breadcrumb.Item>
    </Breadcrumb>
  );

  const element = screen.getByRole("link", { name: "Home" });
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass("my-class");
});

it("should render the style for the items", () => {
  render(
    <Breadcrumb>
      <Breadcrumb.Item href="/home" style={{ color: "red" }}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/library">Library</Breadcrumb.Item>
      <Breadcrumb.Item href="/data">Data</Breadcrumb.Item>
    </Breadcrumb>
  );

  const element = screen.getByRole("link", { name: "Home" });
  expect(element).toBeInTheDocument();
  expect(element).toHaveStyle("color: red");
});
