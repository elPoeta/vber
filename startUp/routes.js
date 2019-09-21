const fakeroute = require('../routes/fakeRoute');
const googleOAuth = require('../routes/googleOauth');

module.exports = app => {
    app.use('/api', fakeroute);
    app.use('/api', googleOAuth);
}