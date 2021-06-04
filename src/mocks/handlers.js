

/**
 * This is a simple test to mock the response of the backend.
 */
export const handlers = [
    rest.get("https://code-challenge-backend.herokuapp.com/locations?q=londes", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ data: [{ name: "Londesborough", id: 7300449 } ]}));
    })
]