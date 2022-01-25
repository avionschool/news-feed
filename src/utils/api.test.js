import { getNewsArticles } from "./api";
import {mockData} from "./mockData.js";

beforeEach(() => {
    fetch.resetMocks();
});

it("fetches mock data instead from the actual api", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockData));
    
    const data = await getNewsArticles();
    expect(data).toEqual(mockData);
    expect(data.num_results).toEqual(1);
    expect(data.results.length).toEqual(1);
})