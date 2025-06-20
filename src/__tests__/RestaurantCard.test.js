import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import { MOCK_DATA } from "../mocks/resCardMock.json";
it("Should render Restaurant card component with props data", () => {
  render(
    <BrowserRouter>
      <RestaurantCard resData={MOCK_DATA} />
    </BrowserRouter>
  );
  const name = screen.getByText("Subway");
  expect(name).toBeInTheDocument();
});
