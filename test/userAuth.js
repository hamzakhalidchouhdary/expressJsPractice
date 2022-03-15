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
    it('it should RETURN error', (done) => {
      chai.request(server)
        .post('/api/v1/auth/login')
        .send({username: 'hamzakhalidchouhdary', password: 'ahajaskshkshk12@ha'})
        .end((err, res) => {
          (res).should.have.status(401);
          (res.body.error).should.be.a('object');
          done();
        });
    });

    it('it should LOGIN user', (done) => {
      chai.request(server)
        .post('/api/v1/auth/login')
        .send({username: "hamzakhalidchouhdary_1", password: "ahajaskshkAshk12@ha",})
        .end((err, res) => {
          (res).should.have.status(200);
          (res.body.token).should.be.a('string');
          done();
        });
    });
   });
});