import { fireEvent, render, screen } from '@testing-library/react';
import NewsFeedItem from './components/NewsFeedItem';
import Sections from './components/Sections';
import News from './News';
import App from './App';
import {getNewsArticles} from './utils/api';
import {mockData} from "./utils/mockData.js"
import NewsFeed from './components/NewsFeed';

beforeEach(() => {
  fetch.resetMocks();
});

jest.mock("./utils/api", () => {
  return {
      getNewsArticles: jest.fn().mockImplementation(() => {
      return mockData;
    }),
  };
});

test("renders an a tag for `All`", async () => {
  const {findByText} = render(<NewsFeed/>);
 screen.debug();
  /*  const element = await findByText("All");
  expect(element).toBeInTheDocument();     */
})

/* test("API testing",async () =>{ //get data from mock file - OK
  fetch.mockResponseOnce(JSON.stringify(mockData));
  var data = await getNewsArticles();
  expect(data.num_results).toEqual(20);
}); */

/* test("API testing",async () =>{ //get data from actual api w/o mock
  var news = new News()
  var data = await news.api();
  expect(data.num_results).toEqual(20);
}); */

/* const media = [{type: "image",
                  subtype: "photo",
                  "media-metadata" : [{url: "https://static01.nyt.com/images/2022/01/13/opinion/13brooks1/13brooks1-thumbStandard.jpg"},
                                        {url: "https://static01.nyt.com/images/2022/01/13/opinion/13brooks1/13brooks1-thumbStandard.jpg"}
                                      ]                  
                }];   

test('renders a newsfeed item with static data', () => {
        render(<NewsFeedItem key="1"
                         uri="nyt://article/f3574b73-4f22-555c-9744-27356da9e030"
                         url="https://www.nytimes.com/…erica-falling-apart.html"
                         section="Opinion"
                         title="America Is Falling Apart at the Seams"
                         media={media}
                         abstract="Why are so many of us behaving so badly?"
                         byline="By David Brooks" />);
    //screen.debug();
    expect(screen.getByText("America Is Falling Apart at the Seams")).toBeInTheDocument();
    
}); */

/* test('Check if sections were rendered', async() =>{
  const response = new News();
  var data = await response.api();

  var sections = [];
  sections = [...new Set(data.results.map(item => item.section))];//Get unique sections

  const dummyEvent = (sectionName) =>{}
  render(<Sections selectSection={dummyEvent} sections={sections}/>)

  const sectionMenu = screen.getByText("All");
  fireEvent.click(sectionMenu);
  //screen.debug();

}) */