const express = require("express");
const {
  addEveniment,
  getAllEvenimente,
  getEveniment,
  updateEveniment,
  deleteEveniment,
} = require("../controllers/evenimentController");

const router = express.Router();

router.post("/eveniment", addEveniment);
// router.get("/eveniment", getAllEvenimente);
router.get("/evenimente/:uid", getAllEvenimente);
router.get("/eveniment/:id", getEveniment);
router.put("/eveniment/:id", updateEveniment);
router.delete("/eveniment/:id", deleteEveniment);

module.exports = {
  routes: router,
};
