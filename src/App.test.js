// import { render, screen } from "@testing-library/react";
// import Banderas from "./components/CustomCall/Banderas";
// import UserCard from "./components/Users/UserCard";
// import { UserContext } from "./context/UserContext";
// import Home from "./pages/Home";

// test("render the cards filtered after searching", () => {
//   render(<Home />);
//   const SearchBox = screen.getByRole("input", { name: "searchBox" });
//   expect(SearchBox).toBeInTheDocument();
// });

// test("if the profile popUp always shows after click", () => {
//   render(<UserCard />);
//   const button = screen.getByRole("button", { name: "popUp-button" });
//   expect(button).toBeInTheDocument();
// });

// test("if the custom call output the quantity and nationality select by user", () => {
//   render(<Banderas />);
//   const button = screen.getByRole("button", { name: "popUp-button" });
//   expect(button).toBeInTheDocument();
// });

// test("if the api is active", () => {
//   render(<UserContext />);
//   const button = screen.getByRole("button", { name: "popUp-button" });
//   expect(button).toBeInTheDocument();
// });

// // Chequear que al buscar aparezcan elementos y sino que aparezca un mensaje.
// // Chequear que al hacer clic en el boton de perfil, se renderice el pop up con los datos del usuario
// // Chequear que al hacer el custom call se renderice esa cantidad de cards y de esa nacionalidad
