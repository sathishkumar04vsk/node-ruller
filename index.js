const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 4000;

// const domains = process.env.CORS_DOMAINS || ""

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

const client = [
  {
    name: "Carrera",
    description: "Rules title goes here",
    active: "Active",
    created_date: "02/19/2021",
    last: "5",
  },
  {
    name: "Alexandar Wang",
    description: "Longer rules description that goes beyond...",
    active: "Active",
    created_date: "02/19/2021",
    last: "5",
  },
  {
    name: "Tony Novak Inc",
    description: "Longer rules description that goes beyond...",
    active: "Active",
    created_date: "02/19/2021",
    last: "5",
  },
];

app.get("/client", function (req, res) {
  res.send(client);
});

app.listen(port, () => console.log(`Server is started at Port:${port}`));
