import express from "express";
import {
  getServices,
  upsertWebinars,
  upsertManthan,
  // Webinars
  getWebinars,
  getWebinarById,
  addWebinar,
  updateWebinar,
  deleteWebinar,
  // Manthan Upcoming
  addUpcomingEvent,
  getUpcomingEvents,
  updateUpcomingEvent,
  deleteUpcomingEvent,
  // Manthan Past
  addPastEvent,
  getPastEvents,
  updatePastEvent,
  deletePastEvent,
} from "../controllers/serviceController.js";

const router = express.Router();

// -------------------- MAIN --------------------
router.get("/", getServices);
router.post("/webinars", upsertWebinars);
router.post("/manthan", upsertManthan);

// -------------------- WEBINARS CRUD --------------------
router.get("/webinars/list", getWebinars);
router.get("/webinars/list/:id", getWebinarById); // ✅ NEW
router.post("/webinars/list", addWebinar);
router.put("/webinars/list/:id", updateWebinar);
router.delete("/webinars/list/:id", deleteWebinar);

// -------------------- MANTHAN UPCOMING EVENTS --------------------
router.get("/manthan/upcoming", getUpcomingEvents);
router.post("/manthan/upcoming", addUpcomingEvent);
router.put("/manthan/upcoming/:id", updateUpcomingEvent);
router.delete("/manthan/upcoming/:id", deleteUpcomingEvent);

// -------------------- MANTHAN PAST EVENTS --------------------
router.get("/manthan/past", getPastEvents);
router.post("/manthan/past", addPastEvent);
router.put("/manthan/past/:id", updatePastEvent);
router.delete("/manthan/past/:id", deletePastEvent);

export default router;
