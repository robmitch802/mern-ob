const router = require('express').Router();
let Resource = require('../models/resources');

router.route('/').get((req, res) => {
    Resource.find()
        .then(resources => res.json(resources))
        .catch(err => res.status(400).json('Error in resource get: ' + err));
});

router.route('/add').post((req, res) => {
    const headline = req.body.headline;
    const content = req.body.content;

    const newResource = new Resource ({ headline, content })

    newResource.save()
        .then(() => res.json('Resource added!'))
        .catch(err => res.status(400).json('Error in resource save: ' + err));
})

router.route('/:id').get((req, res) => {
    Resource.findById(req.params.id)
        .then(resource => res.json(resource))
        .catch(err => res.status(400).json('Error getting resource: ' + err));
})

router.route('/:id').delete((req, res) => {
    Resource.findByIdAndDelete(req.params.id)
        .then(() => res.json('Resource deleted'))
        .catch(err => res.status(400).json('Error deleting resource: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Resource.findById(req.params.id)
        .then(resource => {
            resource.headline = req.body.headline;
            resource.content = req.body.content;

            resource.save()
                .then(() => res.json('Resource updated!'))
                .catch(err => res.status(400).json('Error updating resource: ' + err));
        })
})

module.exports = router;