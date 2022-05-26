"use strict";

const Eveniment = require("../models/eveniment");
const firestore = require("../db");

const addEveniment = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("evenimente").doc().set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllEvenimente = async (req, res, next) => {
  try {
    const evenimente = await firestore.collection("evenimente");
    const data = await evenimente.get();
    const evenimenteArray = [];
    if (data.empty) {
      res.status(404).send("Nu sunt evenimente");
    } else {
      data.forEach((doc) => {
        const eveniment = new Eveniment(
            doc.id,
            doc.data().nume,
            doc.data().organizator,
            doc.data().nrPersoane,
            doc.data().data,
            doc.data().idMeniu,
            doc.data().avans,
            doc.data().pret,
            doc.data().plata,
        );
        evenimenteArray.push(eveniment);
      });
      res.send(evenimenteArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getEveniment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const eveniment = await firestore.collection("evenimente").doc(id);
    const data = await eveniment.get();
    if (!data.exists) {
      res.status(404).send("Evenimentul cu id-ul specificat nu exista");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateEveniment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const eveniment = await firestore.collection("evenimente").doc(id);
    await eveniment.update(data);
    res.send("Evenimentul a fost modificat cu succes");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteEveniment = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("evenimente").doc(id).delete();
    res.send("Evenimentul a fost sters");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addEveniment,
  getAllEvenimente,
  getEveniment,
  updateEveniment,
  deleteEveniment,
};
