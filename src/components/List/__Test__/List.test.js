import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HeaderList from "../HeaderList";

const mockListWrapper = ({ filteredResults }) => {
  <BrowserRouter>
    <HeaderList filteredResults={filteredResults}></HeaderList>
  </BrowserRouter>;
};

test("should render the correct amount of profiles filtered", () => {
  render(<mockListWrapper filteredResults={5} />);
  const paraghaph = screen.getByText(/Muchas gracias, su busqueda ha arrogado 5 resultados/i  );
  expect(paraghaph).toBeInTheDocument();
});

test("should render 'resultado' when the number of results is equal to one, otherwise have to render 'resultados'", () => {
  render(<mockListWrapper filteredResults={1} />);
  const paraghaph = screen.getByText(/Muchas gracias, su busqueda ha arrogado 1 resultado/i);
  expect(paraghaph).toBeInTheDocument();
});
