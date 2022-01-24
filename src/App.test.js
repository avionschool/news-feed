import {rest} from "msw";
import {setupServer} from "msw/node";
import { fireEvent, render, screen } from '@testing-library/react';
import NewsFeedItem from './components/NewsFeedItem';
import Sections from './components/Sections';
import News from './News';
import App from './App';
import {getNewsArticles} from './utils/api';

/* jest.mock("./utils/api", () => {
  return {
    getNewsArticles: jest.fn().mockImplementation(() => {
      return {"status":"OK",
              "copyright":"Copyright (c) 2022 The New York Times Company.  All Rights Reserved.",
              "num_results":20,
              "results":[{"uri":"nyt://article/2ff562c3-5739-585d-9ad3-faef214d742d",
                          "url":"https://www.nytimes.com/article/covid-masks.html",
                          "id":100000008157965,
                          "asset_id":100000008157965,
                          "source":"New York Times",
                          "published_date":"2022-01-14",
                          "updated":"2022-01-17 15:22:32",
                          "section":"Well",
                          "subsection":"Live",
                          "nytdsection":"well",
                          "adx_keywords":"Masks;Content Type: Service;Coronavirus (2019-nCoV);Coronavirus Omicron Variant;Shopping and Retail;Counterfeit Merchandise",
                          "column":null,
                          "byline":"By Tara Parker-Pope",
                          "type":"Article",
                          "title":"How to Find a Quality Mask (and Avoid Counterfeits)",
                          "abstract":"Knowing which mask to pick and making sure it’s not a fake requires the sleuthing skills of a forensic investigator. Our guide can help.",
                          "des_facet":["Masks","Content Type: Service","Coronavirus (2019-nCoV)","Coronavirus Omicron Variant","Shopping and Retail","Counterfeit Merchandise"],
                          "org_facet":[],
                          "per_facet":[],
                          "geo_facet":[],
                          "media":[{"type":"image",
                                    "subtype":"photo",
                                    "caption":"",
                                    "copyright":"Charlie Rubin for The New York Times",
                                    "approved_for_syndication":1,
                                    "media-metadata":[{"url":"https://static01.nyt.com/images/2022/02/13/well/13well-n95mask-guide1/13well-n95mask-guide1-thumbStandard-v2.jpg",
                                                        "format":"Standard Thumbnail","height":75,"width":75},
                                                      {"url":"https://static01.nyt.com/images/2022/02/13/well/13well-n95mask-guide1/13well-n95mask-guide1-mediumThreeByTwo210.jpg",
                                                        "format":"mediumThreeByTwo210","height":140,"width":210},
                                                      {"url":"https://static01.nyt.com/images/2022/02/13/well/13well-n95mask-guide1/13well-n95mask-guide1-mediumThreeByTwo440.jpg",
                                                        "format":"mediumThreeByTwo440","height":293,"width":440}]}
                                  ],
                          "eta_id":0}]};
    }),
  };
}); */

/* test("renders learn react", async () => {
    const {findByText} = render(<App/>);
    const element = await findByText("All");
    expect(element).toBeInTheDocument();
}) */

test("API testing",async () =>{
  fetch.mockResponseOnce(JSON.stringify({"status":"OK",
  "copyright":"Copyright (c) 2022 The New York Times Company.  All Rights Reserved.",
  "num_results":20,
  "results":[{"uri":"nyt://article/2ff562c3-5739-585d-9ad3-faef214d742d",
              "url":"https://www.nytimes.com/article/covid-masks.html",
              "id":100000008157965,
              "asset_id":100000008157965,
              "source":"New York Times",
              "published_date":"2022-01-14",
              "updated":"2022-01-17 15:22:32",
              "section":"Well",
              "subsection":"Live",
              "nytdsection":"well",
              "adx_keywords":"Masks;Content Type: Service;Coronavirus (2019-nCoV);Coronavirus Omicron Variant;Shopping and Retail;Counterfeit Merchandise",
              "column":null,
              "byline":"By Tara Parker-Pope",
              "type":"Article",
              "title":"How to Find a Quality Mask (and Avoid Counterfeits)",
              "abstract":"Knowing which mask to pick and making sure it’s not a fake requires the sleuthing skills of a forensic investigator. Our guide can help.",
              "des_facet":["Masks","Content Type: Service","Coronavirus (2019-nCoV)","Coronavirus Omicron Variant","Shopping and Retail","Counterfeit Merchandise"],
              "org_facet":[],
              "per_facet":[],
              "geo_facet":[],
              "media":[{"type":"image",
                        "subtype":"photo",
                        "caption":"",
                        "copyright":"Charlie Rubin for The New York Times",
                        "approved_for_syndication":1,
                        "media-metadata":[{"url":"https://static01.nyt.com/images/2022/02/13/well/13well-n95mask-guide1/13well-n95mask-guide1-thumbStandard-v2.jpg",
                                            "format":"Standard Thumbnail","height":75,"width":75},
                                          {"url":"https://static01.nyt.com/images/2022/02/13/well/13well-n95mask-guide1/13well-n95mask-guide1-mediumThreeByTwo210.jpg",
                                            "format":"mediumThreeByTwo210","height":140,"width":210},
                                          {"url":"https://static01.nyt.com/images/2022/02/13/well/13well-n95mask-guide1/13well-n95mask-guide1-mediumThreeByTwo440.jpg",
                                            "format":"mediumThreeByTwo440","height":293,"width":440}]}
                      ],
              "eta_id":0}]}));
  var data = await getNewsArticles();
  expect(data.num_results).toEqual(20);
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