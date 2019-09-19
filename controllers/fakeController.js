module.exports = {
    hi: (req, res) => {
        res.status(200).send({ hi: '@elpoeta' });
    }
}