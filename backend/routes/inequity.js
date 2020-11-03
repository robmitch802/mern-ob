const router = require('express').Router();
let Inequity = require('../models/inequity');

router.route('/').get((req, res) => {
    Inequity.find()
        .then(inequity => res.json(inequity))
        .catch(err => res.status(400).json('Error in inequity get: ' + err));
});

router.route('/add').post((req, res) => {
    const headline = req.body.headline;
    const content = req.body.content;

    const newInequity = new Inequity ({ headline, content })

    newInequity.save()
        .then(() => res.json('Article added!'))
        .catch(err => res.status(400).json('Error in article save: ' + err));
})

router.route('/:id').get((req, res) => {
    Inequity.findById(req.params.id)
        .then(inequity => res.json(inequity))
        .catch(err => res.status(400).json('Error getting inequity: ' + err));
})

router.route('/:id').delete((req, res) => {
    Inequity.findByIdAndDelete(req.params.id)
        .then(() => res.json('Inequity deleted'))
        .catch(err => res.status(400).json('Error deleting inequity: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Inequity.findById(req.params.id)
        .then(inequity => {
            inequity.headline = req.body.headline;
            inequity.content = req.body.content;

            inequity.save()
                .then(() => res.json('Inequity updated!'))
                .catch(err => res.status(400).json('Error updating article: ' + err));
        })
})

module.exports = router;