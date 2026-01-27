const trains = [
  {
    from: "Madurai",
    to: "Chennai",
    name: "Pandian Express",
    number: "12637",
    time: "21:30 PM",
    status: "RAC",
    availability: 12
  }
];
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "YOUR_RAPIDAPI_KEY";
const API_HOST = "irctc-insight.p.rapidapi.com";

app.post("/api/trains", async (req, res) => {
  const { from, to, date } = req.body;

  try {
    const response = await fetch(
      "https://irctc-insight.p.rapidapi.com/getTrainDetails",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": API_HOST
        },
        body: JSON.stringify({
          fromStationCode: from,
          toStationCode: to,
          journeyDate: date
        })
      }
    );

    const data = await response.json();
    res.json(data);

  } catch (err) {
    res.status(500).json({ error: "API failed" });
  }
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
