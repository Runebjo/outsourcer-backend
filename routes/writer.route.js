const router = require('express').Router();
const Writer = require('./../models/writer.model');

router.route('/').get((req, res) => {
    Writer.find()
        .then(writers => res.json(writers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const newWriter = new Writer({ name });

    newWriter.save()
        .then(() => res.json('Writer added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/delete/:id').delete((req, res) => {
    Writer.findByIdAndDelete(req.params.id)
        .then(() => res.json('Writer deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/edit/:id').put((req, res) => {
    Writer.findById(req.params.id)
        .then(writer => {
            writer.name = req.body.name;

            writer.save()
                .then(() => res.json('Writer updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;