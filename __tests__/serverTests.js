const request = require('supertest');
const app = require('../server/server');

describe('Route integration', () => {
  describe('/api', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
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
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
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
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status and text/html content type', () => {
        return request(app)
          .get('/api/homepage/bloodsugar')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });
  });

  describe('/api/signup', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status and text/html content type', () => {
        return request(app)
          .post('/api/signup')
          .send({username})
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });
  });
});