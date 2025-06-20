import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/mockResListData.json";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the body component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button");
  // , { name: "Search" }
  console.log(searchBtn);
  expectedError(searchBtn).toBeInTheDocument();
});
