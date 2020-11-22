const express = require('express');
const {Pulsa, validatePulsa} = require('../models/pulsa');
const router = express.Router();


//POST
router.post('/', async (req,res) => {
    const error = await validatePulsa(req.body);
    if (error.message) res.status(400).send(error.message);

    pulsa = new Pulsa({
        name: req.body.pulsaName,
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



module.exports = router;