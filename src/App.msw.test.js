import "whatwg-fetch";
import {rest} from "msw";
import {setupServer} from "msw/node";
import {getNewsArticles} from './utils/api';

const server = setupServer(
  rest.get("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=d7wW7yS7JGSVjxpJiJ2ZDOdqlP0zReac", (req, res, ctx) =>{
      return res(
        ctx.status(200),
        ctx.json(mockData)
      )
  })
)

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

it("calls the api", async () => {
  const data = await getNewsArticles();
  expect(data.num_results).toEqual(20);
})
