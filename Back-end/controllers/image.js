const Clarifai = require("clarifai");

const app = new Clarifai.App({
    // apiKey: process.env.API_CLARIFAI,
    apiKey: '003266a04ccc409f8e00c9847dea9afe',
});

//Execution of the facial recognition model
const handleApiCall = (req, res) => {
    //FACE_DETECT_MODEL
    app.models.predict({
        id: "a403429f2ddf4b49b307e318f00e528b",
        version: "34ce21a40cc24b6b96ffee54aabff139",
    }, req.body.input)
        .then(data => {
            res.json(data)
        })
        .catch(err => console.log(err))
}

//Add to image counter
const handleImage = (req, res, db) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries[0].entries)
        })
        .catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
    handleImage,
    handleApiCall
}