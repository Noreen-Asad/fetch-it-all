const assert = require("assert");
const sinon = require("sinon");
const requestMultipleURLs = require("./src/index");


describe("fetch urls", function() {
  describe("all urls are valid", async (done) => {
    it("fetch is called", () => {
      const urls = [
        "https://jsonplaceholder.typicode.com/comments/1",
        "https://jsonplaceholder.typicode.com/comments/2",
        "https://jsonplaceholder.typicode.com/comments/3"
      ];
      fetch = sinon.spy(); 
      requestMultipleURLs(urls);
      assert.ok(fetch.called, 'fetch is called');
    }).then(done,done);
  });
});

