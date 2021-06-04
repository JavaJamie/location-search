import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
    rest.get("https://code-challenge-backend.herokuapp.com/locations", (req, res, ctx) => {
    const searchValue = req.url.searchParams.get('q');
    if (searchValue === "londes") {
        return res(ctx.status(200), ctx.json({ data: [{ name: "Londesborough", id: 1234567 } ]}));
    } else {
        return res(ctx.status(200), ctx.json({ data: []}));
    }
}));

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };