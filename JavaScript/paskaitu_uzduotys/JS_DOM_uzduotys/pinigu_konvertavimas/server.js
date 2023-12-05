import express from "express";
const app = express();
import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_vH5sqSgby9A1vvVzxCsvN3NJMOQIPPq3xlHXfcnU"
);

app.listen(process.env.PORT || 3000, () => {
  console.log("listening");
});

app.use(express.static("public/"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "." });
});

app.get("/getData", (req, res) => {
  freecurrencyapi
    .latest({
      base_currency: "EUR",
    })
    .catch((e) => {
      console.log(e);
    })
    .then((response) => {
      res.send(response);
    });
});
