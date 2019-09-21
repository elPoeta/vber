const { OAuth2Client } = require('google-auth-library');
const { GOOGLE_CLIENT_ID } = require('../config/keys');
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

const verify = async token => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    // If request specified a G Suite domain:
    //const domain = payload['hd'];
    console.log('payload :: ', payload);
    return payload;
  } catch (error) {
    console.error('Error :: ', error.message);
  };
}

module.exports = {

  async googleOAuth(req, res) {
    const { idtoken } = req.body;
    const payload = await verify(idtoken);
    res.json({ payload: payload.name })
  }
}