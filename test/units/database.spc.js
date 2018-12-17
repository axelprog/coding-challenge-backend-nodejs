import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

import dbConnector from '../../database/connector';


chai.use(chaiAsPromised);
chai.should();

/* Test database init */
describe('database initialization', () => {
  it('it should connect DB', (done) => {
    dbConnector.authenticate().should.be.fulfilled.and.notify(done);
  });
});

