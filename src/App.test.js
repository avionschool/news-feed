import {rest} from "msw";
import {setupServer} from "msw/node";
import { fireEvent, render, screen } from '@testing-library/react';
import NewsFeedItem from './components/NewsFeedItem';
import Sections from './components/Sections';
import News from './News';
import App from './App';
import {getNewsArticles} from './utils/api';

/* const server = setupServer(
  rest.get("https://api.nytimes.com/svc/mostpopular/v2/emailed/",(req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({"num_results": 20}));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers()); */

jest.mock("./utils/api", () => {
  return {
    getNewsArticles: jest.fn().mockImplementation(() => {
      return { num_results : 20 };
    }),
  };
});

/* test("API testing", async() =>{
  const response = new News();
  
  var data = await response.api();
  expect(data.num_results).toEqual(20);
});  */

test("API testing",async () =>{
  var data = await getNewsArticles();
  console.log(data);
  expect(data).toEqual(20);
});

const media = [{type: "image",
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
    
});

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