const { OAuth2Client } = require('google-auth-library');
const { GOOGLE_CLIENT_ID } = require('../config/keys');
const Driver = require('../models/driver');
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

const verify = async token => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const { sub, email, name, picture, iat, exp } = ticket.getPayload();
    //const userid = payload['sub'];
    // If request specified a G Suite domain:
    //const domain = payload['hd'];
    const payload = {
      googleId: sub,
      email,
      name,
      image: picture,
      iat,
      exp
    }
    console.log('payload :: ', payload);
    return payload;
  } catch (error) {
    console.error('Error :: ', error.message);
    return null
  };
}

module.exports = {

  async googleOAuth(req, res) {
    const { idtoken } = req.body;
    const payload = await verify(idtoken);
    if (payload === null) {
      res.status(403).json({ error: "Invalid Token" });
      return;
    }
    const { googleId, email, name, image } = payload
    const foundDriver = await Driver.findOne({ email });
    if (foundDriver) {
      res.status(403).json({ error: 'Driver already exist' });
      return
    }

    const newDriver = new Driver({
      googleId,
      email,
      name,
      image
    });

    const driver = await newDriver.save();

    res.json({ payload: driver })
  }
}