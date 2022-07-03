const express = require("express");
const app = express();
const dr_list = require("./controllers/doctors_list.json");
const appts_list = require("./controllers/appts_list.json");
const SERVER_PORT = 4200;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/api/doctors", (req, res) => {
    console.log("here at api dr", res)
    res.send(JSON.stringify(dr_list))
});
app.get("/api/appts", (req, res) => {
    console.log("here at api appt", res)
    res.send(JSON.stringify(appts_list))
});


app.listen(SERVER_PORT, () => {
  console.log(`Server listening from port ${SERVER_PORT}`);
});