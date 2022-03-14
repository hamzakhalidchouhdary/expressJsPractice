const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../src/server.js');
chai.use(chaiHttp);

describe('LOGIN', () => {
  describe('/POST login', () => {
      it('it should RETURN errors', (done) => {
      chai.request(server)
        .post('/api/v1/auth/login')
        .end((err, res) => {
          (res).should.have.status(400);
          (res.body).should.be.a('object');
          (res.body.errors).should.have.lengthOf(4);
          done();
        });
      });
   });
});