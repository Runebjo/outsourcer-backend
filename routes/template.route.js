const router = require('express').Router();
const Template = require('./../models/template.model');

router.route('/').get((req, res) => {
	Template.find()
		.then(Templates => res.json(Templates))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	Template.findById(req.params.id)
		.then(template => res.json(template))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const name = req.body.name;
	const intro = req.body.intro;
	const outline = req.body.outline;
	const requirements = req.body.requirements;
	const outro = req.body.outro;
	const newTemplate = new Template({ name, intro, outline, requirements, outro });

	newTemplate
		.save()
		.then(() => res.json('Template added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) => {
	Template.findByIdAndDelete(req.params.id)
		.then(() => res.json('Template deleted.'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/edit/:id').put((req, res) => {
	Template.findById(req.params.id)
		.then(Template => {
			Template.name = req.body.name;
			Template.intro = req.body.intro;
			Template.outline = req.body.outline;
			Template.requirements = req.body.requirements;
			Template.outro = req.body.outro;

			Template.save()
				.then(() => res.json('Template updated!'))
				.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
