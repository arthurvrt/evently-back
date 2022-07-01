const router = require("express").Router();
const Event = require("../models/Event.model");


// ==========================================================
// access restricted to authenticated users only
// ==========================================================
router.use(require("../middleware/auth.middleware"));
router.use(require(`../middleware/accessRestricting.middleware`));
// ==========================================================

// TODO: add middleware to restrict acces to approved attendees

// get all messages for one event by event id
router.get(`/:eventId/messages`, async (req, res, next) => {
  try {

  } catch (err) {
    next(err);
  }
});

// send a message for one event by event id
router.post(`/:eventId/messages`, async (req, res, next) => {
  try {

  } catch (err) {
    next(err);
  }
});

// edit a message for one event by event id and message id
router.patch(`:eventId/messages/:messageId`, async (req, res, next) => {
  try {

  } catch (err) {
    next(err);
  }
});

// delete a message for one event by event id and message id
router.delete(`:eventId/messages/:messageId`, async (req, res, next) => {
  try {

  } catch (err) {
    next(err);
  }
});


module.exports = router;