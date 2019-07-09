const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const { Announcement } = require('../models/announcement');

router.get('/', (req, res) => {
    Announcement.find({}, null, { sort: { modified_date: -1 } }, (err, doc) => {
        if (!err) {
            return res.status(200).send(doc);
        }
        else {
            console.log('Error in Retriving Announcements:' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }
    Announcement.findById(req.params.id, (err, doc) => {
        if (!err) {
            return res.status(200).send(doc);
        }
        else {
            console.log('Error in Retriving Announcements' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.post('/', (req, res) => {
    const announce = new Announcement({
        announcement: req.body.announcement,
        created_date: new Date(),
        modified_date: new Date()
    })
    announce.save((err, doc) => {
        if (!err) {
            return res.status(200).send(doc);
        }
        else {
            console.log('Error in Announcement save:' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }

    const announce = {
        announcement: req.body.announcement,
        modified_date: new Date()
    }

    Announcement.findByIdAndUpdate(req.params.id, { $set: announce }, { new: true }, (err, doc) => {
        if (!err) {
            return res.status(200).send(doc);
        }
        else {
            console.log('Error in Announcement Update:' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    }

    Announcement.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            return res.status(200).send(doc);
        }
        else {
            console.log('Error in Announcement Delete:' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;