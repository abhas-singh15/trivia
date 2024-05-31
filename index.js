import express from 'express';
import axios from 'axios';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// let ans = document.getElementById("answer").value
// console.log(ans);

app.get("/", (req, res) => {
  axios.get("https://opentdb.com/api.php?amount=1").then(response => {
          res.render('index', {trivia : response.data.results});
          console.log(response.data.results);
        })})

app.post("/", async(req, res)=>{
  console.log(req.body);
})

app.listen("4000", ()=>{
  console.log("Server running on port 4000!")
});      


