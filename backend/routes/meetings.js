const router = require('express').Router();
let Meeting = require('../models/meetings');

router.route('/').get((req, res) => {
    Meeting.find()
        .then(meetings => res.json(meetings))
        .catch(err => res.status(400).json('Error in meetings get: ' + err));
});

router.route('/add').post((req, res) => {
    const headline = req.body.headline;
    const content = req.body.content;
    const date = Date.parse(req.body.date);
    const time = req.body.time;
    const link = req.body.link;
    const location = req.body.location;
    const agenda = req.body.agenda;
    const minutes = req.body.minutes;
    const featured = req.body.featured;

    const newMeeting = new Meeting ({ headline, content, date, time, link, location, agenda, minutes, featured })

    newMeeting.save()
        .then(() => res.json('Meeting added!'))
        .catch(err => res.status(400).json('Error in Meeting save: ' + err));
})

router.route('/:id').get((req, res) => {
    Meeting.findById(req.params.id)
        .then(meeting => res.json(meeting))
        .catch(err => res.status(400).json('Error getting meeting: ' + err));
})

router.route('/:id').delete((req, res) => {
    Meeting.findByIdAndDelete(req.params.id)
        .then(() => res.json('Meeting deleted'))
        .catch(err => res.status(400).json('Error deleting meeting: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Meeting.findById(req.params.id)
        .then(meeting => {
            meeting.headline = req.body.headline;
            meeting.content = req.body.content;

            meeting.save()
                .then(() => res.json('Meeting updated!'))
                .catch(err => res.status(400).json('Error updating article: ' + err));
        })
})

module.exports = router;
