const router = require('express').Router();
const Writer = require('./../models/writer.model');

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const newWriter = new Writer({ name });

    newWriter.save()
        .then(() => res.json('Writer added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;