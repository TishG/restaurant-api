const request = require("request");
const server = require("../../src/server");
const landingPage = "http://localhost:3001/";

 describe("routes : landing", () => {
    it("should return a status code 200", (done) => {
        request.get(landingPage, (err, res, body) => {
            expect(res.statusCode).toBe(200);
            done();
        })
    })
});