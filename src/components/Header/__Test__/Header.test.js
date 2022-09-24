import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should render same text passed in title prop", async () => {
  render(
    <Header
      title="Discover the best poker players"
    />
  );
  const title = screen.getByText(/Discover the best poker players/);
  expect(title).toBeInTheDocument();
});

test("should render same text passed in description prop", async () => {
  render(
    <Header
      description="From all over the World. You can contact them now
"
    />
  );
  const description = screen.getByRole("heading", {
    name: "From all over the World. You can contact them now",
  });
  expect(description).toBeInTheDocument();
});
