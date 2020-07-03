const chirpstore = require("../chirpstore");

const express = require("express"),
    chripsStore = require("../chirpstore"),
    router = express.Router();

router.get("/", (req, res) => {
    res.send(chirpstore.getChirps())
});

router.get("/:id", (req, res) => {
    res.send(chirpstore.getChirp(req.params.id));
})

router.post("/", (req, res) => {
    let chirpObj = {
        username: req.body.username,
        message: req.body.message
    }
    chirpstore.createChirp(chirpObj);

    res.sendStatus(200)
})

router.put("/:id", (req, res) => {
    let chirpObj = {
        username: req.body.username,
        message: req.body.message
    }
    chirpstore.updateChirp(re.params.id, chirpObj);

    res.status(200)
});

router.delete("/:id", (req, res) => {
    chirpstore.deleteChirp(req.params.id);
    res.sendStatus(200)
})

module.exports = router;