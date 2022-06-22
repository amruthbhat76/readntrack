const mongoose = require('mongoose');
const readentry = require('../models/readEntryModel');

getEntries = async (req, res) => {
    await readentry.find({}, (err, entries) => {
        if (err) {
            return res.status(500).json({
                success: false,
                error: err
            })
        }

        if (!entries) {
            return res.status(500).json({
                success: false,
                error: 'Could not fetch entries'
            })
        }

        return res.status(200).json({
            success: true,
            data: entries
        })
    })
        .catch(err => {
            console.log(err);
        })
}

createReadEntry = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(500).json({
            success: false,
            error: 'Need an Entry to create it! :P'
        })
    }

    const readEntry = new readentry(body);

    if (!readEntry) {
        return res.status(500).json({
            success: false,
            error: 'Error occured while creating' + err
        })
    }

    readEntry.save().then(() => {
        return res.status(200).json({
            success: true,
            id: readEntry._id,
            message: 'readEntry created successfully!'
        })
    }).catch(error => {
        return res.status(500).json({
            error,
            message: 'readEntry not created successfully!'
        })
    })

}

deleteReadEntry = async (req, res) => {
    console.log("Hello Deleting" + req.query.book);
    await readentry.deleteOne({ bookName: req.query.book }, (err, entries) => {
        if (err) {
            return res.status(500).json({
                success: false,
                error: err
            })
        }

        if (!entries) {
            return res.status(500).json({
                success: false,
                error: 'Could not fetch entries'
            })
        }

        return res.status(200).json({
            success: true,
            data: entries
        })
    })
}

module.exports = {
    createReadEntry,
    getEntries,
    deleteReadEntry
};