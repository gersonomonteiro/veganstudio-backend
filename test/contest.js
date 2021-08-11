//During the test the env variable is set to test
process.env.NODE_ENV = "test";

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe("Contests", () => {
  /*
   * Test the /GET route
   */
  describe("/GET contest", () => {
    it("it should GET all the contest", (done) => {
      chai
        .request(server)
        .get("/veganstudio/contests")
        .end((err, res) => {
          res.should.have.status(200);
          //res.body.should.be.a("array");
          //res.body.length.should.be.eql(0);
          done();
        });
    });
  });
});
