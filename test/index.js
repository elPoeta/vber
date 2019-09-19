const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/keys');

before(done => {
    console.log("before")
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection
        .once('open', () => {
            console.log('### Mongo is Connected... ###');
            done();
        })
        .on('error', err => {
            console.log('### ERROR ### :: ', err);

        });

});

beforeEach(done => {
    mongoose.connection.collections.drivers.drop(() => {
        drivers.ensureIndex({ 'geometry.coordinates': '2dsphere' })

    })
        .then(() => {
            done();
        })
        .catch(() => {
            done();
        });
});   