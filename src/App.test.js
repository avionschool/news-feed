import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import NewsFeed from "./components/NewsFeed";
import { getNewsArticles } from "./utils/api";
import { mockData } from "./utils/mockData";

jest.mock("./utils/api");

test("renders the newsfeed", async () => {
  getNewsArticles.mockImplementation(() => {
    return mockData;
  });
  render(<NewsFeed />);
  expect(getNewsArticles).toHaveBeenCalled();
  const element = await screen.findByText("All");
  expect(element).toBeInTheDocument();
});

// test("calling of api function mock", async () => {
//   const data = await getNewsArticles();
//   console.log(data);
// });
