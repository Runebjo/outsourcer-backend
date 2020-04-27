const router = require('express').Router();
const Outline = require('./../models/Outline.model');

router.route('/').get((req, res) => {
	Outline.find(req.query)
		.then(outlines => res.json(outlines))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	Outline.findById(req.params.id)
		.then(outline => res.json(outline))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	console.log('request', req.body);
	const { title, intro, outline, requirements, outro, writer, review, status } = req.body;
	const newOutline = new Outline({
		title,
		intro,
		outline,
		requirements,
		outro,
		writer,
		review,
		status,
	});

	newOutline
		.save()
		.then(() => res.json('Outline added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) => {
	Outline.findByIdAndDelete(req.params.id)
		.then(() => res.json('Outline deleted.'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/edit/:id').put((req, res) => {
	Outline.findById(req.params.id)
		.then(Outline => {
			Outline.title = req.body.title;
			Outline.intro = req.body.intro;
			Outline.outline = req.body.outline;
			Outline.requirements = req.body.requirements;
			Outline.outro = req.body.outro;
			Outline.writer = req.body.writer;
			Outline.review = req.body.review;
			Outline.status = req.body.status;

			Outline.save()
				.then(() => res.json('Outline updated!'))
				.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
