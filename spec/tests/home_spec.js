const request = require("request");
const server = require("../../src/server.js");
const homepage = "http://localhost:3000/";

describe("routes : homepage", () => {
    it("should return a status code 200", (done) => {
        request.get(homepage, (err, res, body) => {
            expect(res.statusCode).toBe(200);
            done();
        })
    })
})