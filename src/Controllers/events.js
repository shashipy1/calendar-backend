const { model } = require("mongoose");
const eventModel = require("../Model/events");

const createEvents = async (req, res) => {
    // console.log(req.user.Id);

    const { title, description, date, startTime, endTime } = req.body;

    const newEvent = new eventModel({
        title: title,
        description: description,
        userId: req.userId,
        date: date,
        startTime: startTime,
        endTime: endTime
    });

    try {
        await newEvent.save();
        res.status(201).json({ newEvent });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went to wrong" });
    }
}

const updateEvents = async (req, res) => {
    const id = req.params.id;
    const { title, description, date, startTime, endTime } = req.body;

    const newEvent = {
        title: title,
        description: description,
        userId: req.userId,
        date: date,
        startTime: startTime,
        endTime: endTime
    };

    try {
        await eventModel.findByIdAndUpdate(id, newEvent, { new: true });
        res.status(200).json(newEvent)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went to wrong" });
    }
}

const deleteEvents = async (req, res) => {
    const id = req.params.id;
    try {
        const events = await eventModel.findByIdAndRemove(id);
        res.status(202).json(events);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went to wrong" });
    }
}

const getEvents = async (req, res) => {
    try {
         eventModel.find()
        .then(events => {
            res.status(200).json(events);
        })        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went to wrong" });
    }
}

module.exports = {
    createEvents,
    updateEvents,
    deleteEvents,
    getEvents,
}