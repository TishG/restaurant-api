const request = require("request");
const server = require("../../src/server.js");
const resultsPage = "http://localhost:3000/results";

describe("routes : results", () => {
    it("should return a status code 200", (done) => {
        request.get(resultsPage, (err, res, body) => {
            expect(res.statusCode).toBe(200);
            done();
        })
    })
})