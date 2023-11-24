const router = require("express").Router()

const Coaster = require('./../models/Coaster.model')

router.get("/getAllCoasters", (req, res) => {

    Coaster
        .find()
        .sort({ title: 1 })
        .select({ title: 1, imageUrl: 1 })
        .then(response => setTimeout(() => res.json(response), 1500))
        .catch(err => next(err))
})


router.get("/getOneCoaster/:coaster_id", (req, res, next) => {

    const { coaster_id } = req.params

    Coaster
        .findById(coaster_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post("/saveCoaster", (req, res, next) => {

    const { title, description, length, inversions, imageUrl } = req.body

    Coaster
        .create({ title, description, length, inversions, imageUrl })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
})

module.exports = router