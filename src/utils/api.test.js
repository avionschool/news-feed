import { getNewsArticles } from "./api";

beforeEach(() => {
    fetch.resetMocks();
});

it("convers correctly", async () => {
    fetch.mockResponseOnce(JSON.stringify({num_results: 20}));

    const response = await getNewsArticles();

    console.log(response);
})