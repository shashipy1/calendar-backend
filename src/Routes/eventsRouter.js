const express = require("express");
const eventsRouters = express.Router();
const {getEvents, createEvents, updateEvents, deleteEvents} = require("../Controllers/events");
const auth = require("../Middelware/auth");


eventsRouters.get("/", auth, getEvents);
eventsRouters.post("/", auth, createEvents);
eventsRouters.put("/:id", auth, updateEvents);
eventsRouters.delete("/:id", auth, deleteEvents);

module.exports = eventsRouters;