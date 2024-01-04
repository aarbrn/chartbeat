const request = require('supertest');
const app = require('../server/server');

describe('Route integration', () => {
  describe('/api', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(app)
          .get('/api')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });

  describe('/api/homepage', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(app)
          .get('/api/homepage')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });

  describe('/api/homepage/bloodsugar', () => {
    describe('GET', () => {
      it('responds with 200 status and json content type', () => {
        return request(app)
          .get('/api/homepage/bloodsugar')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });
  });

  // describe('/api/signup', () => {
  //   describe('GET', () => {
  //     it('responds with 200 status and text/html content type', () => {
  //       return request(app)
  //         .post('/api/signup')
  //         .send({username})
  //         .expect('Content-Type', /application\/json/)
  //         .expect(200);
  //     });
  //   });
  // });
});