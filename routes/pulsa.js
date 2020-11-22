const express = require('express');
const { Pulsa, validatePulsa } = require('../models/pulsa');
const router = express.Router();


//POST
router.post('/', async (req, res) => {
    const error = await validatePulsa(req.body);
    if (error.message) res.status(400).send(error.message);

    pulsa = new Pulsa({
        name: req.body.name,
        saldo: req.body.saldo,
        harga: req.body.harga,
        bonus: req.body.bonus
    })
    pulsa
        .save()
        .then((pulsa) => {
            res.send(pulsa);
        })
        .catch((error) => {
            res.status(500).send("pulsa not stored");
        })
})

//GET ALL PULSA
router.get("/", (req, res) => {
    Pulsa.find()
        .then((pulsa) => res.send(pulsa))
        .catch((error) => {
            res.status(500).send("Somthing went wrong");
        });

});

//GET PULSA BY ID
router.get("/:pulsaId", async (req, res) => {
    const pulsa = await Pulsa.findById(req.params.pulsaId)
    if (!pulsa) res.status(404).send("Pulsa tidak ada");
    res.send(pulsa);

})

//UPDATE PULSA BY ID

router.put('/:pulsaId', async (req, res) => {
    const updatedPulsa = await Pulsa.findByIdAndUpdate(req.params.pulsaId, {
        name: req.body.name,
        saldo: req.body.saldo,
        harga: req.body.harga,
        bonus: req.body.bonus
    },
        { new: true }
    )
    if(!updatedPulsa) res.status(404).send("Pulsa tidak ditemukan")
    res.send(updatedPulsa)

})

//DELETE PULSA BY ID

router.delete('/:pulsaId', async (req,res) => {
    const pulsa = await Pulsa.findByIdAndRemove(req.params.pulsaId);
    if (!pulsa) res.status(404).send("Pulsa tidak ditemukan");
    res.send(pulsa);
})


module.exports = router;