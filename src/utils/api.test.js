import { getNewsArticles } from "./api";
import {mockData} from "./mockData.js";

beforeEach(() => {
    fetch.resetMocks();
});

it("convers correctly", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockData));
    const response = await getNewsArticles();
    console.log(response);
})