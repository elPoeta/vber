const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/keys");

module.exports = () => {
    if (process.env.NODE_ENV !== 'test') {
        mongoose.Promise = global.Promise;
        mongoose
            .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log("MongoDB Connected..."))
            .catch(err => console.log("Error to connect database :: ", err));
    }
};
