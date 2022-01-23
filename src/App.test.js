import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import NewsFeed from './components/NewsFeed';
import NewsFeedItem from './components/NewsFeedItem';
import Sections from './components/Sections';
import News from './News';

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

it("API testing", async() =>{
      const response = new News();
      
      var data = await response.api();
      expect(data.num_results).toEqual(20);
})

test('Check if sections were rendered', async() =>{
  const response = new News();
  var data = await response.api();

  var sections = [];
  sections = [...new Set(data.results.map(item => item.section))];//Get unique sections

  const dummyEvent = (sectionName) =>{}
  render(<Sections selectSection={dummyEvent} sections={sections}/>)

  const sectionMenu = screen.getByText("All");
  fireEvent.click(sectionMenu);
  screen.debug();

})