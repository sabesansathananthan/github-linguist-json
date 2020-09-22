const express = require("express");
const cors = require("cors");
const fs = require("fs");
const yaml = require("js-yaml");
const https = require("https");

const app = express();
const port = 4444;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.listen(process.env.PORT || port, () => {
  console.log("We are live on port 4444");
});

const url =
  "https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml";

let myURL = new URL(url);
let body = [];
https
  .request(myURL, (res) => {
    res.on("data", (chunk) => body.push(chunk));
    res.on("end", () =>
      fs.writeFile(
        "github.yml",
        Buffer.concat(body).toString(),
        (err, data) => {
          if (err) return err;
        }
      )
    );
  })
  .end();

app.get("/", (req, res) => {
  try {
    let fileContents = fs.readFileSync("./github.yml", "utf8");
    let data = yaml.safeLoad(fileContents);

    console.log(data);
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});
