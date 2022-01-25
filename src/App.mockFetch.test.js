import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import NewsFeed from './components/NewsFeed';
import { getNewsArticles } from './utils/api';
import {mockData} from "./utils/mockData";

jest.mock("./utils/api", () => {
  return {
      getNewsArticles: jest.fn().mockImplementation(() => {
          return JSON.stringify(mockData);
      }),
  };
});
 
test("renders the newsfeed", async() => {
  const {findByText} = render(<NewsFeed/>);
  const element = await findByText("All");
  expect(element).toBeInTheDocument();  
})

test("calling of api function mock", async () => {
  const data = await getNewsArticles()   
  console.log(data);
})