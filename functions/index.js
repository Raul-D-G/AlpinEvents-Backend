"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const evenimentRoutes = require("./routes/evenimentRoutes");

const functions = require("firebase-functions");

const authMiddleware = require("./authMiddleware");

const app = express();

app.use(authMiddleware);
app.use(
    cors({
      origin: true,
    }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", evenimentRoutes.routes);

exports.app = functions.https.onRequest(app);
