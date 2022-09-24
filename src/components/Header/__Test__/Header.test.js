import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should render same text passed in title prop", async () => {
  render(<Header title="Conoce los mejores jugadores del mundo" />);
  const title = screen.getByText(/Conoce los mejores jugadores del mundo/);
  expect(title).toBeInTheDocument();
});

test("should render same text passed in description prop", async () => {
  render(<Header description="Busca y recluta ahora" />);
  const description = screen.getByRole("heading", { name: "Busca y recluta ahora"});
  expect(description).toBeInTheDocument();
});
