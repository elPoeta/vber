const fakeroute = require('../routes/fakeRoute');

module.exports = app => {
    app.use('/api', fakeroute);
}